import * as sessionManager from "../session/session";
import * as widgetFactory from "../widgets/widget-factory";

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
  const widget = widgetFactory.getWidget(sessionManager.getWidgetFlavor());
  widget.hideLoader();
}

export function isLoading(): boolean {
  return !!sessionManager.getSessionValue("isLoading");
}
