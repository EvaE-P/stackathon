import React from "react";
import { View, StyleSheet, Text } from "react-native";

import * as firebase from "firebase";
import { Button } from "react-native-elements";

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);
  }

  async signOut() {
    try {
      await firebase
        .auth()
        .signOut()
        .then(function() {});
    } catch (err) {
      console.log("something wrong signin out", err);
    }
  }

  render() {
    this.signOut();
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.container}>
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          <Text>You have been logged out</Text>
          <Button
            icon={{ name: "home", size: 30 }}
            type="clear"
            title=""
            onPress={() => this.props.navigation.navigate("ProfileScreen")}
          />
        </View>
      </View>
    );
  }
}
SignOut.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  input: {
    height: 80
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10
  }
});
