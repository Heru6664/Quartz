import React, { Component } from "react";
import { Container, Content } from "native-base";
import { Icon } from "react-native-elements";

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Icon name="account" />
        </Content>
      </Container>
    );
  }
}
