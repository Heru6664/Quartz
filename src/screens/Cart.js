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
  Thumbnail,
  H2,
  FooterTab,
  Footer
} from "native-base";
import { StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";
import {
  INC_TOTAL,
  incTotal,
  decTotal,
  getDetail
} from "../action/contentDashboard";

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
  constructor(props) {
    super(props);
    this.state = {
      total: 1
    };
  }

  increaseTotal = product => {
    this.props.dispatch(incTotal(product));
  };
  decreaseTotal = decProduct => {
    this.props.dispatch(decTotal(decProduct));
  };
  showDetail = detail => {
    this.props.dispatch(getDetail(detail));
    this.props.navigation.navigate("ProductDesc");
  };
  calculateTotalVal = () => {
    let val = 0;
    this.props.product.forEach(prev => {
      val += prev.price;
    });
    console.log(val);
    return val;
  };

  renderItem = item => (
    <Card>
      <TouchableOpacity onPress={() => this.showDetail(item)}>
        <CardItem>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: item.img }} />
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.category}</Text>
              </Body>
            </Left>
            <Right>
              <H2>IDR {item.price}</H2>
            </Right>
          </CardItem>
        </CardItem>
      </TouchableOpacity>
      <CardItem>
        <Button onPress={() => this.decreaseTotal(item)} transparent>
          <Icon type="Entypo" name="minus" />
        </Button>
        <Text>{item.total}</Text>
        <Button onPress={() => this.increaseTotal(item)} transparent>
          <Icon name="add" />
        </Button>
        <Right>
          <Button transparent>
            <Text>Delete</Text>
            <Icon name="trash" />
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
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
        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTabContainer}>
            <View style={styles.vw}>
              <CardItem>
                <Text>Total Amount:</Text>
                <Body />
                <Right>
                  <Text style={styles.amount}>{this.calculateTotalVal()}</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Text>Total Discount:</Text>
                <Body />
                <Right>
                  <Text style={styles.amount}>0</Text>
                </Right>
              </CardItem>
            </View>
            <Right>
              <Button danger bordered>
                <Text>Next</Text>
              </Button>
            </Right>
          </FooterTab>
        </Footer>
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
  },
  footerTabContainer: {
    padding: 10,
    flexDirection: "row"
  },
  footer: {
    height: 100,
    backgroundColor: "white"
  },
  vw: {
    width: 280
  },
  amount: {
    textAlign: "right"
  }
});

const mapStateToProps = state => ({
  product: state.content.cart
});

export default connect(mapStateToProps)(Cart);
