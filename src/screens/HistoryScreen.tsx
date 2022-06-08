import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryCard from '../components/HistoryCard';

const HistoryScreen = ({}) => {
  const sprints: Array<Object> = [
    {
      expected: 10,
      actual: 12,
      sprintNo: 1,
      sprintDate: '03/06/22',
    },
    {
      expected: 11,
      actual: 12,
      sprintNo: 3,
      sprintDate: '04/06/22',
    },
    {
      expected: 12,
      actual: 13,
      sprintNo: 4,
      sprintDate: '05/06/22',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HistoryCard
        expected={10}
        actual={4}
        sprintNo={1}
        sprintDate={'01/01/22'}
      ></HistoryCard>
      <HistoryCard
        expected={10}
        actual={4}
        sprintNo={2}
        sprintDate={'14/01/22'}
      ></HistoryCard>
      <HistoryCard
        expected={10}
        actual={4}
        sprintNo={3}
        sprintDate={'02/02/22'}
      ></HistoryCard>
    </SafeAreaView>
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

export default HistoryScreen;
