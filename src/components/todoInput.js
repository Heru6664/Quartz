import {
  Contain,
  Content,
  Input,
  InputGroup,
  Item,
  Button,
  Text,
  Form
} from "native-base";
import React, { Component } from "react";
import { AddTodo } from "../action/actionTodo";
import { connect } from "react-redux";

class TodoInput extends Component {
  state = {
    currentVal: ""
  };
  handleChange(text) {
    this.setState({
      currentVal: text
    });
  }
  handlePress(e) {
    this.props.dispatch(
      AddTodo({
        message: this.state.currentVal
      })
    );
    this.handleChange("");
  }

  render() {
    const inputProps = {
      onChangeText: text => this.handleChange(text),
      placeholder: "Add TODO",
      value: this.state.currentVal
    };

    const buttonProps = {
      onPress: e => this.handlePress(e)
    };

    return (
      <Form>
        <Item>
          <Input {...inputProps} />
          <Button {...buttonProps}>
            <Text>Add</Text>
          </Button>
        </Item>
      </Form>
    );
  }
}

export default connect()(TodoInput);
