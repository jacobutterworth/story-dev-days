import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import Spacer from '../components/Spacer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  return (
    <SafeAreaProvider>
      <Text>Settings </Text>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    minWidth: 60,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  result: {
    fontSize: 30,
  },
});

export default SettingsScreen;
