import React, { Component } from 'react'

export class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        zip: ""
    }

    render() {
        return (
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={this.state.firstName} />
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={this.state.lastName} />
                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} />
                    <label>Zip Code:</label>
                    <input type="text" name="zip" value={this.state.zip} />
                </form>
            </div>
        )
    }
}

export default Form;
