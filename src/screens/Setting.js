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
  Card,
  CardItem
} from "native-base";
import { TouchableOpacity } from "react-native";

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
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem bordered>
              <TouchableOpacity>
                <CardItem style={{ marginVertical: -10 }}>
                  <Text>Copyright Information</Text>
                </CardItem>
              </TouchableOpacity>
            </CardItem>
            <CardItem bordered>
              <TouchableOpacity>
                <CardItem style={{ marginVertical: -10 }}>
                  <Text>Application Update</Text>
                </CardItem>
              </TouchableOpacity>
            </CardItem>
            <CardItem bordered>
              <TouchableOpacity>
                <CardItem style={{ marginVertical: -10 }}>
                  <Text>Share APP</Text>
                </CardItem>
              </TouchableOpacity>
            </CardItem>
            <CardItem bordered>
              <TouchableOpacity>
                <CardItem style={{ marginVertical: -10 }}>
                  <Text>Clear Cache</Text>
                </CardItem>
              </TouchableOpacity>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
