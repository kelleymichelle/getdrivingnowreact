import React from 'react'

export default class AdminLogin extends React.Component {

  //exact route goes to admin login. 
  //after login if exact will render admin panel. if not will redirect to home
  state = {
    email: '',
    password: ''
  }
  render() {
    return (
      <h1>Admin Login</h1>
    )
  }
}