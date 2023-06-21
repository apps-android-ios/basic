import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';

const RefreshControlComponent = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleOnRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleOnRefresh}
            colors={['red']} // android
            progressBackgroundColor="lightgray" // android
            title="refresh_btn" //ios
          />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </View>
  );
};

export default RefreshControlComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
