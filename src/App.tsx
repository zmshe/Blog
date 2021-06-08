import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { appConfig, AppConfigType } from "@src/config/app-config";
import Header from "@src/pages/header";
import ZmsheCard from "@src/components/zmshe-card";
import AppStore from "@src/stores/app";
import "./style/App.less";
const App = () => {
  const { theme, setTheme } = AppStore;

  useEffect(() => {
    if (!localStorage.getItem("theme")) return;
    const innerTheme = localStorage.getItem("theme");
    setTheme(JSON.parse(innerTheme as string));
  }, [setTheme]);

  useEffect(() => {
    const zmshe: HTMLElement | null = document.getElementById("zmshe");
    (zmshe as HTMLElement).style.background = theme.colour?.background;
  }, [theme]);

  return (
    <div className="zmshe" id="zmshe">
      <Header />
      <div className="zmshe-content">
        {appConfig.map((item: AppConfigType) => (
          <ZmsheCard key={item.id} text={item.text} path={item.path} />
        ))}
      </div>
    </div>
  );
};

export default observer(App);
