import React from 'react';
import { useSelector } from 'react-redux'

const Total = props => {
  //instead of HOC
  const car = useSelector((state) => state.car);
  const featureCost = useSelector((state)=> state.featureCost)
  return (
    <div className="content">
      <h4 style={{paddingTop: '16rem', fontSize: '3rem'}}>Total Amount: ${car.price + featureCost}</h4>
    </div>
  );
};

export default Total;
