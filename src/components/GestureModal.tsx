import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { ReactChild, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

interface Props {
  children: ReactChild;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const GestureModal: React.FC<Props> = ({ children }) => {
  const translateY = useSharedValue(0);

  const context = useSharedValue({ y: 0 });

  const scrollTo = (desination: number) => {
    'worklet';
    translateY.value = withTiming(desination, {
      duration: 50,
      easing: Easing.out(Easing.ease),
    });
  };
  const navigation = useNavigation();

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + 50);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 2) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 100, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    navigation.setOptions({
      presentation: 'modal',
      swipeEnabled: false,
      // tabBarStyle: { display: 'none' },
    });
    scrollTo(-SCREEN_HEIGHT / 3);
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.modalView, rBottomSheetStyle]}>
        <View style={styles.line} />
        {children}
      </Animated.View>
    </GestureDetector>
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
    // justifyContent: 'center',
    shadowRadius: 3,
    backgroundColor: 'rgba(220, 220, 220, 0.9)',
    height: Dimensions.get('window').height * 1,
    width: '100%',
    paddingBottom: 0,
    alignItems: 'center',
    elevation: 5,
    bottom: -10,
    top: Dimensions.get('window').height * 1,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    // borderRadius: 2,
  },
});

export default GestureModal;
