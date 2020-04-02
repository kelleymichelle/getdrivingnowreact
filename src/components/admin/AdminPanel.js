import React from 'react'
import AdminLogin from './AdminLogin'
import axios from 'axios'
import AdminDashboard from './AdminDashboard'

export default class AdminPanel extends React.Component {
  state = {
    loggedIn: false,
    isAdmin: false,
    redirect: null
  }
  
  handleLogin = data => {
    console.log(data)
    const {email, password} = data
    let user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:3001/admin_login', { user }, {withCredentials: true})
    .then(response => {
      if (response.data.isAdmin === true) {
        console.log(response.data)
        this.setState({
          loggedIn: true,
          isAdmin: true
        })
      } else {
        this.setState({
          redirect: '/',
          errors: "Sorry! Admins only!"
        })
      }
    })
  }

  render() {
    
    return (
      this.state.isAdmin ? <AdminDashboard/> : <AdminLogin handleLogin={this.handleLogin}/>
    )
    
  }
}