import React, { Component } from 'react'
import styled, {injectGlobal} from 'styled-components'
import io from 'socket.io-client'
import Camel from '../icons/Camel'


class RollButton extends Component {

  colors = [
    "red",
    "green",
    "blue",
    "white",
    "yellow"
  ]

  state = {
    disabled: false
  }

  render() {

    const {
      colors,
      state: {
        disabled
      },
      roll,
    } = this


    return (
      <Container>


        <Button
          onClick={this.roll}
          disabled={disabled}
        >
          {(disabled) ? "..." : "ROLL"}
        </Button>



      </Container>
    )
  }

  componentDidMount () {
    this.socket = io()
  }

  // close socket connection
  componentWillUnmount () {
    this.socket.off('state', this.handleState)
  }



  roll = () => {
    this.setState({disabled: true})
    this.socket.emit('roll', this.state)
    setTimeout(
      ()=> {
        this.setState({disabled: false})
      },
      3000
    )
  }




}

const Button = styled.button`
  width: 50vh;
  height: 50vh;
  border-radius: 50vh;
  background-color: teal;
  color: white;
  font-size: 50px;
  font-family:sans-serif;
  &:disabled {
    opacity: .5;
  }
`


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height:115vh;
  background-color: black;
  justify-content: space-around;
  align-items: center;
`

injectGlobal`
  body {
    margin: 0;
  }
`

export default RollButton
