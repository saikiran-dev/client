import React from "react";
import {
  TextInput,
  LongTextInput,
  RadioButton,
} from "../customComponents/AllElements";

export default function EachElement(element) {
  const Components = {
    TextInput: TextInput,
    LongTextInput: LongTextInput,
    RadioButton: RadioButton,
  };
  let component = Components[element.element.name];
  return React.createElement(component);
}
