import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Container,
  Content,
  Button,
  Header,
  Footer,
  FooterTab,
  Icon
} from "native-base";
import { createStackNavigator } from "react-navigation";
import Home from "./Home";

export class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Wellcome Bogeng!</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="chat" />
              <Text>Chat</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text>Home</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Dashboard;
