import React, { Component } from "react";
import { Form, Picker, Icon } from "native-base";

export default ({ onValueChange, selected }) => (
  <Form>
    <Picker
      mode="dropdown"
      iosHeader="Select category"
      iosIcon={<Icon type="Ionicons" name="ios-arrow-down" />}
      style={{ width: undefined }}
      selectedValue={selected}
      onValueChange={onValueChange}
    >
      <Picker.Item label="Car" value="0" />
      <Picker.Item label="Motorcycle" value="1" />
      <Picker.Item label="Property" value="2" />
      <Picker.Item label="Personal Purpose" value="3" />
      <Picker.Item label="Electronic" value="4" />
      <Picker.Item label="Sport" value="5" />
      <Picker.Item label="Household" value="6" />
      <Picker.Item label="Child" value="7" />
      <Picker.Item label="Industry" value="8" />
      <Picker.Item label="Service" value="9" />
    </Picker>
  </Form>
);
