/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';

export default function CustomModal(props) {
  // eslint-disable-next-line no-unused-vars
  const {isVisible, selectedItem, closeModal} = props;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={props.closeModal}>
      <View style={styles.modalBox}>
        <Text style={styles.modalText}>
          Proposal Internal Code:
          {selectedItem.id}
        </Text>
        <Text style={styles.modalText}>
          Customer Name:{selectedItem.customer}
        </Text>
        <Text style={styles.modalText}>Seller Name: {selectedItem.seller}</Text>
        <Text style={styles.modalText}>
          Description:{selectedItem.description}
        </Text>
        <Text style={styles.modalText}>Value:{selectedItem.value}</Text>
        <Button
          style={styles.modalButton}
          title="Close modal"
          onPress={props.closeModal}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBox: {
    flexDirection: 'column',
    alignContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    backfaceVisibility: 'hidden',
  },
  modalText: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
    padding: 2,
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalButton: {
    color: '#1f75ff',
  },
  list: {
    margin: 10,
    alignContent: 'space-around',
    elevation: 10,
  },
});
