import React, { Component } from 'react'
import styled from 'styled-components'



class App extends Component {

  colors = [
    "red",
    "green",
    "blue",
    "white",
    "yellow"
  ]

  state = {
    started: false,
    red: "",
    green: "",
    blue: "",
    white: "",
    yellow: "",
    unpickedColors: this.colors.slice()
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
      nextRound,
    } = this


    return (
      <div>

        <button
          onClick={()=>this.setState({started: true})}
        >
          start
        </button>

        {(unpickedColors.length !== 0) ? (
          <button
            onClick={this.lightUp}
          >
            Roll
          </button>
        ): null}

        {(unpickedColors.length === 0) ? (
          <button
            onClick={nextRound}
          >
            Next Round
          </button>
        ): null}

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

  lightUp = async () => {
    try {

      let times = this.flicks.slice()

      while (times.length > 1) {
        await this.blink(times.shift())
      }

      this.timeout = setTimeout(
        ()=>{

          this.roll()
        },
        times.shift()
      )

    } catch (ex) {
      console.error(ex)
    }
  }

  nextRound = () => {
    this.setState({
      unpickedColors: this.colors.slice(),
      red: "",
      green: "",
      blue: "",
      white: "",
      yellow: "",
    })
  }

  createFlicker = () => {
    this.flicks = new Array(20).fill(80)
    for (let i = 0; i < 8; i++) {
      this.flicks.push(this.fib(i) * 100)
    }

  }

  blink = async (duration) => {
    return new Promise( (resolve, reject) => {
      this.timeout = setTimeout(
        () => {

          const {
            unpickedColors
          } = this.state

          let highlighted = unpickedColors[this.getRandom(0,this.getRandom(0,unpickedColors.length - 1))]




          console.log(duration)

          this.setState(() => ({
            highlighted
          }), resolve())

        },
        duration
      )
    })
  }


  roll = () => {
    this.setState( prevState => {

      let oldUnpicked = prevState.unpickedColors

      let pick = oldUnpicked.splice(this.getRandom(0, oldUnpicked.length - 1),1)[0]


      let unpickedColors = oldUnpicked

      return {
        unpickedColors,
        [pick]: this.getRandom(1,3),
        lastPick: pick

      }
    })
  }

  memo = {}

  fib = (num) => {
    let memo = this.memo || {}

    if (memo[num]) return memo[num]
    if (num <= 1) return 1

    return memo[num] = this.fib(num - 1, memo) + this.fib(num - 2, memo)
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
