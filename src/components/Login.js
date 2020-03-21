import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export class Login extends React.Component {

    state = {
        email: "",
        password_digest: "",
        errors: ""
    }

    handleChange = (event) => {      
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        //do something fun
    }

    render() {
        return (
            <div>
                {/* {this.errorMessages()} */}
                <Col>
                    <Form onSubmit={this.handleSubmit} className="justify-content-md-center">
                        <Form.Row>
                            <Form.Group>
                            <Col>
                                <Form.Label style={{color: "#364182"}}>Email</Form.Label>
                                    <Form.Control id="email" type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} />
                                <Form.Label style={{color: "#364182"}}>Password</Form.Label>
                                    <Form.Control id="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            </Col>
                            </Form.Group>
                        </Form.Row>
                            <Button className="d-inline-block" variant="primary" style={{margingTop: "2em", backgroundColor: "#212747"}} size="lg" type="submit">
                            Welcome Back
                            </Button>
                    </Form>
                </Col> 
            </div>
        )
    }
}

export default Login;
