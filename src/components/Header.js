import React from 'react';
import { useSelector } from 'react-redux';

import { Divider, Image } from 'semantic-ui-react'

const Header = props => {
  const car = useSelector((state) => state.car);
  return (
    <>
      
        <Image  src={car.image} alt={car.name} />
      
      <h2 style={{fontSize: '4rem'}}>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

export default Header;
