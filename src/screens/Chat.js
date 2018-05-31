import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Container,
  Content,
  Header,
  Title,
  Left,
  Button,
  Icon,
  Body,
  Right
} from "native-base";

export class Chat extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Chat</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content />
      </Container>
    );
  }
}

export default Chat;
