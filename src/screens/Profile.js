import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Text,
  Card,
  CardItem,
  Header,
  Body,
  Right,
  Icon,
  Left,
  View,
  Title
} from "native-base";
import HeaderProfile from "../components/HeaderProfile";
// import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import CardProfile from "../components/CardProfile";

export default class Profile extends Component {
  navigate = route => {
    this.props.navigation.navigate(route);
  };
  render() {
    return (
      <Container style={{ backgroundColor: "rgba(0,0,0, 0.2)" }}>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="MaterialIcons" name="edit" />
            </Button>
          </Right>
        </Header>
        <Content>
          <HeaderProfile />
          <CardProfile navigator={this.navigate} />
        </Content>
      </Container>
    );
  }
}
