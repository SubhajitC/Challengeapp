import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Food from './Food';
import Home from './Home';

const RootStack = createStackNavigator();

const Rootstackscreen = ({navigation}) => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Food" component={Food}/>
      <RootStack.Screen name="Home" component={Home}/>
    </RootStack.Navigator>
  );
};

export default Rootstackscreen;
