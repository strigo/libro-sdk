import { BASE_STRIGO_URL, CDN_BASE_PATH, INIT_SCRIPT_ID, LOCAL_STRIGO_URL } from "../../strigo/consts";
import { StrigoConfig, SiteConfig } from "../config/config.types";
import { WIDGET_FLAVORS } from "../session/session.types";
import { InitScriptParams } from "./url.types";

function paramsToObject(entries: IterableIterator<[string, string]>): Record<string, string> {
  const result = {};
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

export function getUrlData(): SiteConfig {
  const { host, pathname, href, origin, search } = window.location;
  return {
    host,
    pathName: pathname,
    href,
    origin,
    search,
    params: extractUrlParams(search)
  };
}

export function extractUrlParams(search: string): Record<string, string> {
  // TODO: Add polyfill for older browsers
  const urlParams = new URLSearchParams(search);
  const entries = urlParams.entries();
  return paramsToObject(entries);
}

export function generateStrigoIframeURL(config: StrigoConfig): string {
  const { subDomain, token, webApiKey, development } = config;

  return development
    ? `http://${LOCAL_STRIGO_URL}/academy/courses?token=${token.token}&webApiKey=${webApiKey}`
    : `https://${subDomain}.${BASE_STRIGO_URL}/academy/courses?token=${token.token}&webApiKey=${webApiKey}`;
}

export function extractInitScriptParams(): InitScriptParams {
  const initScript = document.getElementById(INIT_SCRIPT_ID);
  return {
    webApiKey: initScript?.getAttribute("data-web-api-key") || "",
    subDomain: initScript?.getAttribute("data-subdomain") || "",
    selectedWidgetFlavor: (initScript?.getAttribute("data-layout-flavor") as WIDGET_FLAVORS) || WIDGET_FLAVORS.DYNAMIC
  };
}

export function generateCssURL(development: boolean, version?: string) {
  if (development) {
    return `http://localhost:${SDK_HOSTING_PORT}/styles/strigo.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo.min.css`;
}

export function generateWidgetCssURL(development: boolean, version?: string) {
  if (development) {
    return `http://localhost:${SDK_HOSTING_PORT}/styles/strigo-widget.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-widget.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-widget.min.css`;
}
