import { CHEVRON_LEFT, CHEVRON_RIGHT } from "../../strigo/consts";
import { AppendCSSFileParams, AppendIframeParams } from "./document.types";

export function getHeadElement(): HTMLElement {
  return document.getElementsByTagName("head")[0];
}

export function getBodyElement(): HTMLElement {
  return document.getElementsByTagName("body")[0];
}

export function clearDoc() {
  document.open();
  document.close();
}

export function generatePageStructure(): HTMLElement {
  const mainDiv = document.createElement("div");
  mainDiv.className = "strigo-main";

  document.body.appendChild(mainDiv);
  return mainDiv;
}

export function appendCssFile(params: AppendCSSFileParams) {
  const { url, parentElement } = params;
  const cssElement = document.createElement("link");
  cssElement.rel = "stylesheet";
  cssElement.href = url;
  parentElement.appendChild(cssElement);
}

export function appendIFrame(params: AppendIframeParams) {
  const { url, parentElement, classNames, id } = params;
  const iframe = document.createElement("iframe");
  iframe.classList.add(...classNames);
  iframe.id = id;
  iframe.src = url;

  parentElement.appendChild(iframe);
  return iframe;
}

export function reloadPage(): void {
  location.reload();
}

export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function getSplitMaxSizes(): number[] {
  if (isMobile()) {
    return [window.screen.width, window.screen.width];
  }
  return [window.screen.width / 2, window.screen.width];
}

export function getSplitMinSizes(): number[] {
  if (isMobile()) {
    return [0, 0];
  }
  return [window.screen.width * 0.25, 0];
}

export function isIframeSupported(): boolean {
  const req = new XMLHttpRequest();
  req.open("GET", window.document.location.href, false);
  req.send(null);
  const headers = req.getAllResponseHeaders().toLowerCase();
  const headersArray = headers.split("\r\n");
  for (const header of headersArray) {
    if (header.includes("x-frame-options")) {
      const headerSplitted = header.split(":");
      if (headerSplitted && headerSplitted.length > 1) {
        return !(headerSplitted[1].trim() === "deny");
      }
    }
  }
  return true;
}

export function createWidget(url: string) {
  const toggleFunction = function () {
    const widget = document.getElementById("strigo-widget");
    const isOpen = widget.classList.contains("slide-in");
    widget.classList.toggle("slide-in");

    setTimeout(() => {
      const arrow = document.getElementById("strigo-arrow");
      arrow.innerHTML = isOpen ? CHEVRON_LEFT : CHEVRON_RIGHT;
    }, 300);
  };

  const arrowDiv = document.createElement("div");
  arrowDiv.className = "strigo-arrow";
  arrowDiv.id = "strigo-arrow";
  arrowDiv.innerHTML = CHEVRON_RIGHT;

  // Create collapse button
  const collapseButton = document.createElement("div");
  collapseButton.className = "strigo-collapse-button";
  collapseButton.id = "strigo-toggle";

  collapseButton.appendChild(arrowDiv);

  // Create collapse div
  const collapseDiv = document.createElement("div");
  collapseDiv.className = "strigo-collapse-div";
  collapseDiv.onclick = () => {
    toggleFunction();
  };
  collapseDiv.appendChild(collapseButton);

  // Create widget iframe (strigo-app exercises)
  const strigoExercisesIframe = document.createElement("iframe");
  strigoExercisesIframe.className = "strigo-iframe";
  strigoExercisesIframe.id = "strigo-exercises";
  strigoExercisesIframe.src = url;

  // Create widget div (wrapper)
  const widgetDiv = document.createElement("div");
  widgetDiv.id = "strigo-widget";
  widgetDiv.appendChild(collapseDiv);
  widgetDiv.appendChild(strigoExercisesIframe);

  document.body.appendChild(widgetDiv);
  return strigoExercisesIframe;
}

export const removeWidget = function () {
  document.getElementById("strigo-widget").remove();
};

export const openWidget = function () {
  const widget = document.getElementById("strigo-widget");
  if (widget.classList.contains("slide-in")) {
    return;
  }
  widget.classList.add("slide-in");
};
