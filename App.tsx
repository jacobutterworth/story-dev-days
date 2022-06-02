import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RecordScreen from './src/screens/RecordScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecordScreen">
        <Stack.Screen name="RecordScreen" component={RecordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
