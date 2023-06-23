import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootParamList} from '../types';

type ScreenProps = NativeStackScreenProps<RootParamList, 'Post'>;

const Post = ({route}: ScreenProps) => {
  const {postId} = route.params;

  useEffect(() => {
    if (postId) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [postId]);

  return (
    <View>
      <Text>postId: {postId}</Text>
    </View>
  );
};

export default Post;
