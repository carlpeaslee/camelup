import React, { Component } from 'react'
import styled, {injectGlobal} from 'styled-components'
import io from 'socket.io-client'


class Tips extends Component {

  state = {
    newText: "",
    disabled: false
  }

  render() {

    const {
      state: {
        newText,
        disabled
      },
      handleSave,
      handleChange
    } = this


    return (
      <Container>


        <Form
          onSubmit={handleSave}
        >
          <Input
            name={"newText"}
            value={newText}
            onChange={handleChange}
            type={"text"}
            rows={5}
          />
          <Button
            type={"submit"}
            disabled={disabled}
          >
            {(disabled) ? "..." : "send!"}
          </Button>
        </Form>



      </Container>
    )
  }

  componentDidMount () {
    this.socket = io()
  }

  handleChange = ({target: {value, name}}) => {
    this.setState({[name]: value.slice(0,140)})
  }

  handleSave = (e) => {
    e.preventDefault()
    this.setState({disabled: true})
    this.socket.emit('tip', this.state.newText)
    setTimeout(
      ()=> {
        this.setState({disabled: false})
      },
      3000
    )

    this.setState({newText: ""})
  }


}

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content:center;
  margin-top: 20px;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Input = styled.input`
  height: 100px;
  width: 92%;
  box-sizing: border-box;
  font-size: 16px;
  border: 2px solid teal;
  margin: auto;
  padding: 5px;
`

const Button = styled.button`
  width: 90%;
  height: 100px;
  border-radius: 30px;
  background-color: teal;
  color: white;
  font-size: 30px;
  font-family: sans-serif;
  margin-top: 20px;

  &:disabled {
    opacity: .5;
  }
`


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height:100vh;
  justify-content: flex-start;
  align-items: center;
`

injectGlobal`
  body {
    margin: 0;
  }
`

export default Tips
