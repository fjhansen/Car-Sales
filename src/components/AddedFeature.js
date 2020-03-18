import React from 'react';
import { useDispatch } from 'react-redux'

import { removeFeature } from '../actions/index'
import { List } from 'semantic-ui-react'


const AddedFeature = props => {
  const dispatch = useDispatch()
  return (
    <List.Item>

      <button 
      className="button"
      onClick={()=> dispatch(removeFeature(props.feature))}
      >
        X
      </button>
      {props.feature.name}
    </List.Item>
  );
};

export default AddedFeature;
