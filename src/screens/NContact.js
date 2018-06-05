import {
  Container,
  Content,
  Text,
  Button,
  Input,
  Icon,
  Header,
  Title,
  Left,
  Body,
  Right,
  View
} from "native-base";
import React, { Component } from "react";
import { StyleSheet, Alert } from "react-native";
import DataContactIn from "../components/DataContactIn";
import { AddCont } from "../action/actionContact";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  infoContact: state.infoContact.infoContact
});

class NContact extends Component {
  state = {
    currentName: "",
    currentPhone: ""
  };
  handleSave(save) {
    if (this.state.currentName === "" && this.state.currentPhone === "") {
      Alert.alert("please enter name and number");
    } else {
      this.props.dispatch(
        AddCont({
          name: this.state.currentName,
          phone: this.state.currentPhone
        })
      );
      this.props.navigation.navigate("Contact");
    }
  }
  handleName = name => {
    this.setState({
      currentName: name
    });
  };
  handlePhone = phone => {
    this.setState({
      currentPhone: phone
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="close" />
            </Button>
          </Left>
          <Body>
            <Title>Add New Contact</Title>
          </Body>
          <Right>
            <Button onPress={save => this.handleSave(save)} transparent>
              <Icon name="checkmark" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 15
            }}
          >
            <Icon name="contact" style={{ fontSize: 100, opacity: 0.5 }} />
          </View>
          <DataContactIn
            handleName={this.handleName}
            handlePhone={this.handlePhone}
            currentName={this.state.currentName}
            currentPhone={this.state.currentPhone}
          />
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(NContact);
