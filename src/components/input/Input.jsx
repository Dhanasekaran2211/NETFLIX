import React from "react";
import "./input.css";
const Input = ({
  label,
  bg = "",
  placeholder = "",
  name,
  value,
  type,
  onChange,
  height,
  width,
  border,
  bgone,br,color
}) => {
  return (
    <div className="parent">
      <input
        className={`${bg}`}
        type={type}
        name={name || ""}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
     style={{height:height,width:width,border:border,backgroundColor:bgone,borderRadius:br,color:color}} />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Input;
