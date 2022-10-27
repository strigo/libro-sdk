import { Strigo } from './strigo';

window.Strigo = Strigo;

// Init the SDK only for a code not running in a Chrome extension (content script, background page, etc.)
if (!(window.chrome && chrome.runtime && chrome.runtime.id)) {
  window.Strigo.init({ isExtension: false });
}
