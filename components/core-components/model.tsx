import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

const ModelComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={isOpen}
        transparent={true}
        onRequestClose={() => setIsOpen(!isOpen)}>
        <View style={styles.modelCenteredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsOpen(!isOpen)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setIsOpen(true)}>
        <Text style={styles.textStyle}>Show</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    margin: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelCenteredView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  modalView: {
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModelComponent;
