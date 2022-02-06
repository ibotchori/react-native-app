// Use prebuilt version of RNVI in dist folder
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function ListItem({ item, deleteItem }) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text  style={styles.listItemText}>{item.text}</Text>
        <FontAwesome
        onPress={() => deleteItem(item.id)}
        name='remove'
        size={25} 
        color="red"       
      />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
});
