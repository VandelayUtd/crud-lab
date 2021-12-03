import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)    


    const reviews = associatedReviews.map((review) => (
      <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>
    ))

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;