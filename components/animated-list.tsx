import {
  Animated,
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import FastImage from 'react-native-fast-image';

const ImageList = new Array(6).fill(
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
);

export default function AnimatedList() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [refrashing, setRefrashing] = useState<boolean>(false);

  const {width: windowWidth} = useWindowDimensions();

  const handleRefresh = useCallback(() => {
    setRefrashing(true);
    setTimeout(() => {
      setRefrashing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          refreshControl={
            <RefreshControl refreshing={refrashing} onRefresh={handleRefresh} />
          }
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          {ImageList.map((list, ind) => {
            return (
              <View style={[styles.scrollRoot, {width: windowWidth}]} key={ind}>
                <FastImage
                  source={{uri: list, priority: FastImage.priority.normal}}
                  style={styles.ImageStyle}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {ImageList.map((image, ind) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (ind - 1),
                windowWidth * ind - 1,
                windowWidth * (ind + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View key={ind} style={[styles.normalDot, {width}]} />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollRoot: {
    height: 210,
    paddingHorizontal: 20,
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
});
