import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RecordScreen from './src/screens/RecordScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from './src/screens/SettingsScreen';
import * as constants from './src/constants';

export default function App() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        initialRouteName="Calculate"
        backBehavior="initialRoute"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName = '';
            if (route.name === 'Calculate') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'Previous PPDD') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }
            return <Ionicons name={iconName} color={color} size={20} />;
          },
          tabBarActiveTintColor: constants.PRIMARY_COLOUR,
          tabBarInactiveTintColor: 'gray',
          tabBarIconStyle: {},
        })}
      >
        <Tab.Screen name="Calculate" component={RecordScreen} />
        <Tab.Screen name="Previous PPDD" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
