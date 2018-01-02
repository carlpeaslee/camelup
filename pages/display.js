import React, { Component } from 'react'
import styled, {injectGlobal} from 'styled-components'
import io from 'socket.io-client'
import Camel from '../icons/Camel'


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
    highlighted: "",
    marqueeText: [
    ]
  }

  constructor(props){
    super(props)
    this.createFlicker()
  }

  render() {

    const {
      colors,
      state,
      createFill,
      state: {
        unpickedColors,
        highlighted,
        marqueeText
      }
    } = this

    let __html = marqueeText.map( el => {
      let newEl = el

      newEl = newEl.toUpperCase()

      newEl = newEl.replace(/RED/g, "<span class='red'>RED</span>")
      newEl = newEl.replace(/GREEN/g, "<span class='green'>GREEN</span>")
      newEl = newEl.replace(/BLUE/g, "<span class='blue'>BLUE</span>")
      newEl = newEl.replace(/WHITE/g, "<span class='white'>WHITE</span>")
      newEl = newEl.replace(/YELLOW/g, "<span class='yellow'>YELLOW</span>")
      newEl = newEl.replace(/\n/g, "")

      return newEl
    })


    __html.concat("\t \t \t \t")

    return (
      <Container>

        <Url>
          cup.u100.io
        </Url>

        <Marquee>
          <Pre
            dangerouslySetInnerHTML={{__html: __html.join("\t \t \t")}}
          />

        </Marquee>

        {colors.map( color => (
          <Pair
            key={color}
          >
            <Camel
              fill={createFill(color)}
            />
            <Numb>
              {state[color]}
            </Numb>
          </Pair>

        ))}

        </Container>
    )
  }

  handleChange = ({target: {value, name}}) => this.setState({[name]: value})

  handleSave = () => {
    this.setState((prevState) => {
      return {
        newText: "",
        marqueeText: prevState.marqueeText.concat(prevState.newText)
      }
    })
  }

  componentDidMount () {
    this.socket = io()
    this.socket.on('state', this.handleState)
    this.socket.on('newTips', this.handleTip)

  }

  // close socket connection
  componentWillUnmount () {
    this.socket.off('state', this.handleState)
    this.socket.off('newTips', this.handleTip)
    this.socket.close()
  }

  handleTip = (newTips) => {

    this.setState({marqueeText: newTips})
  }

  createFill = (color) => {
    const {
      pick,
      highlighted,
      unpickedColors
    } = this.state

    let r, g, b, a
    switch (color) {
      case "red": {
        r = 255
        g = 0
        b = 0
        break
      }
      case "blue": {
        r = 0
        g = 0
        b = 255
        break
      }
      case "white": {
        r = 255
        g = 255
        b = 255
        break
      }
      case "yellow": {
        r = 255
        g = 255
        b = 0
        break
      }
      case "green": {
        r = 0
        g = 153
        b = 51
        break
      }
      default: {
        r = 0
        g = 0
        b = 0
        break
      }
    }
    if (
      color === pick
    ) {
      a = 1
    } else if (
      color === highlighted
    ) {
      a = .7
    } else if (
      unpickedColors.includes(color)
    ) {
      a = .3
    } else {
      a = 1
    }

    return `rgba(${r},${g}, ${b}, ${a})`
  }

  handleState = async (state) => {
    try {

      if (
        state.pick !== this.state.pick &&
        state.pick
      ) {

        await this.lightup()

        this.setState({
          ...state,
          highlighted: undefined
        })


      } else {
        this.setState({...state})
      }

    } catch (ex) {
      console.error(ex)
    }
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

const Pre = styled.pre`
  margin: .5em;
  font-family:sans-serif;
  .red {
    color: rgb(255,0,0);
  }

  .blue {
    color: rgb(0,0,255);
  }

  .green {
    color: rgb(0,153,51);
  }

  .yellow {
    color: rgb(255,255,0);
  }

  .white {
    color: black;
    background-color: rgb(255,255,255)
  }
`
const Url = styled.h1`
  margin: 0px auto;
  width: 100%;
  font-size: 40px;
  font-family:sans-serif;
  text-align: center;
  color: white;
`


const Marquee = styled.marquee`
  color: white;
  width: 100%;
  font-size: 50px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height:100vh;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const Pair = styled.div`
  width: 33vw;
  height: 40vh;
  position: relative;
`

const Numb = styled.div`
  font-size: 17vh;
  font-family: sans-serif;
  position:absolute;
  color: white;
  background-color: rgba(0,0,0,.7);
  height: 38%;
  width: 6vw;
  top: 0;
  left: 27%;
  text-align: center;
  padding-top: .2%;
`


injectGlobal`
  body {
    margin: 0;
  }
`

export default App
