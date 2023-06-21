import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';

const KeyboardAvoiding = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Send Message</Text>
          <TextInput placeholder="Enter message" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => null} style={styles.btnStyle}>
              <Text style={styles.btnTitle}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoiding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  innerContainer: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 25,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
    fontSize: 15,
  },
  btnContainer: {
    marginTop: 12,
  },
  btnStyle: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnTitle: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
