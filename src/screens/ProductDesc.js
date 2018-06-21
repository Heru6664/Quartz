import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Text,
  Card,
  CardItem,
  Header,
  Body,
  Right,
  Icon,
  Left,
  View,
  Title,
  Footer,
  FooterTab
  // Image
} from "native-base";
import HeaderProfile from "../components/HeaderProfile";
// import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import CardProfile from "../components/CardProfile";
import { addCart, addFav } from "../action/contentDashboard";

class Profile extends Component {
  state = {
    like: false
  };
  addFav = detail => {
    this.setState({ like: !this.state.like });
    this.props.dispatch(addFav(detail));
  };
  openCart = () => {
    this.props.navigation.navigate("Cart");
  };
  addCart = detail => {
    this.props.dispatch(addCart(detail));
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Product Detail</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          {/* Content product */}
          <Card>
            <CardItem style={styles.headerProduct}>
              <Body>
                <Text>{this.props.detail.name}</Text>
              </Body>
            </CardItem>
            <CardItem style={styles.containerImg} cardBody>
              <Image
                resizeMode="contain"
                source={{ uri: this.props.detail.img }}
                style={styles.imageCard}
              />
            </CardItem>
            <CardItem>
              <Text>{this.props.detail.name}</Text>
            </CardItem>
            <CardItem>
              <Text>The Planet</Text>
            </CardItem>
            <CardItem>
              <Text>{this.props.detail.price}</Text>
            </CardItem>
          </Card>
          {/* description */}
          <Card>
            <CardItem>
              <Text>Description:</Text>
            </CardItem>
            <CardItem>
              <Text>{this.props.detail.description}</Text>
            </CardItem>
            <CardItem>
              <Button transparent>
                <Text> Show More</Text>
              </Button>
            </CardItem>
          </Card>
          {/*  */}
          <Card>
            <CardItem header bordered>
              <Text>Seller</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Frankenstein</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Rating</Text>
              </Left>
              <Body>
                <Text>Rating</Text>
              </Body>
              <Right>
                <Text>Rating</Text>
              </Right>
            </CardItem>
            <CardItem bordered>
              <Text>view seller</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Left>
                <Text>Customer Review</Text>
              </Left>
              <Body />
              <Right>
                <Button transparent>
                  <Icon type="Entypo" name="chevron-thin-right" />
                </Button>
              </Right>
            </CardItem>
            <CardItem header>
              <Text>Costumer </Text>
            </CardItem>
            <CardItem bordered>
              <Text>Comment</Text>
            </CardItem>
            <CardItem header>
              <Text>Costumer </Text>
            </CardItem>
            <CardItem bordered>
              <Text>Comment</Text>
            </CardItem>
            <CardItem header>
              <Text>Costumer </Text>
            </CardItem>
            <CardItem bordered>
              <Text>Comment</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Left>
                <Text>Product Q & A</Text>
              </Left>
              <Body />
              <Right>
                <Button transparent>
                  <Icon type="Entypo" name="chevron-thin-right" />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <View style={styles.leftIcon}>
              <Button
                onPress={() => this.addFav(this.props.detail)}
                transparent
              >
                <Icon
                  active={this.props.detail.like}
                  style={styles.ion}
                  name="heart"
                />
              </Button>
            </View>
            <View style={styles.leftIcon}>
              <Button onPress={() => this.openCart()} transparent>
                <Icon style={styles.ion} name="cart" />
              </Button>
            </View>
            <Button
              onPress={() => this.addCart(this.props.detail)}
              style={styles.leftTab}
              transparent
            >
              <Text style={styles.text}>Add to cart</Text>
            </Button>
            <Button style={styles.rightTab} transparent>
              <Text style={styles.text}>Buy Now</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0, 0.2)"
  },
  content: {
    padding: 10,
    marginBottom: 18
  },
  imageCard: {
    flex: 1,
    width: null,
    height: 200
  },
  headerProduct: {
    marginVertical: 10
  },
  containerImg: {
    padding: 10
  },
  leftIcon: {
    width: 55,
    justifyContent: "center",
    alignItems: "center"
  },
  leftTab: {
    backgroundColor: "#f39c12"
  },
  rightTab: {
    backgroundColor: "#e74c3c"
  },
  text: {
    color: "#ffffff"
  },
  ion: {
    color: "#2c3e50"
  }
});

const mapStateToProps = state => ({
  detail: state.content.detailProduct
});

export default connect(mapStateToProps)(Profile);
