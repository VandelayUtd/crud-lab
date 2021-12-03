import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => { 
    console.log(this.state)
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};



export default RestaurantInput;
