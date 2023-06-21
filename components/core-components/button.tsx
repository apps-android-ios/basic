import {Alert, Button, View} from 'react-native';
import React from 'react';

const ButtonComponent = () => {
  function handleCal() {
    Alert.alert(`calluate 4+5 is ${4 + 5}`);
  }

  return (
    <View>
      <Button
        title="Click me"
        onPress={handleCal}
        color="#007AFF"
        accessibilityLabel="Perform to calculate amount"
      />
    </View>
  );
};

export default ButtonComponent;
