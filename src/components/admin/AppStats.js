import React from 'react'

export default class AppStats extends React.Component {
  render() {
    return (
      <div>
        <h4>App Stats</h4>
        <div>
          Applications to Date: {this.props.count}
        </div>
      </div>
    )
  } 
}