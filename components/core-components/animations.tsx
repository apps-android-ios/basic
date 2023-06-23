import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useRef} from 'react';

const AnimationsComponent = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View>
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </View>
  );
};

export default AnimationsComponent;

const styles = StyleSheet.create({
  fadingText: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'powderblue',
    textAlign: 'center',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});
