import React, { Component } from "react";
import { TextInput, View, Image, StyleSheet, Text } from "react-native";
import { FirebaseWrapper } from "../firebase/firebase";
import * as firebase from "firebase";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);
  }

  async signOut() {
    try {
      console.log("it works to sign out");
      // make call to Firebase
      await firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
        })
        .catch(function(error) {
          console.log("Could not sign out", error);
        });
      //this.props.closeModal();
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
