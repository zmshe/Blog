import React from "react";
import ReactDOM from "react-dom";
import "./style.less";

// 不生效
const message = {
  error(value?: JSX.Element | string): void {
    const RenderNode = () => (
      <div className="zmshe-message">{value || "123123"}</div>
    );
    console.log(document.querySelector("zmshe-message"), 123123);
    ReactDOM.render(<RenderNode />, document.getElementById("root"));
  },
};

export { message };
