import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
};

const ButtonAnimation = () => {
  return (
    <View style={styles.container}>
      <FadeInView style={styles.fadePropsStyle}>
        <Text style={styles.buttonStyle}>Fading in</Text>
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  fadePropsStyle: {
    width: 250,
    height: 50,
    backgroundColor: 'powderblue',
  },
  buttonStyle: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default ButtonAnimation;
