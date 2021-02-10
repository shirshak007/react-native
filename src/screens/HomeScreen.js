import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text style={styles.text}>Somesssssssssssssssssssssxt</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={styles.img}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  img: { width: 300, height: 300 },
});

export default HomeScreen;
