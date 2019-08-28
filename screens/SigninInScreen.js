/* eslint-disable no-return-assign */

import React, { Component } from "react";
import { TextInput, View, StyleSheet, Text, Platform } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as firebase from "firebase";

export default class SigninInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: true,
      name: ""
    };
  }
  async componentDidMount() {}
  async signIn() {
    try {
      console.log("ayoooo", this.state.email);
      // make call to Firebase

      await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error) {
          // Handle Errors here.
          console.log("could not sign IN", error);
          // ...
        });
      if (await firebase.auth().currentUser) {
        const name = this.state.email;
        return this.setState({
          email: "",
          password: "",
          firstName: false,
          name: name
        });
      }
    } catch (err) {
      console.log("something wrong component signinIn", err);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.contentContainer}>
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
            secureTextEntry={true}
            password={true}
            blurOnSubmit={true}
            placeholder="Your password"
            value={this.state.password}
            style={styles.input}
          />
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          <Button
            title="signIn"
            icon={<Icon name="trophy" />}
            type="outline"
            onPress={() => this.signIn()}
          />
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          {!this.state.firstName ? (
            <Button
              title="Go to your profile"
              icon={{ name: "motorcycle", size: 20 }}
              type="outline"
              onPress={() =>
                this.props.navigation.navigate("Post", {
                  name: this.state.name
                })
              }
            />
          ) : (
            <View>
              <Text>{""}</Text>
            </View>
          )}
        </View>
        <Button
          icon={{ name: "home", size: 30 }}
          type="clear"
          title=""
          color="black"
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        />
      </View>
    );
  }
}

SigninInScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
