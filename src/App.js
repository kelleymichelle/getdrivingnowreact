import React from 'react';
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Form4 from './components/Form4'
import GDNNavbar from './containers/GDNNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FinancingFAQ from './components/FinancingFAQ';
import Login from './components/Login'
// import { Footer } from 'react-bootstrap/lib/Modal';
import Footer from './components/Footer'
//need to style footer


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <GDNNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/financing" component={FinancingFAQ} />
          <Route exact path="/login" component={Login} />
          <Login />
          <Form1 />
          <Form2 />
          <Form3 />
          <Form4 />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
