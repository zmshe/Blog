export interface AppConfigType {
  id?:number;
  text:string;
  path: string;
}
export const appConfig:AppConfigType[] = [
  {
    id: 1,
    text:'博主简介',
    path: '/'
  },
  {
    id: 2,
    text:'技术文档',
    path: '/'
  },
  {
    id: 3,
    text:'开发进度',
    path: '/'
  },
  {
    id: 4,
    text:'开发中',
    path: '/'
  },
  {
    id: 5,
    text:'开发中',
    path: '/'
  },
]