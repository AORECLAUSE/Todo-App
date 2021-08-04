import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Todo from './Todo';
const Todolist = () => {
  const [title, setTitle] = useState('TodoList');
  const [text, setText] = useState();
  const [list, setList] = useState([]);

  console.log(list);
  //method item add
  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText('');
  };

  //method item add
  const deleteItem = index => {
    const updatedList = list.filter(todo => todo !== index);
    setList(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.align, styles.font]}>{title}</Text>
      <ScrollView>
        {list.map((x, index) => (
          <Todo key={index} item={x} index={index} delete={deleteItem} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 60,
  },
  align: {
    alignSelf: 'center',
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderColor: 'black',
  },
});

export default Todolist;
