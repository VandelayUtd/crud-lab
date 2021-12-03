import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from "react-redux"

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurantText => dispatch({type: "ADD_RESTAURANT", restaurantText}),
  deleteRestaurant: restaurantId => dispatch({type: "DELETE_RESTAURANT", restaurantId})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
