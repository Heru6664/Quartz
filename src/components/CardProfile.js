import { View, Icon, Card, CardItem, Text, Button } from "native-base";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default () => (
  <View>
    <Card>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="chatbubbles" />
            <Text>Inbox</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="basket" />
            <Text>My Order</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="heart" />
            <Text>Favorites</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Entypo" name="wallet" />
            <Text>wallet</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Entypo" name="credit-card" />
            <Text>Credit Card</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="star" />
            <Text>My Review</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="cart" />
            <Text>Cart</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
    </Card>
    <Card>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Entypo" name="globe" />
            <Text>Language</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="EvilIcons" name="location" />
            <Text>My Adress</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Ionicons" name="ios-mail-outline" />
            <Text>Change Email</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="SimpleLineIcons" name="lock" />
            <Text>Change Password</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="MaterialIcons" name="security" />
            <Text>Security Center</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
    </Card>
    <Card>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon name="settings" />
            <Text>Setting</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="MaterialIcons" name="feedback" />
            <Text>Feedback</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
      <CardItem bordered>
        <TouchableOpacity>
          <CardItem style={{ marginVertical: -10 }}>
            <Icon type="Ionicons" name="ios-help-circle-outline" />
            <Text>Help</Text>
          </CardItem>
        </TouchableOpacity>
      </CardItem>
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
