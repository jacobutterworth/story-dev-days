import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Keyboard,
  ToastAndroid,
  Platform,
  Modal,
} from 'react-native';
import Spacer from '../components/Spacer';
import HideKeyboard from '../components/HideKeyboard';
import { Dimensions } from 'react-native';
import * as constants from '../constants';
import { Button } from 'react-native-paper';
import VelocityButtons from '../components/VelocityButtons';

const windowHeight = Dimensions.get('window').height;

const RecordScreen = () => {
  const [storyPoints, onChangeStoryPoints] = React.useState<number | null>(0);
  const [devDays, onChangeDevDays] = React.useState<number | null>(0);
  const [storyDevDays, onChangeStoryDevDays] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);

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

  const recordVelocity = (velocity: number) => {
    if (Platform.OS == 'android') {
      ToastAndroid.showWithGravity(
        'Saved SPDD',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
    console.log(velocity);
  };

  const velocityButtons = [
    {
      id: 1,
      name: 'Start Velocity',
    },
    {
      id: 2,
      name: 'Finish Velocity',
    },
  ];
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
          onPress={() => {
            Keyboard.dismiss();
            calcVelocity(storyPoints, devDays);
          }}
          mode="contained"
        >
          Calculate
        </Button>

        <Spacer>
          <Text>Story points per dev days: </Text>
        </Spacer>
        {storyDevDays > 0 ? (
          <>
            <Text style={styles.result}> {storyDevDays.toFixed(2)} </Text>
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                style={{ marginTop: 15, marginHorizontal: 15 }}
                mode="contained"
                onPress={() => {
                  setModalVisible(true);

                  recordVelocity(parseFloat(storyDevDays.toFixed(2)));
                }}
              >
                Set velocity?
              </Button>

              <Button
                style={{ marginTop: 15, marginHorizontal: 15 }}
                mode="contained"
                onPress={() => {
                  recordVelocity(parseFloat(storyDevDays.toFixed(2)));
                }}
              >
                Finish velocity?
              </Button>
              {/* <VelocityButtons
                text={velocityButtons}
                velocity={parseFloat(storyDevDays.toFixed(2))}
              /> */}
            </View>

            <Modal
              style={{ backgroundColor: 'red' }}
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}
            >
              <Text> Modela</Text>
              <Button onPress={() => setModalVisible(false)}> close </Button>
            </Modal>
          </>
        ) : null}
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
  modal: {
    backgroundColor: 'red',
    color: 'red',
    borderColor: 'red',
    borderWidth: 45,
    borderStyle: 'solid',
  },
});

export default RecordScreen;
