import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Linking } from "react-native";

export default function Display(props) {
  let str = props.postInfo.content;

  return (
    <View style={styles.postContainer}>
      <View style={styles.container}>
        <View>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(props.postInfo.content)}
          >
            {props.postInfo.name}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    padding: 10,
    borderBottomColor: "#dadada",
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  username: {
    fontSize: 18,
    fontWeight: "bold"
  },
  dateUserContainer: {
    marginLeft: 3
  },
  postText: {
    padding: 5,
    fontSize: 15
  }
});
