import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class AdminLogin extends React.Component {

  //exact route goes to admin login. 
  //after login if exact will render admin panel. if not will redirect to home
  state = {
    email: '',
    password: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <div style={{width: '300px', margin: '50px'}}>
      <h1>Admin Login</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control id="email" type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control id="password" type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      </div>
    )
  }
}