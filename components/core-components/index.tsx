import {View, StyleSheet} from 'react-native';
import React from 'react';
// import InputAccessory from './input-accessory';

// import ButtonComponent from './button';
// import FlatListComponent from './flatList';
// import ImageComponent from './image';
// import KeyboardAvoiding from './keyboard-avoiding';
// import ModelComponent from './model';
// import RefreshControlComponent from './refresh-control';
// import StatusBarComponents from './status-bar';
// import SwitchComponent from './switch';
// import DrawerAndroid from './drawer-android';
import AnimationsComponent from './animations';

const CoreComponents = () => {
  return (
    <View style={styles.root}>
      {/* <ButtonComponent />
      <FlatListComponent />
      <ImageComponent /> */}
      {/* <KeyboardAvoiding /> */}
      {/* <ModelComponent /> */}
      {/* <RefreshControlComponent /> */}
      {/* <StatusBarComponents /> */}
      {/* <SwitchComponent /> */}
      {/* <DrawerAndroid /> */}
      {/* <InputAccessory /> */}
      <AnimationsComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },
});

export default CoreComponents;
