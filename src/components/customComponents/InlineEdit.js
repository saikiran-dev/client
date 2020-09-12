import React, { useState } from "react";
import Check from "../svgs/Check";

export default function InlineEdit({ element, updateLabel }) {
  const [title, setTitle] = useState();

  const save = (element) => {
    updateLabel(element.id, title);
  };

  return (
    <div className="inline-edit">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter You Label Here...."
        defaultValue={element.label}
      />
      <div onClick={() => save(element)}>
        <Check />
      </div>
    </div>
  );
}
