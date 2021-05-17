import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import calculadora from './views/home';
import logIn from './views/login';
import report from './views/report';


const Stack = createStackNavigator();





const App = () =>(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'login' component={logIn} />
        <Stack.Screen name = 'report' component={report} />
        <Stack.Screen name = 'calculadora' component={calculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;