import {
  View,
  Switch,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
} from 'react-native';
import React, {useCallback, useState} from 'react';

const SwitchComponent = () => {
  const [isEnbled, setIsEnbled] = useState<boolean>(false);
  const [username, setUsername] = useState<string>();
  const [message, setMessage] = useState<string>('');
  const [count, setCount] = useState(0);

  const onPress = () => setCount(count + 1);

  const handleSwitch = useCallback(() => {
    setIsEnbled(!isEnbled);
  }, [isEnbled]);

  return (
    <View style={styles.container}>
      <View>
        <Switch
          ios_backgroundColor="#f4f3f4"
          trackColor={{false: 'gray', true: 'green'}}
          thumbColor={isEnbled ? 'white' : '#f4f3f4'}
          value={isEnbled}
          onValueChange={handleSwitch}
        />
      </View>

      {isEnbled && (
        <View>
          <TextInput
            inputMode="text"
            style={styles.input}
            value={username}
            placeholder="Enter username"
            onChangeText={text => setUsername(text)}
            blurOnSubmit={true}
            keyboardAppearance="light"
            keyboardType="default"
          />
          <TextInput
            inputMode="text"
            editable
            multiline
            numberOfLines={4}
            maxLength={100}
            style={styles.textAreaInput}
            value={message}
            placeholder="Enter message"
            onChangeText={text => setMessage(text)}
          />
          <View style={styles.boxStyle}>
            <TouchableHighlight
              onPress={onPress}
              underlayColor="#DDDDDD"
              activeOpacity={0.6}>
              <View style={styles.button}>
                <Text>Touch Here</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  textAreaInput: {
    marginTop: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 100,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  boxStyle: {
    marginTop: 15,
  },
});

export default SwitchComponent;
