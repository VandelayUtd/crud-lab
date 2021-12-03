import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    console.log(state)
    switch(action.type){
        case "ADD_RESTAURANT":
            const restaurant = {
                text: action.restaurantText,
                id: cuid()
            }
            return {...state, restaurants:[...state.restaurants, restaurant]}

        case "DELETE_RESTAURANT":
            const updatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId)
            return {...state, restaurants: updatedRestaurants}

        case "ADD_REVIEW":
            const review = { 
                text: action.review.text,
                id: cuid(),
                restaurantId: action.review.restaurantId
            }
            return {...state, reviews: [...state.reviews, review]}

        case "DELETE_REVIEW":
            const reviews = state.reviews.filter(review => review.id !== action.reviewId)
            return {...state, reviews: reviews}

        default: 
            return state
    }


}
