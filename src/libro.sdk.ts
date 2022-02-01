import { Libro } from "./libro";

declare global {
  interface Window {
    LibroSDK: any;
  }
}

window.LibroSDK = Libro;
window.LibroSDK.init();
