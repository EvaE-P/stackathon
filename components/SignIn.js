import React, { Component } from "react";
import {
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Button
} from "react-native";
import { FirebaseWrapper } from "../firebase/firebase";
import * as firebase from "firebase";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  async createPost() {
    try {
      console.log("it works to sign in");
      // make call to Firebase
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
      this.props.closeModal();
    } catch (err) {
      console.log("something wrong signin in", err);
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}
      >
        <View style={{ marginTop: 25 }}>
          <TouchableHighlight
            onPress={() => {
              this.props.closeModal();
            }}
          >
            <Image
              source={{
                uri:
                  "https://cdn4.iconfinder.com/data/icons/media-controls-4/100/close-512.png"
              }}
              style={styles.close}
            />
          </TouchableHighlight>
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
            placeholder="Your Password"
            value={this.state.password}
            style={styles.input}
          />
        </View>

        <Button title="Sign In" onPress={() => this.createPost()} />
      </Modal>
    );
  }
}

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
