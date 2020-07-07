import * as React from 'react';
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
        <Layout style={{flexDirection:'column', marginBottom: 10, width: '100%'}}>
          <Text style={styles.text} category='h3'>Result</Text>
          <Layout style={styles.row}>
            <Layout style={{
                            flex:3,
                            backgroundColor:'#2E3A59',
                            padding: 1,
                            minWidth: 100,
                            borderColor: 'black',
                            borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center"}}>
              <Text style={styles.text} category='h5'>Stations</Text>
            </Layout>
            <Layout style={{
                            flex:3,
                            backgroundColor:'#2E3A59',
                            padding: 1,
                            minWidth: 100,
                            borderColor: 'black',
                            borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center"}}>
              <Text style={styles.text} category='h5'>Offset</Text>
            </Layout>
            <Layout style={{
                            flex:3,
                            backgroundColor:'#2E3A59',
                            padding: 1,
                            minWidth: 100,
                            borderColor: 'black',
                            borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center"}}>
              <Text style={styles.text} category='h5'>Runout</Text>
            </Layout>
          </Layout>
          <Layout style={{flexDirection:'row', justifyContent: 'space-evenly'}}><Layout style={styles.cell}><Text style={styles.text} category='h6'>1 - 5</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{offsets[0]}</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{runout[0]}</Text></Layout></Layout>
          <Layout style={{flexDirection:'row', justifyContent: 'space-evenly'}}><Layout style={styles.cell}><Text style={styles.text} category='h6'>2 - 6</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{offsets[1]}</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{runout[1]}</Text></Layout></Layout>
          <Layout style={{flexDirection:'row', justifyContent: 'space-evenly'}}><Layout style={styles.cell}><Text style={styles.text} category='h6'>3 - 7</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{offsets[2]}</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{runout[2]}</Text></Layout></Layout>
          <Layout style={{flexDirection:'row', justifyContent: 'space-evenly'}}><Layout style={styles.cell}><Text style={styles.text} category='h6'>4 - 8</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{offsets[3]}</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{runout[3]}</Text></Layout></Layout>
          <Layout style={{flexDirection:'row', justifyContent: 'space-evenly'}}><Layout style={styles.cell}><Text style={styles.text} category='h6'>5 - 1</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{offsets[4]}</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{-1*runout[0]}</Text></Layout></Layout>
          <Layout style={{flexDirection:'row', justifyContent: 'space-evenly'}}><Layout style={styles.cell}><Text style={styles.text} category='h6'>6 - 2</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{offsets[5]}</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{-1*runout[1]}</Text></Layout></Layout>
          <Layout style={{flexDirection:'row', justifyContent: 'space-evenly'}}><Layout style={styles.cell}><Text style={styles.text} category='h6'>7 - 3</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{offsets[6]}</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{-1*runout[2]}</Text></Layout></Layout>
          <Layout style={{flexDirection:'row', justifyContent: 'space-evenly'}}><Layout style={styles.cell}><Text style={styles.text} category='h6'>8 - 4</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{offsets[7]}</Text></Layout><Layout style={styles.cell}><Text style={styles.text} category='h6'>{-1*runout[3]}</Text></Layout></Layout>
        </Layout>
        
        <Layout style={styles.row}>
          <Button
            style={{flex: 1}}
            title="ClearData"
            onPress={() => navigate('AxialRunout', { data: 'data' })}
          >Clear Data</Button>
        </Layout>
      </Layout>
    );
  }
}
