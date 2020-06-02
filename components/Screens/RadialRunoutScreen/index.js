import * as React from 'react';
import * as eva from '@eva-design/eva';
import { Layout, Text, Button } from '@ui-kitten/components';

import styles from '../../../styles';



export default class RadialRunoutScreen extends React.Component{
  
    
  static navigationOptions = {
    title: 'RadialRunout',
  };
  
  render(){
    const { navigate } = this.props.navigation;
    return(
      <Layout style={styles.container}>

        <Button
          title="Go"
          onPress={() => navigate('DataModal', { data: 'data' })}
        >Runout</Button>
      </Layout>
    );
  }
}
