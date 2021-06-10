import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routerConfig } from "@src/config/router-config";
import { observer } from "mobx-react";
import AppStore from "@src/stores/app";
import "antd/dist/antd.css";
import "./style/index.css";

const LoadableApp = observer(() => {
  const currentUser = localStorage.getItem("currentUser");
  const { theme } = AppStore;
  useEffect(() => {
    if (location.pathname === "/" && !currentUser) {
      location.pathname = "/login";
    }
  }, []);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const rootRef = document.getElementById("root");
    (rootRef as HTMLElement).style.background = !localTheme
      ? theme.colour.background
      : JSON.parse(localTheme).colour.background;
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
});

ReactDOM.render(<LoadableApp />, document.getElementById("root"));
