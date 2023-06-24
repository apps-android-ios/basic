import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home';
import Product from '../screens/product';
import CreatePost from '../screens/create-post';
import Post from '../screens/post';
import Account from '../screens/account';
import Items from '../screens/food/items';
import Categories from '../screens/food/categories';

import {RootParamList, FoodStoreParamList} from '../types';

const Root = createNativeStackNavigator<RootParamList>();
const Tab = createNativeStackNavigator<FoodStoreParamList>();

function FoodStore() {
  return (
    <Tab.Navigator initialRouteName="Categories">
      <Tab.Screen name="Items" component={Items} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
}

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Root.Screen name="Home" component={Home} />
        <Root.Screen
          name="FoodStore"
          component={FoodStore}
          options={{headerShown: false}}
        />

        <Root.Screen name="Product" component={Product} />
        <Root.Screen name="CreatePost" component={CreatePost} />
        <Root.Screen name="Post" component={Post} />
        <Root.Screen name="Account" component={Account} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
