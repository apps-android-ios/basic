import {View, Text, Alert} from 'react-native';
import React, {useCallback} from 'react';

const AlertModel = () => {
  const handleOpenAlert = useCallback(() => {
    Alert.alert('Hello');
  }, []);

  return (
    <View>
      <Text onPress={handleOpenAlert}>Alert</Text>
    </View>
  );
};

export default AlertModel;
