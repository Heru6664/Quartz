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
  Icon
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

  signUpNow = () => {
    this.props.navigation.navigate("SignUp");
    console.log(this.props.navigation.navigate("SignUp"));
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
            style={styles.imageLogo}
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
                    style={styles.animation}
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
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
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
          <Text onPress={this.signUpNow} style={styles.signUp}>
            SIGN UP
          </Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
  imageLogo: {
    width: "80%",
    height: 150,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  animation: {
    width: 30,
    height: 30
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  orLine: {
    borderColor: "#a48bf1",
    borderWidth: 0.5,
    flex: 0.3
  },
  orText: {
    textAlign: "center",
    padding: 10
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
