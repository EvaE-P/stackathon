import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
//import my screennavigator
import { ProfileScreen } from "../components/Profile";
import CreatePostScreen from "../components/SignUp";
import SigninInScreen from "../screens/SigninInScreen";
import Post from "../components/Post";
import MainTabNavigator from "./MainTabNavigator";
// import ScreenSwitchNav from "./ScreenNavigator";

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator
    // Screens: ScreenSwitchNav

    ProfileScreen: { screen: ProfileScreen },
    CreatePostScreen: { screen: CreatePostScreen },
    Post: { screen: Post },
    SigninInScreen: { screen: SigninInScreen }
  })
);
