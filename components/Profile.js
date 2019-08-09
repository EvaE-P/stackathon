import React, { Component } from "react";
import {
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Button,
  Text
} from "react-native";
import { TouchableOpacity } from "react-native";
import { firebaseConfig } from "../firebase/config";
import { FirebaseWrapper } from "../firebase/firebase";
import * as firebase from "firebase";
import { SignIn } from "./SignIn";

// import console = require("console");

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isModalVisible2: false,
      text: ""
    };
  }

  closeModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  closeModalTwo() {
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
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
          To HomScreen
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
