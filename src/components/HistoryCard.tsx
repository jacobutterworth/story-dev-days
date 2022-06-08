import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

export type Props = {
  expected: number;
  actual: number;
  sprintNo: number;
  sprintDate: string;
};

const HistoryCardCols: React.FC<Props> = ({
  expected,
  actual,
  sprintNo,
  sprintDate,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.column}>
        <Text style={[styles.text, styles.bold]}>Sprint {sprintNo} </Text>
        <Text style={styles.text}>Expected </Text>
        <Text style={styles.text}>{expected.toString()}</Text>
      </View>
      <View style={styles.column}>
        <Text style={[styles.text, styles.bold]}>{sprintDate.toString()}</Text>
        <Text style={styles.text}>Actual</Text>
        <Text style={styles.text}>{actual.toString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    marginHorizontal: Dimensions.get('window').width / 2,
    paddingHorizontal: 20,
    width: Dimensions.get('window').width - 20,
    marginVertical: 10,
    paddingVertical: 5,
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  heading: {},
  text: {
    fontSize: 17,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  column: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default HistoryCardCols;
