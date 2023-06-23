import {
  StatusBar,
  StyleSheet,
  Platform,
  Button,
  Text,
  View,
} from 'react-native';
import type {StatusBarStyle} from 'react-native';
import React, {useCallback, useState} from 'react';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

const TRANSITIONS = ['fade', 'slide', 'none'] as const;

type StatusBarTransitionProp = 'fade' | 'slide' | 'none';

const StatusBarComponents = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );

  const [statusBarTranstion, setStatusBarTranstion] =
    useState<StatusBarTransitionProp>(TRANSITIONS[0]);

  const changeStatusBarVisibility = useCallback(() => {
    setHidden(!hidden);
  }, [hidden]);

  const changeStatusBarStyle = () => {
    const styleID = STYLES.indexOf(statusBarStyle) + 1;

    if (styleID === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleID]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTranstion) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTranstion(TRANSITIONS[0]);
    } else {
      setStatusBarTranstion(TRANSITIONS[transition]);
    }
  };

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#0c0"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTranstion}
        hidden={hidden}
      />
      <Text style={styles.textStyle}>
        StatusBar visibility: {'\n'}
        {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Text style={styles.textStyle}>
        StatusBar Style:{'\n'}
        {statusBarStyle}
      </Text>
      {Platform.OS === 'ios' ? (
        <Text style={styles.textStyle}>
          StatusBar Transition:{'\n'}
          {statusBarTranstion}
        </Text>
      ) : null}
      <View style={styles.buttonsContainer}>
        <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
        {Platform.OS === 'ios' ? (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition}
          />
        ) : null}
      </View>
    </View>
  );
};

export default StatusBarComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});
