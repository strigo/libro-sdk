import { Strigo } from "./strigo";

declare global {
  interface Window {
    Strigo: any;
  }
}

window.Strigo = Strigo;
window.Strigo.init();
