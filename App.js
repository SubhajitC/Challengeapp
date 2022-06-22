import React from 'react';
import RootStackScreen from './components/Rootstackscreen';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>

  );
};

export default App;
