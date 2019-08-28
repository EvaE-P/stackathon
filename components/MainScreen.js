/* eslint-disable react/no-multi-comp */
import React, { Component } from "react";
import { View, Image, StyleSheet, Button, Text, Animated } from "react-native";
import { firebaseConfig } from "../firebase/config";
import { FirebaseWrapper } from "../firebase/firebase";

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 3, // Animate to opacity: 1 (opaque)
        duration: 10000 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
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
          <FadeInView style={{ width: 250, height: 50 }}>
            <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
              Kollect
            </Text>
          </FadeInView>
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
        <FadeInView style={{ width: 250, height: 50 }}>
          <Button
            title="Login"
            color="black"
            onPress={() => this.props.navigation.navigate("SigninInScreen")}
          >
            {" "}
          </Button>
        </FadeInView>

        <Image
          style={{ width: 50, height: 50, borderRadius: 20 }}
          source={require("../assets/images/sign-up-icon-3.png")}
        />
        <FadeInView style={{ width: 250, height: 50 }}>
          <Button
            title="Sign Up"
            color="black"
            onPress={() => this.props.navigation.navigate("CreatePostScreen")}
          />
        </FadeInView>
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
