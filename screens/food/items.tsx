import {View, Button} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {FoodStoreParamList} from '../../types';

type ScreenProps = NativeStackScreenProps<FoodStoreParamList, 'Items'>;

const Items = ({navigation}: ScreenProps) => {
  return (
    <View>
      <Button title="goBack" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Items;
