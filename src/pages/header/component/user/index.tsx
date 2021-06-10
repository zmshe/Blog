import React from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import AppStore from "@src/stores/app";
import { queryLocalTotal } from "@src/utils";
import "./style.less";

const loginTypeMap = {
  local: "本地账户",
  remote: "远程账户",
};

const Index: React.FC = () => {
  const { userdata, loginType } = AppStore;
  const { username } = userdata;
  const hisroty = useHistory();
  const onLogout = () => {
    localStorage.setItem("currentUser", "");
    hisroty.push("/login");
  };
  return (
    <div className="zmshe-header-user">
      <UserOutlined />
      <div className="zmshe-header-user-content">
        <div>{username}</div>
        <div>{loginTypeMap[loginType]}</div>
        <div className="zmshe-header-user-info">
          {`可用空间: ${queryLocalTotal()} / 5012 KB`}
        </div>
        <div onClick={onLogout}>注销</div>
      </div>
    </div>
  );
};

export default observer(Index);
