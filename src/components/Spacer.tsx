import React, { ReactChild } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children: ReactChild;
}

const Spacer: React.FC<Props> = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    marginVertical: 15,
  },
});

export default Spacer;
