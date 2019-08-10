import React from "react";
import { Text, View, Image, StyleSheet, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import { FirebaseWrapper } from "../firebase/firebase";
import * as firebase from "firebase";
import Display from "./Display";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      name: "",
      posts: []
    };
  }
  async componentDidMount() {
    await FirebaseWrapper.GetInstance().SetupCollectionListener(
      "posts",
      posts => {
        this.setState({ posts });
      }
    );
  }
  async createPost() {
    try {
      console.log("ayoooo", this.state.content);
      // make call to Firebase
      await FirebaseWrapper.GetInstance().CreateNewDocument("posts", {
        content: this.state.content,
        name: this.state.name
      });
      return this.setState({ content: "", name: "" });
    } catch (err) {
      console.log("something wrong component post", err);
    }
  }
  async findUser() {
    try {
      const user = await firebase.auth().currentUser;
      let name, email, id;

      if (user != null) {
        console.log("this is my user", user);
        name = user.firstName;
        email = user.email;
        // photoUrl = user.photoURL;
        // emailVerified = user.emailVerified;
        id = user.id; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
      }
    } catch (err) {
      console.log("finding User did not work");
    }
  }

  render() {
    return (
      <View style={styles.postContainer}>
        <View>
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>
          <Text>{"    "}</Text>

          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("./../assets/images/profile.png")}
          />
          <View style={styles.dateUserContainer}>
            <Text style={styles.username}>
              Hello {this.props.navigation.state.params.name}
            </Text>
            <Text style={styles.postText}>
              This is your place
              {"   "}
              <Image
                style={{ width: 30, height: 30, borderRadius: 10 }}
                source={require("./../assets/images/party.png")}
              />
            </Text>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={2}
            onChangeText={name => this.setState({ name })}
            placeholder="name"
            value={this.state.name}
            style={styles.input}
          />
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={content => this.setState({ content })}
            placeholder="add content"
            value={this.state.content}
            style={styles.input}
          />
          <ScrollView>
            {this.state.posts &&
              this.state.posts.map((post, i) => (
                <Display postInfo={post} key={post.id} />
              ))}
          </ScrollView>
          <Button
            title=""
            icon={{ name: "cloud-queue", size: 50 }}
            type="clear"
            onPress={() => this.createPost()}
          />
        </View>
        <Button
          title=""
          icon={{ name: "room", size: 50 }}
          type="clear"
          onPress={() => this.props.navigation.navigate("SignOut")}
        />
      </View>
    );
  }
}
Post.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    padding: 10,
    borderBottomColor: "#dadada",
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  username: {
    fontSize: 18,
    fontWeight: "bold"
  },
  dateUserContainer: {
    marginLeft: 3
  },
  postText: {
    padding: 5,
    fontSize: 15
  }
});
