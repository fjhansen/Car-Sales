let url = "https://i.imgur.com/N6uVfFr.png"
// const state = {
//   additionalPrice: 0,
//   car: {
//     price: 26395,
//     name: '2019 Ford Mustang',
//     image:
//       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//     features: []
//   },
//   additionalFeatures: [
//     { id: 1, name: 'V-6 engine', price: 1500 },
//     { id: 2, name: 'Racing detail package', price: 1500 },
//     { id: 3, name: 'Premium sound system', price: 500 },
//     { id: 4, name: 'Rear spoiler', price: 250 }
//   ]
// };

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