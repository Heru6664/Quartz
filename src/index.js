/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Root from "./route/Root";
import Auth from "./route/Auth";
import { connect } from "react-redux";

class App extends Component {
  logoutFunc = () => {
    this.props.logout();
  };

  render() {
    console.log(this.props.login);
    if (this.props.login) {
      return <Root logoutFunc={this.logoutFunc} />;
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
