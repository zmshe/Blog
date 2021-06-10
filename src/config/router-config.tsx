import React from "react";
import Loadable from "react-loadable";
import LoadingIcon from "@src/components/loading-icon";

export const routerConfig = [
  {
    path: "/",
    components: Loadable({
      loader: () => import("../App"),
      loading() {
        return <LoadingIcon />;
      },
    }),
  },
  {
    path: "/login",
    components: Loadable({
      loader: () => import("../pages/login"),
      loading() {
        return <LoadingIcon />;
      },
    }),
  },
];
