import React from "react";
import { CardItem, Icon } from "native-base";
import { Card, Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity } from "react-native";

export default ({ item, pressProduct }) => (
  <TouchableOpacity onPress={() => pressProduct(item)} style={styles.th}>
    <Card title={item.name} image={{ uri: item.img }}>
      <CardItem style={styles.itemContainer}>
        <Text>$ {item.price}</Text>
      </CardItem>
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
