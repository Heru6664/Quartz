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
import { createStackNavigator, DrawerNavigator } from "react-navigation";
import Home from "./Home";
import DashboardContent from "../components/DashboardContent";
import { connect } from "react-redux";
import { fetchContent } from "../action/contentDashboard";
import SideBar from "../components/SideBar";

export class Dashboard extends Component {
  static navigationOptions = {
    drawerLabel: "Dashboard",
    drawerIcon: ({ tintColor }) => {
      <Icon name="contact" />;
    }
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
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              transparent
            >
              <Icon style={styles.iconHead} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Quartz PE</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.iconHead} name="notifications" />
            </Button>
          </Right>
        </Header>
        <Content>
          <FlatList
            data={this.props.products}
            renderItem={({ item }) => <DashboardContent item={item} />}
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
            <Button vertical>
              <Icon name="cart" />
              <Text style={styles.footerContent}>Cart</Text>
            </Button>
            <Button vertical>
              <Icon name="heart" />
              <Text style={styles.footerContent}>Favorite</Text>
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
  }
});

const mapStateToProps = state => ({
  products: state.content.content,
  loading: state.content.loading,
  error: state.content.error
});

export default connect(mapStateToProps)(Dashboard);
