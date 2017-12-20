import React, { Component } from 'react'
import styled from 'styled-components'
import io from 'socket.io-client'



class App extends Component {

  colors = [
    "red",
    "green",
    "blue",
    "white",
    "yellow"
  ]

  state = {
    unpickedColors: [],
    highlighted: ""
  }

  constructor(props){
    super(props)
    this.createFlicker()
  }

  render() {

    const {
      colors,
      state,
      state: {
        unpickedColors,
        highlighted
      },
      roll,
    } = this


    return (
      <div>


        <button
          onClick={this.roll}
        >
          Roll
        </button>


        <Container>
          {colors.map( color => (
            <Camel
              key={color}
              color={color}
              highlighted={highlighted}
              unpickedColors={unpickedColors}
            >
              {state[color]}
            </Camel>
          ))}
        </Container>




      </div>
    )
  }

  componentDidMount () {
    this.socket = io()
    this.socket.on('state', this.handleState)
  }

  // close socket connection
  componentWillUnmount () {
    this.socket.off('state', this.handleState)
    this.socket.close()
  }

  handleState = async (state) => {
    try {
      if (state.pick !== this.state.pick) {

        await this.lightup()

        this.setState({...state})


      } else {
        this.setState({...state})
      }

    } catch (ex) {
      console.error(ex)
    }
  }

  roll = () => {
    this.socket.emit('roll', this.state)
  }


  createFlicker = () => {
    this.flicks = new Array(20).fill(80)
    for (let i = 0; i < 8; i++) {
      this.flicks.push(this.fib(i) * 100)
    }

  }

  memo = {}

  fib = (num) => {
    let memo = this.memo || {}

    if (memo[num]) return memo[num]
    if (num <= 1) return 1

    return memo[num] = this.fib(num - 1, memo) + this.fib(num - 2, memo)
  }

  lightup = async() => {
    try {
      let times = this.flicks.slice()

      while (times.length > 1) {
        await this.blink(times.shift())
      }

    } catch (ex) {
      console.error(ex)
    }
  }


  blink = async (duration) => {
    return new Promise( (resolve, reject) => {
      this.timeout = setTimeout(
        () => {

          const {
            unpickedColors,
            highlighted
          } = this.state

          let unpicked = unpickedColors.filter(color => color !== highlighted)


          let newHighlight = unpicked[this.getRandom(0,this.getRandom(0,unpicked.length - 1))]


          this.setState(() => ({
            highlighted: newHighlight
          }), resolve())

        },
        duration
      )
    })
  }

  getRandom = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }




}


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height:100vh;
  background-color: black;
  justify-content: space-around;
  align-items: center;
`

const Camel = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({color}) => color};
  opacity: ${({highlighted, color, lastPick, unpickedColors}) => {
    if (
      lastPick === color
    ) {
      return 1
    } else if (
      highlighted === color
    ) {
      return .6
    } else if (
      !unpickedColors.includes(color)
    ) {
      return .8
    } else {
      return .2
    }
  }};
  outline: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
`

export default App
