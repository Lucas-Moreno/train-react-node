import React from 'react';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
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
      <ul>
        {this.state.apiResponse}
      </ul>
    )
  }
}