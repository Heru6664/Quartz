/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Root from "./route/Root";
import Home from "./screens/Home";
import Auth from "./route/Auth";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props.login);
    if (this.props.login) {
      return <Root />;
    } else {
      return <Auth />;
    }
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

const mapStateToProps = state => ({
  login: state.auth.isLogin
});

export default connect(mapStateToProps)(App);
