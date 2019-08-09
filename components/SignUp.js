import React, { Component } from "react";
import * as WebBrowser from "expo-web-browser";
import {
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { FirebaseWrapper } from "../firebase/firebase";
import { ProfileScreen } from "./Profile";

export default class CreatePostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }
  async componentDidMount() {}
  async createPost() {
    try {
      console.log("ayoooo", this.state.email);
      // make call to Firebase
      await FirebaseWrapper.GetInstance().CreateNewDocument("users", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      });
      // this.props.closeModal();
    } catch (err) {
      console.log("something wrong component post", err);
    }
  }

  render() {
    console.log("is this inside of SignUp");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginTop: 25 }}>
          <TextInput
            multiline={true}
            numberOfLines={2}
            onChangeText={firstName => this.setState({ firstName })}
            placeholder="Your first name"
            value={this.state.firstName}
            style={styles.input}
          />
          <TextInput
            multiline={true}
            numberOfLines={2}
            onChangeText={lastName => this.setState({ lastName })}
            placeholder="Your last name"
            value={this.state.lastName}
            style={styles.input}
          />
          <TextInput
            multiline={true}
            numberOfLines={2}
            onChangeText={email => this.setState({ email })}
            placeholder="Your email"
            value={this.state.email}
            style={styles.input}
          />
          <TextInput
            multiline={true}
            numberOfLines={2}
            onChangeText={password => this.setState({ password })}
            placeholder="Your password"
            value={this.state.password}
            style={styles.input}
          />
          <Button
            icon={<Icon name="trophy" />}
            title="Submit"
            type="outline"
            onPress={() => this.createPost()}
          />

          {this.state.password.length === 6 ? (
            <View>
              <Text>{"   "}</Text>
              <Text>{"   "}</Text>
              <Text>{"   "}</Text>

              <Button
                title="And then go to your Profile"
                icon={{ name: "motorcycle", size: 20 }}
                type="outline"
                onPress={() =>
                  this.props.navigation.navigate("Post", {
                    name: this.state.firstName
                  })
                }
              />
            </View>
          ) : (
            <View>
              <Text>{""}</Text>
            </View>
          )}
        </View>
        <View>
          <Text>{"   "}</Text>
          <Text>{"   "}</Text>
          <Text>{"   "}</Text>
          <Text>{"   "}</Text>
          <Text>{"   "}</Text>
        </View>
        <Button
          icon={{ name: "home", size: 30 }}
          type="clear"
          title=""
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        />
      </View>
    );
  }
}
CreatePostScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
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
