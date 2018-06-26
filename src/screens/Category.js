import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Left,
  Button,
  Icon,
  Body,
  Right,
  List,
  ListItem,
  View,
  Spinner,
  Card,
  CardItem
} from "native-base";

import { connect } from "react-redux";
import { fetchContent, getDetail, addFav } from "../action/contentDashboard";
import {
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import StarRating from "react-native-star-rating";

const routes = [
  {
    icon: "car",
    type: "FontAwesome",
    name: "Car",
    cat: "Dashboard",
    active: false
  },
  {
    icon: "motorcycle",
    type: "FontAwesome",
    name: "Motorcycle",
    cat: "Profile",
    active: false
  },
  {
    icon: "sofa",
    type: "MaterialCommunityIcons",
    name: "Property",
    cat: "About",
    active: false
  },
  {
    icon: "ios-person-outline",
    type: "Ionicons",
    name: "Personal",
    cat: "ContactUs",
    active: false
  },
  {
    icon: "laptop-mac",
    type: "MaterialCommunityIcons",
    name: "Electronic",
    cat: "Setting",
    active: false
  },
  {
    icon: "ios-basketball-outline",
    type: "Ionicons",
    name: "Sport",
    cat: "Setting",
    active: false
  },
  {
    icon: "ios-basket-outline",
    type: "Ionicons",
    name: "Household",
    cat: "Setting",
    active: false
  },
  {
    icon: "child-care",
    type: "MaterialIcons",
    name: "Child",
    cat: "Setting",
    active: false
  },
  {
    icon: "industry",
    type: "FontAwesome",
    name: "Industry",
    cat: "Setting",
    active: false
  },
  {
    icon: "broom",
    type: "MaterialCommunityIcons",
    name: "Service",
    cat: "Setting",
    active: false
  }
];

export class Category extends Component {
  state = {
    like: false,
    categories: "",
    active: false
  };

  handlePress = route => {
    this.setState({ categories: route, active: true }, () => {
      this.product();
    });
  };
  componentDidMount() {
    this.props.dispatch(fetchContent());
  }
  renderMenu = item => {
    return (
      <TouchableOpacity
        onPress={() => this.pressProduct(item)}
        style={styles.th}
      >
        <Card>
          <CardItem>
            <Text>{item.name}</Text>
          </CardItem>
          <CardItem>
            <Image style={styles.img} source={{ uri: item.img }} />
          </CardItem>
          <CardItem style={styles.itemContainer}>
            <Text>$ {item.price}</Text>
            <StarRating
              disabled={true}
              maxStars={5}
              starSize={15}
              fullStarColor="#FFD700"
              halfStarColor="#FFD700"
              rating={item.rating}
            />
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  };

  product = () => {
    const category = this.state.categories;
    const data = this.props.product.filter(index => {
      return index.category === category;
    });
    console.log(data);
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => this.renderMenu(item)}
        numColumns={2}
      />
    );
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
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
              <Title>Category</Title>
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent>
              <Icon type="Feather" name="filter" />
            </Button>
          </Right>
        </Header>
        <ScrollView
          style={{
            width: "25%",
            height: "100%"
          }}
        >
          <List
            style={{ flex: 1, flexDirection: "row" }}
            dataArray={routes}
            renderRow={data => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <ListItem
                    noBorder
                    button
                    onPress={() => this.handlePress(data.name)}
                  >
                    <Icon
                      style={{ color: "rgba(0,0,0, 0.5)" }}
                      type={data.type}
                      name={data.icon}
                    />
                  </ListItem>
                  <ListItem>
                    <Text
                      style={{
                        color: "rgba(0,0,0, 0.5)",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {data.name}
                    </Text>
                  </ListItem>
                </View>
              );
            }}
          />
        </ScrollView>

        <ScrollView
          style={{
            backgroundColor: "white",
            width: "75%",
            height: "100%",
            marginLeft: "25%",
            marginTop: "17%",
            position: "absolute",
            padding: 10
          }}
        >
          {this.props.loading ? <Spinner /> : this.product()}
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column"
  },
  th: {
    width: "50%"
  },
  img: {
    width: 100,
    height: 100
  }
});

const mapStateToProps = state => ({
  product: state.content.content,
  loading: state.content.loading,
  error: state.content.error
});

export default connect(mapStateToProps)(Category);
