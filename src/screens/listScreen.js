import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const listScreen = () => {
  const friends = [
    { name: "Friend1" },
    { name: "Friend2" },
    { name: "Friend3" },
    { name: "Friend4" },
    { name: "Friend5" },
    { name: "Friend6" },
    { name: "Friend7" },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friends) => {
        friends.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
});

export default listScreen;
