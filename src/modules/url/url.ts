import { BASE_STRIGO_URL } from "../../libro/consts";
import { LibroConfig, SiteConfig } from "../config/config.types";

function paramsToObject(
  entries: IterableIterator<[string, string]>
): Record<string, string> {
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

export function generateLibroIframeURL(config: LibroConfig): string {
  const { subDomain, token, webApiKey } = config;

  return `https://${subDomain}.${BASE_STRIGO_URL}/libro?token=${token.token}&webApiKey=${webApiKey}`;
}
