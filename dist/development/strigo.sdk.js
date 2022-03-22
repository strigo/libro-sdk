(() => {
  // src/strigo/consts.ts
  var INIT_SCRIPT_ID = "strigo-sdk";
  var BASE_STRIGO_URL = "strigo.io";
  var LOCAL_STRIGO_URL = "localhost:3000";
  var STRIGO_IFRAME_CLASSES = ["strigo-exercises"];
  var ORIGINAL_WEBSITE_IFRAME_CLASSES = ["orig-iframe"];
  var CHEVRON_RIGHT = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
`;
  var CHEVRON_LEFT = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg>
`;
  var CDN_BASE_PATH = "https://cdn.statically.io/gh/strigo/strigo-sdk";

  // src/modules/document/document.ts
  function getHeadElement() {
    return document.getElementsByTagName("head")[0];
  }
  function clearDoc() {
    document.open();
    document.close();
  }
  function generatePageStructure() {
    const mainDiv = document.createElement("div");
    mainDiv.className = "strigo-main";
    document.body.appendChild(mainDiv);
    return mainDiv;
  }
  function appendCssFile(params) {
    const { url, parentElement } = params;
    const cssElement = document.createElement("link");
    cssElement.rel = "stylesheet";
    cssElement.href = url;
    parentElement.appendChild(cssElement);
  }
  function appendIFrame(params) {
    const { url, parentElement, classNames, id } = params;
    const iframe = document.createElement("iframe");
    iframe.classList.add(...classNames);
    iframe.id = id;
    iframe.src = url;
    parentElement.appendChild(iframe);
    return iframe;
  }
  function reloadPage() {
    location.reload();
  }
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  function getSplitMaxSizes() {
    if (isMobile()) {
      return [window.screen.width, window.screen.width];
    }
    return [window.screen.width / 2, window.screen.width];
  }
  function getSplitMinSizes() {
    if (isMobile()) {
      return [0, 0];
    }
    return [window.screen.width * 0.25, 0];
  }
  function isIframeSupported() {
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
  function getWidgetFlavor(selectedWidgetFlavor) {
    if (selectedWidgetFlavor && selectedWidgetFlavor === "dynamic" /* DYNAMIC */) {
      return isIframeSupported() ? "iframe" /* IFRAME */ : "overlay" /* OVERLAY */;
    }
    return selectedWidgetFlavor;
  }
  function createWidget(url) {
    const toggleFunction = function() {
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
    const collapseButton = document.createElement("div");
    collapseButton.className = "strigo-collapse-button";
    collapseButton.id = "strigo-toggle";
    collapseButton.appendChild(arrowDiv);
    const collapseDiv = document.createElement("div");
    collapseDiv.className = "strigo-collapse-div";
    collapseDiv.onclick = () => {
      toggleFunction();
    };
    collapseDiv.appendChild(collapseButton);
    const strigoExercisesIframe = document.createElement("iframe");
    strigoExercisesIframe.className = "strigo-iframe";
    strigoExercisesIframe.id = "strigo-exercises";
    strigoExercisesIframe.src = url;
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "strigo-widget";
    widgetDiv.id = "strigo-widget";
    widgetDiv.appendChild(collapseDiv);
    widgetDiv.appendChild(strigoExercisesIframe);
    document.body.appendChild(widgetDiv);
    return strigoExercisesIframe;
  }
  var removeWidget = function() {
    document.getElementById("strigo-widget").remove();
  };
  var openWidget = function() {
    const widget = document.getElementById("strigo-widget");
    if (widget.classList.contains("slide-in")) {
      return;
    }
    widget.classList.add("slide-in");
  };

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
  function generateStrigoIframeURL(config) {
    const { subDomain, token, webApiKey, development } = config;
    return development ? `http://${LOCAL_STRIGO_URL}/academy/courses?token=${token.token}&webApiKey=${webApiKey}` : `https://${subDomain}.${BASE_STRIGO_URL}/academy/courses?token=${token.token}&webApiKey=${webApiKey}`;
  }
  function extractInitScriptParams() {
    const initScript = document.getElementById(INIT_SCRIPT_ID);
    return {
      webApiKey: initScript?.getAttribute("data-web-api-key") || "",
      subDomain: initScript?.getAttribute("data-subdomain") || "",
      selectedWidgetFlavor: initScript?.getAttribute("data-layout-flavor") || "dynamic" /* DYNAMIC */
    };
  }
  function generateCssURL(development, version) {
    if (development) {
      return `http://localhost:${"7005"}/styles/strigo.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo.min.css`;
    }
    return `${CDN_BASE_PATH}@latest/dist/production/styles/strigo.min.css`;
  }
  function generateWidgetCssURL(development, version) {
    if (development) {
      return `http://localhost:${"7005"}/styles/strigo-widget.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-widget.min.css`;
    }
    return `${CDN_BASE_PATH}@latest/dist/production/styles/strigo-widget.min.css`;
  }

  // services/logger.ts
  var Logger = {
    log(severity, message, context) {
      try {
        const enrichedMessage = `${new Date().toISOString()} - ${message}`;
        console[severity](enrichedMessage, context ? `
${JSON.stringify(context)}` : "");
      } catch (err) {
        console.log("Logging error:", err);
      }
    },
    debug(message, context = {}) {
      this.log("debug", message, context);
    },
    info(message, context = {}) {
      this.log("info", message, context);
    },
    warn(message, context = {}) {
      this.log("warn", message, context);
    },
    error(message, context = {}) {
      this.log("error", message, context);
    }
  };

  // src/modules/storage-utils/storage-utils.ts
  function getStorageData(storageType, storageName) {
    try {
      const value = JSON.parse(window[storageType].getItem(storageName));
      return value;
    } catch (error) {
      Logger.error(error);
      return null;
    }
  }
  function setupStorage(storageType, storageName, data) {
    try {
      window[storageType].setItem(storageName, JSON.stringify(data));
      return data;
    } catch (error) {
      Logger.error(error);
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
      Logger.error(error);
      return null;
    }
  }
  function clearStorage(storageType, storageName) {
    try {
      window[storageType].removeItem(storageName);
    } catch (error) {
      Logger.error(error);
    }
  }

  // src/modules/config/config.ts
  function setup(initialConfig) {
    const config = setupStorage("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */, initialConfig);
    return config;
  }
  function getConfig() {
    const config = getStorageData("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */);
    return config;
  }
  function clearConfig() {
    clearStorage("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */);
  }

  // src/modules/session/session.ts
  function setup2(initialSession) {
    const session = setupStorage("sessionStorage" /* SESSION_STORAGE */, "strigoSession" /* STRIGO_SESSION */, initialSession);
    return session;
  }
  function isPanelOpen() {
    return getSession()?.isPanelOpen;
  }
  function getWidgetFlavor2() {
    return getSession()?.widgetFlavor;
  }
  function getSession() {
    const session = getStorageData("sessionStorage" /* SESSION_STORAGE */, "strigoSession" /* STRIGO_SESSION */);
    return session;
  }
  function setSessionValue(key, value) {
    const session = setStorageValue("sessionStorage" /* SESSION_STORAGE */, "strigoSession" /* STRIGO_SESSION */, key, value);
    return session;
  }
  function getSessionValue(key) {
    const session = getSession();
    return session?.[key];
  }
  function clearSession() {
    clearStorage("sessionStorage" /* SESSION_STORAGE */, "strigoSession" /* STRIGO_SESSION */);
  }
  function setPanelClosed() {
    setSessionValue("isPanelOpen", false);
  }
  window.onunload = function() {
    setPanelClosed();
  };

  // src/modules/events-storage/events-storage.ts
  function init() {
    try {
      const currentEventsStorage = getEventsStorageData();
      if (currentEventsStorage) {
        Logger.debug("Events storage already exists");
        return currentEventsStorage;
      }
      const storageEvents = { events: [] };
      window["localStorage" /* LOCAL_STORAGE */].setItem("strigoEvents" /* STRIGO_EVENTS */, JSON.stringify(storageEvents));
      return storageEvents;
    } catch (error) {
      Logger.error("Init events storage error", { error });
      return null;
    }
  }
  function getEventsStorageData() {
    try {
      return JSON.parse(window["localStorage" /* LOCAL_STORAGE */].getItem("strigoEvents" /* STRIGO_EVENTS */));
    } catch (error) {
      Logger.error("Get events storage error", { error });
      return null;
    }
  }
  function pushEventValue(event) {
    try {
      const initialState = getEventsStorageData();
      if (!initialState) {
        throw new Error("Can't find initial state");
      }
      const prev = JSON.stringify(initialState);
      initialState.events.push(event);
      window["localStorage" /* LOCAL_STORAGE */].setItem("strigoEvents" /* STRIGO_EVENTS */, JSON.stringify(initialState));
      if (getWidgetFlavor2() === "overlay" /* OVERLAY */) {
        const event2 = new CustomEvent("overlay-widget-event" /* OVERLAY_WIDGET_EVENT */, {
          bubbles: true,
          detail: {
            key: "strigoEvents",
            oldValue: prev,
            newValue: JSON.stringify(initialState)
          }
        });
        window.dispatchEvent(event2);
      }
      return initialState;
    } catch (error) {
      Logger.error("Push event to storage error", { error });
      return null;
    }
  }
  function popEventValue() {
    try {
      const initialState = getEventsStorageData();
      if (!initialState) {
        throw new Error("Can't find events storage");
      }
      const event = initialState.events.pop();
      window["localStorage" /* LOCAL_STORAGE */].setItem("strigoEvents" /* STRIGO_EVENTS */, JSON.stringify(initialState));
      return event;
    } catch (error) {
      Logger.error("Pop event from storage error", { error });
      return null;
    }
  }
  function getEventValue() {
    try {
      const initialState = getEventsStorageData();
      if (!initialState) {
        throw new Error("Can't find events storage");
      }
      return initialState.events.pop();
    } catch (error) {
      Logger.error("Get event from storage error", { error });
      return null;
    }
  }

  // node_modules/split.js/dist/split.es.js
  var global = typeof window !== "undefined" ? window : null;
  var ssr = global === null;
  var document2 = !ssr ? global.document : void 0;
  var addEventListener = "addEventListener";
  var removeEventListener = "removeEventListener";
  var getBoundingClientRect = "getBoundingClientRect";
  var gutterStartDragging = "_a";
  var aGutterSize = "_b";
  var bGutterSize = "_c";
  var HORIZONTAL = "horizontal";
  var NOOP = function() {
    return false;
  };
  var calc = ssr ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(prefix) {
    var el = document2.createElement("div");
    el.style.cssText = "width:" + prefix + "calc(9px)";
    return !!el.style.length;
  }).shift() + "calc";
  var isString = function(v) {
    return typeof v === "string" || v instanceof String;
  };
  var elementOrSelector = function(el) {
    if (isString(el)) {
      var ele = document2.querySelector(el);
      if (!ele) {
        throw new Error("Selector " + el + " did not match a DOM element");
      }
      return ele;
    }
    return el;
  };
  var getOption = function(options, propName, def) {
    var value = options[propName];
    if (value !== void 0) {
      return value;
    }
    return def;
  };
  var getGutterSize = function(gutterSize, isFirst, isLast, gutterAlign) {
    if (isFirst) {
      if (gutterAlign === "end") {
        return 0;
      }
      if (gutterAlign === "center") {
        return gutterSize / 2;
      }
    } else if (isLast) {
      if (gutterAlign === "start") {
        return 0;
      }
      if (gutterAlign === "center") {
        return gutterSize / 2;
      }
    }
    return gutterSize;
  };
  var defaultGutterFn = function(i, gutterDirection) {
    var gut = document2.createElement("div");
    gut.className = "gutter gutter-" + gutterDirection;
    return gut;
  };
  var defaultElementStyleFn = function(dim, size, gutSize) {
    var style = {};
    if (!isString(size)) {
      style[dim] = calc + "(" + size + "% - " + gutSize + "px)";
    } else {
      style[dim] = size;
    }
    return style;
  };
  var defaultGutterStyleFn = function(dim, gutSize) {
    var obj;
    return obj = {}, obj[dim] = gutSize + "px", obj;
  };
  var Split = function(idsOption, options) {
    if (options === void 0)
      options = {};
    if (ssr) {
      return {};
    }
    var ids = idsOption;
    var dimension;
    var clientAxis;
    var position;
    var positionEnd;
    var clientSize;
    var elements;
    if (Array.from) {
      ids = Array.from(ids);
    }
    var firstElement = elementOrSelector(ids[0]);
    var parent = firstElement.parentNode;
    var parentStyle = getComputedStyle ? getComputedStyle(parent) : null;
    var parentFlexDirection = parentStyle ? parentStyle.flexDirection : null;
    var sizes = getOption(options, "sizes") || ids.map(function() {
      return 100 / ids.length;
    });
    var minSize = getOption(options, "minSize", 100);
    var minSizes = Array.isArray(minSize) ? minSize : ids.map(function() {
      return minSize;
    });
    var maxSize = getOption(options, "maxSize", Infinity);
    var maxSizes = Array.isArray(maxSize) ? maxSize : ids.map(function() {
      return maxSize;
    });
    var expandToMin = getOption(options, "expandToMin", false);
    var gutterSize = getOption(options, "gutterSize", 10);
    var gutterAlign = getOption(options, "gutterAlign", "center");
    var snapOffset = getOption(options, "snapOffset", 30);
    var snapOffsets = Array.isArray(snapOffset) ? snapOffset : ids.map(function() {
      return snapOffset;
    });
    var dragInterval = getOption(options, "dragInterval", 1);
    var direction = getOption(options, "direction", HORIZONTAL);
    var cursor = getOption(options, "cursor", direction === HORIZONTAL ? "col-resize" : "row-resize");
    var gutter = getOption(options, "gutter", defaultGutterFn);
    var elementStyle = getOption(options, "elementStyle", defaultElementStyleFn);
    var gutterStyle = getOption(options, "gutterStyle", defaultGutterStyleFn);
    if (direction === HORIZONTAL) {
      dimension = "width";
      clientAxis = "clientX";
      position = "left";
      positionEnd = "right";
      clientSize = "clientWidth";
    } else if (direction === "vertical") {
      dimension = "height";
      clientAxis = "clientY";
      position = "top";
      positionEnd = "bottom";
      clientSize = "clientHeight";
    }
    function setElementSize(el, size, gutSize, i) {
      var style = elementStyle(dimension, size, gutSize, i);
      Object.keys(style).forEach(function(prop) {
        el.style[prop] = style[prop];
      });
    }
    function setGutterSize(gutterElement, gutSize, i) {
      var style = gutterStyle(dimension, gutSize, i);
      Object.keys(style).forEach(function(prop) {
        gutterElement.style[prop] = style[prop];
      });
    }
    function getSizes() {
      return elements.map(function(element) {
        return element.size;
      });
    }
    function getMousePosition(e) {
      if ("touches" in e) {
        return e.touches[0][clientAxis];
      }
      return e[clientAxis];
    }
    function adjust(offset) {
      var a = elements[this.a];
      var b = elements[this.b];
      var percentage = a.size + b.size;
      a.size = offset / this.size * percentage;
      b.size = percentage - offset / this.size * percentage;
      setElementSize(a.element, a.size, this[aGutterSize], a.i);
      setElementSize(b.element, b.size, this[bGutterSize], b.i);
    }
    function drag(e) {
      var offset;
      var a = elements[this.a];
      var b = elements[this.b];
      if (!this.dragging) {
        return;
      }
      offset = getMousePosition(e) - this.start + (this[aGutterSize] - this.dragOffset);
      if (dragInterval > 1) {
        offset = Math.round(offset / dragInterval) * dragInterval;
      }
      if (offset <= a.minSize + a.snapOffset + this[aGutterSize]) {
        offset = a.minSize + this[aGutterSize];
      } else if (offset >= this.size - (b.minSize + b.snapOffset + this[bGutterSize])) {
        offset = this.size - (b.minSize + this[bGutterSize]);
      }
      if (offset >= a.maxSize - a.snapOffset + this[aGutterSize]) {
        offset = a.maxSize + this[aGutterSize];
      } else if (offset <= this.size - (b.maxSize - b.snapOffset + this[bGutterSize])) {
        offset = this.size - (b.maxSize + this[bGutterSize]);
      }
      adjust.call(this, offset);
      getOption(options, "onDrag", NOOP)(getSizes());
    }
    function calculateSizes() {
      var a = elements[this.a].element;
      var b = elements[this.b].element;
      var aBounds = a[getBoundingClientRect]();
      var bBounds = b[getBoundingClientRect]();
      this.size = aBounds[dimension] + bBounds[dimension] + this[aGutterSize] + this[bGutterSize];
      this.start = aBounds[position];
      this.end = aBounds[positionEnd];
    }
    function innerSize(element) {
      if (!getComputedStyle) {
        return null;
      }
      var computedStyle = getComputedStyle(element);
      if (!computedStyle) {
        return null;
      }
      var size = element[clientSize];
      if (size === 0) {
        return null;
      }
      if (direction === HORIZONTAL) {
        size -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
      } else {
        size -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
      }
      return size;
    }
    function trimToMin(sizesToTrim) {
      var parentSize = innerSize(parent);
      if (parentSize === null) {
        return sizesToTrim;
      }
      if (minSizes.reduce(function(a, b) {
        return a + b;
      }, 0) > parentSize) {
        return sizesToTrim;
      }
      var excessPixels = 0;
      var toSpare = [];
      var pixelSizes = sizesToTrim.map(function(size, i) {
        var pixelSize = parentSize * size / 100;
        var elementGutterSize = getGutterSize(gutterSize, i === 0, i === sizesToTrim.length - 1, gutterAlign);
        var elementMinSize = minSizes[i] + elementGutterSize;
        if (pixelSize < elementMinSize) {
          excessPixels += elementMinSize - pixelSize;
          toSpare.push(0);
          return elementMinSize;
        }
        toSpare.push(pixelSize - elementMinSize);
        return pixelSize;
      });
      if (excessPixels === 0) {
        return sizesToTrim;
      }
      return pixelSizes.map(function(pixelSize, i) {
        var newPixelSize = pixelSize;
        if (excessPixels > 0 && toSpare[i] - excessPixels > 0) {
          var takenPixels = Math.min(excessPixels, toSpare[i] - excessPixels);
          excessPixels -= takenPixels;
          newPixelSize = pixelSize - takenPixels;
        }
        return newPixelSize / parentSize * 100;
      });
    }
    function stopDragging() {
      var self = this;
      var a = elements[self.a].element;
      var b = elements[self.b].element;
      if (self.dragging) {
        getOption(options, "onDragEnd", NOOP)(getSizes());
      }
      self.dragging = false;
      global[removeEventListener]("mouseup", self.stop);
      global[removeEventListener]("touchend", self.stop);
      global[removeEventListener]("touchcancel", self.stop);
      global[removeEventListener]("mousemove", self.move);
      global[removeEventListener]("touchmove", self.move);
      self.stop = null;
      self.move = null;
      a[removeEventListener]("selectstart", NOOP);
      a[removeEventListener]("dragstart", NOOP);
      b[removeEventListener]("selectstart", NOOP);
      b[removeEventListener]("dragstart", NOOP);
      a.style.userSelect = "";
      a.style.webkitUserSelect = "";
      a.style.MozUserSelect = "";
      a.style.pointerEvents = "";
      b.style.userSelect = "";
      b.style.webkitUserSelect = "";
      b.style.MozUserSelect = "";
      b.style.pointerEvents = "";
      self.gutter.style.cursor = "";
      self.parent.style.cursor = "";
      document2.body.style.cursor = "";
    }
    function startDragging(e) {
      if ("button" in e && e.button !== 0) {
        return;
      }
      var self = this;
      var a = elements[self.a].element;
      var b = elements[self.b].element;
      if (!self.dragging) {
        getOption(options, "onDragStart", NOOP)(getSizes());
      }
      e.preventDefault();
      self.dragging = true;
      self.move = drag.bind(self);
      self.stop = stopDragging.bind(self);
      global[addEventListener]("mouseup", self.stop);
      global[addEventListener]("touchend", self.stop);
      global[addEventListener]("touchcancel", self.stop);
      global[addEventListener]("mousemove", self.move);
      global[addEventListener]("touchmove", self.move);
      a[addEventListener]("selectstart", NOOP);
      a[addEventListener]("dragstart", NOOP);
      b[addEventListener]("selectstart", NOOP);
      b[addEventListener]("dragstart", NOOP);
      a.style.userSelect = "none";
      a.style.webkitUserSelect = "none";
      a.style.MozUserSelect = "none";
      a.style.pointerEvents = "none";
      b.style.userSelect = "none";
      b.style.webkitUserSelect = "none";
      b.style.MozUserSelect = "none";
      b.style.pointerEvents = "none";
      self.gutter.style.cursor = cursor;
      self.parent.style.cursor = cursor;
      document2.body.style.cursor = cursor;
      calculateSizes.call(self);
      self.dragOffset = getMousePosition(e) - self.end;
    }
    sizes = trimToMin(sizes);
    var pairs = [];
    elements = ids.map(function(id, i) {
      var element = {
        element: elementOrSelector(id),
        size: sizes[i],
        minSize: minSizes[i],
        maxSize: maxSizes[i],
        snapOffset: snapOffsets[i],
        i
      };
      var pair;
      if (i > 0) {
        pair = {
          a: i - 1,
          b: i,
          dragging: false,
          direction,
          parent
        };
        pair[aGutterSize] = getGutterSize(gutterSize, i - 1 === 0, false, gutterAlign);
        pair[bGutterSize] = getGutterSize(gutterSize, false, i === ids.length - 1, gutterAlign);
        if (parentFlexDirection === "row-reverse" || parentFlexDirection === "column-reverse") {
          var temp = pair.a;
          pair.a = pair.b;
          pair.b = temp;
        }
      }
      if (i > 0) {
        var gutterElement = gutter(i, direction, element.element);
        setGutterSize(gutterElement, gutterSize, i);
        pair[gutterStartDragging] = startDragging.bind(pair);
        gutterElement[addEventListener]("mousedown", pair[gutterStartDragging]);
        gutterElement[addEventListener]("touchstart", pair[gutterStartDragging]);
        parent.insertBefore(gutterElement, element.element);
        pair.gutter = gutterElement;
      }
      setElementSize(element.element, element.size, getGutterSize(gutterSize, i === 0, i === ids.length - 1, gutterAlign), i);
      if (i > 0) {
        pairs.push(pair);
      }
      return element;
    });
    function adjustToMin(element) {
      var isLast = element.i === pairs.length;
      var pair = isLast ? pairs[element.i - 1] : pairs[element.i];
      calculateSizes.call(pair);
      var size = isLast ? pair.size - element.minSize - pair[bGutterSize] : element.minSize + pair[aGutterSize];
      adjust.call(pair, size);
    }
    elements.forEach(function(element) {
      var computedSize = element.element[getBoundingClientRect]()[dimension];
      if (computedSize < element.minSize) {
        if (expandToMin) {
          adjustToMin(element);
        } else {
          element.minSize = computedSize;
        }
      }
    });
    function setSizes(newSizes) {
      var trimmed = trimToMin(newSizes);
      trimmed.forEach(function(newSize, i) {
        if (i > 0) {
          var pair = pairs[i - 1];
          var a = elements[pair.a];
          var b = elements[pair.b];
          a.size = trimmed[i - 1];
          b.size = newSize;
          setElementSize(a.element, a.size, pair[aGutterSize], a.i);
          setElementSize(b.element, b.size, pair[bGutterSize], b.i);
        }
      });
    }
    function destroy(preserveStyles, preserveGutter) {
      pairs.forEach(function(pair) {
        if (preserveGutter !== true) {
          pair.parent.removeChild(pair.gutter);
        } else {
          pair.gutter[removeEventListener]("mousedown", pair[gutterStartDragging]);
          pair.gutter[removeEventListener]("touchstart", pair[gutterStartDragging]);
        }
        if (preserveStyles !== true) {
          var style = elementStyle(dimension, pair.a.size, pair[aGutterSize]);
          Object.keys(style).forEach(function(prop) {
            elements[pair.a].element.style[prop] = "";
            elements[pair.b].element.style[prop] = "";
          });
        }
      });
    }
    return {
      setSizes,
      getSizes,
      collapse: function collapse(i) {
        adjustToMin(elements[i]);
      },
      destroy,
      parent,
      pairs
    };
  };
  var split_es_default = Split;

  // src/modules/loader/loader.ts
  var SPINNER = `
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
  function addLoader() {
    setSessionValue("isLoading", true);
    const loaderDiv = document.createElement("div");
    loaderDiv.className = "strigo-loader";
    loaderDiv.innerHTML = SPINNER;
    document.body.appendChild(loaderDiv);
  }
  function hideLoader() {
    switch (getWidgetFlavor2()) {
      case "iframe" /* IFRAME */: {
        const preloader = document.querySelector(".strigo-loader");
        const interval = setInterval(() => {
          if (!preloader.style.opacity) {
            preloader.style.opacity = "1";
          }
          const opacity = parseFloat(preloader.style.opacity);
          if (opacity > 0) {
            preloader.style.opacity = (opacity - 0.1).toString();
          } else {
            setSessionValue("isLoading", false);
            preloader.style.pointerEvents = "none";
            clearInterval(interval);
          }
        }, 200);
        break;
      }
      case "overlay" /* OVERLAY */: {
        setSessionValue("isLoading", false);
        document.getElementById("strigo-widget").classList.add("slide-in");
        document.getElementById("strigo-widget").classList.add("loaded");
        break;
      }
      default: {
        Logger.error("widgetFlavor is not supported - loader");
        break;
      }
    }
  }
  function isLoading() {
    return !!getSessionValue("isLoading");
  }

  // src/modules/events-sender/events-sender.ts
  function postEventMessage() {
    const newEvent = getEventValue();
    if (newEvent) {
      Logger.info("Posting event", newEvent);
      window.frames[0].postMessage(newEvent, "*");
      const poppedEvent = popEventValue();
      if (newEvent.eventName !== poppedEvent.eventName) {
        console.error("Events storage error: popped event doesn't match new event", { newEvent, poppedEvent });
      }
    }
  }
  function postAllEventMessages() {
    while (getEventValue()) {
      postEventMessage();
    }
  }

  // src/modules/widgets/overlay.ts
  var overlay_default = {
    init: function() {
      Logger.info("widget - overlay - init");
      const config = getConfig();
      if (config) {
        window.Strigo.setup(config);
      }
    },
    setup: function({ development, version }) {
      Logger.info("widget - overlay - setup");
      appendCssFile({
        parentElement: getHeadElement(),
        url: generateWidgetCssURL(development, version)
      });
      const exercisesIframe = createWidget(generateStrigoIframeURL(getConfig()));
      initStrigoAppEventListeners(exercisesIframe);
      initHostEventListeners();
    },
    shutdown: function() {
      Logger.info("widget - overlay - shutdown");
      removeWidget();
      setPanelClosed();
    },
    open: function() {
      openWidget();
    }
  };

  // src/modules/listeners/listeners.ts
  function storageChanged({ key, oldValue, newValue }) {
    if (key !== "strigoEvents" /* STRIGO_EVENTS */) {
      return;
    }
    const newEventsStorage = JSON.parse(newValue)?.events;
    const oldEventsStorage = JSON.parse(oldValue)?.events;
    const difference = newEventsStorage.filter(({ eventName: newEventName }) => !oldEventsStorage.some(({ eventName: oldEventName }) => newEventName === oldEventName));
    if (difference.length > 0) {
      postEventMessage();
    }
  }
  function initHostEventListeners() {
    window.addEventListener("message" /* MESSAGE */, (ev) => {
      if (!ev || !ev.data)
        return;
      switch (ev.data) {
        case "close" /* SHUTDOWN */: {
          window.Strigo && window.Strigo.shutdown();
          break;
        }
        case "challenge-success" /* CHALLENGE_SUCCESS */: {
          Logger.info("Challenge event success received");
          if (getWidgetFlavor2() === "overlay" /* OVERLAY */) {
            overlay_default.open();
          }
          break;
        }
        default: {
          break;
        }
      }
    }, false);
    switch (getWidgetFlavor2()) {
      case "iframe" /* IFRAME */: {
        window.addEventListener("storage" /* STORAGE */, storageChanged);
        break;
      }
      case "overlay" /* OVERLAY */: {
        window.addEventListener("overlay-widget-event" /* OVERLAY_WIDGET_EVENT */, (customEvent) => {
          storageChanged(customEvent?.detail);
        });
        break;
      }
      default: {
        break;
      }
    }
  }
  function initStrigoAppEventListeners(iframeElement) {
    iframeElement.addEventListener("load", () => {
      isLoading() && hideLoader();
      postAllEventMessages();
    });
  }

  // src/modules/widgets/iframe.ts
  var iframe_default = {
    init: function() {
      let SDKType;
      if (isPanelOpen()) {
        Logger.info("SUBSCRIBER SDK");
        SDKType = "CHILD" /* CHILD */;
        window.dispatchEvent(new Event("strigo-opened"));
      } else {
        Logger.info("HOST SDK");
        SDKType = "PARENT" /* PARENT */;
        const config = getConfig();
        if (config) {
          window.Strigo.setup(config);
        }
      }
      return SDKType;
    },
    setup: function({ development, version }) {
      Logger.info("widget - iframe - setup");
      clearDoc();
      appendCssFile({
        parentElement: getHeadElement(),
        url: generateCssURL(development, version)
      });
      addLoader();
      const mainDiv = generatePageStructure();
      const exercisesIframe = appendIFrame({
        parentElement: mainDiv,
        url: generateStrigoIframeURL(getConfig()),
        classNames: STRIGO_IFRAME_CLASSES,
        id: "strigo-exercises"
      });
      appendIFrame({
        parentElement: mainDiv,
        url: getConfig().initSite.href,
        classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES,
        id: "original-site"
      });
      split_es_default(["#strigo-exercises", "#original-site"], {
        sizes: [25, 75],
        maxSize: getSplitMaxSizes(),
        minSize: getSplitMinSizes(),
        gutterSize: 2
      });
      initStrigoAppEventListeners(exercisesIframe);
      initHostEventListeners();
    },
    shutdown: function() {
      Logger.info("widget - iframe - shutdown");
      reloadPage();
    }
  };

  // src/strigo/index.ts
  var Strigo;
  ((Strigo2) => {
    function init2() {
      Logger.info("init called");
      init();
      if (window.Strigo?.initialized) {
        return;
      }
      window.Strigo.initialized = true;
      switch (getWidgetFlavor2()) {
        case "iframe" /* IFRAME */: {
          Strigo2.SDKType = iframe_default.init();
          break;
        }
        case "overlay" /* OVERLAY */: {
          Strigo2.SDKType = "OVERLAY" /* OVERLAY */;
          overlay_default.init();
          break;
        }
        default:
          break;
      }
    }
    Strigo2.init = init2;
    function setup3(data) {
      if (Strigo2.SDKType === "CHILD" /* CHILD */ || Strigo2.SDKType === "OVERLAY" /* OVERLAY */ && isPanelOpen()) {
        Logger.info("panel is already opened");
        return;
      }
      Logger.info("setup started");
      const { email, token, development = false, version } = data;
      const { webApiKey, subDomain, selectedWidgetFlavor } = extractInitScriptParams();
      if (!development && (!email || !token || !webApiKey || !subDomain || !selectedWidgetFlavor)) {
        Logger.error("Please provide setup data");
        return;
      }
      setup({
        email,
        initSite: getUrlData(),
        token,
        webApiKey,
        subDomain,
        development,
        version,
        selectedWidgetFlavor
      });
      const widgetFlavor = getWidgetFlavor(selectedWidgetFlavor);
      setup2({
        currentUrl: getConfig().initSite.href,
        isPanelOpen: true,
        isLoading: true,
        widgetFlavor
      });
      switch (widgetFlavor) {
        case "iframe" /* IFRAME */: {
          iframe_default.setup({
            version,
            development
          });
          break;
        }
        case "overlay" /* OVERLAY */: {
          overlay_default.setup({
            version,
            development
          });
          break;
        }
        default: {
          Logger.error("widgetFlavor is not supported - setup");
          break;
        }
      }
      Logger.info("setup finished");
    }
    Strigo2.setup = setup3;
    function shutdown() {
      Logger.info("shutdown called");
      if (Strigo2.SDKType === "CHILD" /* CHILD */) {
        return window.parent.postMessage("close", "*");
      }
      const widgetFlavor = getWidgetFlavor2();
      clearConfig();
      clearSession();
      switch (widgetFlavor) {
        case "iframe" /* IFRAME */: {
          iframe_default.shutdown();
          break;
        }
        case "overlay" /* OVERLAY */: {
          overlay_default.shutdown();
          break;
        }
        default: {
          Logger.error("widgetFlavor is not supported");
          break;
        }
      }
    }
    Strigo2.shutdown = shutdown;
    function sendEvent(eventName) {
      pushEventValue({ eventName });
      Logger.debug("sendEvent called", { eventName });
    }
    Strigo2.sendEvent = sendEvent;
  })(Strigo || (Strigo = {}));

  // src/strigo.sdk.ts
  window.Strigo = Strigo;
  window.Strigo.init();
})();
