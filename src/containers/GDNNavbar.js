import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import { NavDropdown } from 'react-bootstrap';
// import Footer from '../components/Footer';
// import HomePage from '../pages/HomePage';
// import Login from '../pages/Login'
// import CreateAccount from '../pages/CreateAccount'
// import Form from '../components/Form';
// import Form2 from '../components/Form2';
// import Form3 from '../components/Form3';
// import Form4 from '../components/Form4';

class GDNNavbar extends Component {
    render() {
        return (
            <div>
                <NavLink 
                    to="/" 
                    exact
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Home</NavLink>
                <NavLink 
                    to="/about" 
                    exact
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >About Us</NavLink>
                <NavLink
                    to="/financing"
                    exact
                    activeStyle={{
                        background: "darkblue"
                    }}
                >Financing FAQ</NavLink>                
                <NavLink
                    to="/login"
                    exact
                    activeStyle={{
                        background: "darkblue"
                    }}
                >Login</NavLink>
            </div>
        )
    }
}

export default GDNNavbar;
