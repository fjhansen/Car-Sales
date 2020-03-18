import React from 'react';
import { useSelector } from 'react-redux'

import AddedFeature from './AddedFeature';

import { List } from 'semantic-ui-react'


const AddedFeatures = props => {
  const car = useSelector((state)=> state.car)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <List style={{fontSize: '1.5em'}} relaxed="very" verticalAlign='middle'>
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item}/>
          ))}
        </List>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
