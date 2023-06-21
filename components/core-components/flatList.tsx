import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';

import {Products, ItemData} from '../../data';

const FlatListComponent = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const ProductItem = useCallback(
    ({item}: {item: ItemData}) => {
      const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
      const color = item.id === selectedId ? 'white' : 'black';

      return (
        <TouchableOpacity
          style={[styles.listCard, {backgroundColor}]}
          onPress={() => setSelectedId(item.id)}>
          <Text style={[styles.title, {color}]}>{item.title}</Text>
        </TouchableOpacity>
      );
    },
    [selectedId],
  );

  return (
    <View>
      <FlatList
        data={Products}
        renderItem={ProductItem}
        keyExtractor={list => list.id}
        extraData={selectedId}
        refreshing={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listCard: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default FlatListComponent;
