import React, { Component, useState } from 'react';
import AxialRunoutRF from './AxialRunoutRF';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

class AxialRunout extends Component {
 
  static navigationOptions = {
    title: 'Axial Runout Results',
  };
    
  handleSubmit = ({ station01, station02, station03, station04, station05, station06, station07, station08, station11, station12, station13, station14, station15, station16, station17, station18 }) => {
    
    
    
    const OFFSETS = [
      ((-1*(500-station01)) - (-1*(500-station15))),
      ((-1*(500-station02)) - (-1*(500-station16))),
      ((-1*(500-station03)) - (-1*(500-station17))),
      ((-1*(500-station04)) - (-1*(500-station18))),
      ((-1*(500-station05)) - (-1*(500-station11))),
      ((-1*(500-station06)) - (-1*(500-station12))),
      ((-1*(500-station07)) - (-1*(500-station13))),
      ((-1*(500-station08)) - (-1*(500-station14)))
    ];
        
    console.log(OFFSETS);
    
    const RUNOUT = [
      ((OFFSETS[0]-OFFSETS[4])/2),
      ((OFFSETS[1]-OFFSETS[5])/2),
      ((OFFSETS[2]-OFFSETS[6])/2),
      ((OFFSETS[3]-OFFSETS[7])/2)      
    ];  
  
    
    const { navigate } = this.props.navigation;
    navigate('DataModal', {
      offsets: OFFSETS,
      runout: RUNOUT
    });
  

  }
  
  render() {
    
    return (

        <AxialRunoutRF onSubmit={this.handleSubmit} />

    );
  }
}

export default AxialRunout;
