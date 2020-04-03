import React from 'react'
import Card from 'react-bootstrap/Card'
import moment from 'moment'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

export default function Application(props) {

  const dateFormat = date => {
    // return moment() 
  }

  const createPdf = app => {
    const application = (
      <div>
        <h1>{app.first_name} {app.last_name}</h1>
      </div>
    )
  }

  const app = props.application

  return (
    <div>
      <Card style={{width: '40em'}}>
        <Card.Body>
          <Card.Title>
            {app.first_name} {app.last_name}
          </Card.Title>
          <Card.Subtitle>
            { app.email }
          </Card.Subtitle>
          <Card.Text>
            Date Submitted: { dateFormat() }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}