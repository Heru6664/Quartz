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
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import { StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Favorites extends Component {
  renderLiked = item => (
    <TouchableOpacity>
      <Card>
        <CardItem>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: item.img }} />

              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.category}</Text>
              </Body>
            </Left>
            <Right />
          </CardItem>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
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
            <Title>Favorites</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <FlatList
            data={this.props.liked}
            renderItem={({ item }) => this.renderLiked(item)}
          />
        </Content>
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
  }
});

const mapStateToProps = state => ({
  liked: state.content.liked
});

export default connect(mapStateToProps)(Favorites);
