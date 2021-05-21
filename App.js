import React from 'react';
import {View, StyleSheet} from 'react-native';
import ServicesFlatList from './components/ServiceList';

export default function App() {
  return (
    <View style={styles.container}>
      <ServicesFlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#abab',
  },
});
