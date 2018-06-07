import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  View
} from "native-base";
import { StyleSheet } from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              onPress={() => this.props.navigation.navigate("Dashboard")}
              transparent
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Cart</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.iconContainer}>
            <Icon style={styles.icon} type="Ionicons" name="ios-cart-outline" />
            <Text>Your cart is empty :(</Text>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Dashboard")}
            >
              <Text style={styles.buttonText}>Buy something now!</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: "25%"
  },
  icon: {
    fontSize: 200,
    color: "rgba(0,0,0, 0.5)"
  },
  button: {
    marginTop: "5%",
    borderColor: "rgba(0,0,0, 0.5)",
    borderWidth: 2,
    backgroundColor: "#ffffff"
  },
  buttonText: {
    color: "#000"
  }
});
