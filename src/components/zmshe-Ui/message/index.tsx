import React from "react";
import ReactDOM from "react-dom";
import "./style.less";

// δΈηζ
const message = {
  error(value?: JSX.Element | string): void {
    const RenderNode = () => (
      <div className="zmshe-message">{value || "123123"}</div>
    );
    console.log(document.querySelector("zmshe-message"), 123123);
    ReactDOM.createPortal(
      <RenderNode />,
      document.getElementById("root") as any
    );
  },
};

export { message };
