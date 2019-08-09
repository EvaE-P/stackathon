import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  Platform
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FirebaseWrapper } from "../firebase/firebase";
import * as firebase from "firebase";

export default class SigninInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }
  async componentDidMount() {
    console.log("I am in CompDidMount", this.props);
    // const { navigate } = this.props.navigation;
  }
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
            placeholder="Your password"
            value={this.state.password}
            style={styles.input}
          />
          {this.state.password.length === 6 ? (
            <Button
              title="Go to your profile"
              // onPress={() => this.props.navigation.navigate("ProfileScreen")
              onPress={() =>
                this.props.navigation.navigate("Post", {
                  name: this.state.email
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

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

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
