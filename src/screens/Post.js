import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
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
import { connect } from "react-redux";
import TodoInput from "../components/todoInput";
import { delTodo } from "../action/actionTodo";

class Post extends Component {
  constructor() {
    super();
    state = () => {
      active: "true";
    };
  }
  componentDidMount() {
    console.log(this.props.todo);
  }
  listItem = item => {
    const handleDel = () => {
      this.props.dispatch(
        delTodo({
          id: item.id
        })
      );
    };
    return (
      <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
        <Text
          style={{
            borderBottomWidth: 1,
            width: "80%",
            marginVertical: 12,
            marginTop: 20
          }}
        >
          {item.message}
        </Text>
        <Button onPress={handleDel} style={{ width: 100 }}>
          <Text>Del</Text>
        </Button>
      </View>
    );
  };
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
            <Title>Post</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <TodoInput />
          <FlatList
            data={this.props.todo}
            renderItem={({ item }) => this.listItem(item)}
          />
        </Content>
      </Container>
    );
  }
}

export default connect(state => {
  return {
    todo: state.todo.todo
  };
})(Post);
