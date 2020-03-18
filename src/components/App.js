import React from 'react';

import { Segment, Grid, Divider } from 'semantic-ui-react'

import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';



const App = (props) => {

  return(
    <>
    <p style={{marginLeft: '100px' , letterSpacing: '1.7rem'}}>TESLA</p>
    <Grid textAlign="center" vertialAlign="middle">
    <Grid.Column floated='left' width={12}>
     <Header />
    </Grid.Column>
    
    <Grid.Column floated='right' width={4}>
      
     <AdditionalFeatures />
     <Divider />
     <AddedFeatures />
     <Total />
    </Grid.Column>
  </Grid>
  </>
)
  
//   return (
//     <Grid textAlign="center" vertialAlign="middle" className="boxes">

//       <Grid.Column floated="right" style={{maxWidth: 900}} className="box">
//         <Segment>
//         <Header />
//         </Segment>
//         <Grid.Row />

//         <Grid.Column floated="left">
//         <Segment>
      
//     <AdditionalFeatures />

//   <AddedFeatures />
       
    
        
//         <div className="box">
          
//           <Total />
//         </div>
//         </Segment>
//          </Grid.Column>
//  </Grid.Column>
//     </Grid>
//   );
};

export default App
