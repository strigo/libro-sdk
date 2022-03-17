import { Logger } from "../../../services/logger";
import * as sessionManager from "../session/session";
import { WIDGET_FLAVORS } from "../session/session.types";

const SPINNER = `
<div class="circle-loader">
  <svg class="circular" viewBox="25 25 50 50">
  <circle
    class="path"
    cx="50"
    cy="50"
    r="20"
    fill="none"
    stroke-width="2"
    stroke-miterlimit="10"
  />
  </svg>
</div>
`;

export function addLoader() {
  sessionManager.setSessionValue("isLoading", true);

  // Add Spinner
  const loaderDiv = document.createElement("div");
  loaderDiv.className = "strigo-loader";
  loaderDiv.innerHTML = SPINNER;

  document.body.appendChild(loaderDiv);
}

export function hideLoader() {
  switch (sessionManager.getWidgetFlavor()) {
    case WIDGET_FLAVORS.IFRAME: {
      const preloader = document.querySelector<HTMLElement>(".strigo-loader");
      const interval = setInterval(() => {
        if (!preloader.style.opacity) {
          preloader.style.opacity = "1";
        }
        const opacity = parseFloat(preloader.style.opacity);
        if (opacity > 0) {
          preloader.style.opacity = (opacity - 0.1).toString();
        } else {
          sessionManager.setSessionValue("isLoading", false);
          preloader.style.pointerEvents = "none";
          clearInterval(interval);
        }
      }, 200);
      break;
    }
    case WIDGET_FLAVORS.OVERLAY: {
      sessionManager.setSessionValue("isLoading", false);
      document.getElementById("strigo-widget").classList.add("slide-in"); 
      document.getElementById("strigo-widget").classList.add("loaded");
      break;
    }
    default: {
      Logger.error("widgetFlavor is not supported - loader");
      break;
    }
  }
}

export function isLoading(): boolean {
  return !!sessionManager.getSessionValue("isLoading");
}
