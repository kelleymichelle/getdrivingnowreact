import React from 'react';
import Form from './components/Form'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Form4 from './components/Form4'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Form />
        <Form2 />
        <Form3 />
        <Form4 />
      </div>
    );
  }
}

export default App;
