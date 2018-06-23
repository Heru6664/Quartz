import React, { Component } from "react";
import { Container, Content, Image, CardItem } from "native-base";
import { Card, Button, Icon, ListItem, Text } from "react-native-elements";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";

export default ({ item, pressProduct }) => (
  <TouchableOpacity onPress={() => pressProduct(item)} style={styles.th}>
    <Card title={item.name} image={{ uri: item.img }}>
      <CardItem style={styles.itemContainer}>
        <Text>$ {item.price}</Text>
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
