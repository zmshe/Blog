import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import LoadingIcon from "@src/components/loading-icon";
import "./style/index.css";

const LoadableApp = Loadable({
  loader: () => import("./App"),
  loading() {
    return <LoadingIcon />;
  },
});

ReactDOM.render(<LoadableApp />, document.getElementById("root"));
