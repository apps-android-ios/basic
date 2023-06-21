import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import CoreComponents from './components/core-components';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.rootContainer}>
        <CoreComponents />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
});

export default App;
