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

export class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  async createPost() {
    try {
      console.log("ayoooo", this.state.text);
      // make call to Firebase
      await FirebaseWrapper.GetInstance().CreateNewDocument("users", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      });
      this.props.closeModal();
    } catch (err) {
      console.log("something wrong component post", err);
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
        </View>

        <Button title="Sign Up here" onPress={() => this.createPost()} />
        <Button title="To your profile" />
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
