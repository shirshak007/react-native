import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  //   console.log(props);
  return (
    <View>
      <Text style={styles.textStyle}>image of {props.title}</Text>
      <Image source={props.imageSource} />
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

export default ImageDetail;
