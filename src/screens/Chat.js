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
  Right,
  Fab
} from "native-base";

export class Chat extends Component {
  constructor() {
    super();
    state = () => {
      active: "true";
    };
  }
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
        <Content>
          <Fab
            active={() => this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067ff" }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <Icon name="ios-home" />
            <Button style={{ backgroundColor: "#3b5998" }}>
              <Icon name="message" />
            </Button>
            <Button style={{ backgroundColor: "#3b5998" }}>
              <Icon name="message" />
            </Button>
            <Button style={{ backgroundColor: "#3b5998" }}>
              <Icon name="message" />
            </Button>
          </Fab>
        </Content>
      </Container>
    );
  }
}

export default Chat;
