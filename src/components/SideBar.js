import React, { Component } from "react";
import { Container, Content, List, ListItem, Text, Icon } from "native-base";
import { Image, StyleSheet } from "react-native";
import { DrawerNavigator } from "react-navigation";

const routes = [
  { icon: "home", name: "Dashboard", route: "Dashboard" },
  { icon: "account-circle", name: "Profile", route: "Profile" },
  { icon: "help", name: "About", route: "About" },
  { icon: "comment", name: "Contact Us", route: "ContactUs" },
  { icon: "settings", name: "Setting", route: "Setting" }
];

export default ({ handlePress }) => (
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
            <ListItem button onPress={() => handlePress(data.route)}>
              <Icon
                style={styles.content}
                type="MaterialIcons"
                name={data.icon}
              />
              <Text style={styles.content}>{data.name}</Text>
            </ListItem>
          );
        }}
      />
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  content: {
    color: "rgba(0,0,0, 0.5)"
  }
});
