import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const counterScreen = () => {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <View>
      <Button
        title="INCREASE"
        onPress={() => {
          //   counter++;
          increase();
        }}
      />
      <Button
        title="DECREASE"
        onPress={() => {
          //   counter--;
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.textStyle}>counter: {counter}</Text>
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

export default counterScreen;
