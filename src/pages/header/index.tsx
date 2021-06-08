import React from "react";
import Pallet from "./component/pallet";
import User from "./component/user";
import "./style.less";
const Index: React.FC = () => {
  return (
    <div className="zmshe-header" id="zmshe-header">
      <div className="zmshe-header-extend">
        <Pallet />
        <User />
      </div>
    </div>
  );
};

export default Index;
