import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div>
        <button className="button">
          <Link to="/home">Go Home</Link>
        </button>
      </div>
    )
  }
  
}
export default App

