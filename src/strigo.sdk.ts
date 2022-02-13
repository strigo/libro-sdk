import { Strigo } from "./strigo";

declare global {
  interface Window {
    StrigoSDK: any;
  }
}

window.StrigoSDK = Strigo;
window.StrigoSDK.init();