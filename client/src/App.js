import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div>
        <h1>Page d'accueil</h1>
        <button className="button">
          <Link to="/home">Allez à l'Home</Link>
        </button>
      </div>
    )
  }
  
}
export default App

