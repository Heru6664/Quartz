import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import {
  Container,
  Content,
  Button,
  Header,
  Footer,
  FooterTab,
  Icon,
  Title
} from "native-base";
import { createStackNavigator } from "react-navigation";
import Home from "./Home";

export class Dashboard extends Component {
  handleChat = () => {
    this.props.navigation.navigate("Chat");
  };
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Title>Quartz PE</Title>
        </Header>
        <Content>
          <Text>Wellcome Bogeng!</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text style={styles.footerContent}>Home</Text>
            </Button>
            <Button onPress={this.handleChat} vertical>
              <Icon name="chatbubbles" />
              <Text style={styles.footerContent}>Chat</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text style={styles.footerContent}>Post</Text>
            </Button>
            <Button vertical>
              <Icon name="notifications" />
              <Text style={styles.footerContent}>Notifications</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text style={styles.footerContent}>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footerContent: {
    color: "#ffffff"
  },
  header: {
    alignItems: "center",
    backgroundColor: "#34495e"
  }
});
