import { combineReducers } from 'redux'

import {
  ADD_FEATURE,
  INCREASE_PRICE,
  REMOVE_FEATURE,
  UPDATE_TOTAL
} from '../actions/index'

let url = "https://i.imgur.com/N6uVfFr.png"
// const cars = (state = [{
//   additionalPrice: 0,
//   car: {
//     price: 39900,
//     name: 'TESLA CYBERTRUCK',
//     image: {url},
//     features: []
//   },
//   additionalFeatures: [
//     {id: 1, name: 'DUAL MOTOR AWD', price: 10000},
//     {id: 2, name: 'TRI MOTOR AWD', price: 30000},
//     {id: 3, name: 'FULL SELF DRIVING', price: 7000}

//   ]
// }], action) => {
//   switch (action.type) {
//     case ADD_FEATURE :
//       return {
//         ...state,
//         additionalPrice: state.additionalPrice + action.payload.price,
//         car: {
//           ...state.car,
//           features: [...state.car.features, action.payload]
//         }

//       }

//       default: 
//       return state
//   }
// }


export const initialState = {
  additionalPrice: 0,
  car: {
    price: 39900,
    name: 'TESLA CYBERTRUCK',
    image: url,
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'DUAL MOTOR AWD', price: 10000 },
    { id: 2, name: 'TRI MOTOR AWD', price: 30000 },
    { id: 3, name: 'FULL SELF DRIVING', price: 7000 },
    { id: 4, name: 'DIGITAL ASSISTANT', price: 1000 } 
  ]
}

export const cars = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FEATURE :
    return {
      ...state,
      additionalPrice: state.additionalPrice + action.payload.price,
      car: {
        ...state.car,
        features: [...state.car.features, action.payload]
      }
    }
    case REMOVE_FEATURE :
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(item => item.id !== action.payload.id)
          ]
        }
      }
      case UPDATE_TOTAL : 
      return {
        ...state,
        additionalPrice: state.car.features.reduce((a, b) => a + b.price, 0)
      }
    default:
      return state
  }
}

