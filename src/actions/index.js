// action types
export const ADD_FEATURE = 'ADD_FEATURE'

export const INCREASE_PRICE = "INCREASE_PRICE"

export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const UPDATE_TOTAL = "UPDATE_TOTAL"
// other consts

// action creators

// export const increasePrice = pricePoint => {
//   console.log(pricePoint);
//   return {
//     type: INCREASE_PRICE,
//     payload: payload
//   }
// }

export function increasePrice(price) {
  return { type: INCREASE_PRICE, price}
}

// export function addFeature(feature) {
//   return { type: ADD_FEATURE, payload: feature}
// }

export const addFeature = feature => {
  return { type: ADD_FEATURE, payload: feature}
}

export const removeFeature = item => {
  return {type: REMOVE_FEATURE, payload: item}
}

export const updateTotal = price => {
  return {type: UPDATE_TOTAL, payload: price}
}