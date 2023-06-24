import {View, Text, Button} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {FoodStoreParamList} from '../../types';

type ScreenProps = NativeStackScreenProps<FoodStoreParamList, 'Categories'>;

const Categories = ({navigation}: ScreenProps) => {
  return (
    <View>
      <Text>itemId</Text>
      <Button title="Items" onPress={() => navigation.navigate('Items')} />
      <Button title="goBack" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Categories;
