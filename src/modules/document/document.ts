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
}

export function reloadPage(): void {
  location.reload();
}
