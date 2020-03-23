import React from 'react'
import { Redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button'
class Home extends React.Component {
    state = {
        redirect: null
    }
    handleClick = (event) => {
        event.preventDefault()
        this.setState({
            redirect: '/signup'
        })  
    }
    render() {
        if(this.state.redirect) {
            return <Redirect to={{
                pathname: '/signup'
            }}/>
        }
        return (
            <div className='applyNowBtn'>                
                <Button className="button d-inline-block" variant="primary" style={{margingTop: "2em", backgroundColor: "#212747"}} size="lg" type="submit" onClick={this.handleClick}>
                    Apply Now
                </Button>
            </div>
        )
    }
}
export default Home;
