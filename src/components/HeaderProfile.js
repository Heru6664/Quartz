import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default class HeaderProfile extends Component {
  render() {
    return (
      //   <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.headerBackground}
        source={require("../img/mars.jpg")}
      >
        <View style={styles.header}>
          <View style={styles.avatarWrap}>
            <Image style={styles.avatar} source={require("../img/H.png")} />
          </View>
          <Text style={styles.name}>Heru Julyanto</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0, 0.5)"
  },
  avatarWrap: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "rgba(0,0,0, 0.4)",
    borderWidth: 16
  },
  avatar: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 60,
    borderColor: "#fff",
    borderWidth: 2
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  }
});
