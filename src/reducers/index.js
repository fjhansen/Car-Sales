
import {
  ADD_FEATURE,
  REMOVE_FEATURE,

} from '../actions/index'

let url = "https://i.imgur.com/N6uVfFr.png"



const initialState = {
  features: [
    { id: 1, name: 'DUAL MOTOR AWD', price: 10000 },
    { id: 2, name: 'TRI MOTOR AWD', price: 30000 },
    { id: 3, name: 'FULL SELF DRIVING', price: 7000 },
    { id: 4, name: 'DIGITAL ASSISTANT', price: 1000 }     
  ],
  featureCost: 0,
  car: {
    price: 39900,
    name: 'TESLA CYBERTRUCK',
    image: url,
    features: []
  },
}

export const cars = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FEATURE :
    return {
      ...state,
      features: state.features.filter((feature)=> feature.id !== action.payload.feature.id),
      featureCost: state.featureCost + action.payload.feature.price,
      car: {
        ...state.car,
        features: [...state.car.features, action.payload.feature]
      }
    }
     case REMOVE_FEATURE:
            return {
                ...state,
                features: [...state.features, action.payload.feature],
                featureCost: state.featureCost - action.payload.feature.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter((feature) => feature.id !== action.payload.feature.id)
                }
            }
        default :
        return state;
      }
    }
      

