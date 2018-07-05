import React, { Component } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Button,
  Header,
  Footer,
  FooterTab,
  Icon,
  Left,
  Body,
  Right,
  Spinner,
  Badge
} from "native-base";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { connect } from "react-redux";
import { fetchContent, getDetail, addFav } from "../action/contentDashboard";

import DashboardContent from "../components/DashboardContent";

export class Dashboard extends Component {
  state = {
    like: false
  };
  static navigationOptions = {
    drawerLabel: "Dashboard",
    drawerIcon: () => {
      <Icon name="contact" />;
    }
  };
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  handleFav = () => {
    this.props.navigation.navigate("Favorites");
  };
  componentDidMount() {
    this.props.dispatch(fetchContent());
  }
  handleCategory = () => {
    this.props.navigation.navigate("Category");
  };
  handlePost = () => {
    this.props.navigation.navigate("Post");
  };
  handleCart = () => {
    this.props.navigation.navigate("Cart");
  };
  handleProfile = () => {
    this.props.navigation.navigate("Profile");
  };

  pressProduct = item => {
    console.log(this.props.navigation);
    this.props.dispatch(getDetail(item));
    this.props.navigation.navigate("ProductDesc");
  };
  likeProduct = item => {
    this.setState({ like: !this.state.like });
    this.props.dispatch(addFav(item));
  };

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              onPress={() => this.props.navigation.openDrawer()}
              transparent
            >
              <Icon style={styles.iconHead} name="menu" />
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent badge onPress={this.handleFav} vertical>
              {this.props.fav === 0 ? null : (
                <Badge style={{ color: "#ffffff" }} danger>
                  <Text>{this.props.fav}</Text>
                </Badge>
              )}

              <Icon
                style={{ padding: 10 }}
                type="Ionicons"
                name="heart"
                badge
              />
            </Button>
            <Menu
              ref={this.setMenuRef}
              button={
                <Icon
                  onPress={this.showMenu}
                  name="notifications"
                  // style={{ color: "#ffffff" }}
                />
              }
              style={{ width: 200 }}
            >
              <MenuItem style={styles.headMI} onPress={this.handleNContact}>
                Notifications
              </MenuItem>
              <MenuItem onPress={this.hideMenu}> </MenuItem>
              <MenuItem onPress={this.hideMenu} disabled>
                Empty
              </MenuItem>
              <MenuDivider />
              <MenuItem onPress={this.hideMenu}>Show More </MenuItem>
            </Menu>
          </Right>
        </Header>
        <Content>
          {/* <DashboardSwiper /> */}
          <Text style={{ color: "red", fontSize: 30 }}>Flash Sale!</Text>
          {this.props.loading ? <Spinner /> : null}
          <FlatList
            data={this.props.products}
            renderItem={({ item }) => (
              <DashboardContent
                likeProduct={this.likeProduct}
                pressProduct={this.pressProduct}
                item={item}
              />
            )}
            numColumns={2}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button active vertical>
              <Icon name="home" />
              <Text style={styles.footerContent}>Home</Text>
            </Button>
            <Button onPress={this.handleCategory} vertical>
              <Icon type="Ionicons" name="ios-list-box-outline" />
              <Text style={styles.footerContent}>Category</Text>
            </Button>
            <Button onPress={this.handlePost} vertical>
              <Icon name="camera" />
              <Text style={styles.footerContent}>Post</Text>
            </Button>
            <Button badge onPress={this.handleCart} vertical>
              {this.props.length.length === 0 ? null : (
                <Badge danger>
                  <Text>{this.props.length.length}</Text>
                </Badge>
              )}

              <Icon name="cart" />
              <Text style={styles.footerContent}>Cart</Text>
            </Button>
            <Button onPress={this.handleProfile} vertical>
              <Icon type="MaterialIcons" name="account-circle" />
              <Text style={styles.footerContent}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footerContent: {},
  header: {
    alignItems: "center"
  },
  iconHead: {
    color: "#000"
  },
  headMI: {
    backgroundColor: "#e67e22"
  }
});

const mapStateToProps = state => ({
  products: state.content.content,
  length: state.cart.cart,
  fav: state.content.liked.length,
  loading: state.content.loading,
  error: state.content.error
});

export default connect(mapStateToProps)(Dashboard);
