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
import { connect } from "react-redux";

export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      active: "false"
    };
  }
  componentDidMount() {
    console.log(this.props.todo);
  }
  handlePressContact = () => {
    this.props.navigation.navigate("Contact");
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
            <Title>Chat</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content />
        <Fab
          active={!this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="add" />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="chatbubbles" />
          </Button>
          <Button
            onPress={this.handlePressContact}
            style={{ backgroundColor: "#3B5998" }}
          >
            <Icon name="contacts" />
          </Button>
        </Fab>
      </Container>
    );
  }
}

export default connect(state => {
  return { todo: state.todo.todo };
})(Chat);
