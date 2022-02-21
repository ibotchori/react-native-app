import React, { useEffect, useState } from "react";
import { StyleSheet, Alert, View, FlatList } from "react-native";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
  const [items, setItems] = useState([]);

  // // dummy data
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     text: "Milk",
  //   },
  //   {
  //     id: 2,
  //     text: "Eggs",
  //   },
  //   {
  //     id: 3,
  //     text: "Bread",
  //   },
  //   {
  //     id: 4,
  //     text: "Juice",
  //   },
  // ]);

  // get data from database
  useEffect(async () => {
    try {
      const result = await fetch("https://rest-api-mongo.onrender.com/shop/");
      const data = await result.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteItem = async (id) => {
    try {
      // delete shop in database by id
      const rawResponse = await fetch(
        `https://rest-api-mongo.onrender.com/shop/${id}`,
        {
          method: "DELETE",
        }
      );
      // extract deleted shop id from response
      const deletedShopID = await rawResponse.json();

      // save filtered shops to state
      setItems((prevItems) => {
        return prevItems.filter((item) => item._id !== deletedShopID);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", [{ text: "OK" }]);
    } else {
      try {
        // add shop to database
        const rawResponse = await fetch(
          "https://rest-api-mongo.onrender.com/shop/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: text }),
          }
        );
        // extract added shop
        const addedShop = await rawResponse.json();

        // save shop to state
        setItems((prevItems) => {
          return [{ _id: addedShop._id, text }, ...prevItems];
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem key={item.id} item={item} deleteItem={deleteItem} />
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
