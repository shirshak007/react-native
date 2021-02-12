import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

const colorScreen = () => {
  //   let counter = 0;
  const [color, setColor] = useState([]);
  const increase = () => {
    setColor([...color, getRandomRGB()]);
  };
  console.log(color);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          //   counter++;
          increase();
        }}
      />
      <View
        style={{
          height: "100%",
          width: "50%",
          backgroundColor: getRandomRGB(),
        }}
      ></View>
    </View>
  );
};
const getRandomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  textStyle: {
    fontSize: 30,
  },
});

export default colorScreen;
