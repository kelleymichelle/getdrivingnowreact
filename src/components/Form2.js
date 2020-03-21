import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
            redirect: "/form3",
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
                    </Form.Group>
                    </Form.Row>
                    <Link className="nav-link" 
                        to='/form3'
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

export default Form2;
