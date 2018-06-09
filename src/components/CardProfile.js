import { View, Icon, Card, CardItem, Text, Button } from "native-base";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default ({ favorite }) => (
  <View>
    <Card>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="chatbubbles" />
            <Text>Inbox</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="basket" />
            <Text>My Order</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => favorite()}>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="heart" />
            <Text>Favorites</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Entypo" name="wallet" />
            <Text>wallet</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Entypo" name="credit-card" />
            <Text>Credit Card</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="star" />
            <Text>My Review</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="cart" />
            <Text>Cart</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
    </Card>
    <Card>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Entypo" name="globe" />
            <Text>Language</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="EvilIcons" name="location" />
            <Text>My Adress</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Ionicons" name="ios-mail-outline" />
            <Text>Change Email</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="SimpleLineIcons" name="lock" />
            <Text>Change Password</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="MaterialIcons" name="security" />
            <Text>Security Center</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
    </Card>
    <Card>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="settings" />
            <Text>Setting</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="MaterialIcons" name="feedback" />
            <Text>Feedback</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem bordered>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Ionicons" name="ios-help-circle-outline" />
            <Text>Help</Text>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
