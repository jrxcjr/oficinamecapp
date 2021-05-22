/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Pressable,
  Alert,
  Modal,
  Button,
} from 'react-native';
import CustomModal from './CustomModal';

export default function ServiceList() {
  const [isLoading, setLoading] = useState(true);
  const [dataSource, setData] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/codificar/oficina/proposals')
      .then(response => response.json())
      .then(responsejson => setData(responsejson))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  //TODO:TRY TO SPLIT THE CONCERNS VIA CONTEXT

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={styles.title}>Proposal List</Text>
          <FlatList
            style={styles.list}
            data={dataSource}
            keyExtractor={({id}, index) => id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({item}) => (
              <View>
                <Text style={styles.listItem}>
                  <Pressable
                    hitSlop={20}
                    onPress={() => {
                      setVisibleModal(!visibleModal);
                      setClickedData(item);
                    }}>
                    <Text> Customer {item.customer} </Text>
                    <Text> Seller: {item.seller} </Text>
                    <Text> Value: {item.value} </Text>
                  </Pressable>
                </Text>
              </View>
            )}
          />
          <Modal
            visible={visibleModal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setVisibleModal(!visibleModal)}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>
                Proposal Internal Code:
                {clickedData.id}
              </Text>
              <Text style={styles.modalText}>
                Customer Name:{clickedData.customer}
              </Text>
              <Text style={styles.modalText}>
                Seller Name: {clickedData.seller}
              </Text>
              <Text style={styles.modalText}>
                Description:{clickedData.description}
              </Text>
              <Text style={styles.modalText}>Value:{clickedData.value}</Text>
              <Button
                style={styles.modalButton}
                title="Close modal"
                onPress={() => setVisibleModal(!visibleModal)}
              />
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: 2,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f7f7f7',
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    alignContent: 'center',
    color: '#1f75ff',
  },
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
  listItem: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 0.5,
    alignContent: 'stretch',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000000',
    opacity: 0.15,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 1,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,

    // elevation: 7,
    margin: 18,
    fontSize: 17,
  },
});
//TODO:card shadow, modal to center,
