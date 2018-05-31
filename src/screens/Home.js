import React, { Component } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import {
  View,
  Container,
  Header,
  Content,
  Item,
  Input,
  Title,
  Left,
  Button,
  Toast
} from "native-base";

export default class Home extends Component {
  state = {
    username: "",
    password: ""
  };

  _handleLogin = () => {
    if (this.state.username === "heru" && this.state.password === "heruheru") {
      this.props.navigation.navigate("Dashboard");
    }
    if (this.state.username === "" && this.state.password === "") {
      Alert.alert("Please enter username and password");
    } else {
      Alert.alert("Wrong username or password!");
    }
  };
  render() {
    return (
      <Container>
        <Header style={styles.header} span>
          <Title> Quartz PE </Title>
        </Header>
        <Content style={styles.content}>
          <Item style={styles.item} rounded>
            <Input
              placeholder="Username"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item style={styles.item} rounded>
            <Input
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </Item>

          <Button style={styles.button} onPress={this._handleLogin} rounded>
            <Text style={styles.text}>LOGIN</Text>
          </Button>
          <Button style={styles.button2} bordered>
            <Text style={styles.text2}>REGISTER</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#34495e"
  },
  content: {
    flex: 1,
    paddingVertical: "20%",
    paddingHorizontal: "5%"
  },
  item: {
    marginVertical: "2%"
  },
  button: {
    width: "100%",
    backgroundColor: "#34495ecc"
  },
  button2: {
    width: "50%",
    alignItems: "center",
    marginVertical: "2%",
    borderRadius: 100,
    borderColor: "#34495e"
  },
  text: {
    color: "#ffffff",
    width: "100%",
    textAlign: "center"
  },
  text2: {
    color: "#34495e",
    width: "100%",
    textAlign: "center"
  }
});