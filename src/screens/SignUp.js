import React, { Component } from "react";
import { Container, Content, Header, Icon, Left, Button } from "native-base";
import t from "tcomb-form-native";
import { StyleSheet } from "react-native";

const Form = t.form.Form;

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
  firstName: t.String,
  lastName: t.maybe(t.String),
  password: t.String,
  terms: t.Boolean
});

var registerOptions = {
  fields: {
    email: {
      label: "EMAIL",
      autoCapitalize: "none"
    },
    firstName: {
      label: "First Name"
    },
    lastName: {
      label: "Last Name"
    },
    password: {
      label: "PASSWORD",
      error: "Password should not be empty!",
      autoCapitalize: "none",
      secureTextEntry: true
    },
    terms: {
      label: "TERMS",
      error: "asd"
    }
  }
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      terms: false
    };
  }
  onChangeForm(value) {
    a = {};
    this.setState({
      ...this.state,
      ...value
    });
  }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Content style={styles.content}>
          <Form
            type={Data}
            value={this.state}
            options={registerOptions}
            ref="form"
            onChange={value => this.onChangeForm(value)}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "white"
  },
  content: {
    flex: 1,
    paddingVertical: "8%",
    paddingHorizontal: "5%",
    backgroundColor: "white"
  }
});

export default SignUp;
