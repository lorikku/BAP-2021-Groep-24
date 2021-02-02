import * as React from "react";
import "./tag.css";

const Tag = ({name}) => {
  return (
    <li className="tag-container">
        <div className="tag-color"></div>
        <p className="tag-name">{name}</p>
    </li>
  );
};

export default Tag;