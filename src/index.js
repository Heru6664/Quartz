/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";

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
import ProductDesc from "./screens/ProductDesc";
import Favorites from "./screens/Favorites";
import MyOrder from "./screens/MyOrder";
import MyReview from "./screens/MyReview";
import Wallet from "./screens/Wallet";
import Language from "./screens/Language";
import MyAdress from "./screens/MyAdress";
import CPassword from "./screens/CPassword";
import CEmail from "./screens/CEmail";
import Security from "./screens/Security";
import Help from "./screens/Help";
import CreditCard from "./screens/CreditCard";
import Feedback from "./screens/Feedback";

import SideBar from "./components/SideBar";

const navigation = createStackNavigator(
  {
    Dashboard: Dashboard,
    Home: Home,
    Chat: Chat,
    Cart: Cart,
    Post: Post,
    Contact: Contact,
    NContact: NContact,
    Profile: Profile,
    Setting: Setting,
    About: About,
    ProductDesc: ProductDesc,
    Favorites: Favorites,
    MyOrder: MyOrder,
    MyReview: MyReview,
    Wallet: Wallet,
    CreditCard: CreditCard,
    Language: Language,
    MyAdress: MyAdress,
    CEmail: CEmail,
    CPassword: CPassword,
    Security: Security,
    Feedback: Feedback,
    Help: Help
  },
  {
    headerMode: "none",
    initialRouteName: "Dashboard"
  }
);
const Root = createDrawerNavigator(
  {
    navigation: navigation
  },
  {
    contentComponent: props => {
      const navigate = route => {
        props.navigation.navigate(route);
        props.navigation.dispatch(DrawerActions.closeDrawer());
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
