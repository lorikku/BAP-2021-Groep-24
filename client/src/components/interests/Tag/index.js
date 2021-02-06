import * as React from "react";
import "./tag.css";

const Tag = ({ name, isEdit }) => {
  return (
    <li className="tag-container">
      <div className="tag-color"></div>
      <p className="tag-name">{name}</p>
      {isEdit ? (
        <img
          className="tag-delete-cross"
          alt="kruisje"
          src="/assets/img/cross-red.svg"
        ></img>
      ) : (
        ""
      )}
    </li>
  );
};

export default Tag;
