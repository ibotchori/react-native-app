import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
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
    setItems((predItems) => {
      return predItems.filter((item) => item.id !== id )
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem/>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
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
