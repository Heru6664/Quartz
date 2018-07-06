import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Easing
} from "react-native";
import {
  Container,
  Content,
  Header,
  Title,
  Left,
  Button,
  Icon,
  Right,
  Label,
  Card,
  CardItem,
  Form,
  Item,
  Input
} from "native-base";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-crop-picker";
import ZoomImage from "react-native-zoom-image";

import PickerPost from "../components/pickerPost";
import { uploadImage } from "../action/contentDashboard";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      active: true,
      selected: "0",
      dp: null
    };
  }

  onValueChange = value => {
    this.setState({
      selected: value
    });
  };

  openImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: "photo",
      loadingLabelText: "Uploading Image"
    })
      .then(image => {
        console.log(image);
        this.props.dispatch(uploadImage(image));
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderImage = item => {
    return (
      <TouchableOpacity>
        <View style={styles.uploadContainer}>
          <ZoomImage
            source={{
              uri: item.path
            }}
            imgStyle={{ width: 79, height: 79, borderRadius:5 }}
            enableScaling={true}
            easingFunc={Easing.bounce}
          />
        </View>
      </TouchableOpacity>
      // onPress={() => this.cropImage(item)}
      // style={styles.uploadContainer}
      //   <Image
      //     source={{
      //       uri: item.path,
      //       width: item.width,
      //       height: item.height,
      //       mime: item.mime
      //     }}
      //     style={styles.uploadedImage}
      //   />
    );
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
              <Title>Post Your Product</Title>
            </Button>
          </Left>
        </Header>
        <Content style={styles.content}>
          <Card>
            <CardItem>
              <Text>Upload Photo</Text>
            </CardItem>
            <CardItem>
              <View style={styles.imageContainer}>
                <FlatList
                  data={this.props.images}
                  renderItem={({ item }) => this.renderImage(item)}
                  numColumns={3}
                />

                <TouchableOpacity
                  onPress={() => this.openImage()}
                  style={styles.uploadContainer}
                >
                  <Icon style={styles.uploadIcon} name="add" />
                </TouchableOpacity>
              </View>
            </CardItem>
            <CardItem>
              <Text>
                showing more than one photo of the item will add buyer
                confidence and increase the chance of the goods sold
              </Text>
            </CardItem>
          </Card>
          <Card>
            <Form>
              <Item floatingLabel>
                <Label>Your title here</Label>
                <Input />
              </Item>
            </Form>
            <CardItem>
              <Text> </Text>
            </CardItem>
            <Form>
              <Item floatingLabel>
                <Label>Your Locations</Label>
                <Input />
              </Item>
            </Form>
            <CardItem>
              <Left />
              <Right>
                <Button transparent>
                  <Text>Choice Locations</Text>
                </Button>
              </Right>
            </CardItem>
            <Form>
              <Item>
                <Label>Category</Label>
                <PickerPost
                  style={{ flex: 3 }}
                  onValueChange={this.onValueChange}
                  selected={this.state.selected}
                />
              </Item>
            </Form>
            <CardItem>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder={"Describe your product here"}
                  placeholderTextColor={"grey"}
                  numberOfLines={10}
                  multiline={true}
                />
              </View>
            </CardItem>
          </Card>
          {/* <TodoInput /> */}
          <FlatList
            data={this.props.todo}
            renderItem={({ item }) => this.listItem(item)}
          />
          <Button style={styles.post} bordered dark>
            <Text>Post</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
    marginVertical: 19
  },
  uploadContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "rgba(0,0,0, 0.5)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column"
  },
  uploadedImage: {
    width: "100%",
    height: "100%"
  },
  textAreaContainer: {
    borderColor: "rgba(0,0,0, 0.2)",
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    width: 310,
    height: 150,
    justifyContent: "flex-start"
  },
  post: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  }
});

const mapStateToProps = state => ({
  images: state.uploadImage.selectedImages
});

export default connect(mapStateToProps)(Post);
