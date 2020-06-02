import * as React from 'react';
import * as eva from '@eva-design/eva';
import { Layout, Text, Button } from '@ui-kitten/components';

import styles from '../../../styles';

export default class ModalScreen extends React.Component{

  static navigationOptions = {
    title: 'Modal',
  };
  
  render(){
    const { navigate } = this.props.navigation;
    const { offsets, runout } = this.props.route.params;
    return(
      <Layout style={styles.container}>
        <Layout style={{flexDirection:'column'}}>
          <Text style={styles.text} category='h6'>Result</Text>
          <Text style={styles.text} category='h6'>1 - 5: Offset {offsets[0]}  Runout {runout[0]}</Text>
          <Text style={styles.text} category='h6'>2 - 6: Offset {offsets[1]}  Runout {runout[1]}</Text>
          <Text style={styles.text} category='h6'>3 - 7: Offset {offsets[2]}  Runout {runout[2]}</Text>
          <Text style={styles.text} category='h6'>4 - 8: Offset {offsets[3]}  Runout {runout[3]}</Text>
          <Text style={styles.text} category='h6'>5 - 1: Offset {offsets[4]}  Runout {-1*runout[0]}</Text>
          <Text style={styles.text} category='h6'>6 - 2: Offset {offsets[5]}  Runout {-1*runout[1]}</Text>
          <Text style={styles.text} category='h6'>7 - 3: Offset {offsets[6]}  Runout {-1*runout[2]}</Text>
          <Text style={styles.text} category='h6'>8 - 4: Offset {offsets[7]}  Runout {-1*runout[3]}</Text>
        </Layout>
        
        <Layout style={styles.row}>
          <Button
            title="ClearData"
            onPress={() => navigate('AxialRunout', { data: 'data' })}
          >Clear Data</Button>
        </Layout>
      </Layout>
    );
  }
}
