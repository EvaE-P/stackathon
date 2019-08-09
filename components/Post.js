import React from "react";
import { Text, View, Image, StyleSheet, TextInput } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FirebaseWrapper } from "../firebase/firebase";
export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentDidMount() {}
  async createPost() {
    try {
      console.log("ayoooo", this.state.content);
      // make call to Firebase
      await FirebaseWrapper.GetInstance().CreateNewDocument("posts", {
        content: this.state.content
      });
      // this.props.closeModal();
    } catch (err) {
      console.log("something wrong component post", err);
    }
  }
  render() {
    return (
      <View style={styles.postContainer}>
        <View>
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
            numberOfLines={4}
            onChangeText={content => this.setState({ content })}
            placeholder="add content"
            value={this.state.content}
            style={styles.input}
          />
          <Button
            title=""
            icon={{ name: "cloud-queue", size: 50 }}
            type="clear"
            onPress={() => this.createPost()}
          />
        </View>
      </View>
    );
  }
}

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
