import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./style.less";
import { observer } from "mobx-react";
import { Input } from "@src/components/zmshe-Ui";
import AppStore from "@src/stores/app";
import { HomeFilled, CloudFilled, SwapRightOutlined } from "@ant-design/icons";
import { queryLocalTotal } from "@src/utils";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import MD5 from "md5.js";

interface LoginMapType {
  text: string;
  icon: JSX.Element;
  type: "local" | "remote";
}

const loginTypeMap: LoginMapType[] = [
  {
    text: "本地登录",
    icon: <HomeFilled />,
    type: "local",
  },
  {
    text: "远程登录",
    icon: <CloudFilled />,
    type: "remote",
  },
];

const Index: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginType, theme } = AppStore;

  const hisroty = useHistory();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const zmshelogin = document.getElementById("zmshe-login");
    (zmshelogin as HTMLElement).style.background = !localTheme
      ? theme.colour.background
      : JSON.parse(localTheme).colour.background;
  }, []);

  const loginHandle = () => {
    const localUser = localStorage.getItem("user");
    const userData: any = localUser ? JSON.parse(localUser as string) : {};
    const tmpData = {
      ...JSON.parse(localUser as string),
    };
    if (!username || !password) {
      message.error("用户名密码不能为空");
      return;
    }
    const setCurrentUser = () => {
      AppStore.userdata = {
        username: username,
      };
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          username,
          expireDate: dayjs().add(3, "day").unix(),
        })
      );
    };
    const passwordMd5 = new MD5().update(`@zmshe+${password}`).digest("hex");
    if (!userData[username] && Object.keys(userData).length < 3) {
      tmpData[username] = {
        username,
        password: passwordMd5,
      };
      localStorage.setItem("user", JSON.stringify(tmpData));
      setCurrentUser();
      hisroty.push("/");
      return;
    } else if (!userData[username] && Object.keys(userData).length >= 3) {
      message.error("用户名密码错误");
      return;
    }
    if (userData[username]?.password === passwordMd5) {
      setCurrentUser();
      hisroty.push("/");
      return;
    } else if (userData[username]?.password !== passwordMd5) {
      message.error("密码错误");
      return;
    }
  };

  return (
    <div className="zmshe-login" id="zmshe-login">
      <div className="zmshe-login-content">
        <div className="zmshe-login-type">
          {loginTypeMap.map((item) => (
            <div
              key={item.text}
              className={`zmshe-login-type-local ${
                loginType === item.type && "current"
              }`}
              onClick={() => {
                AppStore.loginType = item.type;
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <div className="zmshe-login-title">登录</div>
        {loginType === "local" && (
          <div className="zmshe-login-content-local">
            <div className="zmshe-login-content-input">
              <Input
                placeholder="请输入用户名"
                value={username}
                onChange={setUsername}
              />
            </div>
            <div className="zmshe-login-content-input">
              <Input
                type="password"
                placeholder="请输入密码"
                value={password}
                onChange={setPassword}
              />
            </div>
            <div>
              <div className="zmshe-login-icon" onClick={loginHandle}>
                <SwapRightOutlined />
              </div>
            </div>
            <div className="zmshe-login-warn">
              *本地登录用户名密码将存储到浏览器缓存中，登录及自动注册，最多创建3个账户
              <div>
                chrome缓存大小为5M，目前已用空间: {queryLocalTotal()} KB
              </div>
            </div>
          </div>
        )}
        {loginType === "remote" && (
          <div className="zmshe-login-content-remote">敬请期待</div>
        )}
      </div>
    </div>
  );
};

export default observer(Index);
