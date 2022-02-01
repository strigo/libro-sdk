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

export function appendCssFile(params: AppendCSSFileParams) {
  const { url, parentElement } = params;
  const cssElement = document.createElement("link");
  cssElement.rel = "stylesheet";
  cssElement.href = url;
  parentElement.appendChild(cssElement);
}

export function appendIFrame(params: AppendIframeParams) {
  const { url, parentElement, classNames } = params;
  const iframe = document.createElement("iframe");
  iframe.classList.add(...classNames);
  iframe.src = url;

  parentElement.appendChild(iframe);
}

export function reloadPage(): void {
  location.reload();
}
