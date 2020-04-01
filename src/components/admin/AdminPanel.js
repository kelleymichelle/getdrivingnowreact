import React from 'react'
import AdminLogin from './AdminLogin'
import axios from 'axios'

export default class AdminPanel extends React.Component {
  state = {
    loggedIn: false
  }
  
  handleLogin = data => {
    console.log(data)
    const {email, password} = data
    let user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:3001/admin_login', { user }, {withCredentials: true})
    .then(response => console.log(response))
  }

  render() {
    
    return (
        <AdminLogin handleLogin={this.handleLogin}/>
    )
    
  }
}