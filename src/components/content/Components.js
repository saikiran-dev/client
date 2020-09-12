import React from "react";
import Fields from "../static/elements.json";

import { connect } from "react-redux";
import { setElement } from "../../redux/elements/element.action";

function FieldsArea({ elements: { elements }, setElement }) {
  const addFormField = (field) => {
    const id = Date.now();
    const serialNumber = elements.length + 1;
    let allElements = [...elements, { ...field, id, serialNumber }];
    setElement(allElements);
    console.log("allElements", allElements);
  };

  return (
    <div className="field-elements">
      {Fields.map((field) => {
        return (
          <div
            className="field-element"
            key={field.name}
            onClick={() => addFormField(field)}
          >
            {field.text}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    elements: state.elements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setElement: (element) => dispatch(setElement(element)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FieldsArea);
