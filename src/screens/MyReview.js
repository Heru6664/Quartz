import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  H1,
  H2,
  H3,
  Footer,
  View
} from "native-base";
import { StyleSheet, Image } from "react-native";

export default class MyReview extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>My Review</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content} />
        <Footer style={styles.footerContainer}>
          <Text style={styles.footer}>Copyright 2018</Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 30
  },
  text: {
    marginVertical: 22,
    paddingBottom: 22,
    fontSize: 13,
    color: "rgba(0,0,0, 0.5)"
  },
  footer: {
    marginVertical: 12,
    fontSize: 13,
    color: "rgba(0,0,0, 0.5)"
  }
});
