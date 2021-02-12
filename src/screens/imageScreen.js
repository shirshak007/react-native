import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";
import beach from "../../assets/images/beach.jpg";

const imageScreen = () => {
  return (
    <View>
      {/* <Text style={styles.textStyle}>images screen</Text> */}
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/images/forest.jpg")}
      />
      <ImageDetail title="beach" imageSource={beach} />
      <ImageDetail
        title="mountain"
        imageSource={require("../../assets/images/mountain.jpg")}
      />
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

export default imageScreen;
