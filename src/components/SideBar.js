import React, { Component } from "react";
import { Container, Content, List, ListItem, Text } from "native-base";
import { Image } from "react-native";
import { DrawerNavigator } from "react-navigation";

const routes = [
  { name: "Dashboard", route: "Dashboard" },
  { name: "Profile", route: "Profile" },
  { name: "About", route: "About" },
  { name: "Contact Us", route: "ContactUs" },
  { name: "Setting", route: "Setting" }
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
              <Text>{data.name}</Text>
            </ListItem>
          );
        }}
      />
    </Content>
  </Container>
);
