import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Alert, View, FlatList } from "react-native";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Milk",
    },
    {
      id: 2,
      text: "Eggs",
    },
    {
      id: 3,
      text: "Bread",
    },
    {
      id: 4,
      text: "Juice",
    },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', "Please enter an item", [{text: 'OK'}])
    } else {
      setItems((prevItems) => {
        return [{ id: Math.random(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
