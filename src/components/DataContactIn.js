import React from "react";
import { Form, Item, Label, Input, Text } from "native-base";
import { StyleSheet } from "react-native";

export default ({ handleName, handlePhone, currentName, currentPhone }) => (
  <Form style={styles.formContainer}>
    <Item floatingLabel>
      <Label>Name</Label>
      <Input onChangeText={name => handleName(name)} value={currentName} />
    </Item>
    <Item floatingLabel last>
      <Label>Phone Number</Label>
      <Input
        keyboardType="numeric"
        maxLength={13}
        onChangeText={phone => handlePhone(phone)}
        value={currentPhone}
      />
    </Item>
  </Form>
);

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: "5%"
  }
});
