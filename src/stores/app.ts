import { makeAutoObservable } from "mobx";

class App {
  
  theme:any = {theme: '森林', colour: {header: "#3C524F", background: "#9AD0CB", botton: "#6C918E", hint: "#fffff6", assist: "#88B8B3"}}

  constructor() {
    makeAutoObservable(this)
  }

  setTheme = (theme:any) => {
    this.theme =theme
  }
}

export default new App()