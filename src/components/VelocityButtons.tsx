import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export type Props = {
  text: { id: number; name: string };
  velocity: number;
};

const VelocityButtons: React.FC<Props> = ({ text, velocity }) => {
  let buttonArray: string[];
  Object.keys(text).map(function (key, index) {
    buttonArray.push(key, index);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        borderColor: 'red',
        borderWidth: 2,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        {buttonArray.map((buttonTitle) => (
          <Button
            key={buttonTitle.id}
            style={{ marginTop: 15, marginHorizontal: 15 }}
            mode="contained"
          >
            {buttonTitle}
          </Button>
        ))}
        {/* <Text>{text}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default VelocityButtons;
