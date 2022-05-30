import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { ReactElement } from 'react';

export type Props = {
  keyVal: string;
  input: number;
  onPressFn: React.FunctionComponent;
};

const InputComponent: React.FC<Props> = ({ keyVal, input, onPressFn }) => {
  const [text, onChangeText] = React.useState('Input Text');

  return (
    <TextInput
      autoCapitalize="none"
      keyboardType="numeric"
      onChangeText={onChangeText}
      value={input.toString()}
      style={styles.input}
      onFocus={() => {
        if (text == 'Input Text') onChangeText('');
      }}
      textAlign={'center'}
      key={keyVal}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    minWidth: 60,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default InputComponent;
