import * as React from 'react';
import { Layout, Button } from '@ui-kitten/components';

import styles from '../../../styles';

export default class HomeScreen extends React.Component{

  static navigationOptions = {
    title: 'Home',
  };
  
  render(){
    const { navigate } = this.props.navigation;
    return(
      <Layout style={styles.container}>
        <Button
          style={styles.button}
          title="RadialRunout"
          onPress={() => navigate('RadialRunout', { data: 'data' })}
        >Radial Runout</Button>
        <Button
          style={styles.button}
          title="AxialRunout"
          onPress={() => navigate('AxialRunout', { data: 'data' })}
        >Axial Runout</Button>
      </Layout>
    );
  }
}
