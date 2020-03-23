import React from 'react'
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import axios from 'axios'

class Form4 extends React.Component {

    state = {
        employment_type: "",
        employer_name: "",
        employer_phone_number: "",
        job_title: "",
        job_duration_years: "",
        job_duration_months: "",
        monthly_income: "",
        redirect: null,
        userId: this.props.location.state.currentUser.id
    }

    handleChange = (event) => {      
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = this.state
        axios.patch(`http://localhost:3001/users/${this.state.userId}`, { user }, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data) {
            
                this.setState({
                    redirect: "/congratulations",
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
            }}/>
        }
        return (
            <div className='fb4'>
                <Container>
                    <Col>
                        <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                            <Form.Row className="justify-content-md-center">
                                <Form.Group>
                                    <Col>
                                        <Form.Label style={{color: "#364182"}}>Employment Type:</Form.Label>
                                            <Form.Control id="employment_type" type="text" name="employment_type" placeholder="Employment Type" value={this.state.employment_type} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Employer Name:</Form.Label>
                                            <Form.Control id="employer_name" type="text" name="employer_name" placeholder="Employer Name" value={this.state.employer_name} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Employer Phone Number:</Form.Label>
                                            <Form.Control id="employer_phone_number" type="text" name="employer_phone_number" placeholder="Employer Phone Number" value={this.state.employer_phone_number} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Job Title:</Form.Label>
                                            <Form.Control id="job_title" type="text" name="job_title" placeholder="Job Title" value={this.state.job_title} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Job Duration Years:</Form.Label>
                                            <Form.Control id="job_duration_years" type="text" name="job_duration_years" placeholder="Job Duration Years" value={this.state.job_duration_years} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Job Duration Months:</Form.Label>
                                            <Form.Control id="job_duration_months" type="text" name="job_duration_months" placeholder="Job Duration Years" value={this.state.job_duration_months} onChange={this.handleChange} />
                                        <Form.Label style={{color: "#364182"}}>Monthly Income:</Form.Label>
                                            <Form.Control id="monthly_income" type="text" name="monthly_income" placeholder="Monthly Income" value={this.state.monthly_income} onChange={this.handleChange} />
                                    </Col>
                                    <Link className="nav-link" 
                                        to='/congratulations'
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
                <div style={{height: "140px"}}></div>
            </div>
        )
    }
}

export default Form4;
