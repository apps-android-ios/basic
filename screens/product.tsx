import {View, Button, Text} from 'react-native';
import React, {useEffect} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootParamList} from '../types';

type ScreenProps = NativeStackScreenProps<RootParamList, 'Product'>;

const Product = ({route, navigation}: ScreenProps) => {
  const {itemId, name} = route.params;

  useEffect(() => {
    navigation.setParams({
      itemId: 50,
    });
  }, [navigation]);

  return (
    <View>
      <Text>ItemId: {itemId}</Text>
      <Text>Name: {name}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Product', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Product;
