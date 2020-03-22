import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

class Form1 extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        zip: "",
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

        this.setState({
            redirect: "/form2",
        })  
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,                
            }}/>
        }
        return (
            <div className='fb1'>
                {/* {this.errorMessages()} */}
            <Container>
                <Col>
                    <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                        <Form.Row className='justify-content-md-center'>
                            <Form.Group>
                                <Col>
                                    <Form.Label style={{color: "#364182"}}>First Name:</Form.Label>
                                    <Form.Control id="firstName" type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                                    <Form.Label style={{color: "#364182"}}>Last Name:</Form.Label>
                                    <Form.Control id="lastName" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
                                    <Form.Label style={{color: "#364182"}}>Email:</Form.Label>
                                    <Form.Control id="email" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                    <Form.Label style={{color: "#364182"}}>Zip:</Form.Label>
                                    <Form.Control id="zip" type="text" name="zip" placeholder="Zip Code" value={this.state.zip} onChange={this.handleChange} />
                                </Col>
                        <Link className="nav-link" 
                            to='/form2'
                            exact="true">
                            <Button className="button d-inline-block" variant="primary" style={{backgroundColor: "#212747"}} size="lg" type="submit">
                            Continue
                        </Button>
                        </Link>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Container>
            <div style={{height: "350px"}}></div>
            </div>
        )
    }
}

export default Form1;
