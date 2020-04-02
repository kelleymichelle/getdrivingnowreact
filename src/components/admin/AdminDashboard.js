import React from 'react'
import axios from 'axios'
import AppStats from './AppStats'
import AppStack from './AppStack'

export default class AdminDashboard extends React.Component {
  state = {
    applications: [],
    errors: null
  }

  componentDidMount() {
    axios.get('http://localhost:3001/users', {withCredentials: true})
      .then(response => {
        if (response.data.users) {
          this.setState({
            applications: response.data.users
          })
        } else {
          this.setState({
            errors: "error"
          })
        } 
      })
  }

  render() {
    return (
      <div style={{marginLeft: '2.5%', backgroundColor: 'white', width: '95%', height: '600px'}}>
        <h1>Admin Dashboard</h1>
        <AppStats count={this.state.applications.length}/>
        <AppStack applications={this.state.applications}/>
      </div>
    )
  }
}