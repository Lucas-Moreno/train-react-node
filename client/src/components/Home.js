import React, { Component } from 'react'
import axios from 'axios';

class Home extends Component {
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

  render () {

    return (
      <div className='Home'>
          <div className="cards">
        {
          this.state.apiResponse.map(apiResponse =>(
            <div className="card" key={apiResponse.id}>
              <p>{apiResponse.title}</p>
              <p>{apiResponse.userId}</p>
              <img className="card__img" src={apiResponse.imageUrl} alt="image" />
              <p>{apiResponse.price} $</p>
              <p>{apiResponse.description}</p>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default Home
