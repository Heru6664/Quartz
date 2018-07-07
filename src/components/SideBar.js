import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Button,
  Footer
} from "native-base";
import { Image, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { logout } from "../action/contentDashboard";

const routes = [
  { icon: "home", name: "Dashboard", route: "Dashboard" },
  { icon: "account-circle", name: "Profile", route: "Profile" },
  { icon: "help", name: "About", route: "About" },
  { icon: "comment", name: "Contact Us", route: "ContactUs" },
  { icon: "settings", name: "Setting", route: "Setting" }
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handlePress } = this.props;
    return (
      <Container>
        <Content>
          <Image
            source={require("../img/quartz-logo.png")}
            style={{
              width: "100%",
              height: 180,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          />
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <View>
                  <ListItem button onPress={() => handlePress(data.route)}>
                    <Icon
                      style={styles.content}
                      type="MaterialIcons"
                      name={data.icon}
                    />
                    <Text style={styles.content}>{data.name}</Text>
                  </ListItem>
                </View>
              );
            }}
          />
        </Content>
        <Footer>
          <Button
            style={styles.footerContainer}
            onPress={() => this.props.logout()}
            rounded
            bordered
            dark
          >
            <Text style={styles.logoutText}>Logout</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    color: "rgba(0,0,0, 0.5)"
  },
  footerContainer: {
    marginVertical: "2%"
  },
  logoutText: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
