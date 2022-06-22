import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Food from './Food';

const RootStack = createStackNavigator();

const Rootstackscreen = ({navigation}) => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Food" component={Food}/>
    </RootStack.Navigator>
  );
};

export default Rootstackscreen;
