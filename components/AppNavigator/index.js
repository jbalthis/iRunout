import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../Screens/HomeScreen';
import ModalScreen from '../Screens/ModalScreen';
import AxialRunout from '../AxialRunout';
import RadialRunoutScreen from '../Screens/RadialRunoutScreen';



const MainStack = createStackNavigator();
const RootStack = createStackNavigator();


function MainStackScreen(){
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="AxialRunout" component={AxialRunout} />
      <MainStack.Screen name="RadialRunout" component={RadialRunoutScreen} />
    </MainStack.Navigator>
  );
}

function AppNavigator(){
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="DataModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
