import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ImageComponent = () => {
  return (
    <View style={styles.imgArea}>
      <Image
        source={require('../../assets/cup.jpg')}
        style={styles.imgStyle}
        resizeMode="cover"
        fadeDuration={1000}
      />
      <View style={[styles.bgContainer]}>
        <ImageBackground
          source={require('../../assets/cup.jpg')}
          style={styles.bgImgStyle}>
          <Text>Inside</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgArea: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  bgContainer: {
    width: 250,
  },
  bgImgStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default ImageComponent;
