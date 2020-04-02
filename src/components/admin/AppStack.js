import React from 'react'

export default class AppStack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: props.applications
    }
  }
  render() {
    return (
      <div>
        <h1>App Stack</h1>
      </div>
    )
  }
}