import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function AddItem({ addItem }) {
  // entered value state
  const [text, setText] = useState("");

  // save entered value in text state
  const onChange = (textValue) => {
    setText(textValue);
  };

  return (
    <View>
      <TextInput
        onChangeText={onChange}
        placeholder="Add Item..."
        style={styles.input}
        value={text}
      />
      <TouchableOpacity onPress={() => {
          addItem(text)
          setText('')
          }}
          style={styles.btn}>
        <Text style={styles.btnText}>
          <FontAwesome style={styles.icon} name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
  icon: {
    color: "green",
  },
});
