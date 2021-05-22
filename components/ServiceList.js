/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';
import CustomModal from './CustomModal';

export default function ServiceList() {
  const [isLoading, setLoading] = useState(true);
  const [dataSource, setData] = useState([]);
  const [visibleModalIsTrue, setVisibleModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/codificar/oficina/proposals')
      .then(response => response.json())
      .then(responsejson => setData(responsejson))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleModalClose = () => {
    setVisibleModal(!visibleModalIsTrue);
  };

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
                      setVisibleModal(!visibleModalIsTrue);
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
        </View>
      )}
      {visibleModalIsTrue ? (
        <View style={styles.modalWrapper}>
          <CustomModal
            closeModal={handleModalClose}
            isVisible={visibleModalIsTrue}
            selectedItem={clickedData}
          />
        </View>
      ) : (
        <View />
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
    margin: 18,
    fontSize: 17,
  },
  modalWrapper: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
