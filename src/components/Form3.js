import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Form3 extends React.Component {

    state = {
        phone: "",
        dob: "",
        ssn: "",
        bankruptcy: "",
        redirect: null
    }

    handleChange = (event) => {      
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // after submit, redirects to flight page
        this.setState({
            redirect: "/form4",
        })  
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,                
            }}/>
        }
        return (
            <div>
                <Col>
                <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                    <Form.Row>
                    <Form.Group>
                        <Col>
                            <Form.Label style={{color: "#364182"}}>Phone:</Form.Label>
                            <Form.Control id="phone" type="text" name="phone" placeholder="xxx-xxx-xxxx" value={this.state.phone} onChange={this.handleChange} />
                            <Form.Label style={{color: "#364182"}}>Date of Birth:</Form.Label>
                            <Form.Control id="dob" type="text" name="dob" placeholder="dd-mm-yyyy" value={this.state.dob} onChange={this.handleChange} />
                            <Form.Label style={{color: "#364182"}}>Social Security Number:</Form.Label>
                            <Form.Control id="ssn" type="text" name="ssn" placeholder="xxx-xx-xxxx" value={this.state.ssn} onChange={this.handleChange} />
                            <Form.Label style={{color: "#364182"}}>Bankruptcy:</Form.Label>
                            <Form.Control id="bankruptcy" type="text" name="bankruptcy" placeholder="Bankruptcy true/false" value={this.state.bankruptcy} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    </Form.Row>
                    <Link className="nav-link" 
                        to='/form4'
                        exact="true"
                    >
                    <Button className="d-inline-block" variant="primary" style={{margingTop: "2em", backgroundColor: "#212747"}} size="lg" type="submit">
                        Continue
                    </Button>
                    </Link>
                </Form>
                </Col>
            </div>
        )
    }
}

export default Form3;
