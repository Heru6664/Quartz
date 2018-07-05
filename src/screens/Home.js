import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  H1
} from "native-base";
import Animation from "lottie-react-native";
import { connect } from "react-redux";
import { loginAuth, clearError } from "../action/contentDashboard";

var t = require("tcomb-form-native");
var Form = t.form.Form;

var validateEmail = s => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(s);
};

var Email = t.refinement(t.String, s => validateEmail(s));
Email.getValidationErrorMessage = s => {
  console.log("s : ", s);
  if (!s) {
    return "Email should not be empty!";
  }
  if (!validateEmail(s)) {
    return "Incorrect email format";
  }
};

var Data = t.struct({
  email: Email,
  password: t.String
});

var options = {
  fields: {
    email: {
      label: "EMAIL",
      autoCapitalize: "none"
    },
    password: {
      label: "PASSWORD",
      error: "Password should not be empty!",
      autoCapitalize: "none",
      secureTextEntry: true
    }
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentWillMount() {
    this.initAnimation();
  }

  componentDidUpdate() {
    if (this.props.error) {
      this.props.dispatch(clearError());
    }
  }

  initAnimation() {
    if (!this.animation) {
      setTimeout(() => {
        this.initAnimation();
      }, 100);
    } else {
      this.animation.play();
    }
  }
  onFormChange(value) {
    a = {};
    this.setState({
      ...this.state,
      ...value
    });
  }

  _onPressButton = () => {
    var value = this.refs.form.getValue();
    if (value === null) return;

    this.props.dispatch(loginAuth(this.state.email, this.state.password));
  };
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "white" }}
          span
          borderBottomWidth={0}
          height={180}
        >
          <Image
            source={require("../img/quartz-logo.png")}
            style={{
              width: "80%",
              height: 150,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          />
        </Header>
        <Content style={styles.content}>
          {this.props.error ? alert(this.props.error.errorMessage) : null}
          <Form
            type={Data}
            value={this.state}
            options={options}
            ref="form"
            onChange={value => this.onFormChange(value)}
          />
          <Button style={styles.button} onPress={this._onPressButton} bordered>
            {this.props.isLoadingLogin ? (
              <Content>
                <Left />
                <Body>
                  <Animation
                    ref={animation => {
                      this.animation = animation;
                    }}
                    style={{
                      width: 40,
                      height: 40
                    }}
                    loop
                    source={require("../assets/images/lottie/data.json")}
                  />
                </Body>
                <Right />
              </Content>
            ) : (
              <Text style={styles.text}>SIGN IN</Text>
            )}
          </Button>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 20
            }}
          >
            <View
              style={{ borderColor: "#a48bf1", borderWidth: 0.5, flex: 0.3 }}
            />
            <Text style={{ textAlign: "center", padding: 10 }}>OR</Text>
            <View
              style={{ borderColor: "#a48bf1", borderWidth: 0.5, flex: 0.3 }}
            />
          </View>

          <Button rounded bordered style={styles.orButton}>
            <Icon type="EvilIcons" name="sc-facebook" />
            <Text>Sign in with Facebook</Text>
          </Button>

          <Button rounded bordered style={styles.orButton}>
            <Icon type="MaterialCommunityIcons" name="google" />
            <Text>Sign in with Google</Text>
          </Button>
        </Content>
        <View style={styles.footerContainer}>
          <Text style={styles.signUp}>SIGN UP</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#34495e"
  },
  content: {
    flex: 1,
    paddingVertical: "8%",
    paddingHorizontal: "5%",
    backgroundColor: "white"
  },
  item: {
    marginVertical: "2%"
  },
  button: {
    width: "100%",
    borderRadius: 100,
    borderColor: "#34495e",
    justifyContent: "center",
    alignItems: "center"
  },
  orButton: {
    width: "100%",
    justifyContent: "center",
    marginVertical: "2%"
  },
  text: {
    color: "#34495e",
    width: "100%",
    textAlign: "center"
  },
  footerContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 30,
    left: 10,
    right: 10
  },
  signUp: {
    textAlign: "center",
    textDecorationLine: "underline"
  }
});

const mapStateToProps = state => ({
  user: state.auth.user,
  isLoadingLogin: state.auth.isLoadingLogin,
  error: state.auth.error
});

export default connect(mapStateToProps)(Home);
