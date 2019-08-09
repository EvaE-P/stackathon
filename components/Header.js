// import React, { Component } from "react";
// import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { CreatePost } from "./SignUp";
// import { SignIn } from "./SignIn";

// export class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isModalVisible: false,
//       isModalVisible2: false,
//       text: ""
//     };
//   }

//   closeModal() {
//     this.setState({ isModalVisible: !this.state.isModalVisible });
//   }
//   closeModalTwo() {
//     this.setState({ isModalVisible2: !this.state.isModalVisible2 });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//           <TouchableOpacity
//             onPress={() => this.setState({ isModalVisible: true })}
//             style={styles.buttonContainer}
//           >
//             <Image
//               style={styles.button}
//               source={require("./../assets/images/signIn.png")}
//             />
//           </TouchableOpacity>

//           <SignIn
//             isModalVisible={this.state.isModalVisible}
//             closeModal={() => this.closeModal()}
//           />
//         </View>
//         <Text style={styles.text}>{this.props.text}</Text>
//         <View>
//           <TouchableOpacity
//             onPress={() => this.setState({ isModalVisible2: true })}
//             style={styles.buttonContainer}
//           >
//             <Image
//               style={styles.button}
//               source={require("./../assets/images/sign-up-icon-3.png")}
//             />
//           </TouchableOpacity>

//           <CreatePost
//             isModalVisible2={this.state.isModalVisible2}
//             closeModal2={() => this.closeModalTwo()}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 50,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingLeft: 30,
//     borderBottomWidth: 1,
//     borderBottomColor: "#dadada"
//   },
//   text: {
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: "bold",
//     flex: 1
//   },
//   button: {
//     width: 30,
//     height: 30,
//     resizeMode: "contain"
//   },
//   buttonContainer: {
//     paddingRight: 5
//   }
// });
