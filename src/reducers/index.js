import { combineReducers } from 'redux'
let url = "https://i.imgur.com/N6uVfFr.png"
const cars = (state = [{
  additionalPrice: 0,
  car: {
    price: 39900,
    name: 'TESLA CYBERTRUCK',
    image: {url},
    features: []
  },
  additionalFeatures: [
    {id: 1, name: 'DUAL MOTOR AWD', price: 10000},
    {id: 2, name: 'TRI MOTOR AWD', price: 30000},
    {id: 3, name: 'FULL SELF DRIVING', price: 7000}

  ]
}], action) => {
  switch (action.type) {
    case 'INCREASE_PRICE' :
      return {
        ...state,
        car: [...state.price, action.price]

      }

      default: 
      return state
  }
}

export default cars