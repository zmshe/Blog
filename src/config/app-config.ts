export interface AppConfigType {
  id?: number;
  text: string;
  path: string;
}
export const appConfig: AppConfigType[] = [
  {
    id: 1,
    text: "管理",
    path: "/",
  },
  {
    id: 2,
    text: "记账",
    path: "/",
  },
  {
    id: 3,
    text: "文档",
    path: "/",
  },
];
