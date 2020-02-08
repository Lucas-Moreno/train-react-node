import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

class Home extends Component {

    state = {
        apiResponse: [],
    }
    
    componentDidMount() {
        axios.get(`http://localhost:9000/api`)
        .then(res => {
            const apiResponse = res.data;
            this.setState({ apiResponse });
        })
    }

  render () {
    return (
      <div className='Home'>
        <h1>Page Home</h1>
        <div className="cards">{
          this.state.apiResponse.map(apiResponse =>(
            <div className="card" key={apiResponse._id}>
              <p>{apiResponse.title}</p>
              <p>{apiResponse.userId}</p>
              <img className="card__img" src={apiResponse.imageUrl} alt="image" />
              <p>{apiResponse.price} $</p>
              <p>{apiResponse.description}</p>
            </div>
          ))}
        </div>
        <PostForm />
        <button className="button">
          <Link to="/">Allez a l'accueil</Link>
        </button>
      </div>
    )
  }
}

export default Home
