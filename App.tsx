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
        initialRouteName="RecordScreen"
        backBehavior="initialRoute"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName = '';
            if (route.name === 'RecordScreen') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'HistoryScreen') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }
            return <Ionicons name={iconName} color={color} size={20} />;
          },
          tabBarActiveTintColor: constants.PRIMARY_COLOUR,
          tabBarInactiveTintColor: 'gray',
          tabBarIconStyle: {},
        })}
      >
        <Tab.Screen name="RecordScreen" component={RecordScreen} />
        <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
