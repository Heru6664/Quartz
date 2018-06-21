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
  View,
  CardItem
} from "native-base";
import { StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

export default class Wallet extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header span>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Quartz Wallet</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Card>
            <CardItem header>
              <Body />
              <Right>
                <Button transparent>
                  <Text>Add</Text>
                  <Icon name="add" />
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Your Balance</Text>
              </Left>
              <Right>
                <Text>IDR 0</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Text>Active until</Text>
            </CardItem>
            <CardItem>
              <Text>Expired</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 10
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
  },
  btnAdd: {
    width: "100%"
  }
});
