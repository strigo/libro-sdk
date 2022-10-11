import {
  ASSESSMENT_RECORDER_URL,
  BASE_STRIGO_URL,
  CDN_BASE_PATH,
  INIT_SCRIPT_ID,
  LOCAL_STRIGO_URL,
  DEFAULT_ASSESSMENT_RECORDER_CSS_VERSION,
  LOCAL_STRIGO_PREVIEW_URL,
} from '../../strigo/consts';
import { StrigoConfig, SiteConfig } from '../config/config.types';
import { WidgetFlavors } from '../widgets/widget.types';
import {
  ASSESSMENT_RECORDER_ID_PARAM,
  ASSESSMENT_RECORDER_PARAM,
} from '../assessment-recorder/assessment-recorder.types';

import { InitScriptParams } from './url.types';

const STRIGO_CHILD_IFRAME_PARAM = 'strigoChildIframe';

function paramsToObject(entries: IterableIterator<[string, string]>): Record<string, string> {
  const result = {};

  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }

  return result;
}

export function extractUrlParams(search: string): Record<string, string> {
  // TODO: Add polyfill for older browsers
  const urlParams = new URLSearchParams(search);
  const entries = urlParams.entries();

  return paramsToObject(entries);
}

export function getUrlData(): SiteConfig {
  const { host, pathname, href, origin, search } = window.location;

  return {
    host,
    pathName: pathname,
    href,
    origin,
    search,
    params: extractUrlParams(search),
  };
}

export function generateStrigoIframeURL(config: StrigoConfig, isPreview: boolean): string {
  const { subDomain, user, webApiKey } = config;
  const localStrigoUrl = isPreview ? LOCAL_STRIGO_PREVIEW_URL : LOCAL_STRIGO_URL;
  const prodStrigoUrl = isPreview
    ? `https://academy-preview.${BASE_STRIGO_URL}`
    : `https://${subDomain}.${BASE_STRIGO_URL}`;

  const strigoUrlPrefix = window.Strigo.isDevelopment() ? localStrigoUrl : prodStrigoUrl;
  const strigoUrl = new URL(`${strigoUrlPrefix}/academy/courses`);

  strigoUrl.searchParams.set('token', user.token.token);
  strigoUrl.searchParams.set('webApiKey', webApiKey);

  return strigoUrl.toString();
}

export function generateStrigoChildIframeURL(url: string): string {
  const currentUrl = new URL(url);

  currentUrl.searchParams.set(STRIGO_CHILD_IFRAME_PARAM, 'true');

  return currentUrl.toString();
}

export function isStrigoChildIframe(): boolean {
  return window.location.search.includes(STRIGO_CHILD_IFRAME_PARAM);
}

export function removeStrigoChildIframeParam(): void {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  searchParams.delete(STRIGO_CHILD_IFRAME_PARAM);
  url.search = searchParams.toString();
  window.history.replaceState(window.history.state, '', url);
}

export function extractInitScriptParams(): InitScriptParams {
  const initScript = document.getElementById(INIT_SCRIPT_ID);

  return {
    webApiKey: initScript?.getAttribute('data-web-api-key') || '',
    subDomain: initScript?.getAttribute('data-subdomain') || '',
    selectedWidgetFlavor: (initScript?.getAttribute('data-layout-flavor') as WidgetFlavors) || WidgetFlavors.DYNAMIC,
  };
}

export function generateCssURL(version?: string): string {
  if (window.Strigo.isDevelopment()) {
    return `${SDK_LOCAL_URL}/styles/strigo.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo.min.css`;
}

export function generateWidgetCssURL(version?: string): string {
  if (window.Strigo.isDevelopment()) {
    return `${SDK_LOCAL_URL}/styles/strigo-widget.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-widget.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-widget.min.css`;
}

export function generateAcademyHatCssURL(version?: string): string {
  if (window.Strigo.isDevelopment()) {
    return `${SDK_LOCAL_URL}/styles/strigo-academy-hat.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-academy-hat.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-academy-hat.min.css`;
}

export function generateRecorderCssURL(version?: string): string {
  if (window.Strigo.isDevelopment()) {
    return `${SDK_LOCAL_URL}/styles/strigo-assessment-recorder.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-assessment-recorder.min.css`;
  }

  return (
    `${CDN_BASE_PATH}@${DEFAULT_ASSESSMENT_RECORDER_CSS_VERSION}` +
    `/dist/production/styles/strigo-assessment-recorder.min.css`
  );
}

export function generateAssessmentRecorderURL(): string {
  return window.Strigo.isDevelopment() ? RECORDER_LOCAL_URL : ASSESSMENT_RECORDER_URL;
}

export function getURLWithoutStrigoRecorderParams(url): string {
  const capturedElementUrl = new URL(url);
  const searchParams = new URLSearchParams(capturedElementUrl.search);
  searchParams.delete(ASSESSMENT_RECORDER_ID_PARAM);
  searchParams.delete(ASSESSMENT_RECORDER_PARAM);
  capturedElementUrl.search = searchParams.toString();

  return capturedElementUrl.toString();
}
