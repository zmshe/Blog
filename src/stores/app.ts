import { makeAutoObservable } from "mobx";

interface ThemeType {
  theme: string;
  colour: {
    [key: string]: string;
  };
}

class App {
  theme: ThemeType = {
    theme: "森林",
    colour: {
      header: "#3C524F",
      background: "#9AD0CB",
      botton: "#6C918E",
      hint: "#fffff6",
      assist: "#88B8B3",
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (theme: ThemeType) => {
    this.theme = theme;
  };
}

export default new App();
