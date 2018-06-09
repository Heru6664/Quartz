import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  View,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import { StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";

class EmptyCart extends Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} type="Ionicons" name="ios-cart-outline" />
        <Text>Your cart is empty :(</Text>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>Buy something now!</Text>
        </Button>
      </View>
    );
  }
}

// class notEmpty extends Component {
//   render() {
//     return (
//       <View style={styles.iconContainer}>
//         <Icon style={styles.icon} type="Ionicons" name="ios-cart-outline" />
//         <Text>Your cart is empty :(</Text>
//       </View>
//     );
//   }
// }

class Cart extends Component {
  renderItem = item => (
    <TouchableOpacity>
      <Card>
        <CardItem>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: item.img }} />

              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.category}</Text>
              </Body>
            </Left>
            <Right />
          </CardItem>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
  goDashboard = () => {};
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Cart</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {/* <EmptyCart /> */}
          <FlatList
            data={this.props.product}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: "25%"
  },
  icon: {
    fontSize: 200,
    color: "rgba(0,0,0, 0.5)"
  },
  button: {
    marginTop: "5%",
    borderColor: "rgba(0,0,0, 0.5)",
    borderWidth: 2,
    backgroundColor: "#ffffff"
  },
  buttonText: {
    color: "#000"
  }
});

const mapStateToProps = state => ({
  product: state.content.cart
});

export default connect(mapStateToProps)(Cart);
