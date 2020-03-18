// action types
export const ADD_FEATURES = 'ADD_FEATURE'

export const INCREASE_PRICE = "INCREASE_PRICE"
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

export function addFeature() {
  
}