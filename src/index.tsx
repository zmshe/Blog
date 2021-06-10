import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routerConfig } from "@src/config/router-config";
import "antd/dist/antd.css";
import "./style/index.css";

const LoadableApp = () => {
  const currentUser = localStorage.getItem("currentUser");

  useEffect(() => {
    if (location.pathname === "/" && !currentUser) {
      location.pathname = "/login";
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {routerConfig.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.components}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<LoadableApp />, document.getElementById("root"));
