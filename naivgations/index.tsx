import React from 'react';
import {StyleSheet, Image, View, Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home';
import Product from '../screens/product';
import CreatePost from '../screens/create-post';
import Post from '../screens/post';
import Account from '../screens/account';

import {RootParamList} from '../types';

const Stake = createNativeStackNavigator<RootParamList>();

function LogoTitle() {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../assets/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
}

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stake.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stake.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <LogoTitle />,
            headerRight: () => <Switch />,
          }}
        />
        <Stake.Screen name="Product" component={Product} />
        <Stake.Screen name="CreatePost" component={CreatePost} />
        <Stake.Screen name="Post" component={Post} />
        <Stake.Screen name="Account" component={Account} />
      </Stake.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 40,
    height: 40,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});
