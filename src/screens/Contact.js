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
import { StyleSheet, FlatList } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { connect } from "react-redux";
import { DelCont } from "../action/actionContact";
import { ListItem } from "react-native-elements";

const mapStateToProps = state => ({
  infoContact: state.infoContact.infoContact
});

class Contact extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  handleNContact = () => {
    this._menu.hide();
    this.props.navigation.navigate("NContact");
  };

  listContact = contact => {
    const handleDelCont = () => {
      this.props.dispatch(
        DelCont({
          id: contact.id
        })
      );
    };
    return (
      <View>
        <ListItem title={contact.infoName} subtitle={contact.infoPhone}>
          <Button onPress={this.handleDelCont}>
            <Text>DEL</Text>
          </Button>
        </ListItem>
      </View>
    );
    console.log(contact);
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
            <Title>Contact</Title>
          </Body>
          <Right>
            <Menu
              ref={this.setMenuRef}
              button={
                <Icon
                  onPress={this.showMenu}
                  name="contact"
                  style={{ color: "#ffffff" }}
                />
              }
              style={{ width: 200 }}
            >
              <MenuItem onPress={this.handleNContact}>Add New Contact</MenuItem>
              <MenuItem onPress={this.hideMenu}>Settings</MenuItem>
              <MenuItem onPress={this.hideMenu} disabled>
                Refresh
              </MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.hideMenu}>Help</MenuItem>
            </Menu>
          </Right>
        </Header>
        <Content>
          <FlatList
            data={this.props.infoContact}
            renderItem={({ item }) => this.listContact(item)}
          />
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Contact);
