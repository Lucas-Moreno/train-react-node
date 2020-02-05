import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    apiResponse: []
  }


  componentDidMount() {
    axios.get(`http://localhost:9000/api`)
      .then(res => {
        const apiResponse = res.data;
        this.setState({ apiResponse });
      })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.apiResponse}
        </ul>
        <button>
          <Link to="/home">Go Home</Link>
        </button>
      </div>
    )
  }
  
}
export default App

