import React from 'react';
import Form from './components/Form'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Form4 from './components/Form4'
import Navbar from './containers/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FinancingFAQ from './components/FinancingFAQ';
import LoginSignup from './components/LoginSignup'


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/financing" component={FinancingFAQ} />
          <Route exact path="/login" component={LoginSignup} />
          <LoginSignup />
          <Form />
          <Form2 />
          <Form3 />
          <Form4 />
        </div>
      </Router>
    );
  }
}

export default App;
