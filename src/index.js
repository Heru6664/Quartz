/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator, DrawerNavigator } from "react-navigation";

import About from "./screens/About";
import Cart from "./screens/Cart";
import Chat from "./screens/Chat";
import Contact from "./screens/Contact";
import ContactUs from "./screens/ContactUs";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import InfoApp from "./screens/InfoApp";
import NContact from "./screens/NContact";
import Post from "./screens/Post";
import Profile from "./screens/Profile";
import Setting from "./screens/Setting";

import SideBar from "./components/SideBar";

const Root = DrawerNavigator(
  {
    Home: Home,
    Dashboard: Dashboard,
    Chat: Chat,
    Cart: Cart,
    Post: Post,
    Contact: Contact,
    NContact: NContact,
    Profile: Profile,
    Setting: Setting,
    About: About
  },
  {
    initialRouteName: "Post",
    contentComponent: props => {
      const navigate = route => {
        return props.navigation.navigate(route);
      };

      return <SideBar handlePress={navigate} {...props} />;
    }
  }
);

export default class App extends Component {
  render() {
    return <Root />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
