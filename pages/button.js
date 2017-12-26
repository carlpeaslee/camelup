import React, { Component } from 'react'
import styled from 'styled-components'
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


  render() {

    const {
      colors,
      state,
      roll,
    } = this


    return (
      <Container>


        <Button
          onClick={this.roll}
        />



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
    this.socket.emit('roll', this.state)
  }




}

const Button = styled.button`
  width: 50vh;
  height: 50vh;
  border-radius: 50vh;
  background-color: green;
`


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height:100vh;
  background-color: black;
  justify-content: space-around;
  align-items: center;
`

export default RollButton
