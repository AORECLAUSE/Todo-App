import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Todolist from './Component/TodoList';

const App = () => {
  return (
    <View style={styles.container}>
      <Todolist />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
