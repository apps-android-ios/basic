import {Button, Text, View} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootParamList} from '../types';

type ScreenProps = NativeStackScreenProps<RootParamList, 'Home'>;

const Home = ({navigation}: ScreenProps) => {
  return (
    <View>
      <Text>itemId</Text>
      <Button
        title="Product"
        onPress={() =>
          navigation.navigate('Product', {
            itemId: 25,
            name: 'mango',
          })
        }
      />
      <Button
        title="CreatePost"
        onPress={() => navigation.navigate('CreatePost')}
      />
    </View>
  );
};

export default Home;
