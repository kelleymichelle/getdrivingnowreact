import React from 'react'
import Application from './Application'


export default function AppStack(props) {
  
  return (
    <div>
      <h1>App Stack</h1>
      { props.applications.map(app => <Application application={app}/>) }  
    </div>
  )
  
}