import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export type Props = {
  children: React.ReactNode;
};

const HideKeyboard: React.FC<Props> = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default HideKeyboard;
