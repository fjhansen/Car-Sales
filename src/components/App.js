import React from 'react';

import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

import { connect } from 'react-redux';
import { 
  addFeature,
  removeFeature,
  updateTotal
 } from "../actions/index"

 import {cars} from '../reducers/index'

//  import {initialState} from '../reducers/index'

const App = props => {
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

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">

        <Header 
        car={props.car} 
        />

    

      </div>

      <div className="box">

        <AdditionalFeatures
         additionalFeatures={props.additionalFeatures} 
         addFeature={props.addFeature}
         />

    <AddedFeatures 
        car={props.car} 
        removeFeature={props.removeFeature}
        />

        <Total 
        car={props.car} 
        additionalPrice={props.additionalPrice}
        // updateTotal={props.updateTotal}
        //price={props.updateTotal}
        />

      </div>
    </div>
  );
};

 function mapStateToProps(state) {

  
  return {
    additionalPrice: state.car.price,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    // updateTotal: state.price
  }
}



export default connect(mapStateToProps, {addFeature, removeFeature})(App)

// export default App
