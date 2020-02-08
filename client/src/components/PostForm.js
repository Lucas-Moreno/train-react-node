import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {

    state = {
        
    }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api', this.state)
        .then(response =>{
            console.log(response);
            console.log(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }

  render () {
    const {form} = this.state;
    const {title, userId, imageUrl, price, description} = {form};
    return (
        <form className="formulaire" onSubmit={this.submitHandler}>
            <h1>Vendre un objet</h1>
            <p>Nom de l'objet : <br/><input type="text" name="title" value={title} onChange={this.changeHandler} /></p>
            <p>Votre nom : <br/><input type="text" name="userId" value={userId} onChange={this.changeHandler} /></p>
            <p>Url de la photo : <br/><input type="text" name="imageUrl" value={imageUrl} onChange={this.changeHandler} /></p>
            <p>Prix : <br/><input type="text" name="price" value={price} onChange={this.changeHandler} /></p>
            <p>Description: <br/><textarea type="text" name="description" value={description} onChange={this.changeHandler}></textarea></p>
            <button type="submit">Submit</button>
        </form>
    )
  }
}

export default PostForm
