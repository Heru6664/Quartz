/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Home from "./screens/Home";
import { createStackNavigator } from "react-navigation";
import Dashboard from "./screens/Dashboard";
import Chat from "./screens/Chat";
import Post from "./screens/Post";
import Contact from "./screens/Contact";
import NContact from "./screens/NContact";

const Root = createStackNavigator(
  {
    Home: Home,
    Dashboard: Dashboard,
    Chat: Chat,
    Post: Post,
    Contact: Contact,
    NContact: NContact
  },
  {
    headerMode: "none",
    initialRouteName: "Contact"
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
