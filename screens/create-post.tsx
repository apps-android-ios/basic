import {StyleSheet, TextInput, Button, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootParamList} from '../types';

type ScreenProps = NativeStackScreenProps<RootParamList, 'CreatePost'>;

const CreatePost = ({navigation}: ScreenProps) => {
  const [postText, setPostText] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Search post"
        style={styles.input}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: 'Post',
            params: {postId: postText},
            merge: true,
          });
        }}
      />
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderRadius: 10,
  },
});
