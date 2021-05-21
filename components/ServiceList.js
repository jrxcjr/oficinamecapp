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
              <Text>
                Proposal Internal Code:
                {clickedData.id}
              </Text>
              <Text>Customer Name:{clickedData.customer}</Text>
              <Text>Seller Name: {clickedData.seller}</Text>
              <Text>Description:{clickedData.description}</Text>
              <Button
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
    backgroundColor: '#abab',
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  modalBox: {
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
    elevation: 5,
  },
  list: {
    margin: 10,
    alignContent: 'space-around',
  },
  listItem: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 0.5,
    alignContent: 'stretch',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 4,
    borderColor: '#aaa',
    borderWidth: 1.5,
    margin: 18,
  },
});
