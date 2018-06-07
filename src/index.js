/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Home from "./screens/Home";
import { createStackNavigator, DrawerNavigator } from "react-navigation";
import Dashboard from "./screens/Dashboard";
import Chat from "./screens/Chat";
import Post from "./screens/Post";
import Contact from "./screens/Contact";
import NContact from "./screens/NContact";
import Profile from "./screens/Profile";
import About from "./screens/About";
import Setting from "./screens/Setting";
import ContactUs from "./screens/ContactUs";
import InfoApp from "./screens/InfoApp";
import SideBar from "./components/SideBar";

const Root = DrawerNavigator(
  {
    Home: Home,
    Dashboard: Dashboard,
    Chat: Chat,
    Post: Post,
    Contact: Contact,
    NContact: NContact,
    Profile: Profile,
    Setting: Setting
  },
  {
    initialRouteName: "Profile",
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
