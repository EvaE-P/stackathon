import React, { Component } from "react";
import { View, Image, StyleSheet, Button, Text } from "react-native";
import { firebaseConfig } from "../firebase/config";
import { FirebaseWrapper } from "../firebase/firebase";
import * as firebase from "firebase";

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    FirebaseWrapper.GetInstance().Initialize(firebaseConfig);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text style={styles.text}>Welcome to</Text>
          <Text style={styles.text2}>Kollect</Text>
          <Text>{"   "}</Text>
          <Text>{"   "}</Text>
          <Text>{"   "}</Text>
          <Text>{"   "}</Text>
          <Text>{"   "}</Text>
        </View>
        <Image
          style={{ width: 50, height: 50, borderRadius: 20 }}
          source={require("../assets/images/signIn.png")}
        />
        <Button
          title="Login"
          color="black"
          onPress={() => this.props.navigation.navigate("SigninInScreen")}
        >
          {" "}
        </Button>

        <View>
          <Image
            style={{ width: 50, height: 50, borderRadius: 20 }}
            source={require("../assets/images/sign-up-icon-3.png")}
          />
          <Button
            title="Sign Up"
            color="black"
            onPress={() => this.props.navigation.navigate("CreatePostScreen")}
          />
        </View>
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  text2: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Trebuchet MS"
  }
});
