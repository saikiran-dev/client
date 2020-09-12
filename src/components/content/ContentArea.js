import React, { useState } from "react";
import { connect } from "react-redux";
import DefaultForm from "../customComponents/DefaultForm";
import { updateElement } from "../../redux/elements/element.action";

function ContentArea({ updateElement, elements: { elements } }) {
  const [enableEditIndex, setEnableEdit] = useState(null);

  const updateLabel = (id, label) => {
    //update element
    let updatedElements = [...elements];
    updatedElements.map((item) => {
      if (item.id === id) {
        item.label = label;
      }
      return item;
    });
    updateElement(updatedElements);
    setEnableEdit(null);
  };
  return (
    <>
      {elements.length === 0 ? (
        "Please Click on the Element to Populate"
      ) : (
        <DefaultForm
          selectedElements={elements}
          updateLabel={updateLabel}
          setEnableEdit={setEnableEdit}
          enableEditIndex={enableEditIndex}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    elements: state.elements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateElement: (element) => dispatch(updateElement(element)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentArea);
