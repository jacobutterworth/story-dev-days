import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import Spacer from '../components/Spacer';
import HideKeyboard from '../components/HideKeyboard';
import { Dimensions } from 'react-native';
import * as constants from '../constants';

const windowHeight = Dimensions.get('window').height;

const RecordScreen = () => {
  const [storyPoints, onChangeStoryPoints] = React.useState<number | null>(0);
  const [devDays, onChangeDevDays] = React.useState<number | null>(0);
  const [storyDevDays, onChangeStoryDevDays] = React.useState(0);

  const calcVelocity = (storyPoints: number | null, devDays: number | null) => {
    if (devDays == 0) {
      Alert.alert('Excuse me', "Don't try to break this app", [{ text: 'OK' }]);
      return;
    }
    if (storyPoints && devDays) onChangeStoryDevDays(devDays / storyPoints);
    else
      Alert.alert('Wrong input', 'Please enter in both boxes', [
        { text: 'OK' },
      ]);
    return;
  };

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{ paddingTop: windowHeight / 6 }}>Story Points: </Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={(value) => {
            if (value) onChangeStoryPoints(parseInt(value));
            else onChangeStoryPoints(null);
          }}
          value={storyPoints !== null ? storyPoints.toString() : ''}
          style={styles.input}
          onFocus={() => {
            if (storyPoints == 0) onChangeStoryPoints(null);
          }}
          textAlign={'center'}
        />
        <Text>Dev Days: </Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={(value) => {
            if (value) onChangeDevDays(parseInt(value));
            else onChangeDevDays(null);
          }}
          value={devDays !== null ? devDays.toString() : ''}
          style={styles.input}
          onFocus={() => {
            if (devDays == 0) onChangeDevDays(null);
          }}
          textAlign={'center'}
        />
        <Button
          color={constants.PRIMARY_COLOUR}
          title="calculate"
          onPress={() => {
            Keyboard.dismiss();
            calcVelocity(storyPoints, devDays);
          }}
        />
        <Spacer>
          <Text>Story points per dev days: </Text>
        </Spacer>
        <Text style={styles.result}>
          {storyDevDays > 0 ? storyDevDays.toFixed(2) : ''}
        </Text>
      </View>
    </HideKeyboard>
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

export default RecordScreen;
