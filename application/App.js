import React from 'react'
import HomeScreen from './src/screens/Homescreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Home"  >
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App