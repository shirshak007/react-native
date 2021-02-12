import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Some text</Text>
        <Button
          title="Components"
          onPress={() => {
            navigation.navigate("Components");
          }}
        />
        <Button
          title="List"
          onPress={() => {
            navigation.navigate("List");
          }}
        />
        <Button
          title="Image"
          onPress={() => {
            navigation.navigate("Image");
          }}
        />
        <Button
          title="Counter"
          onPress={() => {
            navigation.navigate("Counter");
          }}
        />
        <Button
          title="Colour"
          onPress={() => {
            navigation.navigate("Color");
          }}
        />
        {/* <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={styles.img}
        /> */}
      </View>
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
