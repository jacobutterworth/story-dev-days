import { NavigationProp } from '@react-navigation/native';
import React, { ReactChild } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';

interface Props {
  children: ReactChild;
  visible: boolean;
  // navigation: NavigationProp
}

const SCREEN_HEIGHT = Dimensions.get('window').height;

const CustomModal: React.FC<Props> = ({ children, visible }) => {
  // navigation.setOptions({
  //   tabBarStyle: { display: 'none' },
  // });
  return (
    <>
      {visible == true ? (
        <View style={styles.modalView}>{children}</View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    zIndex: 100,
    flex: 1,
    shadowColor: '#171717',
    shadowOffset: { width: 22, height: 24 },
    shadowOpacity: 0.2,
    justifyContent: 'center',
    shadowRadius: 3,
    // alignContent: 'space-between',
    // borderColor: 'grey',
    // borderWidth: 1,
    // shadowRadius: 4,
    // shadowOffset: {
    //   width: 0,
    //   height: -3,
    // },
    // shadowColor: '#000000',
    // elevation: 4,
    // shadowOpacity: 1,
    // opacity: 0.8,
    backgroundColor: 'rgba(220, 220, 220, 0.9)',
    height: (Dimensions.get('window').height * 1) / 3,
    width: Dimensions.get('window').width * 1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingBottom: 0,
    alignItems: 'center',
    elevation: 5,
    // paddingTop: (SCREEN_HEIGHT * 2) / 5,
    // marginTop: (Dimensions.get('window').height * 2) / 3,
    // marginBottom: 0,
    bottom: -10,
  },
});

export default CustomModal;
