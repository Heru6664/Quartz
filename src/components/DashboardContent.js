import React, { Component } from "react";
import { Container, Content, Image, CardItem } from "native-base";
import { Card, Button, Icon, ListItem, Text } from "react-native-elements";
import GridView from "react-native-super-grid";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

export default ({ item }) => (
  <TouchableOpacity style={styles.th}>
    <Card image={{ uri: item.img }}>
      <CardItem style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </CardItem>
      <CardItem />
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column"
  },
  th: {
    width: "50%"
  }
});
