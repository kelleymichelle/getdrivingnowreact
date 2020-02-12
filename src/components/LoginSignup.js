import React, { Component } from 'react'

export class LoginSignup extends Component {

    state = {
        email: "",
        password_digest: "",
        password_confirmation: "",     
        oauth: ""
    }

    render() {
        return (
            <div>
                <form>
                    <label>Email Address:</label>
                    <input type="text" name="email" value={this.state.email} />
                    <label>Password:</label>
                    <input type="text" name="password_digest" value={this.state.password_digest} />
                    <label>Password Confirmation:</label>
                    <input type="text" name="password_confirmation" value={this.state.password_confirmation} />
                    <button>Login with Facebook:</button>
                </form>
            </div>
        )
    }
}

export default LoginSignup;
