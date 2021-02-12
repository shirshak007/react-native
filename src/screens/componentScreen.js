import React from "react";
import { Text, StyleSheet, View } from "react-native";

const componentScreen = () => {
  name = "Shirshak";
  return (
    <View>
      <Text style={styles.textStyle}>Hello, this is a component page</Text>
      <Text style={styles.textStyle2}>name : {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  textStyle: {
    fontSize: 30,
  },
});

export default componentScreen;
