import React from 'react';

import { useSelector } from 'react-redux'
import AdditionalFeature from './AdditionalFeature';

import { List } from 'semantic-ui-react'


const AdditionalFeatures = props => {
  const features = useSelector((state) => state.features);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {features.length ? (
        <List style={{fontSize: '1.5em'}} relaxed="very" animated verticalAlign='middle'>
          {features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </List>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
