import React from 'react';


import { useDispatch } from 'react-redux'
import { addFeature } from '../actions/index'

import { List } from 'semantic-ui-react'


const AdditionalFeature = props => {
  const dispatch = useDispatch();
  return (
    <List.Item>

      <button 
      className="button" onClick={() => dispatch(addFeature(props.feature))}
      >
        Add
      </button>

      {props.feature.name} (+{props.feature.price})

    </List.Item>
  );
};

export default AdditionalFeature;
