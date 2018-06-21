import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  H1,
  H2,
  H3,
  Footer,
  View,
  CardItem,
  Grid,
  Col,
  Row
} from "native-base";
import { StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

export default class OrderSummary extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
              <Title>Order Summary</Title>
            </Button>
          </Left>
        </Header>
        <Content style={styles.content}>
          <Card>
            <CardItem header>
              <Text>Shipping Information</Text>
            </CardItem>
            <CardItem>
              <Grid>
                <Row>
                  <Col>
                    <Text>Shipping Address: </Text>
                  </Col>
                  <Col>
                    <Text>asdasda</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text>Shipping Address: </Text>
                  </Col>
                  <Col>
                    <Text>asdasda</Text>
                  </Col>
                </Row>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 0
  },
  text: {
    marginVertical: 22,
    paddingBottom: 22,
    fontSize: 13,
    color: "rgba(0,0,0, 0.5)"
  },
  footer: {
    marginVertical: 12,
    fontSize: 13,
    color: "rgba(0,0,0, 0.5)"
  }
});
