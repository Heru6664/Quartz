import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import {
  Container,
  Content,
  Button,
  Header,
  Footer,
  FooterTab,
  Icon,
  Title,
  Left,
  Body,
  Right
} from "native-base";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { createStackNavigator, DrawerNavigator } from "react-navigation";
import Home from "./Home";
import DashboardContent from "../components/DashboardContent";
import { connect } from "react-redux";
import { fetchContent, getDetail } from "../action/contentDashboard";
import SideBar from "../components/SideBar";

export class Dashboard extends Component {
  static navigationOptions = {
    drawerLabel: "Dashboard",
    drawerIcon: ({ tintColor }) => {
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

  componentDidMount() {
    this.props.dispatch(fetchContent());
  }
  handleChat = () => {
    this.props.navigation.navigate("Chat");
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
    this.props.dispatch(getDetail(item));
    this.props.navigation.navigate("ProductDesc");
  };

  renderProduct = item => (
    <TouchableOpacity style={styles.th}>
      <Card title={item.name} image={{ uri: item.img }}>
        <CardItem style={styles.itemContainer}>
          <Text>{item.price}</Text>
        </CardItem>
        <CardItem />
      </Card>
    </TouchableOpacity>
  );
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
          <Body>
            <Title>Quartz PE</Title>
          </Body>
          <Right>
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
          <Text style={{ color: "red", fontSize: 30 }}>Flash Sale!</Text>
          <FlatList
            data={this.props.products}
            renderItem={({ item }) => (
              <DashboardContent pressProduct={this.pressProduct} item={item} />
            )}
            numColumns={2}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text style={styles.footerContent}>Home</Text>
            </Button>
            <Button onPress={this.handleChat} vertical>
              <Icon name="chatbubbles" />
              <Text style={styles.footerContent}>Inbox</Text>
            </Button>
            <Button onPress={this.handlePost} vertical>
              <Icon name="camera" />
              <Text style={styles.footerContent}>Post</Text>
            </Button>
            <Button onPress={this.handleCart} vertical>
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
  loading: state.content.loading,
  error: state.content.error
});

export default connect(mapStateToProps)(Dashboard);
