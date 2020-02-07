import React, { Component } from 'react'
import AboutUs from '../components/AboutUs'
import FinancingFAQ from '../components/FinancingFAQ'
import Login from '../components/Login'
import { NavLink } from 'react-router-dom'

const link ={
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

export class Navbar extends Component {
    render() {
        return (
            <div>
                {/* <NavLink 
                    to="/" 
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Home</NavLink> */}
                <NavLink 
                    to="/about" 
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >About Us</NavLink>
                <NavLink
                    to="/financing"
                    exact
                    style={link}
                    activeStyle={{
                        background: "darkblue"
                    }}
                >Financing FAQ</NavLink>                
                <NavLink
                    to="/login"
                    exact
                    style={link}
                    activeStyle={{
                        background: "darkblue"
                    }}
                >Login</NavLink>
            </div>
        )
    }
}

export default Navbar
