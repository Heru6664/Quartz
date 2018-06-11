import { View, Icon, Card, CardItem, Text, Button } from "native-base";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, FlatList } from "react-native";

export default class CardProfile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    routes1: [
      { type: "Ionicons", icon: "chatbubbles", name: "Inbox", route: "Chat" },
      { type: "Ionicons", icon: "basket", name: "My Order", route: "MyOrder" },
      {
        type: "Ionicons",
        icon: "heart",
        name: "Favorites",
        route: "Favorites"
      },
      { type: "Entypo", icon: "wallet", name: "Wallet", route: "Wallet" },
      {
        type: "Entypo",
        icon: "credit-card",
        name: "Credit Card",
        route: "CreditCard"
      },
      { type: "Ionicons", icon: "star", name: "My Review", route: "MyReview" },
      { type: "Ionicons", icon: "cart", name: "Cart", route: "Cart" }
    ],
    routes2: [
      { type: "Entypo", icon: "globe", name: "Language", route: "Language" },
      {
        type: "EvilIcons",
        icon: "location",
        name: "My Adress",
        route: "MyAdress"
      },
      {
        type: "Ionicons",
        icon: "ios-mail-outline",
        name: "Change Email",
        route: "CEmail"
      },
      {
        type: "SimpleLineIcons",
        icon: "lock",
        name: "Change Password",
        route: "CPassword"
      },
      {
        type: "MaterialIcons",
        icon: "security",
        name: "Security Center",
        route: "Security"
      }
    ],
    routes3: [
      { type: "Ionicons", icon: "settings", name: "Setting", route: "Setting" },
      {
        type: "MaterialIcons",
        icon: "feedback",
        name: "Feedback",
        route: "Feedback"
      },
      {
        type: "Ionicons",
        icon: "ios-help-circle-outline",
        name: "Help",
        route: "Help"
      }
    ]
  };
  renderItem = item => (
    <TouchableOpacity onPress={() => this.props.navigator(item.route)}>
      <CardItem bordered>
        <CardItem style={{ marginVertical: -10 }}>
          <Icon type={item.type} name={item.icon} />
          <Text>{item.name}</Text>
        </CardItem>
      </CardItem>
    </TouchableOpacity>
  );
  render() {
    return (
      <View>
        <Card>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.routes1}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </Card>
        <Card>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.routes2}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </Card>
        <Card>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.routes3}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </Card>
        <Card>
          <CardItem>
            <Button style={styles.button} bordered dark>
              <Text>LOG OUT</Text>
            </Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
