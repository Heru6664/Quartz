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
  FooterTab,
  Thumbnail,
  H2,
  Badge
  // Image
} from "native-base";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import StarRating from "react-native-star-rating";

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
              <StarRating
                disabled={true}
                maxStars={5}
                starSize={20}
                fullStarColor="#FFD700"
                halfStarColor="#FFD700"
                rating={this.props.detail.rating}
              />
            </CardItem>
            <CardItem>
              <Text>$ {this.props.detail.price}</Text>
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
              <Thumbnail source={{ uri: this.props.detail.seller.sellerImg }} />
              <Text style={styles.seller}>
                {this.props.detail.seller.sellerName}
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Positive Feedback</Text>
                <H2 style={{ padding: 10 }}>
                  {this.props.detail.seller.positiveFeedback}%
                </H2>
              </Left>
              <Body />
              <Right>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  starSize={20}
                  fullStarColor="#FFD700"
                  halfStarColor="#FFD700"
                  rating={this.props.detail.seller.sellerRating}
                />
              </Right>
            </CardItem>
            <CardItem bordered>
              <TouchableOpacity>
                <Text>view seller</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>
          <Card>
            <TouchableOpacity>
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
            </TouchableOpacity>
            <CardItem header>
              <Text>{this.props.detail.feedback.costumer} </Text>
            </CardItem>
            <CardItem bordered>
              <Text>{this.props.detail.feedback.comment}</Text>
            </CardItem>
          </Card>
          <TouchableOpacity>
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
          </TouchableOpacity>
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
              <Button
                badge
                vertical
                onPress={() => this.openCart()}
                transparent
              >
                {this.props.length.length === 0 ? null : (
                  <Badge info>
                    <Text>{this.props.length.length}</Text>
                  </Badge>
                )}

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
            <Button on style={styles.rightTab} transparent>
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
  },
  seller: {
    marginLeft: 10
  }
});

const mapStateToProps = state => ({
  detail: state.details.detailProduct,
  length: state.cart.cart
});

export default connect(mapStateToProps)(Profile);
