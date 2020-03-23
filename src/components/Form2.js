import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import axios from 'axios'

class Form2 extends React.Component {
    
    state = {
        address: "",
        apt: "",
        city: "",
        state: "",
        residence_type: "",
        monthly_housing_cost: "",
        address_duration_years: "",
        address_duration_months: "",
        redirect: null,
        userId: this.props.location.state.currentUser.id,
        currentUser: null
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
        const user = this.state
        axios.patch(`http://localhost:3001/users/${this.state.userId}`, { user }, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data) {
            
                this.setState({
                    redirect: "/form3",
                    currentUser: response.data.user
                })
        } else {
            this.setState({
                errors: response.data.errors
            })
            }
        })
        .catch(error => console.log('api errors:', error))
    }
    
    render() {
        if(this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    currentUser: this.state.currentUser
                }                
            }}/>
        }
        return (
            <div className='fb2'>
                <Container>
                    <Col>
                        <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                            <Form.Row className='justify-content-md-center'>
                                <Form.Group>
                                    <Col>
                                        <Form.Label style={{color: "#364182"}}>Address:</Form.Label>
                                        <Form.Control id="address" type="text" name="address" placeholder="First Name" value={this.state.address} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Apt:</Form.Label>
                                        <Form.Control id="apt" type="text" name="apt" placeholder="Last Name" value={this.state.apt} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>City:</Form.Label>
                                        <Form.Control id="city" type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>State:</Form.Label>
                                        <Form.Control id="state" type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Residence Type:</Form.Label>
                                        <Form.Control id="residence_type" type="text" name="residence_type" placeholder="Residence Type" value={this.state.residence_type} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Monthly Housing Cost:</Form.Label>
                                        <Form.Control id="monthly_housing_cost" type="text" name="monthly_housing_cost" placeholder="Monthly Housing Cost" value={this.state.monthly_housing_cost} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Address Duration Years:</Form.Label>
                                        <Form.Control id="address_duration_years" type="text" name="address_duration_years" placeholder="Address Duration Years" value={this.state.address_duration_years} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Address Duration Months:</Form.Label>
                                        <Form.Control id="address_duration_months" type="text" name="address_duration_months" placeholder="Address Duration Months" value={this.state.address_duration_months} onChange={this.handleChange} />
                                    </Col>
                                    <Link className="nav-link" 
                                        to='/form3'
                                        exact="true"
                                    >
                                    <Button className="button d-inline-block" variant="primary" style={{margingTop: "2em", backgroundColor: "#212747"}} size="lg" type="submit">
                                        Continue
                                    </Button>
                                    </Link>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                </Container>
                <div style={{height: "90px"}}></div>
            </div>
        )
    }
}

export default Form2;
