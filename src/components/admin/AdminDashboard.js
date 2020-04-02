import React from 'react'
import axios from 'axios'
import AppStats from './AppStats'
import AppStack from './AppStack'

export default class AdminDashboard extends React.Component {
  state = {
    applications: []
  }
  render() {
    return (
      <div style={{marginLeft: '2.5%', backgroundColor: 'white', width: '95%', height: '600px'}}>
        <h1>Admin Dashboard</h1>
        <AppStats/>
        <AppStack/>
      </div>
    )
  }
}