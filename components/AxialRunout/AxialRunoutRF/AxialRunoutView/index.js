import { PropTypes } from 'prop-types';
import React from 'react';
import { View, ScrollView } from 'react-native';
import * as eva from '@eva-design/eva';
import { Button, Layout, Text } from '@ui-kitten/components';


import { Field } from 'redux-form';
import RFTextView from '../../../RFTextInput';
import styles from '../../../../styles';

const AxialRunoutView = ({ handleSubmit }) => (
  
  <Layout 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10
      }}
  >
  <Layout style={{marginBottom:50, marginTop:50}}>
    <Text style={styles.text} category="h3">Dial Indicator Readings</Text>
  </Layout>

  <ScrollView style={{width:"100%"}}>
    <Layout style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{margin:5}} category='h6'>Station 1</Text>
      <Field
        name="station01"
        component={RFTextView}
      />
      <Text style={{margin:5}} category='h6'>Station 5</Text>
      <Field
        name="station15"
        component={RFTextView}
      />
    </Layout>
    <Layout style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{margin:5}} category='h6'>Station 2</Text>
      <Field
        name="station02"
        component={RFTextView}
      />
      <Text style={{margin:5}} category='h6'>Station 6</Text>
      <Field
        name="station16"
        component={RFTextView}
      />
    </Layout>
    <Layout style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{margin:5}} category='h6'>Station 3</Text>
      <Field
        name="station03"
        component={RFTextView}
      />
      <Text style={{margin:5}} category='h6'>Station 7</Text>
      <Field
        name="station17"
        component={RFTextView}
      />
    </Layout>
    <Layout style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{margin:5}} category='h6'>Station 4</Text>
      <Field
        name="station04"
        component={RFTextView}
      />
      <Text style={{margin:5}} category='h6'>Station 8</Text>
      <Field
        name="station18"
        component={RFTextView}
      />
    </Layout>
    <Layout style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{margin:5}} category='h6'>Station 5</Text>
      <Field
        name="station05"
        component={RFTextView}
      />
      <Text style={{margin:5}} category='h6'>Station 1</Text>
      <Field
        name="station11"
        component={RFTextView}
      />
    </Layout>
    <Layout style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{margin:5}} category='h6'>Station 6</Text>
      <Field
        name="station06"
        component={RFTextView}
      />
      <Text style={{margin:5}} category='h6'>Station 2</Text>
      <Field
        name="station12"
        component={RFTextView}
      />
    </Layout>
    <Layout style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{margin:5}} category='h6'>Station 7</Text>
      <Field
        name="station07"
        component={RFTextView}
      />
      <Text style={{margin:5}} category='h6'>Station 3</Text>
      <Field
        name="station13"
        component={RFTextView}
      />
    </Layout>
    <Layout style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{margin:5}} category='h6'>Station 8</Text>
      <Field
        name="station08"
        component={RFTextView}
      />
      <Text style={{margin:5}} category='h6'>Station 4</Text>
      <Field
        name="station14"
        component={RFTextView}
      />
    </Layout>
    
    <Layout style={{margin: 10}}>
      <Button
        title="Calculate"
        onPress={handleSubmit}
      >Calculate</Button>
    </Layout>
    </ScrollView>
  </Layout>
  
); 

AxialRunoutView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AxialRunoutView;
