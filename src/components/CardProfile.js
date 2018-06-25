import {
  View,
  Icon,
  Card,
  CardItem,
  Text,
  Button,
  Badge,
  Right,
  Body
} from "native-base";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

class CardProfile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    routes1: [
      {
        type: "Ionicons",
        icon: "chatbubbles",
        name: "Inbox",
        route: "Chat",
        badge: 1
      },
      {
        type: "Ionicons",
        icon: "basket",
        name: "My Order",
        route: "MyOrder",
        badge: 1
      },
      {
        type: "Ionicons",
        icon: "heart",
        name: "Favorites",
        route: "Favorites",
        badge: 1
      },
      {
        type: "Entypo",
        icon: "wallet",
        name: "Wallet",
        route: "Wallet",
        badge: 1
      },
      {
        type: "Entypo",
        icon: "credit-card",
        name: "Credit Card",
        route: "CreditCard",
        badge: 1
      },
      {
        type: "Ionicons",
        icon: "star",
        name: "My Review",
        route: "MyReview",
        badge: 1
      },
      { type: "Ionicons", icon: "cart", name: "Cart", route: "Cart", badge: 1 }
    ],
    routes2: [
      {
        type: "Entypo",
        icon: "globe",
        name: "Language",
        route: "Language",
        badge: 1
      },
      {
        type: "EvilIcons",
        icon: "location",
        name: "My Adress",
        route: "MyAdress",
        badge: 1
      },
      {
        type: "Ionicons",
        icon: "ios-mail-outline",
        name: "Change Email",
        route: "CEmail",
        badge: 1
      },
      {
        type: "SimpleLineIcons",
        icon: "lock",
        name: "Change Password",
        route: "CPassword",
        badge: 1
      },
      {
        type: "MaterialIcons",
        icon: "security",
        name: "Security Center",
        route: "Security",
        badge: 1
      }
    ],
    routes3: [
      {
        type: "Ionicons",
        icon: "settings",
        name: "Setting",
        route: "Setting",
        badge: 1
      },
      {
        type: "MaterialIcons",
        icon: "feedback",
        name: "Feedback",
        route: "Feedback",
        badge: 1
      },
      {
        type: "Ionicons",
        icon: "ios-help-circle-outline",
        name: "Help",
        route: "Help",
        badge: 1
      }
    ]
  };
  renderItem = item => (
    <TouchableOpacity onPress={() => this.props.navigator(item.route)}>
      <CardItem bordered>
        <CardItem style={{ marginVertical: -10 }}>
          <Icon type={item.type} name={item.icon} />
          <Text>{item.name}</Text>
          <Body />
          <Right />
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

const mapStateToProps = state => ({
  favorites: state.content.liked
});

export default connect(mapStateToProps)(CardProfile);
