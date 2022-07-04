import {
  ASSESSMENT_RECORDER_URL,
  BASE_STRIGO_URL,
  CDN_BASE_PATH,
  INIT_SCRIPT_ID,
  LOCAL_STRIGO_URL,
} from '../../strigo/consts';
import { StrigoConfig, SiteConfig } from '../config/config.types';
import { WIDGET_FLAVORS } from '../widgets/widget.types';

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

export function generateStrigoIframeURL(config: StrigoConfig): string {
  const { subDomain, user, webApiKey, development } = config;

  return development
    ? `http://${LOCAL_STRIGO_URL}/academy/courses?token=${user.token.token}&webApiKey=${webApiKey}`
    : `https://${subDomain}.${BASE_STRIGO_URL}/academy/courses?token=${user.token.token}&webApiKey=${webApiKey}`;
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
    selectedWidgetFlavor: (initScript?.getAttribute('data-layout-flavor') as WIDGET_FLAVORS) || WIDGET_FLAVORS.DYNAMIC,
  };
}

export function generateCssURL(development: boolean, version?: string): string {
  if (development) {
    return `http://localhost:${SDK_HOSTING_PORT}/styles/strigo.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo.min.css`;
}

export function generateWidgetCssURL(development: boolean, version?: string): string {
  if (development) {
    return `http://localhost:${SDK_HOSTING_PORT}/styles/strigo-widget.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-widget.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-widget.min.css`;
}

export function generateAcademyHatCssURL(development: boolean, version?: string): string {
  if (development) {
    return `http://localhost:${SDK_HOSTING_PORT}/styles/strigo-academy-hat.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-academy-hat.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-academy-hat.min.css`;
}

export function generateRecorderCssURL(development: boolean, version?: string): string {
  if (development) {
    return `http://localhost:${SDK_HOSTING_PORT}/styles/strigo-assessment-recorder.css`;
  }

  if (version) {
    return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-assessment-recorder.min.css`;
  }

  return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-assessment-recorder.min.css`;
}

export function generateAssessmentRecorderURL(development: boolean): string {
  return development ? `http://localhost:${RECORDER_HOSTING_PORT}` : ASSESSMENT_RECORDER_URL;
}

export function isRecordingUrlParamExists(): boolean {
  const { search } = window.location;
  const urlParams = extractUrlParams(search);

  return 'strigoAssessmentRecorder' in urlParams;
}

export function isDevelopment(): boolean {
  const { search } = window.location;
  const urlParams = extractUrlParams(search);

  return 'development' in urlParams;
}

export function isExtension(): boolean {
  return EXTENSION === 'true';
}
