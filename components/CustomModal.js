/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Modal, Button} from 'react-native';

export default function CustomModal(props) {
  const {isVisible, selectedItem, onClose, id} = props;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onRequestClose={onClose}
      id={id}>
      <Text>{selectedItem.seller}</Text>
      <Text>{selectedItem.customer}</Text>
      <Text>{selectedItem.description}</Text>
      <Text>{selectedItem.value}</Text>
      <Button title="Close this detailed Description" onPress={() => onClose} />
    </Modal>
  );
}
//   <Modal
//   style={styles.modal}
//   animationType="slide"
//   visible={modalVisible}
//   transparent={true}
//   onRequestClose={() => {
//     Alert.alert('The Description has been closed');
//     setModalVisible(!modalVisible);
//   }}>
//   <Text>{item.seller}</Text>
//   <Text>{item.customer}</Text>
//   <Text>{item.description}</Text>
//   <Text>{item.value}</Text>
// </Modal>
