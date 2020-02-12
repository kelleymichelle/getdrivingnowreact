import React, { Component } from 'react'

export class Form3 extends Component {

    state = {
        phone: "",
        dob: "",
        ssn: "",
        bankruptcy: ""
    }

    render() {
        return (
            <div>
                <form>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={this.state.phone} />
                    <label>Date of Birth:</label>
                    <input type="text" name="dob" value={this.state.dob} />
                    <label>Social Security Number:</label>
                    <input type="text" name="ssn" value={this.state.ssn} />
                    <label>Have you ever declared bankruptcy?:</label>
                    <input type="text" name="bankruptcy" value={this.state.bankruptcy} />
                </form>
            </div>
        )
    }
}

export default Form3;
