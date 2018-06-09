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
  View
} from "native-base";
import { StyleSheet, Image } from "react-native";

export default class About extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              onPress={() => this.props.navigation.navigate("Dashboard")}
              transparent
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <H1>QUARTZ</H1>
          <Text style={styles.text}>
            The QUARTZ PE are members of the same family. Their separate
            existence is a myth. For science, music, sport, etc, Europe uses the
            same vocabulary. The languages only differ in their grammar, their
            pronunciation and their most common words. Everyone realizes why a
            new common language would be desirable: one could refuse to pay
            expensive translators. To achieve this, it would be necessary to
            have uniform grammar, pronunciation and more common words. If
            several languages coalesce, the grammar of the resulting language is
            more simple and regular than that of the individual languages. The
            new common language will be more simple and regular than the
            existing European languages. It will be as simple as Occidental; in
            fact, it will be Occidental. To an English person, it will seem like
            simplified English, as a skeptical Cambridge friend of mine told me
            what Occidental is.The European languages are members of the same
            family. Their separate existence is a myth. For science, music,
            sport, etc, Europe uses the same vocabulary. The languages only
            differ in their grammar, their pronunciation and their most common
            words. Everyone realizes why a new common language would be
            desirable: one could refuse to pay expensive translators. To
          </Text>
          <H3>Lorem</H3>
          <Text style={styles.text}>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
            Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
            quiz. How quickly daft jumping zebras vex. Two driven jocks
          </Text>
        </Content>
        <Footer style={styles.footerContainer}>
          <Text style={styles.footer}>Copyright 2018</Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 30
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
