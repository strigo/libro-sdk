(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/modules/document/document.ts
  function getHeadElement() {
    return document.getElementsByTagName("head")[0];
  }
  function getBodyElement() {
    return document.getElementsByTagName("body")[0];
  }
  function clearDoc() {
    document.open();
    document.close();
  }
  function appendCssFile(params) {
    const { url, parentElement } = params;
    const cssElement = document.createElement("link");
    cssElement.rel = "stylesheet";
    cssElement.href = url;
    parentElement.appendChild(cssElement);
  }
  function appendIFrame(params) {
    const { url, parentElement, classNames } = params;
    const iframe = document.createElement("iframe");
    iframe.classList.add(...classNames);
    iframe.src = url;
    parentElement.appendChild(iframe);
  }
  function reloadPage() {
    location.reload();
  }

  // src/libro/consts.ts
  var BASE_STRIGO_URL = "strigo.io";
  var LOCAL_STRIGO_URL = "localhost:3000";
  var CSS_URL = "https://libro-demo.web.app/assets/css/strigo.css";
  var LIBRO_IFRAME_CLASSES = ["strigo-exercises"];
  var ORIGINAL_WEBSITE_IFRAME_CLASSES = ["orig-iframe"];

  // src/modules/url/url.ts
  function paramsToObject(entries) {
    const result = {};
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  }
  function getUrlData() {
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
  function extractUrlParams(search) {
    const urlParams = new URLSearchParams(search);
    const entries = urlParams.entries();
    return paramsToObject(entries);
  }
  function generateLibroIframeURL(config) {
    const { subDomain, token, webApiKey, development } = config;
    return development ? `http://${LOCAL_STRIGO_URL}/libro?token=${token.token}&webApiKey=${webApiKey}` : `https://${subDomain}.${BASE_STRIGO_URL}/libro?token=${token.token}&webApiKey=${webApiKey}`;
  }

  // src/modules/storage-utils/storage-utils.ts
  function getStorageData(storageType, storageName) {
    try {
      const value = JSON.parse(window[storageType].getItem(storageName));
      return value;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  function setupStorage(storageType, storageName, data) {
    try {
      window[storageType].setItem(storageName, JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  function setStorageValue(storageType, storageName, key, value) {
    try {
      const initialState = getStorageData(storageType, storageName);
      if (!initialState) {
        throw new Error("Can't find initial state");
      }
      const newState = {
        ...initialState,
        [key]: value
      };
      window[storageType].setItem(storageName, JSON.stringify(newState));
      return newState;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  function clearStorage(storageType, storageName) {
    try {
      window[storageType].removeItem(storageName);
    } catch (error) {
      console.log(error);
    }
  }

  // src/modules/config/config.ts
  function init() {
    const config = getStorageData("localStorage" /* LOCAL_STORAGE */, "libroConfig" /* LIBRO_CONFIG */);
    return config;
  }
  function setup(initialConfig) {
    const config = setupStorage("localStorage" /* LOCAL_STORAGE */, "libroConfig" /* LIBRO_CONFIG */, initialConfig);
    return config;
  }
  function getConfig() {
    const config = getStorageData("localStorage" /* LOCAL_STORAGE */, "libroConfig" /* LIBRO_CONFIG */);
    return config;
  }
  function clearConfig() {
    clearStorage("localStorage" /* LOCAL_STORAGE */, "libroConfig" /* LIBRO_CONFIG */);
  }

  // src/modules/session/session.ts
  var session_exports = {};
  __export(session_exports, {
    clearSession: () => clearSession,
    getSession: () => getSession,
    init: () => init2,
    isPanelOpen: () => isPanelOpen,
    setSessionValue: () => setSessionValue,
    setup: () => setup2
  });
  function init2() {
    const session = getStorageData("sessionStorage" /* SESSION_STORAGE */, "libroSession" /* LIBRO_SESSION */);
    if (!session) {
    }
    return session;
  }
  function setup2(initialSession) {
    const session = setupStorage("sessionStorage" /* SESSION_STORAGE */, "libroSession" /* LIBRO_SESSION */, initialSession);
    return session;
  }
  function isPanelOpen() {
    return getSession()?.isPanelOpen;
  }
  function getSession() {
    const session = getStorageData("sessionStorage" /* SESSION_STORAGE */, "libroSession" /* LIBRO_SESSION */);
    return session;
  }
  function setSessionValue(key, value) {
    const session = setStorageValue("sessionStorage" /* SESSION_STORAGE */, "libroSession" /* LIBRO_SESSION */, key, value);
    return session;
  }
  function clearSession() {
    clearStorage("sessionStorage" /* SESSION_STORAGE */, "libroSession" /* LIBRO_SESSION */);
  }
  window.onunload = function() {
    clearStorage("sessionStorage" /* SESSION_STORAGE */, "libroSession" /* LIBRO_SESSION */);
  };

  // src/libro/index.ts
  var Libro;
  ((Libro2) => {
    function init3() {
      init();
      init2();
      if (session_exports && isPanelOpen()) {
        Libro2.SDKType = "SUBSCRIBER" /* SUBSCRIBER */;
      } else {
        Libro2.SDKType = "HOST" /* HOST */;
      }
      console.log("init called");
    }
    Libro2.init = init3;
    function setup3(data) {
      if (Libro2.SDKType === "SUBSCRIBER" /* SUBSCRIBER */) {
        return;
      }
      console.log("setup started");
      const { email, token, webApiKey, subDomain, development = false } = data;
      if (!development && (!email || !token || !webApiKey || !subDomain)) {
        console.log("Please provide setup data");
        return;
      }
      setup({
        email,
        initSite: getUrlData(),
        token,
        webApiKey,
        subDomain,
        development
      });
      clearDoc();
      appendCssFile({
        parentElement: getHeadElement(),
        url: CSS_URL
      });
      appendIFrame({
        parentElement: getBodyElement(),
        url: generateLibroIframeURL(getConfig()),
        classNames: LIBRO_IFRAME_CLASSES
      });
      appendIFrame({
        parentElement: getBodyElement(),
        url: getConfig().initSite.href,
        classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES
      });
      setup2({
        currentUrl: getConfig().initSite.href,
        isPanelOpen: true
      });
      console.log("setup finished");
    }
    Libro2.setup = setup3;
    function shutdown() {
      if (Libro2.SDKType === "SUBSCRIBER" /* SUBSCRIBER */) {
        clearConfig();
        clearSession();
        reloadPage();
      }
      console.log("shutdown called");
    }
    Libro2.shutdown = shutdown;
    function sendEvent() {
      console.log("sendEvent called");
    }
    Libro2.sendEvent = sendEvent;
  })(Libro || (Libro = {}));

  // src/libro.sdk.ts
  window.LibroSDK = Libro;
  window.LibroSDK.init();
})();
