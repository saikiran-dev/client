import React from "react";
import Element from "../content/Element";
import InlineEdit from "./InlineEdit";
import Cross from "../svgs/Cross";

function DefaultForm({
  selectedElements,
  updateLabel,
  setEnableEdit,
  enableEditIndex,
}) {
  const selectedFields = selectedElements.map((element, index) => {
    return (
      <div key={index} className="content-field">
        {enableEditIndex === element.id ? (
          <InlineEdit element={element} updateLabel={updateLabel} />
        ) : (
          <span onClick={() => setEnableEdit(element.id)}>{element.label}</span>
        )}
        <Element key={index} element={element} className={element.name} />
      </div>
    );
  });

  return (
    <div className="default-form">
      <header className="header">
        <span>Create Form</span>
        <Cross />
      </header>
      <div className="content-fields">{selectedFields}</div>

      <footer className="footer">
        <button type="button" className="primary-btn">
          Button Text
        </button>
      </footer>
    </div>
  );
}

export default DefaultForm;
