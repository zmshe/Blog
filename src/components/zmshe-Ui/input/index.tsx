import React, { useState, useEffect, useRef } from "react";
import "./style.less";

interface InputType {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Index: React.FC<InputType> = ({ type, placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const placeholderRef: React.MutableRefObject<any> = useRef();
  const inputRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const setStyle = () => {
      placeholderRef.current.style.top = inputValue ? "-22px" : "0px";
      placeholderRef.current.style.fontSize = inputValue ? "12px" : "16px";
      placeholderRef.current.style.color = inputValue ? "#20a5da" : "#3e3e3e";
    };

    inputRef.current.onfocus = () => {
      placeholderRef.current.style.top = "-22px";
      placeholderRef.current.style.fontSize = "12px";
      placeholderRef.current.style.color = "#20a5da";
    };
    inputValue && setStyle();
    inputRef.current.onblur = () => {
      setStyle();
    };
  }, [placeholderRef, inputValue]);

  return (
    <div className="zmshe-input">
      <div className="zmshe-input-box">
        <input
          ref={inputRef}
          type={type}
          className="zmshe-input-ref"
          value={inputValue}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <label ref={placeholderRef} className="zmshe-input-placeholder">
          {placeholder}
        </label>
      </div>
    </div>
  );
};

Index.defaultProps = {
  type: "text",
  value: "",
};
export default Index;
