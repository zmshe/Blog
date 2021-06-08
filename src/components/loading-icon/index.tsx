import React from "react";
import xjhloading from "@src/static/loading.webp";
import "./style.less";
const innerTheme: string | null = localStorage.getItem("theme");
const Index: React.FC = () => {
  return (
    <div
      className="zmshe-initialize"
      style={{
        background: innerTheme
          ? JSON.parse(innerTheme).colour.background
          : "#9AD0CB",
      }}
    >
      <img src={xjhloading} alt="" width="80" height="80" />
    </div>
  );
};

export default Index;
