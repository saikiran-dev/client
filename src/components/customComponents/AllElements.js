import React from "react";

export function TextInput() {
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export function LongTextInput() {
  return (
    <div>
      <textarea rows="2" cols="22" />
    </div>
  );
}

export function RadioButton() {
  return (
    <div>
      <input type="radio" />
      Option One
    </div>
  );
}
