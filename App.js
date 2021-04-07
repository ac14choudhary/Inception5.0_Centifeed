import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Results from './Screens/Results';
import Splash from './Screens/Splash';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#DCF0F7',
              shadowColor: '#000000',
            },
            headerTintColor: '#26538E',
          }}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{
            headerStyle: {
              backgroundColor: '#DCF0F7',
              shadowColor: '#000000',
            },
            headerTintColor: '#26538E',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
