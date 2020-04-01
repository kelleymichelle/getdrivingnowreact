import React from 'react'
import AdminLogin from './AdminLogin'

export default class AdminPanel extends React.Component {
  
  handleLogin = data => {
    console.log(data)
  }

  render() {
    return (
      <AdminLogin handleLogin={this.handleLogin}/>
    )
  }
}