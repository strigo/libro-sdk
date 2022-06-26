(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/html2canvas/dist/html2canvas.js
  var require_html2canvas = __commonJS({
    "node_modules/html2canvas/dist/html2canvas.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.html2canvas = factory());
      })(exports, function() {
        "use strict";
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
              s = arguments[i2];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e2) {
                reject(e2);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e2) {
                reject(e2);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        function __generator(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f2, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e2) {
                op = [6, e2];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }
        function __spreadArray(to, from, pack2) {
          if (pack2 || arguments.length === 2)
            for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
              if (ar || !(i2 in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i2);
                ar[i2] = from[i2];
              }
            }
          return to.concat(ar || from);
        }
        var Bounds = function() {
          function Bounds2(left, top, width, height) {
            this.left = left;
            this.top = top;
            this.width = width;
            this.height = height;
          }
          Bounds2.prototype.add = function(x, y, w, h) {
            return new Bounds2(this.left + x, this.top + y, this.width + w, this.height + h);
          };
          Bounds2.fromClientRect = function(context, clientRect) {
            return new Bounds2(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
          };
          Bounds2.fromDOMRectList = function(context, domRectList) {
            var domRect = Array.from(domRectList).find(function(rect) {
              return rect.width !== 0;
            });
            return domRect ? new Bounds2(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds2.EMPTY;
          };
          Bounds2.EMPTY = new Bounds2(0, 0, 0, 0);
          return Bounds2;
        }();
        var parseBounds = function(context, node) {
          return Bounds.fromClientRect(context, node.getBoundingClientRect());
        };
        var parseDocumentSize = function(document3) {
          var body = document3.body;
          var documentElement = document3.documentElement;
          if (!body || !documentElement) {
            throw new Error("Unable to get document size");
          }
          var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
          var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
          return new Bounds(0, 0, width, height);
        };
        var toCodePoints$1 = function(str) {
          var codePoints = [];
          var i2 = 0;
          var length = str.length;
          while (i2 < length) {
            var value = str.charCodeAt(i2++);
            if (value >= 55296 && value <= 56319 && i2 < length) {
              var extra = str.charCodeAt(i2++);
              if ((extra & 64512) === 56320) {
                codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                codePoints.push(value);
                i2--;
              }
            } else {
              codePoints.push(value);
            }
          }
          return codePoints;
        };
        var fromCodePoint$1 = function() {
          var codePoints = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }
          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }
          var length = codePoints.length;
          if (!length) {
            return "";
          }
          var codeUnits = [];
          var index = -1;
          var result = "";
          while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
            }
            if (index + 1 === length || codeUnits.length > 16384) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
          lookup$2[chars$2.charCodeAt(i$2)] = i$2;
        }
        var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
          lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
        }
        var decode$1 = function(base642) {
          var bufferLength = base642.length * 0.75, len = base642.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
          if (base642[base642.length - 1] === "=") {
            bufferLength--;
            if (base642[base642.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
          for (i2 = 0; i2 < len; i2 += 4) {
            encoded1 = lookup$1$1[base642.charCodeAt(i2)];
            encoded2 = lookup$1$1[base642.charCodeAt(i2 + 1)];
            encoded3 = lookup$1$1[base642.charCodeAt(i2 + 2)];
            encoded4 = lookup$1$1[base642.charCodeAt(i2 + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        };
        var polyUint16Array$1 = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 2) {
            bytes.push(buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var polyUint32Array$1 = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 4) {
            bytes.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var UTRIE2_SHIFT_2$1 = 5;
        var UTRIE2_SHIFT_1$1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT$1 = 2;
        var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
        var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1;
        var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
        var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1;
        var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 2048 >> 6;
        var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
        var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
        var slice16$1 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32$1 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64$1 = function(base642, _byteLength) {
          var buffer = decode$1(base642);
          var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie$1 = function() {
          function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
          }
          Trie2.prototype.get = function(codePoint) {
            var ix;
            if (codePoint >= 0) {
              if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
                ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
              }
              if (codePoint <= 65535) {
                ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 55296 >> UTRIE2_SHIFT_2$1)];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
              }
              if (codePoint < this.highStart) {
                ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                ix = this.index[ix];
                ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
                ix = this.index[ix];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
              }
              if (codePoint <= 1114111) {
                return this.data[this.highValueIndex];
              }
            }
            return this.errorValue;
          };
          return Trie2;
        }();
        var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
          lookup$3[chars$3.charCodeAt(i$3)] = i$3;
        }
        var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
        var LETTER_NUMBER_MODIFIER = 50;
        var BK = 1;
        var CR$1 = 2;
        var LF$1 = 3;
        var CM = 4;
        var NL = 5;
        var WJ = 7;
        var ZW = 8;
        var GL = 9;
        var SP = 10;
        var ZWJ$1 = 11;
        var B2 = 12;
        var BA = 13;
        var BB = 14;
        var HY = 15;
        var CB = 16;
        var CL = 17;
        var CP = 18;
        var EX = 19;
        var IN = 20;
        var NS = 21;
        var OP = 22;
        var QU = 23;
        var IS = 24;
        var NU = 25;
        var PO = 26;
        var PR = 27;
        var SY = 28;
        var AI = 29;
        var AL = 30;
        var CJ = 31;
        var EB = 32;
        var EM = 33;
        var H2 = 34;
        var H3 = 35;
        var HL = 36;
        var ID = 37;
        var JL = 38;
        var JV = 39;
        var JT = 40;
        var RI$1 = 41;
        var SA = 42;
        var XX = 43;
        var ea_OP = [9001, 65288];
        var BREAK_MANDATORY = "!";
        var BREAK_NOT_ALLOWED$1 = "\xD7";
        var BREAK_ALLOWED$1 = "\xF7";
        var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
        var ALPHABETICS = [AL, HL];
        var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
        var SPACE$1 = [SP, ZW];
        var PREFIX_POSTFIX = [PR, PO];
        var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
        var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
        var HYPHEN = [HY, BA];
        var codePointsToCharacterClasses = function(codePoints, lineBreak2) {
          if (lineBreak2 === void 0) {
            lineBreak2 = "strict";
          }
          var types = [];
          var indices = [];
          var categories = [];
          codePoints.forEach(function(codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
              categories.push(true);
              classType -= LETTER_NUMBER_MODIFIER;
            } else {
              categories.push(false);
            }
            if (["normal", "auto", "loose"].indexOf(lineBreak2) !== -1) {
              if ([8208, 8211, 12316, 12448].indexOf(codePoint) !== -1) {
                indices.push(index);
                return types.push(CB);
              }
            }
            if (classType === CM || classType === ZWJ$1) {
              if (index === 0) {
                indices.push(index);
                return types.push(AL);
              }
              var prev = types[index - 1];
              if (LINE_BREAKS.indexOf(prev) === -1) {
                indices.push(indices[index - 1]);
                return types.push(prev);
              }
              indices.push(index);
              return types.push(AL);
            }
            indices.push(index);
            if (classType === CJ) {
              return types.push(lineBreak2 === "strict" ? NS : ID);
            }
            if (classType === SA) {
              return types.push(AL);
            }
            if (classType === AI) {
              return types.push(AL);
            }
            if (classType === XX) {
              if (codePoint >= 131072 && codePoint <= 196605 || codePoint >= 196608 && codePoint <= 262141) {
                return types.push(ID);
              } else {
                return types.push(AL);
              }
            }
            types.push(classType);
          });
          return [indices, types, categories];
        };
        var isAdjacentWithSpaceIgnored = function(a2, b, currentIndex, classTypes) {
          var current = classTypes[currentIndex];
          if (Array.isArray(a2) ? a2.indexOf(current) !== -1 : a2 === current) {
            var i2 = currentIndex;
            while (i2 <= classTypes.length) {
              i2++;
              var next = classTypes[i2];
              if (next === b) {
                return true;
              }
              if (next !== SP) {
                break;
              }
            }
          }
          if (current === SP) {
            var i2 = currentIndex;
            while (i2 > 0) {
              i2--;
              var prev = classTypes[i2];
              if (Array.isArray(a2) ? a2.indexOf(prev) !== -1 : a2 === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                  n++;
                  var next = classTypes[n];
                  if (next === b) {
                    return true;
                  }
                  if (next !== SP) {
                    break;
                  }
                }
              }
              if (prev !== SP) {
                break;
              }
            }
          }
          return false;
        };
        var previousNonSpaceClassType = function(currentIndex, classTypes) {
          var i2 = currentIndex;
          while (i2 >= 0) {
            var type = classTypes[i2];
            if (type === SP) {
              i2--;
            } else {
              return type;
            }
          }
          return 0;
        };
        var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
          if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED$1;
          }
          var currentIndex = index - 1;
          if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED$1;
          }
          var beforeIndex = currentIndex - 1;
          var afterIndex = currentIndex + 1;
          var current = classTypes[currentIndex];
          var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
          var next = classTypes[afterIndex];
          if (current === CR$1 && next === LF$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
          }
          if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (SPACE$1.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED$1;
          }
          if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === GL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === SP) {
            return BREAK_ALLOWED$1;
          }
          if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (next === CB || current === CB) {
            return BREAK_ALLOWED$1;
          }
          if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (next === IN) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || [OP, HY].indexOf(current) !== -1 && next === NU || current === NU && [NU, SY, IS].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];
              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          }
          if ([PR, PO].indexOf(next) !== -1) {
            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];
              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          }
          if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === RI$1 && next === RI$1) {
            var i2 = indicies[currentIndex];
            var count = 1;
            while (i2 > 0) {
              i2--;
              if (classTypes[i2] === RI$1) {
                count++;
              } else {
                break;
              }
            }
            if (count % 2 !== 0) {
              return BREAK_NOT_ALLOWED$1;
            }
          }
          if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED$1;
          }
          return BREAK_ALLOWED$1;
        };
        var cssFormattedClasses = function(codePoints, options) {
          if (!options) {
            options = { lineBreak: "normal", wordBreak: "normal" };
          }
          var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
          if (options.wordBreak === "break-all" || options.wordBreak === "break-word") {
            classTypes = classTypes.map(function(type) {
              return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
            });
          }
          var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i2) {
            return letterNumber && codePoints[i2] >= 19968 && codePoints[i2] <= 40959;
          }) : void 0;
          return [indicies, classTypes, forbiddenBreakpoints];
        };
        var Break = function() {
          function Break2(codePoints, lineBreak2, start, end) {
            this.codePoints = codePoints;
            this.required = lineBreak2 === BREAK_MANDATORY;
            this.start = start;
            this.end = end;
          }
          Break2.prototype.slice = function() {
            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
          };
          return Break2;
        }();
        var LineBreaker = function(str, options) {
          var codePoints = toCodePoints$1(str);
          var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
          var length = codePoints.length;
          var lastEnd = 0;
          var nextIndex = 0;
          return {
            next: function() {
              if (nextIndex >= length) {
                return { done: true, value: null };
              }
              var lineBreak2 = BREAK_NOT_ALLOWED$1;
              while (nextIndex < length && (lineBreak2 = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {
              }
              if (lineBreak2 !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                var value = new Break(codePoints, lineBreak2, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value, done: false };
              }
              return { done: true, value: null };
            }
          };
        };
        var FLAG_UNRESTRICTED = 1 << 0;
        var FLAG_ID = 1 << 1;
        var FLAG_INTEGER = 1 << 2;
        var FLAG_NUMBER = 1 << 3;
        var LINE_FEED = 10;
        var SOLIDUS = 47;
        var REVERSE_SOLIDUS = 92;
        var CHARACTER_TABULATION = 9;
        var SPACE = 32;
        var QUOTATION_MARK = 34;
        var EQUALS_SIGN = 61;
        var NUMBER_SIGN = 35;
        var DOLLAR_SIGN = 36;
        var PERCENTAGE_SIGN = 37;
        var APOSTROPHE = 39;
        var LEFT_PARENTHESIS = 40;
        var RIGHT_PARENTHESIS = 41;
        var LOW_LINE = 95;
        var HYPHEN_MINUS = 45;
        var EXCLAMATION_MARK = 33;
        var LESS_THAN_SIGN = 60;
        var GREATER_THAN_SIGN = 62;
        var COMMERCIAL_AT = 64;
        var LEFT_SQUARE_BRACKET = 91;
        var RIGHT_SQUARE_BRACKET = 93;
        var CIRCUMFLEX_ACCENT = 61;
        var LEFT_CURLY_BRACKET = 123;
        var QUESTION_MARK = 63;
        var RIGHT_CURLY_BRACKET = 125;
        var VERTICAL_LINE = 124;
        var TILDE = 126;
        var CONTROL = 128;
        var REPLACEMENT_CHARACTER = 65533;
        var ASTERISK = 42;
        var PLUS_SIGN = 43;
        var COMMA = 44;
        var COLON = 58;
        var SEMICOLON = 59;
        var FULL_STOP = 46;
        var NULL = 0;
        var BACKSPACE = 8;
        var LINE_TABULATION = 11;
        var SHIFT_OUT = 14;
        var INFORMATION_SEPARATOR_ONE = 31;
        var DELETE = 127;
        var EOF = -1;
        var ZERO = 48;
        var a = 97;
        var e = 101;
        var f = 102;
        var u = 117;
        var z = 122;
        var A = 65;
        var E = 69;
        var F = 70;
        var U = 85;
        var Z = 90;
        var isDigit = function(codePoint) {
          return codePoint >= ZERO && codePoint <= 57;
        };
        var isSurrogateCodePoint = function(codePoint) {
          return codePoint >= 55296 && codePoint <= 57343;
        };
        var isHex = function(codePoint) {
          return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
        };
        var isLowerCaseLetter = function(codePoint) {
          return codePoint >= a && codePoint <= z;
        };
        var isUpperCaseLetter = function(codePoint) {
          return codePoint >= A && codePoint <= Z;
        };
        var isLetter = function(codePoint) {
          return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
        };
        var isNonASCIICodePoint = function(codePoint) {
          return codePoint >= CONTROL;
        };
        var isWhiteSpace = function(codePoint) {
          return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
        };
        var isNameStartCodePoint = function(codePoint) {
          return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
        };
        var isNameCodePoint = function(codePoint) {
          return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
        };
        var isNonPrintableCodePoint = function(codePoint) {
          return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
        };
        var isValidEscape = function(c1, c2) {
          if (c1 !== REVERSE_SOLIDUS) {
            return false;
          }
          return c2 !== LINE_FEED;
        };
        var isIdentifierStart = function(c1, c2, c3) {
          if (c1 === HYPHEN_MINUS) {
            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
          } else if (isNameStartCodePoint(c1)) {
            return true;
          } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            return true;
          }
          return false;
        };
        var isNumberStart = function(c1, c2, c3) {
          if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) {
              return true;
            }
            return c2 === FULL_STOP && isDigit(c3);
          }
          if (c1 === FULL_STOP) {
            return isDigit(c2);
          }
          return isDigit(c1);
        };
        var stringToNumber = function(codePoints) {
          var c = 0;
          var sign = 1;
          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              sign = -1;
            }
            c++;
          }
          var integers = [];
          while (isDigit(codePoints[c])) {
            integers.push(codePoints[c++]);
          }
          var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
          if (codePoints[c] === FULL_STOP) {
            c++;
          }
          var fraction = [];
          while (isDigit(codePoints[c])) {
            fraction.push(codePoints[c++]);
          }
          var fracd = fraction.length;
          var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
          if (codePoints[c] === E || codePoints[c] === e) {
            c++;
          }
          var expsign = 1;
          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              expsign = -1;
            }
            c++;
          }
          var exponent = [];
          while (isDigit(codePoints[c])) {
            exponent.push(codePoints[c++]);
          }
          var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
          return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
        };
        var LEFT_PARENTHESIS_TOKEN = {
          type: 2
        };
        var RIGHT_PARENTHESIS_TOKEN = {
          type: 3
        };
        var COMMA_TOKEN = { type: 4 };
        var SUFFIX_MATCH_TOKEN = { type: 13 };
        var PREFIX_MATCH_TOKEN = { type: 8 };
        var COLUMN_TOKEN = { type: 21 };
        var DASH_MATCH_TOKEN = { type: 9 };
        var INCLUDE_MATCH_TOKEN = { type: 10 };
        var LEFT_CURLY_BRACKET_TOKEN = {
          type: 11
        };
        var RIGHT_CURLY_BRACKET_TOKEN = {
          type: 12
        };
        var SUBSTRING_MATCH_TOKEN = { type: 14 };
        var BAD_URL_TOKEN = { type: 23 };
        var BAD_STRING_TOKEN = { type: 1 };
        var CDO_TOKEN = { type: 25 };
        var CDC_TOKEN = { type: 24 };
        var COLON_TOKEN = { type: 26 };
        var SEMICOLON_TOKEN = { type: 27 };
        var LEFT_SQUARE_BRACKET_TOKEN = {
          type: 28
        };
        var RIGHT_SQUARE_BRACKET_TOKEN = {
          type: 29
        };
        var WHITESPACE_TOKEN = { type: 31 };
        var EOF_TOKEN = { type: 32 };
        var Tokenizer = function() {
          function Tokenizer2() {
            this._value = [];
          }
          Tokenizer2.prototype.write = function(chunk) {
            this._value = this._value.concat(toCodePoints$1(chunk));
          };
          Tokenizer2.prototype.read = function() {
            var tokens = [];
            var token = this.consumeToken();
            while (token !== EOF_TOKEN) {
              tokens.push(token);
              token = this.consumeToken();
            }
            return tokens;
          };
          Tokenizer2.prototype.consumeToken = function() {
            var codePoint = this.consumeCodePoint();
            switch (codePoint) {
              case QUOTATION_MARK:
                return this.consumeStringToken(QUOTATION_MARK);
              case NUMBER_SIGN:
                var c1 = this.peekCodePoint(0);
                var c2 = this.peekCodePoint(1);
                var c3 = this.peekCodePoint(2);
                if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                  var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                  var value = this.consumeName();
                  return { type: 5, value, flags };
                }
                break;
              case DOLLAR_SIGN:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return SUFFIX_MATCH_TOKEN;
                }
                break;
              case APOSTROPHE:
                return this.consumeStringToken(APOSTROPHE);
              case LEFT_PARENTHESIS:
                return LEFT_PARENTHESIS_TOKEN;
              case RIGHT_PARENTHESIS:
                return RIGHT_PARENTHESIS_TOKEN;
              case ASTERISK:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return SUBSTRING_MATCH_TOKEN;
                }
                break;
              case PLUS_SIGN:
                if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeNumericToken();
                }
                break;
              case COMMA:
                return COMMA_TOKEN;
              case HYPHEN_MINUS:
                var e1 = codePoint;
                var e2 = this.peekCodePoint(0);
                var e3 = this.peekCodePoint(1);
                if (isNumberStart(e1, e2, e3)) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeNumericToken();
                }
                if (isIdentifierStart(e1, e2, e3)) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeIdentLikeToken();
                }
                if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                  this.consumeCodePoint();
                  this.consumeCodePoint();
                  return CDC_TOKEN;
                }
                break;
              case FULL_STOP:
                if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeNumericToken();
                }
                break;
              case SOLIDUS:
                if (this.peekCodePoint(0) === ASTERISK) {
                  this.consumeCodePoint();
                  while (true) {
                    var c = this.consumeCodePoint();
                    if (c === ASTERISK) {
                      c = this.consumeCodePoint();
                      if (c === SOLIDUS) {
                        return this.consumeToken();
                      }
                    }
                    if (c === EOF) {
                      return this.consumeToken();
                    }
                  }
                }
                break;
              case COLON:
                return COLON_TOKEN;
              case SEMICOLON:
                return SEMICOLON_TOKEN;
              case LESS_THAN_SIGN:
                if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
                  this.consumeCodePoint();
                  this.consumeCodePoint();
                  return CDO_TOKEN;
                }
                break;
              case COMMERCIAL_AT:
                var a1 = this.peekCodePoint(0);
                var a2 = this.peekCodePoint(1);
                var a3 = this.peekCodePoint(2);
                if (isIdentifierStart(a1, a2, a3)) {
                  var value = this.consumeName();
                  return { type: 7, value };
                }
                break;
              case LEFT_SQUARE_BRACKET:
                return LEFT_SQUARE_BRACKET_TOKEN;
              case REVERSE_SOLIDUS:
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeIdentLikeToken();
                }
                break;
              case RIGHT_SQUARE_BRACKET:
                return RIGHT_SQUARE_BRACKET_TOKEN;
              case CIRCUMFLEX_ACCENT:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return PREFIX_MATCH_TOKEN;
                }
                break;
              case LEFT_CURLY_BRACKET:
                return LEFT_CURLY_BRACKET_TOKEN;
              case RIGHT_CURLY_BRACKET:
                return RIGHT_CURLY_BRACKET_TOKEN;
              case u:
              case U:
                var u1 = this.peekCodePoint(0);
                var u2 = this.peekCodePoint(1);
                if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                  this.consumeCodePoint();
                  this.consumeUnicodeRangeToken();
                }
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
              case VERTICAL_LINE:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return DASH_MATCH_TOKEN;
                }
                if (this.peekCodePoint(0) === VERTICAL_LINE) {
                  this.consumeCodePoint();
                  return COLUMN_TOKEN;
                }
                break;
              case TILDE:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return INCLUDE_MATCH_TOKEN;
                }
                break;
              case EOF:
                return EOF_TOKEN;
            }
            if (isWhiteSpace(codePoint)) {
              this.consumeWhiteSpace();
              return WHITESPACE_TOKEN;
            }
            if (isDigit(codePoint)) {
              this.reconsumeCodePoint(codePoint);
              return this.consumeNumericToken();
            }
            if (isNameStartCodePoint(codePoint)) {
              this.reconsumeCodePoint(codePoint);
              return this.consumeIdentLikeToken();
            }
            return { type: 6, value: fromCodePoint$1(codePoint) };
          };
          Tokenizer2.prototype.consumeCodePoint = function() {
            var value = this._value.shift();
            return typeof value === "undefined" ? -1 : value;
          };
          Tokenizer2.prototype.reconsumeCodePoint = function(codePoint) {
            this._value.unshift(codePoint);
          };
          Tokenizer2.prototype.peekCodePoint = function(delta) {
            if (delta >= this._value.length) {
              return -1;
            }
            return this._value[delta];
          };
          Tokenizer2.prototype.consumeUnicodeRangeToken = function() {
            var digits = [];
            var codePoint = this.consumeCodePoint();
            while (isHex(codePoint) && digits.length < 6) {
              digits.push(codePoint);
              codePoint = this.consumeCodePoint();
            }
            var questionMarks = false;
            while (codePoint === QUESTION_MARK && digits.length < 6) {
              digits.push(codePoint);
              codePoint = this.consumeCodePoint();
              questionMarks = true;
            }
            if (questionMarks) {
              var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                return digit === QUESTION_MARK ? ZERO : digit;
              })), 16);
              var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                return digit === QUESTION_MARK ? F : digit;
              })), 16);
              return { type: 30, start: start_1, end };
            }
            var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
            if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
              this.consumeCodePoint();
              codePoint = this.consumeCodePoint();
              var endDigits = [];
              while (isHex(codePoint) && endDigits.length < 6) {
                endDigits.push(codePoint);
                codePoint = this.consumeCodePoint();
              }
              var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
              return { type: 30, start, end };
            } else {
              return { type: 30, start, end: start };
            }
          };
          Tokenizer2.prototype.consumeIdentLikeToken = function() {
            var value = this.consumeName();
            if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
              this.consumeCodePoint();
              return this.consumeUrlToken();
            } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
              this.consumeCodePoint();
              return { type: 19, value };
            }
            return { type: 20, value };
          };
          Tokenizer2.prototype.consumeUrlToken = function() {
            var value = [];
            this.consumeWhiteSpace();
            if (this.peekCodePoint(0) === EOF) {
              return { type: 22, value: "" };
            }
            var next = this.peekCodePoint(0);
            if (next === APOSTROPHE || next === QUOTATION_MARK) {
              var stringToken = this.consumeStringToken(this.consumeCodePoint());
              if (stringToken.type === 0) {
                this.consumeWhiteSpace();
                if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                  this.consumeCodePoint();
                  return { type: 22, value: stringToken.value };
                }
              }
              this.consumeBadUrlRemnants();
              return BAD_URL_TOKEN;
            }
            while (true) {
              var codePoint = this.consumeCodePoint();
              if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
              } else if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                  this.consumeCodePoint();
                  return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
              } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
              } else if (codePoint === REVERSE_SOLIDUS) {
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  value.push(this.consumeEscapedCodePoint());
                } else {
                  this.consumeBadUrlRemnants();
                  return BAD_URL_TOKEN;
                }
              } else {
                value.push(codePoint);
              }
            }
          };
          Tokenizer2.prototype.consumeWhiteSpace = function() {
            while (isWhiteSpace(this.peekCodePoint(0))) {
              this.consumeCodePoint();
            }
          };
          Tokenizer2.prototype.consumeBadUrlRemnants = function() {
            while (true) {
              var codePoint = this.consumeCodePoint();
              if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                return;
              }
              if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                this.consumeEscapedCodePoint();
              }
            }
          };
          Tokenizer2.prototype.consumeStringSlice = function(count) {
            var SLICE_STACK_SIZE = 5e4;
            var value = "";
            while (count > 0) {
              var amount = Math.min(SLICE_STACK_SIZE, count);
              value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
              count -= amount;
            }
            this._value.shift();
            return value;
          };
          Tokenizer2.prototype.consumeStringToken = function(endingCodePoint) {
            var value = "";
            var i2 = 0;
            do {
              var codePoint = this._value[i2];
              if (codePoint === EOF || codePoint === void 0 || codePoint === endingCodePoint) {
                value += this.consumeStringSlice(i2);
                return { type: 0, value };
              }
              if (codePoint === LINE_FEED) {
                this._value.splice(0, i2);
                return BAD_STRING_TOKEN;
              }
              if (codePoint === REVERSE_SOLIDUS) {
                var next = this._value[i2 + 1];
                if (next !== EOF && next !== void 0) {
                  if (next === LINE_FEED) {
                    value += this.consumeStringSlice(i2);
                    i2 = -1;
                    this._value.shift();
                  } else if (isValidEscape(codePoint, next)) {
                    value += this.consumeStringSlice(i2);
                    value += fromCodePoint$1(this.consumeEscapedCodePoint());
                    i2 = -1;
                  }
                }
              }
              i2++;
            } while (true);
          };
          Tokenizer2.prototype.consumeNumber = function() {
            var repr = [];
            var type = FLAG_INTEGER;
            var c1 = this.peekCodePoint(0);
            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
              repr.push(this.consumeCodePoint());
            }
            while (isDigit(this.peekCodePoint(0))) {
              repr.push(this.consumeCodePoint());
            }
            c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            if (c1 === FULL_STOP && isDigit(c2)) {
              repr.push(this.consumeCodePoint(), this.consumeCodePoint());
              type = FLAG_NUMBER;
              while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
              }
            }
            c1 = this.peekCodePoint(0);
            c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
              repr.push(this.consumeCodePoint(), this.consumeCodePoint());
              type = FLAG_NUMBER;
              while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
              }
            }
            return [stringToNumber(repr), type];
          };
          Tokenizer2.prototype.consumeNumericToken = function() {
            var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
            var c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if (isIdentifierStart(c1, c2, c3)) {
              var unit = this.consumeName();
              return { type: 15, number, flags, unit };
            }
            if (c1 === PERCENTAGE_SIGN) {
              this.consumeCodePoint();
              return { type: 16, number, flags };
            }
            return { type: 17, number, flags };
          };
          Tokenizer2.prototype.consumeEscapedCodePoint = function() {
            var codePoint = this.consumeCodePoint();
            if (isHex(codePoint)) {
              var hex = fromCodePoint$1(codePoint);
              while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                hex += fromCodePoint$1(this.consumeCodePoint());
              }
              if (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
              }
              var hexCodePoint = parseInt(hex, 16);
              if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 1114111) {
                return REPLACEMENT_CHARACTER;
              }
              return hexCodePoint;
            }
            if (codePoint === EOF) {
              return REPLACEMENT_CHARACTER;
            }
            return codePoint;
          };
          Tokenizer2.prototype.consumeName = function() {
            var result = "";
            while (true) {
              var codePoint = this.consumeCodePoint();
              if (isNameCodePoint(codePoint)) {
                result += fromCodePoint$1(codePoint);
              } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                result += fromCodePoint$1(this.consumeEscapedCodePoint());
              } else {
                this.reconsumeCodePoint(codePoint);
                return result;
              }
            }
          };
          return Tokenizer2;
        }();
        var Parser = function() {
          function Parser2(tokens) {
            this._tokens = tokens;
          }
          Parser2.create = function(value) {
            var tokenizer = new Tokenizer();
            tokenizer.write(value);
            return new Parser2(tokenizer.read());
          };
          Parser2.parseValue = function(value) {
            return Parser2.create(value).parseComponentValue();
          };
          Parser2.parseValues = function(value) {
            return Parser2.create(value).parseComponentValues();
          };
          Parser2.prototype.parseComponentValue = function() {
            var token = this.consumeToken();
            while (token.type === 31) {
              token = this.consumeToken();
            }
            if (token.type === 32) {
              throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            }
            this.reconsumeToken(token);
            var value = this.consumeComponentValue();
            do {
              token = this.consumeToken();
            } while (token.type === 31);
            if (token.type === 32) {
              return value;
            }
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
          };
          Parser2.prototype.parseComponentValues = function() {
            var values = [];
            while (true) {
              var value = this.consumeComponentValue();
              if (value.type === 32) {
                return values;
              }
              values.push(value);
              values.push();
            }
          };
          Parser2.prototype.consumeComponentValue = function() {
            var token = this.consumeToken();
            switch (token.type) {
              case 11:
              case 28:
              case 2:
                return this.consumeSimpleBlock(token.type);
              case 19:
                return this.consumeFunction(token);
            }
            return token;
          };
          Parser2.prototype.consumeSimpleBlock = function(type) {
            var block = { type, values: [] };
            var token = this.consumeToken();
            while (true) {
              if (token.type === 32 || isEndingTokenFor(token, type)) {
                return block;
              }
              this.reconsumeToken(token);
              block.values.push(this.consumeComponentValue());
              token = this.consumeToken();
            }
          };
          Parser2.prototype.consumeFunction = function(functionToken) {
            var cssFunction = {
              name: functionToken.value,
              values: [],
              type: 18
            };
            while (true) {
              var token = this.consumeToken();
              if (token.type === 32 || token.type === 3) {
                return cssFunction;
              }
              this.reconsumeToken(token);
              cssFunction.values.push(this.consumeComponentValue());
            }
          };
          Parser2.prototype.consumeToken = function() {
            var token = this._tokens.shift();
            return typeof token === "undefined" ? EOF_TOKEN : token;
          };
          Parser2.prototype.reconsumeToken = function(token) {
            this._tokens.unshift(token);
          };
          return Parser2;
        }();
        var isDimensionToken = function(token) {
          return token.type === 15;
        };
        var isNumberToken = function(token) {
          return token.type === 17;
        };
        var isIdentToken = function(token) {
          return token.type === 20;
        };
        var isStringToken = function(token) {
          return token.type === 0;
        };
        var isIdentWithValue = function(token, value) {
          return isIdentToken(token) && token.value === value;
        };
        var nonWhiteSpace = function(token) {
          return token.type !== 31;
        };
        var nonFunctionArgSeparator = function(token) {
          return token.type !== 31 && token.type !== 4;
        };
        var parseFunctionArgs = function(tokens) {
          var args = [];
          var arg = [];
          tokens.forEach(function(token) {
            if (token.type === 4) {
              if (arg.length === 0) {
                throw new Error("Error parsing function args, zero tokens for arg");
              }
              args.push(arg);
              arg = [];
              return;
            }
            if (token.type !== 31) {
              arg.push(token);
            }
          });
          if (arg.length) {
            args.push(arg);
          }
          return args;
        };
        var isEndingTokenFor = function(token, type) {
          if (type === 11 && token.type === 12) {
            return true;
          }
          if (type === 28 && token.type === 29) {
            return true;
          }
          return type === 2 && token.type === 3;
        };
        var isLength = function(token) {
          return token.type === 17 || token.type === 15;
        };
        var isLengthPercentage = function(token) {
          return token.type === 16 || isLength(token);
        };
        var parseLengthPercentageTuple = function(tokens) {
          return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
        };
        var ZERO_LENGTH = {
          type: 17,
          number: 0,
          flags: FLAG_INTEGER
        };
        var FIFTY_PERCENT = {
          type: 16,
          number: 50,
          flags: FLAG_INTEGER
        };
        var HUNDRED_PERCENT = {
          type: 16,
          number: 100,
          flags: FLAG_INTEGER
        };
        var getAbsoluteValueForTuple = function(tuple, width, height) {
          var x = tuple[0], y = tuple[1];
          return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== "undefined" ? y : x, height)];
        };
        var getAbsoluteValue = function(token, parent) {
          if (token.type === 16) {
            return token.number / 100 * parent;
          }
          if (isDimensionToken(token)) {
            switch (token.unit) {
              case "rem":
              case "em":
                return 16 * token.number;
              case "px":
              default:
                return token.number;
            }
          }
          return token.number;
        };
        var DEG = "deg";
        var GRAD = "grad";
        var RAD = "rad";
        var TURN = "turn";
        var angle = {
          name: "angle",
          parse: function(_context, value) {
            if (value.type === 15) {
              switch (value.unit) {
                case DEG:
                  return Math.PI * value.number / 180;
                case GRAD:
                  return Math.PI / 200 * value.number;
                case RAD:
                  return value.number;
                case TURN:
                  return Math.PI * 2 * value.number;
              }
            }
            throw new Error("Unsupported angle type");
          }
        };
        var isAngle = function(value) {
          if (value.type === 15) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
              return true;
            }
          }
          return false;
        };
        var parseNamedSide = function(tokens) {
          var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
            return ident.value;
          }).join(" ");
          switch (sideOrCorner) {
            case "to bottom right":
            case "to right bottom":
            case "left top":
            case "top left":
              return [ZERO_LENGTH, ZERO_LENGTH];
            case "to top":
            case "bottom":
              return deg(0);
            case "to bottom left":
            case "to left bottom":
            case "right top":
            case "top right":
              return [ZERO_LENGTH, HUNDRED_PERCENT];
            case "to right":
            case "left":
              return deg(90);
            case "to top left":
            case "to left top":
            case "right bottom":
            case "bottom right":
              return [HUNDRED_PERCENT, HUNDRED_PERCENT];
            case "to bottom":
            case "top":
              return deg(180);
            case "to top right":
            case "to right top":
            case "left bottom":
            case "bottom left":
              return [HUNDRED_PERCENT, ZERO_LENGTH];
            case "to left":
            case "right":
              return deg(270);
          }
          return 0;
        };
        var deg = function(deg2) {
          return Math.PI * deg2 / 180;
        };
        var color$1 = {
          name: "color",
          parse: function(context, value) {
            if (value.type === 18) {
              var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
              if (typeof colorFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
              }
              return colorFunction(context, value.values);
            }
            if (value.type === 5) {
              if (value.value.length === 3) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
              }
              if (value.value.length === 4) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                var a2 = value.value.substring(3, 4);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a2 + a2, 16) / 255);
              }
              if (value.value.length === 6) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
              }
              if (value.value.length === 8) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                var a2 = value.value.substring(6, 8);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a2, 16) / 255);
              }
            }
            if (value.type === 20) {
              var namedColor = COLORS[value.value.toUpperCase()];
              if (typeof namedColor !== "undefined") {
                return namedColor;
              }
            }
            return COLORS.TRANSPARENT;
          }
        };
        var isTransparent = function(color2) {
          return (255 & color2) === 0;
        };
        var asString = function(color2) {
          var alpha = 255 & color2;
          var blue = 255 & color2 >> 8;
          var green = 255 & color2 >> 16;
          var red = 255 & color2 >> 24;
          return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
        };
        var pack = function(r, g, b, a2) {
          return (r << 24 | g << 16 | b << 8 | Math.round(a2 * 255) << 0) >>> 0;
        };
        var getTokenColorValue = function(token, i2) {
          if (token.type === 17) {
            return token.number;
          }
          if (token.type === 16) {
            var max = i2 === 3 ? 1 : 255;
            return i2 === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
          }
          return 0;
        };
        var rgb = function(_context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            return pack(r, g, b, 1);
          }
          if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a2 = _b[3];
            return pack(r, g, b, a2);
          }
          return 0;
        };
        function hue2rgb(t1, t2, hue) {
          if (hue < 0) {
            hue += 1;
          }
          if (hue >= 1) {
            hue -= 1;
          }
          if (hue < 1 / 6) {
            return (t2 - t1) * hue * 6 + t1;
          } else if (hue < 1 / 2) {
            return t2;
          } else if (hue < 2 / 3) {
            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
          } else {
            return t1;
          }
        }
        var hsl = function(context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
          var h = (hue.type === 17 ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
          var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
          var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
          var a2 = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
          if (s === 0) {
            return pack(l * 255, l * 255, l * 255, 1);
          }
          var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          var t1 = l * 2 - t2;
          var r = hue2rgb(t1, t2, h + 1 / 3);
          var g = hue2rgb(t1, t2, h);
          var b = hue2rgb(t1, t2, h - 1 / 3);
          return pack(r * 255, g * 255, b * 255, a2);
        };
        var SUPPORTED_COLOR_FUNCTIONS = {
          hsl,
          hsla: hsl,
          rgb,
          rgba: rgb
        };
        var parseColor = function(context, value) {
          return color$1.parse(context, Parser.create(value).parseComponentValue());
        };
        var COLORS = {
          ALICEBLUE: 4042850303,
          ANTIQUEWHITE: 4209760255,
          AQUA: 16777215,
          AQUAMARINE: 2147472639,
          AZURE: 4043309055,
          BEIGE: 4126530815,
          BISQUE: 4293182719,
          BLACK: 255,
          BLANCHEDALMOND: 4293643775,
          BLUE: 65535,
          BLUEVIOLET: 2318131967,
          BROWN: 2771004159,
          BURLYWOOD: 3736635391,
          CADETBLUE: 1604231423,
          CHARTREUSE: 2147418367,
          CHOCOLATE: 3530104575,
          CORAL: 4286533887,
          CORNFLOWERBLUE: 1687547391,
          CORNSILK: 4294499583,
          CRIMSON: 3692313855,
          CYAN: 16777215,
          DARKBLUE: 35839,
          DARKCYAN: 9145343,
          DARKGOLDENROD: 3095837695,
          DARKGRAY: 2846468607,
          DARKGREEN: 6553855,
          DARKGREY: 2846468607,
          DARKKHAKI: 3182914559,
          DARKMAGENTA: 2332068863,
          DARKOLIVEGREEN: 1433087999,
          DARKORANGE: 4287365375,
          DARKORCHID: 2570243327,
          DARKRED: 2332033279,
          DARKSALMON: 3918953215,
          DARKSEAGREEN: 2411499519,
          DARKSLATEBLUE: 1211993087,
          DARKSLATEGRAY: 793726975,
          DARKSLATEGREY: 793726975,
          DARKTURQUOISE: 13554175,
          DARKVIOLET: 2483082239,
          DEEPPINK: 4279538687,
          DEEPSKYBLUE: 12582911,
          DIMGRAY: 1768516095,
          DIMGREY: 1768516095,
          DODGERBLUE: 512819199,
          FIREBRICK: 2988581631,
          FLORALWHITE: 4294635775,
          FORESTGREEN: 579543807,
          FUCHSIA: 4278255615,
          GAINSBORO: 3705462015,
          GHOSTWHITE: 4177068031,
          GOLD: 4292280575,
          GOLDENROD: 3668254975,
          GRAY: 2155905279,
          GREEN: 8388863,
          GREENYELLOW: 2919182335,
          GREY: 2155905279,
          HONEYDEW: 4043305215,
          HOTPINK: 4285117695,
          INDIANRED: 3445382399,
          INDIGO: 1258324735,
          IVORY: 4294963455,
          KHAKI: 4041641215,
          LAVENDER: 3873897215,
          LAVENDERBLUSH: 4293981695,
          LAWNGREEN: 2096890111,
          LEMONCHIFFON: 4294626815,
          LIGHTBLUE: 2916673279,
          LIGHTCORAL: 4034953471,
          LIGHTCYAN: 3774873599,
          LIGHTGOLDENRODYELLOW: 4210742015,
          LIGHTGRAY: 3553874943,
          LIGHTGREEN: 2431553791,
          LIGHTGREY: 3553874943,
          LIGHTPINK: 4290167295,
          LIGHTSALMON: 4288707327,
          LIGHTSEAGREEN: 548580095,
          LIGHTSKYBLUE: 2278488831,
          LIGHTSLATEGRAY: 2005441023,
          LIGHTSLATEGREY: 2005441023,
          LIGHTSTEELBLUE: 2965692159,
          LIGHTYELLOW: 4294959359,
          LIME: 16711935,
          LIMEGREEN: 852308735,
          LINEN: 4210091775,
          MAGENTA: 4278255615,
          MAROON: 2147483903,
          MEDIUMAQUAMARINE: 1724754687,
          MEDIUMBLUE: 52735,
          MEDIUMORCHID: 3126187007,
          MEDIUMPURPLE: 2473647103,
          MEDIUMSEAGREEN: 1018393087,
          MEDIUMSLATEBLUE: 2070474495,
          MEDIUMSPRINGGREEN: 16423679,
          MEDIUMTURQUOISE: 1221709055,
          MEDIUMVIOLETRED: 3340076543,
          MIDNIGHTBLUE: 421097727,
          MINTCREAM: 4127193855,
          MISTYROSE: 4293190143,
          MOCCASIN: 4293178879,
          NAVAJOWHITE: 4292783615,
          NAVY: 33023,
          OLDLACE: 4260751103,
          OLIVE: 2155872511,
          OLIVEDRAB: 1804477439,
          ORANGE: 4289003775,
          ORANGERED: 4282712319,
          ORCHID: 3664828159,
          PALEGOLDENROD: 4008225535,
          PALEGREEN: 2566625535,
          PALETURQUOISE: 2951671551,
          PALEVIOLETRED: 3681588223,
          PAPAYAWHIP: 4293907967,
          PEACHPUFF: 4292524543,
          PERU: 3448061951,
          PINK: 4290825215,
          PLUM: 3718307327,
          POWDERBLUE: 2967529215,
          PURPLE: 2147516671,
          REBECCAPURPLE: 1714657791,
          RED: 4278190335,
          ROSYBROWN: 3163525119,
          ROYALBLUE: 1097458175,
          SADDLEBROWN: 2336560127,
          SALMON: 4202722047,
          SANDYBROWN: 4104413439,
          SEAGREEN: 780883967,
          SEASHELL: 4294307583,
          SIENNA: 2689740287,
          SILVER: 3233857791,
          SKYBLUE: 2278484991,
          SLATEBLUE: 1784335871,
          SLATEGRAY: 1887473919,
          SLATEGREY: 1887473919,
          SNOW: 4294638335,
          SPRINGGREEN: 16744447,
          STEELBLUE: 1182971135,
          TAN: 3535047935,
          TEAL: 8421631,
          THISTLE: 3636451583,
          TOMATO: 4284696575,
          TRANSPARENT: 0,
          TURQUOISE: 1088475391,
          VIOLET: 4001558271,
          WHEAT: 4125012991,
          WHITE: 4294967295,
          WHITESMOKE: 4126537215,
          YELLOW: 4294902015,
          YELLOWGREEN: 2597139199
        };
        var backgroundClip = {
          name: "background-clip",
          initialValue: "border-box",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.map(function(token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              }
              return 0;
            });
          }
        };
        var backgroundColor = {
          name: "background-color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var parseColorStop = function(context, args) {
          var color2 = color$1.parse(context, args[0]);
          var stop = args[1];
          return stop && isLengthPercentage(stop) ? { color: color2, stop } : { color: color2, stop: null };
        };
        var processColorStops = function(stops, lineLength) {
          var first = stops[0];
          var last = stops[stops.length - 1];
          if (first.stop === null) {
            first.stop = ZERO_LENGTH;
          }
          if (last.stop === null) {
            last.stop = HUNDRED_PERCENT;
          }
          var processStops = [];
          var previous = 0;
          for (var i2 = 0; i2 < stops.length; i2++) {
            var stop_1 = stops[i2].stop;
            if (stop_1 !== null) {
              var absoluteValue = getAbsoluteValue(stop_1, lineLength);
              if (absoluteValue > previous) {
                processStops.push(absoluteValue);
              } else {
                processStops.push(previous);
              }
              previous = absoluteValue;
            } else {
              processStops.push(null);
            }
          }
          var gapBegin = null;
          for (var i2 = 0; i2 < processStops.length; i2++) {
            var stop_2 = processStops[i2];
            if (stop_2 === null) {
              if (gapBegin === null) {
                gapBegin = i2;
              }
            } else if (gapBegin !== null) {
              var gapLength = i2 - gapBegin;
              var beforeGap = processStops[gapBegin - 1];
              var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
              for (var g = 1; g <= gapLength; g++) {
                processStops[gapBegin + g - 1] = gapValue * g;
              }
              gapBegin = null;
            }
          }
          return stops.map(function(_a, i3) {
            var color2 = _a.color;
            return { color: color2, stop: Math.max(Math.min(1, processStops[i3] / lineLength), 0) };
          });
        };
        var getAngleFromCorner = function(corner, width, height) {
          var centerX = width / 2;
          var centerY = height / 2;
          var x = getAbsoluteValue(corner[0], width) - centerX;
          var y = centerY - getAbsoluteValue(corner[1], height);
          return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
        };
        var calculateGradientDirection = function(angle2, width, height) {
          var radian = typeof angle2 === "number" ? angle2 : getAngleFromCorner(angle2, width, height);
          var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
          var halfWidth = width / 2;
          var halfHeight = height / 2;
          var halfLineLength = lineLength / 2;
          var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
          var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
          return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
        };
        var distance = function(a2, b) {
          return Math.sqrt(a2 * a2 + b * b);
        };
        var findCorner = function(width, height, x, y, closest) {
          var corners = [
            [0, 0],
            [0, height],
            [width, 0],
            [width, height]
          ];
          return corners.reduce(function(stat, corner) {
            var cx = corner[0], cy = corner[1];
            var d = distance(x - cx, y - cy);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
              return {
                optimumCorner: corner,
                optimumDistance: d
              };
            }
            return stat;
          }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
          }).optimumCorner;
        };
        var calculateRadius = function(gradient, x, y, width, height) {
          var rx = 0;
          var ry = 0;
          switch (gradient.size) {
            case 0:
              if (gradient.shape === 0) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1) {
                rx = Math.min(Math.abs(x), Math.abs(x - width));
                ry = Math.min(Math.abs(y), Math.abs(y - height));
              }
              break;
            case 2:
              if (gradient.shape === 0) {
                rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1) {
                var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }
              break;
            case 1:
              if (gradient.shape === 0) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1) {
                rx = Math.max(Math.abs(x), Math.abs(x - width));
                ry = Math.max(Math.abs(y), Math.abs(y - height));
              }
              break;
            case 3:
              if (gradient.shape === 0) {
                rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1) {
                var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }
              break;
          }
          if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
          }
          return [rx, ry];
        };
        var linearGradient = function(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            if (i2 === 0) {
              var firstToken = arg[0];
              if (firstToken.type === 20 && firstToken.value === "to") {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = angle.parse(context, firstToken);
                return;
              }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return { angle: angle$1, stops, type: 1 };
        };
        var prefixLinearGradient = function(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            if (i2 === 0) {
              var firstToken = arg[0];
              if (firstToken.type === 20 && ["top", "left", "right", "bottom"].indexOf(firstToken.value) !== -1) {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                return;
              }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops,
            type: 1
          };
        };
        var webkitGradient = function(context, tokens) {
          var angle2 = deg(180);
          var stops = [];
          var type = 1;
          var shape = 0;
          var size = 3;
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var firstToken = arg[0];
            if (i2 === 0) {
              if (isIdentToken(firstToken) && firstToken.value === "linear") {
                type = 1;
                return;
              } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
                type = 2;
                return;
              }
            }
            if (firstToken.type === 18) {
              if (firstToken.name === "from") {
                var color2 = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: ZERO_LENGTH, color: color2 });
              } else if (firstToken.name === "to") {
                var color2 = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: HUNDRED_PERCENT, color: color2 });
              } else if (firstToken.name === "color-stop") {
                var values = firstToken.values.filter(nonFunctionArgSeparator);
                if (values.length === 2) {
                  var color2 = color$1.parse(context, values[1]);
                  var stop_1 = values[0];
                  if (isNumberToken(stop_1)) {
                    stops.push({
                      stop: { type: 16, number: stop_1.number * 100, flags: stop_1.flags },
                      color: color2
                    });
                  }
                }
              }
            }
          });
          return type === 1 ? {
            angle: (angle2 + deg(180)) % deg(360),
            stops,
            type
          } : { size, shape, stops, position: position2, type };
        };
        var CLOSEST_SIDE = "closest-side";
        var FARTHEST_SIDE = "farthest-side";
        var CLOSEST_CORNER = "closest-corner";
        var FARTHEST_CORNER = "farthest-corner";
        var CIRCLE = "circle";
        var ELLIPSE = "ellipse";
        var COVER = "cover";
        var CONTAIN = "contain";
        var radialGradient = function(context, tokens) {
          var shape = 0;
          var size = 3;
          var stops = [];
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var isColorStop = true;
            if (i2 === 0) {
              var isAtPosition_1 = false;
              isColorStop = arg.reduce(function(acc, token) {
                if (isAtPosition_1) {
                  if (isIdentToken(token)) {
                    switch (token.value) {
                      case "center":
                        position2.push(FIFTY_PERCENT);
                        return acc;
                      case "top":
                      case "left":
                        position2.push(ZERO_LENGTH);
                        return acc;
                      case "right":
                      case "bottom":
                        position2.push(HUNDRED_PERCENT);
                        return acc;
                    }
                  } else if (isLengthPercentage(token) || isLength(token)) {
                    position2.push(token);
                  }
                } else if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0;
                      return false;
                    case ELLIPSE:
                      shape = 1;
                      return false;
                    case "at":
                      isAtPosition_1 = true;
                      return false;
                    case CLOSEST_SIDE:
                      size = 0;
                      return false;
                    case COVER:
                    case FARTHEST_SIDE:
                      size = 1;
                      return false;
                    case CONTAIN:
                    case CLOSEST_CORNER:
                      size = 2;
                      return false;
                    case FARTHEST_CORNER:
                      size = 3;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }
                  size.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            }
            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return { size, shape, stops, position: position2, type: 2 };
        };
        var prefixRadialGradient = function(context, tokens) {
          var shape = 0;
          var size = 3;
          var stops = [];
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var isColorStop = true;
            if (i2 === 0) {
              isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case "center":
                      position2.push(FIFTY_PERCENT);
                      return false;
                    case "top":
                    case "left":
                      position2.push(ZERO_LENGTH);
                      return false;
                    case "right":
                    case "bottom":
                      position2.push(HUNDRED_PERCENT);
                      return false;
                  }
                } else if (isLengthPercentage(token) || isLength(token)) {
                  position2.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            } else if (i2 === 1) {
              isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0;
                      return false;
                    case ELLIPSE:
                      shape = 1;
                      return false;
                    case CONTAIN:
                    case CLOSEST_SIDE:
                      size = 0;
                      return false;
                    case FARTHEST_SIDE:
                      size = 1;
                      return false;
                    case CLOSEST_CORNER:
                      size = 2;
                      return false;
                    case COVER:
                    case FARTHEST_CORNER:
                      size = 3;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }
                  size.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            }
            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return { size, shape, stops, position: position2, type: 2 };
        };
        var isLinearGradient = function(background) {
          return background.type === 1;
        };
        var isRadialGradient = function(background) {
          return background.type === 2;
        };
        var image = {
          name: "image",
          parse: function(context, value) {
            if (value.type === 22) {
              var image_1 = { url: value.value, type: 0 };
              context.cache.addImage(value.value);
              return image_1;
            }
            if (value.type === 18) {
              var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
              if (typeof imageFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
              }
              return imageFunction(context, value.values);
            }
            throw new Error("Unsupported image type " + value.type);
          }
        };
        function isSupportedImage(value) {
          return !(value.type === 20 && value.value === "none") && (value.type !== 18 || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
        }
        var SUPPORTED_IMAGE_FUNCTIONS = {
          "linear-gradient": linearGradient,
          "-moz-linear-gradient": prefixLinearGradient,
          "-ms-linear-gradient": prefixLinearGradient,
          "-o-linear-gradient": prefixLinearGradient,
          "-webkit-linear-gradient": prefixLinearGradient,
          "radial-gradient": radialGradient,
          "-moz-radial-gradient": prefixRadialGradient,
          "-ms-radial-gradient": prefixRadialGradient,
          "-o-radial-gradient": prefixRadialGradient,
          "-webkit-radial-gradient": prefixRadialGradient,
          "-webkit-gradient": webkitGradient
        };
        var backgroundImage = {
          name: "background-image",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return [];
            }
            return tokens.filter(function(value) {
              return nonFunctionArgSeparator(value) && isSupportedImage(value);
            }).map(function(value) {
              return image.parse(context, value);
            });
          }
        };
        var backgroundOrigin = {
          name: "background-origin",
          initialValue: "border-box",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.map(function(token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              }
              return 0;
            });
          }
        };
        var backgroundPosition = {
          name: "background-position",
          initialValue: "0% 0%",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isLengthPercentage);
            }).map(parseLengthPercentageTuple);
          }
        };
        var backgroundRepeat = {
          name: "background-repeat",
          initialValue: "repeat",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isIdentToken).map(function(token) {
                return token.value;
              }).join(" ");
            }).map(parseBackgroundRepeat);
          }
        };
        var parseBackgroundRepeat = function(value) {
          switch (value) {
            case "no-repeat":
              return 1;
            case "repeat-x":
            case "repeat no-repeat":
              return 2;
            case "repeat-y":
            case "no-repeat repeat":
              return 3;
            case "repeat":
            default:
              return 0;
          }
        };
        var BACKGROUND_SIZE;
        (function(BACKGROUND_SIZE2) {
          BACKGROUND_SIZE2["AUTO"] = "auto";
          BACKGROUND_SIZE2["CONTAIN"] = "contain";
          BACKGROUND_SIZE2["COVER"] = "cover";
        })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
        var backgroundSize = {
          name: "background-size",
          initialValue: "0",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isBackgroundSizeInfoToken);
            });
          }
        };
        var isBackgroundSizeInfoToken = function(value) {
          return isIdentToken(value) || isLengthPercentage(value);
        };
        var borderColorForSide = function(side) {
          return {
            name: "border-" + side + "-color",
            initialValue: "transparent",
            prefix: false,
            type: 3,
            format: "color"
          };
        };
        var borderTopColor = borderColorForSide("top");
        var borderRightColor = borderColorForSide("right");
        var borderBottomColor = borderColorForSide("bottom");
        var borderLeftColor = borderColorForSide("left");
        var borderRadiusForSide = function(side) {
          return {
            name: "border-radius-" + side,
            initialValue: "0 0",
            prefix: false,
            type: 1,
            parse: function(_context, tokens) {
              return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
            }
          };
        };
        var borderTopLeftRadius = borderRadiusForSide("top-left");
        var borderTopRightRadius = borderRadiusForSide("top-right");
        var borderBottomRightRadius = borderRadiusForSide("bottom-right");
        var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
        var borderStyleForSide = function(side) {
          return {
            name: "border-" + side + "-style",
            initialValue: "solid",
            prefix: false,
            type: 2,
            parse: function(_context, style) {
              switch (style) {
                case "none":
                  return 0;
                case "dashed":
                  return 2;
                case "dotted":
                  return 3;
                case "double":
                  return 4;
              }
              return 1;
            }
          };
        };
        var borderTopStyle = borderStyleForSide("top");
        var borderRightStyle = borderStyleForSide("right");
        var borderBottomStyle = borderStyleForSide("bottom");
        var borderLeftStyle = borderStyleForSide("left");
        var borderWidthForSide = function(side) {
          return {
            name: "border-" + side + "-width",
            initialValue: "0",
            type: 0,
            prefix: false,
            parse: function(_context, token) {
              if (isDimensionToken(token)) {
                return token.number;
              }
              return 0;
            }
          };
        };
        var borderTopWidth = borderWidthForSide("top");
        var borderRightWidth = borderWidthForSide("right");
        var borderBottomWidth = borderWidthForSide("bottom");
        var borderLeftWidth = borderWidthForSide("left");
        var color = {
          name: "color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var direction = {
          name: "direction",
          initialValue: "ltr",
          prefix: false,
          type: 2,
          parse: function(_context, direction2) {
            switch (direction2) {
              case "rtl":
                return 1;
              case "ltr":
              default:
                return 0;
            }
          }
        };
        var display = {
          name: "display",
          initialValue: "inline-block",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).reduce(function(bit, token) {
              return bit | parseDisplayValue(token.value);
            }, 0);
          }
        };
        var parseDisplayValue = function(display2) {
          switch (display2) {
            case "block":
            case "-webkit-box":
              return 2;
            case "inline":
              return 4;
            case "run-in":
              return 8;
            case "flow":
              return 16;
            case "flow-root":
              return 32;
            case "table":
              return 64;
            case "flex":
            case "-webkit-flex":
              return 128;
            case "grid":
            case "-ms-grid":
              return 256;
            case "ruby":
              return 512;
            case "subgrid":
              return 1024;
            case "list-item":
              return 2048;
            case "table-row-group":
              return 4096;
            case "table-header-group":
              return 8192;
            case "table-footer-group":
              return 16384;
            case "table-row":
              return 32768;
            case "table-cell":
              return 65536;
            case "table-column-group":
              return 131072;
            case "table-column":
              return 262144;
            case "table-caption":
              return 524288;
            case "ruby-base":
              return 1048576;
            case "ruby-text":
              return 2097152;
            case "ruby-base-container":
              return 4194304;
            case "ruby-text-container":
              return 8388608;
            case "contents":
              return 16777216;
            case "inline-block":
              return 33554432;
            case "inline-list-item":
              return 67108864;
            case "inline-table":
              return 134217728;
            case "inline-flex":
              return 268435456;
            case "inline-grid":
              return 536870912;
          }
          return 0;
        };
        var float = {
          name: "float",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, float2) {
            switch (float2) {
              case "left":
                return 1;
              case "right":
                return 2;
              case "inline-start":
                return 3;
              case "inline-end":
                return 4;
            }
            return 0;
          }
        };
        var letterSpacing = {
          name: "letter-spacing",
          initialValue: "0",
          prefix: false,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20 && token.value === "normal") {
              return 0;
            }
            if (token.type === 17) {
              return token.number;
            }
            if (token.type === 15) {
              return token.number;
            }
            return 0;
          }
        };
        var LINE_BREAK;
        (function(LINE_BREAK2) {
          LINE_BREAK2["NORMAL"] = "normal";
          LINE_BREAK2["STRICT"] = "strict";
        })(LINE_BREAK || (LINE_BREAK = {}));
        var lineBreak = {
          name: "line-break",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, lineBreak2) {
            switch (lineBreak2) {
              case "strict":
                return LINE_BREAK.STRICT;
              case "normal":
              default:
                return LINE_BREAK.NORMAL;
            }
          }
        };
        var lineHeight = {
          name: "line-height",
          initialValue: "normal",
          prefix: false,
          type: 4
        };
        var computeLineHeight = function(token, fontSize2) {
          if (isIdentToken(token) && token.value === "normal") {
            return 1.2 * fontSize2;
          } else if (token.type === 17) {
            return fontSize2 * token.number;
          } else if (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize2);
          }
          return fontSize2;
        };
        var listStyleImage = {
          name: "list-style-image",
          initialValue: "none",
          type: 0,
          prefix: false,
          parse: function(context, token) {
            if (token.type === 20 && token.value === "none") {
              return null;
            }
            return image.parse(context, token);
          }
        };
        var listStylePosition = {
          name: "list-style-position",
          initialValue: "outside",
          prefix: false,
          type: 2,
          parse: function(_context, position2) {
            switch (position2) {
              case "inside":
                return 0;
              case "outside":
              default:
                return 1;
            }
          }
        };
        var listStyleType = {
          name: "list-style-type",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, type) {
            switch (type) {
              case "disc":
                return 0;
              case "circle":
                return 1;
              case "square":
                return 2;
              case "decimal":
                return 3;
              case "cjk-decimal":
                return 4;
              case "decimal-leading-zero":
                return 5;
              case "lower-roman":
                return 6;
              case "upper-roman":
                return 7;
              case "lower-greek":
                return 8;
              case "lower-alpha":
                return 9;
              case "upper-alpha":
                return 10;
              case "arabic-indic":
                return 11;
              case "armenian":
                return 12;
              case "bengali":
                return 13;
              case "cambodian":
                return 14;
              case "cjk-earthly-branch":
                return 15;
              case "cjk-heavenly-stem":
                return 16;
              case "cjk-ideographic":
                return 17;
              case "devanagari":
                return 18;
              case "ethiopic-numeric":
                return 19;
              case "georgian":
                return 20;
              case "gujarati":
                return 21;
              case "gurmukhi":
                return 22;
              case "hebrew":
                return 22;
              case "hiragana":
                return 23;
              case "hiragana-iroha":
                return 24;
              case "japanese-formal":
                return 25;
              case "japanese-informal":
                return 26;
              case "kannada":
                return 27;
              case "katakana":
                return 28;
              case "katakana-iroha":
                return 29;
              case "khmer":
                return 30;
              case "korean-hangul-formal":
                return 31;
              case "korean-hanja-formal":
                return 32;
              case "korean-hanja-informal":
                return 33;
              case "lao":
                return 34;
              case "lower-armenian":
                return 35;
              case "malayalam":
                return 36;
              case "mongolian":
                return 37;
              case "myanmar":
                return 38;
              case "oriya":
                return 39;
              case "persian":
                return 40;
              case "simp-chinese-formal":
                return 41;
              case "simp-chinese-informal":
                return 42;
              case "tamil":
                return 43;
              case "telugu":
                return 44;
              case "thai":
                return 45;
              case "tibetan":
                return 46;
              case "trad-chinese-formal":
                return 47;
              case "trad-chinese-informal":
                return 48;
              case "upper-armenian":
                return 49;
              case "disclosure-open":
                return 50;
              case "disclosure-closed":
                return 51;
              case "none":
              default:
                return -1;
            }
          }
        };
        var marginForSide = function(side) {
          return {
            name: "margin-" + side,
            initialValue: "0",
            prefix: false,
            type: 4
          };
        };
        var marginTop = marginForSide("top");
        var marginRight = marginForSide("right");
        var marginBottom = marginForSide("bottom");
        var marginLeft = marginForSide("left");
        var overflow = {
          name: "overflow",
          initialValue: "visible",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(overflow2) {
              switch (overflow2.value) {
                case "hidden":
                  return 1;
                case "scroll":
                  return 2;
                case "clip":
                  return 3;
                case "auto":
                  return 4;
                case "visible":
                default:
                  return 0;
              }
            });
          }
        };
        var overflowWrap = {
          name: "overflow-wrap",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, overflow2) {
            switch (overflow2) {
              case "break-word":
                return "break-word";
              case "normal":
              default:
                return "normal";
            }
          }
        };
        var paddingForSide = function(side) {
          return {
            name: "padding-" + side,
            initialValue: "0",
            prefix: false,
            type: 3,
            format: "length-percentage"
          };
        };
        var paddingTop = paddingForSide("top");
        var paddingRight = paddingForSide("right");
        var paddingBottom = paddingForSide("bottom");
        var paddingLeft = paddingForSide("left");
        var textAlign = {
          name: "text-align",
          initialValue: "left",
          prefix: false,
          type: 2,
          parse: function(_context, textAlign2) {
            switch (textAlign2) {
              case "right":
                return 2;
              case "center":
              case "justify":
                return 1;
              case "left":
              default:
                return 0;
            }
          }
        };
        var position = {
          name: "position",
          initialValue: "static",
          prefix: false,
          type: 2,
          parse: function(_context, position2) {
            switch (position2) {
              case "relative":
                return 1;
              case "absolute":
                return 2;
              case "fixed":
                return 3;
              case "sticky":
                return 4;
            }
            return 0;
          }
        };
        var textShadow = {
          name: "text-shadow",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
              return [];
            }
            return parseFunctionArgs(tokens).map(function(values) {
              var shadow = {
                color: COLORS.TRANSPARENT,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH
              };
              var c = 0;
              for (var i2 = 0; i2 < values.length; i2++) {
                var token = values[i2];
                if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else {
                    shadow.blur = token;
                  }
                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }
              return shadow;
            });
          }
        };
        var textTransform = {
          name: "text-transform",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, textTransform2) {
            switch (textTransform2) {
              case "uppercase":
                return 2;
              case "lowercase":
                return 1;
              case "capitalize":
                return 3;
            }
            return 0;
          }
        };
        var transform$1 = {
          name: "transform",
          initialValue: "none",
          prefix: true,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20 && token.value === "none") {
              return null;
            }
            if (token.type === 18) {
              var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
              if (typeof transformFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
              }
              return transformFunction(token.values);
            }
            return null;
          }
        };
        var matrix = function(args) {
          var values = args.filter(function(arg) {
            return arg.type === 17;
          }).map(function(arg) {
            return arg.number;
          });
          return values.length === 6 ? values : null;
        };
        var matrix3d = function(args) {
          var values = args.filter(function(arg) {
            return arg.type === 17;
          }).map(function(arg) {
            return arg.number;
          });
          var a1 = values[0], b1 = values[1];
          values[2];
          values[3];
          var a2 = values[4], b2 = values[5];
          values[6];
          values[7];
          values[8];
          values[9];
          values[10];
          values[11];
          var a4 = values[12], b4 = values[13];
          values[14];
          values[15];
          return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
        };
        var SUPPORTED_TRANSFORM_FUNCTIONS = {
          matrix,
          matrix3d
        };
        var DEFAULT_VALUE = {
          type: 16,
          number: 50,
          flags: FLAG_INTEGER
        };
        var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
        var transformOrigin = {
          name: "transform-origin",
          initialValue: "50% 50%",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);
            if (origins.length !== 2) {
              return DEFAULT;
            }
            return [origins[0], origins[1]];
          }
        };
        var visibility = {
          name: "visible",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, visibility2) {
            switch (visibility2) {
              case "hidden":
                return 1;
              case "collapse":
                return 2;
              case "visible":
              default:
                return 0;
            }
          }
        };
        var WORD_BREAK;
        (function(WORD_BREAK2) {
          WORD_BREAK2["NORMAL"] = "normal";
          WORD_BREAK2["BREAK_ALL"] = "break-all";
          WORD_BREAK2["KEEP_ALL"] = "keep-all";
        })(WORD_BREAK || (WORD_BREAK = {}));
        var wordBreak = {
          name: "word-break",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, wordBreak2) {
            switch (wordBreak2) {
              case "break-all":
                return WORD_BREAK.BREAK_ALL;
              case "keep-all":
                return WORD_BREAK.KEEP_ALL;
              case "normal":
              default:
                return WORD_BREAK.NORMAL;
            }
          }
        };
        var zIndex = {
          name: "z-index",
          initialValue: "auto",
          prefix: false,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20) {
              return { auto: true, order: 0 };
            }
            if (isNumberToken(token)) {
              return { auto: false, order: token.number };
            }
            throw new Error("Invalid z-index number parsed");
          }
        };
        var time = {
          name: "time",
          parse: function(_context, value) {
            if (value.type === 15) {
              switch (value.unit.toLowerCase()) {
                case "s":
                  return 1e3 * value.number;
                case "ms":
                  return value.number;
              }
            }
            throw new Error("Unsupported time type");
          }
        };
        var opacity = {
          name: "opacity",
          initialValue: "1",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }
            return 1;
          }
        };
        var textDecorationColor = {
          name: "text-decoration-color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var textDecorationLine = {
          name: "text-decoration-line",
          initialValue: "none",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
              switch (token.value) {
                case "underline":
                  return 1;
                case "overline":
                  return 2;
                case "line-through":
                  return 3;
                case "none":
                  return 4;
              }
              return 0;
            }).filter(function(line) {
              return line !== 0;
            });
          }
        };
        var fontFamily = {
          name: "font-family",
          initialValue: "",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function(token) {
              switch (token.type) {
                case 20:
                case 0:
                  accumulator.push(token.value);
                  break;
                case 17:
                  accumulator.push(token.number.toString());
                  break;
                case 4:
                  results.push(accumulator.join(" "));
                  accumulator.length = 0;
                  break;
              }
            });
            if (accumulator.length) {
              results.push(accumulator.join(" "));
            }
            return results.map(function(result) {
              return result.indexOf(" ") === -1 ? result : "'" + result + "'";
            });
          }
        };
        var fontSize = {
          name: "font-size",
          initialValue: "0",
          prefix: false,
          type: 3,
          format: "length"
        };
        var fontWeight = {
          name: "font-weight",
          initialValue: "normal",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }
            if (isIdentToken(token)) {
              switch (token.value) {
                case "bold":
                  return 700;
                case "normal":
                default:
                  return 400;
              }
            }
            return 400;
          }
        };
        var fontVariant = {
          name: "font-variant",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
              return token.value;
            });
          }
        };
        var fontStyle = {
          name: "font-style",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, overflow2) {
            switch (overflow2) {
              case "oblique":
                return "oblique";
              case "italic":
                return "italic";
              case "normal":
              default:
                return "normal";
            }
          }
        };
        var contains = function(bit, value) {
          return (bit & value) !== 0;
        };
        var content = {
          name: "content",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return [];
            }
            return tokens;
          }
        };
        var counterIncrement = {
          name: "counter-increment",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return null;
            }
            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i2 = 0; i2 < filtered.length; i2++) {
              var counter = filtered[i2];
              var next = filtered[i2 + 1];
              if (counter.type === 20) {
                var increment = next && isNumberToken(next) ? next.number : 1;
                increments.push({ counter: counter.value, increment });
              }
            }
            return increments;
          }
        };
        var counterReset = {
          name: "counter-reset",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i2 = 0; i2 < filtered.length; i2++) {
              var counter = filtered[i2];
              var next = filtered[i2 + 1];
              if (isIdentToken(counter) && counter.value !== "none") {
                var reset = next && isNumberToken(next) ? next.number : 0;
                resets.push({ counter: counter.value, reset });
              }
            }
            return resets;
          }
        };
        var duration = {
          name: "duration",
          initialValue: "0s",
          prefix: false,
          type: 1,
          parse: function(context, tokens) {
            return tokens.filter(isDimensionToken).map(function(token) {
              return time.parse(context, token);
            });
          }
        };
        var quotes = {
          name: "quotes",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return null;
            }
            var quotes2 = [];
            var filtered = tokens.filter(isStringToken);
            if (filtered.length % 2 !== 0) {
              return null;
            }
            for (var i2 = 0; i2 < filtered.length; i2 += 2) {
              var open_1 = filtered[i2].value;
              var close_1 = filtered[i2 + 1].value;
              quotes2.push({ open: open_1, close: close_1 });
            }
            return quotes2;
          }
        };
        var getQuote = function(quotes2, depth, open) {
          if (!quotes2) {
            return "";
          }
          var quote = quotes2[Math.min(depth, quotes2.length - 1)];
          if (!quote) {
            return "";
          }
          return open ? quote.open : quote.close;
        };
        var boxShadow = {
          name: "box-shadow",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
              return [];
            }
            return parseFunctionArgs(tokens).map(function(values) {
              var shadow = {
                color: 255,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH,
                spread: ZERO_LENGTH,
                inset: false
              };
              var c = 0;
              for (var i2 = 0; i2 < values.length; i2++) {
                var token = values[i2];
                if (isIdentWithValue(token, "inset")) {
                  shadow.inset = true;
                } else if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else if (c === 2) {
                    shadow.blur = token;
                  } else {
                    shadow.spread = token;
                  }
                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }
              return shadow;
            });
          }
        };
        var paintOrder = {
          name: "paint-order",
          initialValue: "normal",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            var DEFAULT_VALUE2 = [0, 1, 2];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function(token) {
              switch (token.value) {
                case "stroke":
                  layers.push(1);
                  break;
                case "fill":
                  layers.push(0);
                  break;
                case "markers":
                  layers.push(2);
                  break;
              }
            });
            DEFAULT_VALUE2.forEach(function(value) {
              if (layers.indexOf(value) === -1) {
                layers.push(value);
              }
            });
            return layers;
          }
        };
        var webkitTextStrokeColor = {
          name: "-webkit-text-stroke-color",
          initialValue: "currentcolor",
          prefix: false,
          type: 3,
          format: "color"
        };
        var webkitTextStrokeWidth = {
          name: "-webkit-text-stroke-width",
          initialValue: "0",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isDimensionToken(token)) {
              return token.number;
            }
            return 0;
          }
        };
        var CSSParsedDeclaration = function() {
          function CSSParsedDeclaration2(context, declaration) {
            var _a, _b;
            this.animationDuration = parse(context, duration, declaration.animationDuration);
            this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
            this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
            this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
            this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
            this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
            this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
            this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
            this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
            this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
            this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
            this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
            this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
            this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
            this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
            this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
            this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
            this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
            this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
            this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
            this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
            this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
            this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
            this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
            this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
            this.color = parse(context, color, declaration.color);
            this.direction = parse(context, direction, declaration.direction);
            this.display = parse(context, display, declaration.display);
            this.float = parse(context, float, declaration.cssFloat);
            this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
            this.fontSize = parse(context, fontSize, declaration.fontSize);
            this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
            this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
            this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
            this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
            this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
            this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
            this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
            this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
            this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
            this.marginTop = parse(context, marginTop, declaration.marginTop);
            this.marginRight = parse(context, marginRight, declaration.marginRight);
            this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
            this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
            this.opacity = parse(context, opacity, declaration.opacity);
            var overflowTuple = parse(context, overflow, declaration.overflow);
            this.overflowX = overflowTuple[0];
            this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
            this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
            this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
            this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
            this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
            this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
            this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
            this.position = parse(context, position, declaration.position);
            this.textAlign = parse(context, textAlign, declaration.textAlign);
            this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
            this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
            this.textShadow = parse(context, textShadow, declaration.textShadow);
            this.textTransform = parse(context, textTransform, declaration.textTransform);
            this.transform = parse(context, transform$1, declaration.transform);
            this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
            this.visibility = parse(context, visibility, declaration.visibility);
            this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
            this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
            this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
            this.zIndex = parse(context, zIndex, declaration.zIndex);
          }
          CSSParsedDeclaration2.prototype.isVisible = function() {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0;
          };
          CSSParsedDeclaration2.prototype.isTransparent = function() {
            return isTransparent(this.backgroundColor);
          };
          CSSParsedDeclaration2.prototype.isTransformed = function() {
            return this.transform !== null;
          };
          CSSParsedDeclaration2.prototype.isPositioned = function() {
            return this.position !== 0;
          };
          CSSParsedDeclaration2.prototype.isPositionedWithZIndex = function() {
            return this.isPositioned() && !this.zIndex.auto;
          };
          CSSParsedDeclaration2.prototype.isFloating = function() {
            return this.float !== 0;
          };
          CSSParsedDeclaration2.prototype.isInlineLevel = function() {
            return contains(this.display, 4) || contains(this.display, 33554432) || contains(this.display, 268435456) || contains(this.display, 536870912) || contains(this.display, 67108864) || contains(this.display, 134217728);
          };
          return CSSParsedDeclaration2;
        }();
        var CSSParsedPseudoDeclaration = function() {
          function CSSParsedPseudoDeclaration2(context, declaration) {
            this.content = parse(context, content, declaration.content);
            this.quotes = parse(context, quotes, declaration.quotes);
          }
          return CSSParsedPseudoDeclaration2;
        }();
        var CSSParsedCounterDeclaration = function() {
          function CSSParsedCounterDeclaration2(context, declaration) {
            this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
            this.counterReset = parse(context, counterReset, declaration.counterReset);
          }
          return CSSParsedCounterDeclaration2;
        }();
        var parse = function(context, descriptor, style) {
          var tokenizer = new Tokenizer();
          var value = style !== null && typeof style !== "undefined" ? style.toString() : descriptor.initialValue;
          tokenizer.write(value);
          var parser = new Parser(tokenizer.read());
          switch (descriptor.type) {
            case 2:
              var token = parser.parseComponentValue();
              return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
            case 0:
              return descriptor.parse(context, parser.parseComponentValue());
            case 1:
              return descriptor.parse(context, parser.parseComponentValues());
            case 4:
              return parser.parseComponentValue();
            case 3:
              switch (descriptor.format) {
                case "angle":
                  return angle.parse(context, parser.parseComponentValue());
                case "color":
                  return color$1.parse(context, parser.parseComponentValue());
                case "image":
                  return image.parse(context, parser.parseComponentValue());
                case "length":
                  var length_1 = parser.parseComponentValue();
                  return isLength(length_1) ? length_1 : ZERO_LENGTH;
                case "length-percentage":
                  var value_1 = parser.parseComponentValue();
                  return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                case "time":
                  return time.parse(context, parser.parseComponentValue());
              }
              break;
          }
        };
        var elementDebuggerAttribute = "data-html2canvas-debug";
        var getElementDebugType = function(element) {
          var attribute = element.getAttribute(elementDebuggerAttribute);
          switch (attribute) {
            case "all":
              return 1;
            case "clone":
              return 2;
            case "parse":
              return 3;
            case "render":
              return 4;
            default:
              return 0;
          }
        };
        var isDebugging = function(element, type) {
          var elementType = getElementDebugType(element);
          return elementType === 1 || type === elementType;
        };
        var ElementContainer = function() {
          function ElementContainer2(context, element) {
            this.context = context;
            this.textNodes = [];
            this.elements = [];
            this.flags = 0;
            if (isDebugging(element, 3)) {
              debugger;
            }
            this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
            if (isHTMLElementNode(element)) {
              if (this.styles.animationDuration.some(function(duration2) {
                return duration2 > 0;
              })) {
                element.style.animationDuration = "0s";
              }
              if (this.styles.transform !== null) {
                element.style.transform = "none";
              }
            }
            this.bounds = parseBounds(this.context, element);
            if (isDebugging(element, 4)) {
              this.flags |= 16;
            }
          }
          return ElementContainer2;
        }();
        var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
        var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
          lookup$1[chars$1.charCodeAt(i$1)] = i$1;
        }
        var decode = function(base642) {
          var bufferLength = base642.length * 0.75, len = base642.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
          if (base642[base642.length - 1] === "=") {
            bufferLength--;
            if (base642[base642.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
          for (i2 = 0; i2 < len; i2 += 4) {
            encoded1 = lookup$1[base642.charCodeAt(i2)];
            encoded2 = lookup$1[base642.charCodeAt(i2 + 1)];
            encoded3 = lookup$1[base642.charCodeAt(i2 + 2)];
            encoded4 = lookup$1[base642.charCodeAt(i2 + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        };
        var polyUint16Array = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 2) {
            bytes.push(buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var polyUint32Array = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 4) {
            bytes.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var UTRIE2_SHIFT_2 = 5;
        var UTRIE2_SHIFT_1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT = 2;
        var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
        var UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2;
        var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
        var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2;
        var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
        var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
        var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
        var slice16 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64 = function(base642, _byteLength) {
          var buffer = decode(base642);
          var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie = function() {
          function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
          }
          Trie2.prototype.get = function(codePoint) {
            var ix;
            if (codePoint >= 0) {
              if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
                ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
              }
              if (codePoint <= 65535) {
                ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> UTRIE2_SHIFT_2)];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
              }
              if (codePoint < this.highStart) {
                ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                ix = this.index[ix];
                ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                ix = this.index[ix];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
              }
              if (codePoint <= 1114111) {
                return this.data[this.highValueIndex];
              }
            }
            return this.errorValue;
          };
          return Trie2;
        }();
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i = 0; i < chars.length; i++) {
          lookup[chars.charCodeAt(i)] = i;
        }
        var Prepend = 1;
        var CR = 2;
        var LF = 3;
        var Control = 4;
        var Extend = 5;
        var SpacingMark = 7;
        var L = 8;
        var V = 9;
        var T = 10;
        var LV = 11;
        var LVT = 12;
        var ZWJ = 13;
        var Extended_Pictographic = 14;
        var RI = 15;
        var toCodePoints = function(str) {
          var codePoints = [];
          var i2 = 0;
          var length = str.length;
          while (i2 < length) {
            var value = str.charCodeAt(i2++);
            if (value >= 55296 && value <= 56319 && i2 < length) {
              var extra = str.charCodeAt(i2++);
              if ((extra & 64512) === 56320) {
                codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                codePoints.push(value);
                i2--;
              }
            } else {
              codePoints.push(value);
            }
          }
          return codePoints;
        };
        var fromCodePoint = function() {
          var codePoints = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }
          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }
          var length = codePoints.length;
          if (!length) {
            return "";
          }
          var codeUnits = [];
          var index = -1;
          var result = "";
          while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
            }
            if (index + 1 === length || codeUnits.length > 16384) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        var UnicodeTrie = createTrieFromBase64(base64);
        var BREAK_NOT_ALLOWED = "\xD7";
        var BREAK_ALLOWED = "\xF7";
        var codePointToClass = function(codePoint) {
          return UnicodeTrie.get(codePoint);
        };
        var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
          var prevIndex = index - 2;
          var prev = classTypes[prevIndex];
          var current = classTypes[index - 1];
          var next = classTypes[index];
          if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === CR || current === LF || current === Control) {
            return BREAK_ALLOWED;
          }
          if (next === CR || next === LF || next === Control) {
            return BREAK_ALLOWED;
          }
          if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
          }
          if ((current === LV || current === V) && (next === V || next === T)) {
            return BREAK_NOT_ALLOWED;
          }
          if ((current === LVT || current === T) && next === T) {
            return BREAK_NOT_ALLOWED;
          }
          if (next === ZWJ || next === Extend) {
            return BREAK_NOT_ALLOWED;
          }
          if (next === SpacingMark) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === Prepend) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === ZWJ && next === Extended_Pictographic) {
            while (prev === Extend) {
              prev = classTypes[--prevIndex];
            }
            if (prev === Extended_Pictographic) {
              return BREAK_NOT_ALLOWED;
            }
          }
          if (current === RI && next === RI) {
            var countRI = 0;
            while (prev === RI) {
              countRI++;
              prev = classTypes[--prevIndex];
            }
            if (countRI % 2 === 0) {
              return BREAK_NOT_ALLOWED;
            }
          }
          return BREAK_ALLOWED;
        };
        var GraphemeBreaker = function(str) {
          var codePoints = toCodePoints(str);
          var length = codePoints.length;
          var index = 0;
          var lastEnd = 0;
          var classTypes = codePoints.map(codePointToClass);
          return {
            next: function() {
              if (index >= length) {
                return { done: true, value: null };
              }
              var graphemeBreak = BREAK_NOT_ALLOWED;
              while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {
              }
              if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                lastEnd = index;
                return { value, done: false };
              }
              return { done: true, value: null };
            }
          };
        };
        var splitGraphemes = function(str) {
          var breaker = GraphemeBreaker(str);
          var graphemes = [];
          var bk;
          while (!(bk = breaker.next()).done) {
            if (bk.value) {
              graphemes.push(bk.value.slice());
            }
          }
          return graphemes;
        };
        var testRangeBounds = function(document3) {
          var TEST_HEIGHT = 123;
          if (document3.createRange) {
            var range = document3.createRange();
            if (range.getBoundingClientRect) {
              var testElement = document3.createElement("boundtest");
              testElement.style.height = TEST_HEIGHT + "px";
              testElement.style.display = "block";
              document3.body.appendChild(testElement);
              range.selectNode(testElement);
              var rangeBounds = range.getBoundingClientRect();
              var rangeHeight = Math.round(rangeBounds.height);
              document3.body.removeChild(testElement);
              if (rangeHeight === TEST_HEIGHT) {
                return true;
              }
            }
          }
          return false;
        };
        var testIOSLineBreak = function(document3) {
          var testElement = document3.createElement("boundtest");
          testElement.style.width = "50px";
          testElement.style.display = "block";
          testElement.style.fontSize = "12px";
          testElement.style.letterSpacing = "0px";
          testElement.style.wordSpacing = "0px";
          document3.body.appendChild(testElement);
          var range = document3.createRange();
          testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
          var node = testElement.firstChild;
          var textList = toCodePoints$1(node.data).map(function(i2) {
            return fromCodePoint$1(i2);
          });
          var offset = 0;
          var prev = {};
          var supports = textList.every(function(text, i2) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;
            if (i2 === 0) {
              return true;
            }
            return boundAhead;
          });
          document3.body.removeChild(testElement);
          return supports;
        };
        var testCORS = function() {
          return typeof new Image().crossOrigin !== "undefined";
        };
        var testResponseType = function() {
          return typeof new XMLHttpRequest().responseType === "string";
        };
        var testSVG = function(document3) {
          var img = new Image();
          var canvas = document3.createElement("canvas");
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return false;
          }
          img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
          try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
          } catch (e2) {
            return false;
          }
          return true;
        };
        var isGreenPixel = function(data) {
          return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
        };
        var testForeignObject = function(document3) {
          var canvas = document3.createElement("canvas");
          var size = 100;
          canvas.width = size;
          canvas.height = size;
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return Promise.reject(false);
          }
          ctx.fillStyle = "rgb(0, 255, 0)";
          ctx.fillRect(0, 0, size, size);
          var img = new Image();
          var greenImageSrc = canvas.toDataURL();
          img.src = greenImageSrc;
          var svg = createForeignObjectSVG(size, size, 0, 0, img);
          ctx.fillStyle = "red";
          ctx.fillRect(0, 0, size, size);
          return loadSerializedSVG$1(svg).then(function(img2) {
            ctx.drawImage(img2, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, size, size);
            var node = document3.createElement("div");
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px";
            return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
          }).then(function(img2) {
            ctx.drawImage(img2, 0, 0);
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
          }).catch(function() {
            return false;
          });
        };
        var createForeignObjectSVG = function(width, height, x, y, node) {
          var xmlns = "http://www.w3.org/2000/svg";
          var svg = document.createElementNS(xmlns, "svg");
          var foreignObject = document.createElementNS(xmlns, "foreignObject");
          svg.setAttributeNS(null, "width", width.toString());
          svg.setAttributeNS(null, "height", height.toString());
          foreignObject.setAttributeNS(null, "width", "100%");
          foreignObject.setAttributeNS(null, "height", "100%");
          foreignObject.setAttributeNS(null, "x", x.toString());
          foreignObject.setAttributeNS(null, "y", y.toString());
          foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
          svg.appendChild(foreignObject);
          foreignObject.appendChild(node);
          return svg;
        };
        var loadSerializedSVG$1 = function(svg) {
          return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              return resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };
        var FEATURES = {
          get SUPPORT_RANGE_BOUNDS() {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value });
            return value;
          },
          get SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value });
            return value;
          },
          get SUPPORT_SVG_DRAWING() {
            var value = testSVG(document);
            Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value });
            return value;
          },
          get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
            Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value });
            return value;
          },
          get SUPPORT_CORS_IMAGES() {
            var value = testCORS();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value });
            return value;
          },
          get SUPPORT_RESPONSE_TYPE() {
            var value = testResponseType();
            Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value });
            return value;
          },
          get SUPPORT_CORS_XHR() {
            var value = "withCredentials" in new XMLHttpRequest();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value });
            return value;
          },
          get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            var value = !!(typeof Intl !== "undefined" && Intl.Segmenter);
            Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value });
            return value;
          }
        };
        var TextBounds = function() {
          function TextBounds2(text, bounds) {
            this.text = text;
            this.bounds = bounds;
          }
          return TextBounds2;
        }();
        var parseTextBounds = function(context, value, styles, node) {
          var textList = breakText(value, styles);
          var textBounds = [];
          var offset = 0;
          textList.forEach(function(text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
              if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                var clientRects = createRange(node, offset, text.length).getClientRects();
                if (clientRects.length > 1) {
                  var subSegments = segmentGraphemes(text);
                  var subOffset_1 = 0;
                  subSegments.forEach(function(subSegment) {
                    textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                    subOffset_1 += subSegment.length;
                  });
                } else {
                  textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                }
              } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                node = replacementNode;
              }
            } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
              node = node.splitText(text.length);
            }
            offset += text.length;
          });
          return textBounds;
        };
        var getWrapperBounds = function(context, node) {
          var ownerDocument = node.ownerDocument;
          if (ownerDocument) {
            var wrapper = ownerDocument.createElement("html2canvaswrapper");
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (parentNode) {
              parentNode.replaceChild(wrapper, node);
              var bounds = parseBounds(context, wrapper);
              if (wrapper.firstChild) {
                parentNode.replaceChild(wrapper.firstChild, wrapper);
              }
              return bounds;
            }
          }
          return Bounds.EMPTY;
        };
        var createRange = function(node, offset, length) {
          var ownerDocument = node.ownerDocument;
          if (!ownerDocument) {
            throw new Error("Node has no owner document");
          }
          var range = ownerDocument.createRange();
          range.setStart(node, offset);
          range.setEnd(node, offset + length);
          return range;
        };
        var segmentGraphemes = function(value) {
          if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
            return Array.from(segmenter.segment(value)).map(function(segment) {
              return segment.segment;
            });
          }
          return splitGraphemes(value);
        };
        var segmentWords = function(value, styles) {
          if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var segmenter = new Intl.Segmenter(void 0, {
              granularity: "word"
            });
            return Array.from(segmenter.segment(value)).map(function(segment) {
              return segment.segment;
            });
          }
          return breakWords(value, styles);
        };
        var breakText = function(value, styles) {
          return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
        };
        var wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241];
        var breakWords = function(str, styles) {
          var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word" ? "break-word" : styles.wordBreak
          });
          var words = [];
          var bk;
          var _loop_1 = function() {
            if (bk.value) {
              var value = bk.value.slice();
              var codePoints = toCodePoints$1(value);
              var word_1 = "";
              codePoints.forEach(function(codePoint) {
                if (wordSeparators.indexOf(codePoint) === -1) {
                  word_1 += fromCodePoint$1(codePoint);
                } else {
                  if (word_1.length) {
                    words.push(word_1);
                  }
                  words.push(fromCodePoint$1(codePoint));
                  word_1 = "";
                }
              });
              if (word_1.length) {
                words.push(word_1);
              }
            }
          };
          while (!(bk = breaker.next()).done) {
            _loop_1();
          }
          return words;
        };
        var TextContainer = function() {
          function TextContainer2(context, node, styles) {
            this.text = transform(node.data, styles.textTransform);
            this.textBounds = parseTextBounds(context, this.text, styles, node);
          }
          return TextContainer2;
        }();
        var transform = function(text, transform2) {
          switch (transform2) {
            case 1:
              return text.toLowerCase();
            case 3:
              return text.replace(CAPITALIZE, capitalize);
            case 2:
              return text.toUpperCase();
            default:
              return text;
          }
        };
        var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
        var capitalize = function(m, p1, p2) {
          if (m.length > 0) {
            return p1 + p2.toUpperCase();
          }
          return m;
        };
        var ImageElementContainer = function(_super) {
          __extends(ImageElementContainer2, _super);
          function ImageElementContainer2(context, img) {
            var _this = _super.call(this, context, img) || this;
            _this.src = img.currentSrc || img.src;
            _this.intrinsicWidth = img.naturalWidth;
            _this.intrinsicHeight = img.naturalHeight;
            _this.context.cache.addImage(_this.src);
            return _this;
          }
          return ImageElementContainer2;
        }(ElementContainer);
        var CanvasElementContainer = function(_super) {
          __extends(CanvasElementContainer2, _super);
          function CanvasElementContainer2(context, canvas) {
            var _this = _super.call(this, context, canvas) || this;
            _this.canvas = canvas;
            _this.intrinsicWidth = canvas.width;
            _this.intrinsicHeight = canvas.height;
            return _this;
          }
          return CanvasElementContainer2;
        }(ElementContainer);
        var SVGElementContainer = function(_super) {
          __extends(SVGElementContainer2, _super);
          function SVGElementContainer2(context, img) {
            var _this = _super.call(this, context, img) || this;
            var s = new XMLSerializer();
            var bounds = parseBounds(context, img);
            img.setAttribute("width", bounds.width + "px");
            img.setAttribute("height", bounds.height + "px");
            _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
            _this.intrinsicWidth = img.width.baseVal.value;
            _this.intrinsicHeight = img.height.baseVal.value;
            _this.context.cache.addImage(_this.svg);
            return _this;
          }
          return SVGElementContainer2;
        }(ElementContainer);
        var LIElementContainer = function(_super) {
          __extends(LIElementContainer2, _super);
          function LIElementContainer2(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
          }
          return LIElementContainer2;
        }(ElementContainer);
        var OLElementContainer = function(_super) {
          __extends(OLElementContainer2, _super);
          function OLElementContainer2(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.start = element.start;
            _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
            return _this;
          }
          return OLElementContainer2;
        }(ElementContainer);
        var CHECKBOX_BORDER_RADIUS = [
          {
            type: 15,
            flags: 0,
            unit: "px",
            number: 3
          }
        ];
        var RADIO_BORDER_RADIUS = [
          {
            type: 16,
            flags: 0,
            number: 50
          }
        ];
        var reformatInputBounds = function(bounds) {
          if (bounds.width > bounds.height) {
            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
          } else if (bounds.width < bounds.height) {
            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
          }
          return bounds;
        };
        var getInputValue = function(node) {
          var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
          return value.length === 0 ? node.placeholder || "" : value;
        };
        var CHECKBOX = "checkbox";
        var RADIO = "radio";
        var PASSWORD = "password";
        var INPUT_COLOR = 707406591;
        var InputElementContainer = function(_super) {
          __extends(InputElementContainer2, _super);
          function InputElementContainer2(context, input) {
            var _this = _super.call(this, context, input) || this;
            _this.type = input.type.toLowerCase();
            _this.checked = input.checked;
            _this.value = getInputValue(input);
            if (_this.type === CHECKBOX || _this.type === RADIO) {
              _this.styles.backgroundColor = 3739148031;
              _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 2779096575;
              _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
              _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1;
              _this.styles.backgroundClip = [0];
              _this.styles.backgroundOrigin = [0];
              _this.bounds = reformatInputBounds(_this.bounds);
            }
            switch (_this.type) {
              case CHECKBOX:
                _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
                break;
              case RADIO:
                _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
                break;
            }
            return _this;
          }
          return InputElementContainer2;
        }(ElementContainer);
        var SelectElementContainer = function(_super) {
          __extends(SelectElementContainer2, _super);
          function SelectElementContainer2(context, element) {
            var _this = _super.call(this, context, element) || this;
            var option = element.options[element.selectedIndex || 0];
            _this.value = option ? option.text || "" : "";
            return _this;
          }
          return SelectElementContainer2;
        }(ElementContainer);
        var TextareaElementContainer = function(_super) {
          __extends(TextareaElementContainer2, _super);
          function TextareaElementContainer2(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
          }
          return TextareaElementContainer2;
        }(ElementContainer);
        var IFrameElementContainer = function(_super) {
          __extends(IFrameElementContainer2, _super);
          function IFrameElementContainer2(context, iframe) {
            var _this = _super.call(this, context, iframe) || this;
            _this.src = iframe.src;
            _this.width = parseInt(iframe.width, 10) || 0;
            _this.height = parseInt(iframe.height, 10) || 0;
            _this.backgroundColor = _this.styles.backgroundColor;
            try {
              if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
                _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
                var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
                _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
              }
            } catch (e2) {
            }
            return _this;
          }
          return IFrameElementContainer2;
        }(ElementContainer);
        var LIST_OWNERS = ["OL", "UL", "MENU"];
        var parseNodeTree = function(context, node, parent, root) {
          for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
              parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            } else if (isElementNode(childNode)) {
              if (isSlotElement(childNode) && childNode.assignedNodes) {
                childNode.assignedNodes().forEach(function(childNode2) {
                  return parseNodeTree(context, childNode2, parent, root);
                });
              } else {
                var container = createContainer(context, childNode);
                if (container.styles.isVisible()) {
                  if (createsRealStackingContext(childNode, container, root)) {
                    container.flags |= 4;
                  } else if (createsStackingContext(container.styles)) {
                    container.flags |= 2;
                  }
                  if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                    container.flags |= 8;
                  }
                  parent.elements.push(container);
                  childNode.slot;
                  if (childNode.shadowRoot) {
                    parseNodeTree(context, childNode.shadowRoot, container, root);
                  } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
                    parseNodeTree(context, childNode, container, root);
                  }
                }
              }
            }
          }
        };
        var createContainer = function(context, element) {
          if (isImageElement(element)) {
            return new ImageElementContainer(context, element);
          }
          if (isCanvasElement(element)) {
            return new CanvasElementContainer(context, element);
          }
          if (isSVGElement(element)) {
            return new SVGElementContainer(context, element);
          }
          if (isLIElement(element)) {
            return new LIElementContainer(context, element);
          }
          if (isOLElement(element)) {
            return new OLElementContainer(context, element);
          }
          if (isInputElement(element)) {
            return new InputElementContainer(context, element);
          }
          if (isSelectElement(element)) {
            return new SelectElementContainer(context, element);
          }
          if (isTextareaElement(element)) {
            return new TextareaElementContainer(context, element);
          }
          if (isIFrameElement(element)) {
            return new IFrameElementContainer(context, element);
          }
          return new ElementContainer(context, element);
        };
        var parseTree = function(context, element) {
          var container = createContainer(context, element);
          container.flags |= 4;
          parseNodeTree(context, element, container, container);
          return container;
        };
        var createsRealStackingContext = function(node, container, root) {
          return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
        };
        var createsStackingContext = function(styles) {
          return styles.isPositioned() || styles.isFloating();
        };
        var isTextNode = function(node) {
          return node.nodeType === Node.TEXT_NODE;
        };
        var isElementNode = function(node) {
          return node.nodeType === Node.ELEMENT_NODE;
        };
        var isHTMLElementNode = function(node) {
          return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
        };
        var isSVGElementNode = function(element) {
          return typeof element.className === "object";
        };
        var isLIElement = function(node) {
          return node.tagName === "LI";
        };
        var isOLElement = function(node) {
          return node.tagName === "OL";
        };
        var isInputElement = function(node) {
          return node.tagName === "INPUT";
        };
        var isHTMLElement = function(node) {
          return node.tagName === "HTML";
        };
        var isSVGElement = function(node) {
          return node.tagName === "svg";
        };
        var isBodyElement = function(node) {
          return node.tagName === "BODY";
        };
        var isCanvasElement = function(node) {
          return node.tagName === "CANVAS";
        };
        var isVideoElement = function(node) {
          return node.tagName === "VIDEO";
        };
        var isImageElement = function(node) {
          return node.tagName === "IMG";
        };
        var isIFrameElement = function(node) {
          return node.tagName === "IFRAME";
        };
        var isStyleElement = function(node) {
          return node.tagName === "STYLE";
        };
        var isScriptElement = function(node) {
          return node.tagName === "SCRIPT";
        };
        var isTextareaElement = function(node) {
          return node.tagName === "TEXTAREA";
        };
        var isSelectElement = function(node) {
          return node.tagName === "SELECT";
        };
        var isSlotElement = function(node) {
          return node.tagName === "SLOT";
        };
        var isCustomElement = function(node) {
          return node.tagName.indexOf("-") > 0;
        };
        var CounterState = function() {
          function CounterState2() {
            this.counters = {};
          }
          CounterState2.prototype.getCounterValue = function(name) {
            var counter = this.counters[name];
            if (counter && counter.length) {
              return counter[counter.length - 1];
            }
            return 1;
          };
          CounterState2.prototype.getCounterValues = function(name) {
            var counter = this.counters[name];
            return counter ? counter : [];
          };
          CounterState2.prototype.pop = function(counters) {
            var _this = this;
            counters.forEach(function(counter) {
              return _this.counters[counter].pop();
            });
          };
          CounterState2.prototype.parse = function(style) {
            var _this = this;
            var counterIncrement2 = style.counterIncrement;
            var counterReset2 = style.counterReset;
            var canReset = true;
            if (counterIncrement2 !== null) {
              counterIncrement2.forEach(function(entry) {
                var counter = _this.counters[entry.counter];
                if (counter && entry.increment !== 0) {
                  canReset = false;
                  if (!counter.length) {
                    counter.push(1);
                  }
                  counter[Math.max(0, counter.length - 1)] += entry.increment;
                }
              });
            }
            var counterNames = [];
            if (canReset) {
              counterReset2.forEach(function(entry) {
                var counter = _this.counters[entry.counter];
                counterNames.push(entry.counter);
                if (!counter) {
                  counter = _this.counters[entry.counter] = [];
                }
                counter.push(entry.reset);
              });
            }
            return counterNames;
          };
          return CounterState2;
        }();
        var ROMAN_UPPER = {
          integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        };
        var ARMENIAN = {
          integers: [
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u0554",
            "\u0553",
            "\u0552",
            "\u0551",
            "\u0550",
            "\u054F",
            "\u054E",
            "\u054D",
            "\u054C",
            "\u054B",
            "\u054A",
            "\u0549",
            "\u0548",
            "\u0547",
            "\u0546",
            "\u0545",
            "\u0544",
            "\u0543",
            "\u0542",
            "\u0541",
            "\u0540",
            "\u053F",
            "\u053E",
            "\u053D",
            "\u053C",
            "\u053B",
            "\u053A",
            "\u0539",
            "\u0538",
            "\u0537",
            "\u0536",
            "\u0535",
            "\u0534",
            "\u0533",
            "\u0532",
            "\u0531"
          ]
        };
        var HEBREW = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            19,
            18,
            17,
            16,
            15,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u05D9\u05F3",
            "\u05D8\u05F3",
            "\u05D7\u05F3",
            "\u05D6\u05F3",
            "\u05D5\u05F3",
            "\u05D4\u05F3",
            "\u05D3\u05F3",
            "\u05D2\u05F3",
            "\u05D1\u05F3",
            "\u05D0\u05F3",
            "\u05EA",
            "\u05E9",
            "\u05E8",
            "\u05E7",
            "\u05E6",
            "\u05E4",
            "\u05E2",
            "\u05E1",
            "\u05E0",
            "\u05DE",
            "\u05DC",
            "\u05DB",
            "\u05D9\u05D8",
            "\u05D9\u05D7",
            "\u05D9\u05D6",
            "\u05D8\u05D6",
            "\u05D8\u05D5",
            "\u05D9",
            "\u05D8",
            "\u05D7",
            "\u05D6",
            "\u05D5",
            "\u05D4",
            "\u05D3",
            "\u05D2",
            "\u05D1",
            "\u05D0"
          ]
        };
        var GEORGIAN = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u10F5",
            "\u10F0",
            "\u10EF",
            "\u10F4",
            "\u10EE",
            "\u10ED",
            "\u10EC",
            "\u10EB",
            "\u10EA",
            "\u10E9",
            "\u10E8",
            "\u10E7",
            "\u10E6",
            "\u10E5",
            "\u10E4",
            "\u10F3",
            "\u10E2",
            "\u10E1",
            "\u10E0",
            "\u10DF",
            "\u10DE",
            "\u10DD",
            "\u10F2",
            "\u10DC",
            "\u10DB",
            "\u10DA",
            "\u10D9",
            "\u10D8",
            "\u10D7",
            "\u10F1",
            "\u10D6",
            "\u10D5",
            "\u10D4",
            "\u10D3",
            "\u10D2",
            "\u10D1",
            "\u10D0"
          ]
        };
        var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
          if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
          }
          return symbols.integers.reduce(function(string, integer, index) {
            while (value >= integer) {
              value -= integer;
              string += symbols.values[index];
            }
            return string;
          }, "") + suffix;
        };
        var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
          var string = "";
          do {
            if (!isNumeric) {
              value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
          } while (value * codePointRangeLength >= codePointRangeLength);
          return string;
        };
        var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
          var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
          return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
            return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
          }) + suffix);
        };
        var createCounterStyleFromSymbols = function(value, symbols, suffix) {
          if (suffix === void 0) {
            suffix = ". ";
          }
          var codePointRangeLength = symbols.length;
          return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
            return symbols[Math.floor(codePoint % codePointRangeLength)];
          }) + suffix;
        };
        var CJK_ZEROS = 1 << 0;
        var CJK_TEN_COEFFICIENTS = 1 << 1;
        var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
        var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
        var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
          if (value < -9999 || value > 9999) {
            return createCounterText(value, 4, suffix.length > 0);
          }
          var tmp = Math.abs(value);
          var string = suffix;
          if (tmp === 0) {
            return numbers[0] + string;
          }
          for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;
            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") {
              string = numbers[coefficient] + string;
            } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
              string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
            } else if (coefficient === 1 && digit > 0) {
              string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
          }
          return (value < 0 ? negativeSign : "") + string;
        };
        var CHINESE_INFORMAL_MULTIPLIERS = "\u5341\u767E\u5343\u842C";
        var CHINESE_FORMAL_MULTIPLIERS = "\u62FE\u4F70\u4EDF\u842C";
        var JAPANESE_NEGATIVE = "\u30DE\u30A4\u30CA\u30B9";
        var KOREAN_NEGATIVE = "\uB9C8\uC774\uB108\uC2A4";
        var createCounterText = function(value, type, appendSuffix) {
          var defaultSuffix = appendSuffix ? ". " : "";
          var cjkSuffix = appendSuffix ? "\u3001" : "";
          var koreanSuffix = appendSuffix ? ", " : "";
          var spaceSuffix = appendSuffix ? " " : "";
          switch (type) {
            case 0:
              return "\u2022" + spaceSuffix;
            case 1:
              return "\u25E6" + spaceSuffix;
            case 2:
              return "\u25FE" + spaceSuffix;
            case 5:
              var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
              return string.length < 4 ? "0" + string : string;
            case 4:
              return createCounterStyleFromSymbols(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", cjkSuffix);
            case 6:
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix).toLowerCase();
            case 7:
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix);
            case 8:
              return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case 9:
              return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case 10:
              return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case 11:
              return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case 12:
            case 49:
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix);
            case 35:
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix).toLowerCase();
            case 13:
              return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14:
            case 30:
              return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case 15:
              return createCounterStyleFromSymbols(value, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", cjkSuffix);
            case 16:
              return createCounterStyleFromSymbols(value, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", cjkSuffix);
            case 17:
            case 48:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 47:
              return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 42:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 41:
              return createCJKCounter(value, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 26:
              return createCJKCounter(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, 0);
            case 25:
              return createCJKCounter(value, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 31:
              return createCJKCounter(value, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 33:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", KOREAN_NEGATIVE, koreanSuffix, 0);
            case 32:
              return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 18:
              return createCounterStyleFromRange(value, 2406, 2415, true, defaultSuffix);
            case 20:
              return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3, defaultSuffix);
            case 21:
              return createCounterStyleFromRange(value, 2790, 2799, true, defaultSuffix);
            case 22:
              return createCounterStyleFromRange(value, 2662, 2671, true, defaultSuffix);
            case 22:
              return createAdditiveCounter(value, 1, 10999, HEBREW, 3, defaultSuffix);
            case 23:
              return createCounterStyleFromSymbols(value, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
            case 24:
              return createCounterStyleFromSymbols(value, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
            case 27:
              return createCounterStyleFromRange(value, 3302, 3311, true, defaultSuffix);
            case 28:
              return createCounterStyleFromSymbols(value, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", cjkSuffix);
            case 29:
              return createCounterStyleFromSymbols(value, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", cjkSuffix);
            case 34:
              return createCounterStyleFromRange(value, 3792, 3801, true, defaultSuffix);
            case 37:
              return createCounterStyleFromRange(value, 6160, 6169, true, defaultSuffix);
            case 38:
              return createCounterStyleFromRange(value, 4160, 4169, true, defaultSuffix);
            case 39:
              return createCounterStyleFromRange(value, 2918, 2927, true, defaultSuffix);
            case 40:
              return createCounterStyleFromRange(value, 1776, 1785, true, defaultSuffix);
            case 43:
              return createCounterStyleFromRange(value, 3046, 3055, true, defaultSuffix);
            case 44:
              return createCounterStyleFromRange(value, 3174, 3183, true, defaultSuffix);
            case 45:
              return createCounterStyleFromRange(value, 3664, 3673, true, defaultSuffix);
            case 46:
              return createCounterStyleFromRange(value, 3872, 3881, true, defaultSuffix);
            case 3:
            default:
              return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
          }
        };
        var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
        var DocumentCloner = function() {
          function DocumentCloner2(context, element, options) {
            this.context = context;
            this.options = options;
            this.scrolledElements = [];
            this.referenceElement = element;
            this.counters = new CounterState();
            this.quoteDepth = 0;
            if (!element.ownerDocument) {
              throw new Error("Cloned element does not have an owner document");
            }
            this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
          }
          DocumentCloner2.prototype.toIFrame = function(ownerDocument, windowSize) {
            var _this = this;
            var iframe = createIFrameContainer(ownerDocument, windowSize);
            if (!iframe.contentWindow) {
              return Promise.reject("Unable to find iframe window");
            }
            var scrollX = ownerDocument.defaultView.pageXOffset;
            var scrollY = ownerDocument.defaultView.pageYOffset;
            var cloneWindow = iframe.contentWindow;
            var documentClone = cloneWindow.document;
            var iframeLoad = iframeLoader(iframe).then(function() {
              return __awaiter(_this, void 0, void 0, function() {
                var onclone, referenceElement;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      this.scrolledElements.forEach(restoreNodeScroll);
                      if (cloneWindow) {
                        cloneWindow.scrollTo(windowSize.left, windowSize.top);
                        if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                          this.context.logger.warn("Unable to restore scroll position for cloned document");
                          this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                        }
                      }
                      onclone = this.options.onclone;
                      referenceElement = this.clonedReferenceElement;
                      if (typeof referenceElement === "undefined") {
                        return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                      }
                      if (!(documentClone.fonts && documentClone.fonts.ready))
                        return [3, 2];
                      return [4, documentClone.fonts.ready];
                    case 1:
                      _a.sent();
                      _a.label = 2;
                    case 2:
                      if (!/(AppleWebKit)/g.test(navigator.userAgent))
                        return [3, 4];
                      return [4, imagesReady(documentClone)];
                    case 3:
                      _a.sent();
                      _a.label = 4;
                    case 4:
                      if (typeof onclone === "function") {
                        return [2, Promise.resolve().then(function() {
                          return onclone(documentClone, referenceElement);
                        }).then(function() {
                          return iframe;
                        })];
                      }
                      return [2, iframe];
                  }
                });
              });
            });
            documentClone.open();
            documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
            restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
            documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
            documentClone.close();
            return iframeLoad;
          };
          DocumentCloner2.prototype.createElementClone = function(node) {
            if (isDebugging(node, 2)) {
              debugger;
            }
            if (isCanvasElement(node)) {
              return this.createCanvasClone(node);
            }
            if (isVideoElement(node)) {
              return this.createVideoClone(node);
            }
            if (isStyleElement(node)) {
              return this.createStyleClone(node);
            }
            var clone = node.cloneNode(false);
            if (isImageElement(clone)) {
              if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                clone.src = node.currentSrc;
                clone.srcset = "";
              }
              if (clone.loading === "lazy") {
                clone.loading = "eager";
              }
            }
            if (isCustomElement(clone)) {
              return this.createCustomElementClone(clone);
            }
            return clone;
          };
          DocumentCloner2.prototype.createCustomElementClone = function(node) {
            var clone = document.createElement("html2canvascustomelement");
            copyCSSStyles(node.style, clone);
            return clone;
          };
          DocumentCloner2.prototype.createStyleClone = function(node) {
            try {
              var sheet = node.sheet;
              if (sheet && sheet.cssRules) {
                var css = [].slice.call(sheet.cssRules, 0).reduce(function(css2, rule) {
                  if (rule && typeof rule.cssText === "string") {
                    return css2 + rule.cssText;
                  }
                  return css2;
                }, "");
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
              }
            } catch (e2) {
              this.context.logger.error("Unable to access cssRules property", e2);
              if (e2.name !== "SecurityError") {
                throw e2;
              }
            }
            return node.cloneNode(false);
          };
          DocumentCloner2.prototype.createCanvasClone = function(canvas) {
            var _a;
            if (this.options.inlineImages && canvas.ownerDocument) {
              var img = canvas.ownerDocument.createElement("img");
              try {
                img.src = canvas.toDataURL();
                return img;
              } catch (e2) {
                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
              }
            }
            var clonedCanvas = canvas.cloneNode(false);
            try {
              clonedCanvas.width = canvas.width;
              clonedCanvas.height = canvas.height;
              var ctx = canvas.getContext("2d");
              var clonedCtx = clonedCanvas.getContext("2d");
              if (clonedCtx) {
                if (!this.options.allowTaint && ctx) {
                  clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                } else {
                  var gl = (_a = canvas.getContext("webgl2")) !== null && _a !== void 0 ? _a : canvas.getContext("webgl");
                  if (gl) {
                    var attribs = gl.getContextAttributes();
                    if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                      this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", canvas);
                    }
                  }
                  clonedCtx.drawImage(canvas, 0, 0);
                }
              }
              return clonedCanvas;
            } catch (e2) {
              this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
            }
            return clonedCanvas;
          };
          DocumentCloner2.prototype.createVideoClone = function(video) {
            var canvas = video.ownerDocument.createElement("canvas");
            canvas.width = video.offsetWidth;
            canvas.height = video.offsetHeight;
            var ctx = canvas.getContext("2d");
            try {
              if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                if (!this.options.allowTaint) {
                  ctx.getImageData(0, 0, canvas.width, canvas.height);
                }
              }
              return canvas;
            } catch (e2) {
              this.context.logger.info("Unable to clone video as it is tainted", video);
            }
            var blankCanvas = video.ownerDocument.createElement("canvas");
            blankCanvas.width = video.offsetWidth;
            blankCanvas.height = video.offsetHeight;
            return blankCanvas;
          };
          DocumentCloner2.prototype.appendChildNode = function(clone, child, copyStyles) {
            if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || !this.options.ignoreElements(child))) {
              if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                clone.appendChild(this.cloneNode(child, copyStyles));
              }
            }
          };
          DocumentCloner2.prototype.cloneChildNodes = function(node, clone, copyStyles) {
            var _this = this;
            for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
              if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === "function") {
                var assignedNodes = child.assignedNodes();
                if (assignedNodes.length) {
                  assignedNodes.forEach(function(assignedNode) {
                    return _this.appendChildNode(clone, assignedNode, copyStyles);
                  });
                }
              } else {
                this.appendChildNode(clone, child, copyStyles);
              }
            }
          };
          DocumentCloner2.prototype.cloneNode = function(node, copyStyles) {
            if (isTextNode(node)) {
              return document.createTextNode(node.data);
            }
            if (!node.ownerDocument) {
              return node.cloneNode(false);
            }
            var window2 = node.ownerDocument.defaultView;
            if (window2 && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
              var clone = this.createElementClone(node);
              clone.style.transitionProperty = "none";
              var style = window2.getComputedStyle(node);
              var styleBefore = window2.getComputedStyle(node, ":before");
              var styleAfter = window2.getComputedStyle(node, ":after");
              if (this.referenceElement === node && isHTMLElementNode(clone)) {
                this.clonedReferenceElement = clone;
              }
              if (isBodyElement(clone)) {
                createPseudoHideStyles(clone);
              }
              var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
              var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
              if (isCustomElement(node)) {
                copyStyles = true;
              }
              if (!isVideoElement(node)) {
                this.cloneChildNodes(node, clone, copyStyles);
              }
              if (before) {
                clone.insertBefore(before, clone.firstChild);
              }
              var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
              if (after) {
                clone.appendChild(after);
              }
              this.counters.pop(counters);
              if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
                copyCSSStyles(style, clone);
              }
              if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
              }
              if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
                clone.value = node.value;
              }
              return clone;
            }
            return node.cloneNode(false);
          };
          DocumentCloner2.prototype.resolvePseudoContent = function(node, clone, style, pseudoElt) {
            var _this = this;
            if (!style) {
              return;
            }
            var value = style.content;
            var document3 = clone.ownerDocument;
            if (!document3 || !value || value === "none" || value === "-moz-alt-content" || style.display === "none") {
              return;
            }
            this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
            var declaration = new CSSParsedPseudoDeclaration(this.context, style);
            var anonymousReplacedElement = document3.createElement("html2canvaspseudoelement");
            copyCSSStyles(style, anonymousReplacedElement);
            declaration.content.forEach(function(token) {
              if (token.type === 0) {
                anonymousReplacedElement.appendChild(document3.createTextNode(token.value));
              } else if (token.type === 22) {
                var img = document3.createElement("img");
                img.src = token.value;
                img.style.opacity = "1";
                anonymousReplacedElement.appendChild(img);
              } else if (token.type === 18) {
                if (token.name === "attr") {
                  var attr = token.values.filter(isIdentToken);
                  if (attr.length) {
                    anonymousReplacedElement.appendChild(document3.createTextNode(node.getAttribute(attr[0].value) || ""));
                  }
                } else if (token.name === "counter") {
                  var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                  if (counter && isIdentToken(counter)) {
                    var counterState = _this.counters.getCounterValue(counter.value);
                    var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
                    anonymousReplacedElement.appendChild(document3.createTextNode(createCounterText(counterState, counterType, false)));
                  }
                } else if (token.name === "counters") {
                  var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                  if (counter && isIdentToken(counter)) {
                    var counterStates = _this.counters.getCounterValues(counter.value);
                    var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
                    var separator = delim && delim.type === 0 ? delim.value : "";
                    var text = counterStates.map(function(value2) {
                      return createCounterText(value2, counterType_1, false);
                    }).join(separator);
                    anonymousReplacedElement.appendChild(document3.createTextNode(text));
                  }
                } else
                  ;
              } else if (token.type === 20) {
                switch (token.value) {
                  case "open-quote":
                    anonymousReplacedElement.appendChild(document3.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                    break;
                  case "close-quote":
                    anonymousReplacedElement.appendChild(document3.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                    break;
                  default:
                    anonymousReplacedElement.appendChild(document3.createTextNode(token.value));
                }
              }
            });
            anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            if (isSVGElementNode(clone)) {
              clone.className.baseValue += newClassName;
            } else {
              clone.className += newClassName;
            }
            return anonymousReplacedElement;
          };
          DocumentCloner2.destroy = function(container) {
            if (container.parentNode) {
              container.parentNode.removeChild(container);
              return true;
            }
            return false;
          };
          return DocumentCloner2;
        }();
        var PseudoElementType;
        (function(PseudoElementType2) {
          PseudoElementType2[PseudoElementType2["BEFORE"] = 0] = "BEFORE";
          PseudoElementType2[PseudoElementType2["AFTER"] = 1] = "AFTER";
        })(PseudoElementType || (PseudoElementType = {}));
        var createIFrameContainer = function(ownerDocument, bounds) {
          var cloneIframeContainer = ownerDocument.createElement("iframe");
          cloneIframeContainer.className = "html2canvas-container";
          cloneIframeContainer.style.visibility = "hidden";
          cloneIframeContainer.style.position = "fixed";
          cloneIframeContainer.style.left = "-10000px";
          cloneIframeContainer.style.top = "0px";
          cloneIframeContainer.style.border = "0";
          cloneIframeContainer.width = bounds.width.toString();
          cloneIframeContainer.height = bounds.height.toString();
          cloneIframeContainer.scrolling = "no";
          cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
          ownerDocument.body.appendChild(cloneIframeContainer);
          return cloneIframeContainer;
        };
        var imageReady = function(img) {
          return new Promise(function(resolve) {
            if (img.complete) {
              resolve();
              return;
            }
            if (!img.src) {
              resolve();
              return;
            }
            img.onload = resolve;
            img.onerror = resolve;
          });
        };
        var imagesReady = function(document3) {
          return Promise.all([].slice.call(document3.images, 0).map(imageReady));
        };
        var iframeLoader = function(iframe) {
          return new Promise(function(resolve, reject) {
            var cloneWindow = iframe.contentWindow;
            if (!cloneWindow) {
              return reject("No window assigned for iframe");
            }
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = function() {
              cloneWindow.onload = iframe.onload = null;
              var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
                  clearInterval(interval);
                  resolve(iframe);
                }
              }, 50);
            };
          });
        };
        var ignoredStyleProperties = [
          "all",
          "d",
          "content"
        ];
        var copyCSSStyles = function(style, target) {
          for (var i2 = style.length - 1; i2 >= 0; i2--) {
            var property = style.item(i2);
            if (ignoredStyleProperties.indexOf(property) === -1) {
              target.style.setProperty(property, style.getPropertyValue(property));
            }
          }
          return target;
        };
        var serializeDoctype = function(doctype) {
          var str = "";
          if (doctype) {
            str += "<!DOCTYPE ";
            if (doctype.name) {
              str += doctype.name;
            }
            if (doctype.internalSubset) {
              str += doctype.internalSubset;
            }
            if (doctype.publicId) {
              str += '"' + doctype.publicId + '"';
            }
            if (doctype.systemId) {
              str += '"' + doctype.systemId + '"';
            }
            str += ">";
          }
          return str;
        };
        var restoreOwnerScroll = function(ownerDocument, x, y) {
          if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
          }
        };
        var restoreNodeScroll = function(_a) {
          var element = _a[0], x = _a[1], y = _a[2];
          element.scrollLeft = x;
          element.scrollTop = y;
        };
        var PSEUDO_BEFORE = ":before";
        var PSEUDO_AFTER = ":after";
        var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
        var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
        var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
        var createPseudoHideStyles = function(body) {
          createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
        };
        var createStyles = function(body, styles) {
          var document3 = body.ownerDocument;
          if (document3) {
            var style = document3.createElement("style");
            style.textContent = styles;
            body.appendChild(style);
          }
        };
        var CacheStorage = function() {
          function CacheStorage2() {
          }
          CacheStorage2.getOrigin = function(url) {
            var link = CacheStorage2._link;
            if (!link) {
              return "about:blank";
            }
            link.href = url;
            link.href = link.href;
            return link.protocol + link.hostname + link.port;
          };
          CacheStorage2.isSameOrigin = function(src) {
            return CacheStorage2.getOrigin(src) === CacheStorage2._origin;
          };
          CacheStorage2.setContext = function(window2) {
            CacheStorage2._link = window2.document.createElement("a");
            CacheStorage2._origin = CacheStorage2.getOrigin(window2.location.href);
          };
          CacheStorage2._origin = "about:blank";
          return CacheStorage2;
        }();
        var Cache = function() {
          function Cache2(context, _options) {
            this.context = context;
            this._options = _options;
            this._cache = {};
          }
          Cache2.prototype.addImage = function(src) {
            var result = Promise.resolve();
            if (this.has(src)) {
              return result;
            }
            if (isBlobImage(src) || isRenderable(src)) {
              (this._cache[src] = this.loadImage(src)).catch(function() {
              });
              return result;
            }
            return result;
          };
          Cache2.prototype.match = function(src) {
            return this._cache[src];
          };
          Cache2.prototype.loadImage = function(key) {
            return __awaiter(this, void 0, void 0, function() {
              var isSameOrigin, useCORS, useProxy, src;
              var _this = this;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    isSameOrigin = CacheStorage.isSameOrigin(key);
                    useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                    useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === "string" && FEATURES.SUPPORT_CORS_XHR && !useCORS;
                    if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
                      return [2];
                    }
                    src = key;
                    if (!useProxy)
                      return [3, 2];
                    return [4, this.proxy(src)];
                  case 1:
                    src = _a.sent();
                    _a.label = 2;
                  case 2:
                    this.context.logger.debug("Added image " + key.substring(0, 256));
                    return [4, new Promise(function(resolve, reject) {
                      var img = new Image();
                      img.onload = function() {
                        return resolve(img);
                      };
                      img.onerror = reject;
                      if (isInlineBase64Image(src) || useCORS) {
                        img.crossOrigin = "anonymous";
                      }
                      img.src = src;
                      if (img.complete === true) {
                        setTimeout(function() {
                          return resolve(img);
                        }, 500);
                      }
                      if (_this._options.imageTimeout > 0) {
                        setTimeout(function() {
                          return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                        }, _this._options.imageTimeout);
                      }
                    })];
                  case 3:
                    return [2, _a.sent()];
                }
              });
            });
          };
          Cache2.prototype.has = function(key) {
            return typeof this._cache[key] !== "undefined";
          };
          Cache2.prototype.keys = function() {
            return Promise.resolve(Object.keys(this._cache));
          };
          Cache2.prototype.proxy = function(src) {
            var _this = this;
            var proxy = this._options.proxy;
            if (!proxy) {
              throw new Error("No proxy defined");
            }
            var key = src.substring(0, 256);
            return new Promise(function(resolve, reject) {
              var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
              var xhr = new XMLHttpRequest();
              xhr.onload = function() {
                if (xhr.status === 200) {
                  if (responseType === "text") {
                    resolve(xhr.response);
                  } else {
                    var reader_1 = new FileReader();
                    reader_1.addEventListener("load", function() {
                      return resolve(reader_1.result);
                    }, false);
                    reader_1.addEventListener("error", function(e2) {
                      return reject(e2);
                    }, false);
                    reader_1.readAsDataURL(xhr.response);
                  }
                } else {
                  reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                }
              };
              xhr.onerror = reject;
              var queryString = proxy.indexOf("?") > -1 ? "&" : "?";
              xhr.open("GET", "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
              if (responseType !== "text" && xhr instanceof XMLHttpRequest) {
                xhr.responseType = responseType;
              }
              if (_this._options.imageTimeout) {
                var timeout_1 = _this._options.imageTimeout;
                xhr.timeout = timeout_1;
                xhr.ontimeout = function() {
                  return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
                };
              }
              xhr.send();
            });
          };
          return Cache2;
        }();
        var INLINE_SVG = /^data:image\/svg\+xml/i;
        var INLINE_BASE64 = /^data:image\/.*;base64,/i;
        var INLINE_IMG = /^data:image\/.*/i;
        var isRenderable = function(src) {
          return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
        };
        var isInlineImage = function(src) {
          return INLINE_IMG.test(src);
        };
        var isInlineBase64Image = function(src) {
          return INLINE_BASE64.test(src);
        };
        var isBlobImage = function(src) {
          return src.substr(0, 4) === "blob";
        };
        var isSVG = function(src) {
          return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
        };
        var Vector = function() {
          function Vector2(x, y) {
            this.type = 0;
            this.x = x;
            this.y = y;
          }
          Vector2.prototype.add = function(deltaX, deltaY) {
            return new Vector2(this.x + deltaX, this.y + deltaY);
          };
          return Vector2;
        }();
        var lerp = function(a2, b, t) {
          return new Vector(a2.x + (b.x - a2.x) * t, a2.y + (b.y - a2.y) * t);
        };
        var BezierCurve = function() {
          function BezierCurve2(start, startControl, endControl, end) {
            this.type = 1;
            this.start = start;
            this.startControl = startControl;
            this.endControl = endControl;
            this.end = end;
          }
          BezierCurve2.prototype.subdivide = function(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve2(this.start, ab, abbc, dest) : new BezierCurve2(dest, bccd, cd, this.end);
          };
          BezierCurve2.prototype.add = function(deltaX, deltaY) {
            return new BezierCurve2(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
          };
          BezierCurve2.prototype.reverse = function() {
            return new BezierCurve2(this.end, this.endControl, this.startControl, this.start);
          };
          return BezierCurve2;
        }();
        var isBezierCurve = function(path) {
          return path.type === 1;
        };
        var BoundCurves = function() {
          function BoundCurves2(element) {
            var styles = element.styles;
            var bounds = element.bounds;
            var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
            var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
            var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
            var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
            var factors = [];
            factors.push((tlh + trh) / bounds.width);
            factors.push((blh + brh) / bounds.width);
            factors.push((tlv + blv) / bounds.height);
            factors.push((trv + brv) / bounds.height);
            var maxFactor = Math.max.apply(Math, factors);
            if (maxFactor > 1) {
              tlh /= maxFactor;
              tlv /= maxFactor;
              trh /= maxFactor;
              trv /= maxFactor;
              brh /= maxFactor;
              brv /= maxFactor;
              blh /= maxFactor;
              blv /= maxFactor;
            }
            var topWidth = bounds.width - trh;
            var rightHeight = bounds.height - brv;
            var bottomWidth = bounds.width - brh;
            var leftHeight = bounds.height - blv;
            var borderTopWidth2 = styles.borderTopWidth;
            var borderRightWidth2 = styles.borderRightWidth;
            var borderBottomWidth2 = styles.borderBottomWidth;
            var borderLeftWidth2 = styles.borderLeftWidth;
            var paddingTop2 = getAbsoluteValue(styles.paddingTop, element.bounds.width);
            var paddingRight2 = getAbsoluteValue(styles.paddingRight, element.bounds.width);
            var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
            var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
            this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3, tlh - borderLeftWidth2 / 3, tlv - borderTopWidth2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3);
            this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 3, trh - borderRightWidth2 / 3, trv - borderTopWidth2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + borderTopWidth2 / 3);
            this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 3, brv - borderBottomWidth2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
            this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 / 3, blv - borderBottomWidth2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
            this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3, tlh - borderLeftWidth2 * 2 / 3, tlv - borderTopWidth2 * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
            this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 * 2 / 3, trh - borderRightWidth2 * 2 / 3, trv - borderTopWidth2 * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
            this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 * 2 / 3, brv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
            this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 * 2 / 3, blv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
            this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2, tlh - borderLeftWidth2 / 2, tlv - borderTopWidth2 / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2);
            this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 2, trh - borderRightWidth2 / 2, trv - borderTopWidth2 / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + borderTopWidth2 / 2);
            this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 2, brv - borderBottomWidth2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
            this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + leftHeight, blh - borderLeftWidth2 / 2, blv - borderBottomWidth2 / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
            this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
            this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
            this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
            this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
            this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2, Math.max(0, tlh - borderLeftWidth2), Math.max(0, tlv - borderTopWidth2), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2);
            this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth2), bounds.top + borderTopWidth2, topWidth > bounds.width + borderRightWidth2 ? 0 : Math.max(0, trh - borderRightWidth2), Math.max(0, trv - borderTopWidth2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + borderTopWidth2);
            this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth2), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth2), Math.max(0, brh - borderRightWidth2), Math.max(0, brv - borderBottomWidth2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + bounds.height - borderBottomWidth2);
            this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth2), Math.max(0, blh - borderLeftWidth2), Math.max(0, blv - borderBottomWidth2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + bounds.height - borderBottomWidth2);
            this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2, Math.max(0, tlh - (borderLeftWidth2 + paddingLeft2)), Math.max(0, tlv - (borderTopWidth2 + paddingTop2)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2);
            this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth2 + paddingLeft2), bounds.top + borderTopWidth2 + paddingTop2, topWidth > bounds.width + borderLeftWidth2 + paddingLeft2 ? 0 : trh - borderLeftWidth2 + paddingLeft2, trv - (borderTopWidth2 + paddingTop2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + borderTopWidth2 + paddingTop2);
            this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth2 + paddingLeft2)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth2 + paddingTop2), Math.max(0, brh - (borderRightWidth2 + paddingRight2)), brv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
            this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth2 + paddingLeft2)), blv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
          }
          return BoundCurves2;
        }();
        var CORNER;
        (function(CORNER2) {
          CORNER2[CORNER2["TOP_LEFT"] = 0] = "TOP_LEFT";
          CORNER2[CORNER2["TOP_RIGHT"] = 1] = "TOP_RIGHT";
          CORNER2[CORNER2["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
          CORNER2[CORNER2["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
        })(CORNER || (CORNER = {}));
        var getCurvePoints = function(x, y, r1, r2, position2) {
          var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
          var ox = r1 * kappa;
          var oy = r2 * kappa;
          var xm = x + r1;
          var ym = y + r2;
          switch (position2) {
            case CORNER.TOP_LEFT:
              return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
            case CORNER.TOP_RIGHT:
              return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
            case CORNER.BOTTOM_RIGHT:
              return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
              return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
          }
        };
        var calculateBorderBoxPath = function(curves) {
          return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
        };
        var calculateContentBoxPath = function(curves) {
          return [
            curves.topLeftContentBox,
            curves.topRightContentBox,
            curves.bottomRightContentBox,
            curves.bottomLeftContentBox
          ];
        };
        var calculatePaddingBoxPath = function(curves) {
          return [
            curves.topLeftPaddingBox,
            curves.topRightPaddingBox,
            curves.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
          ];
        };
        var TransformEffect = function() {
          function TransformEffect2(offsetX, offsetY, matrix2) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.matrix = matrix2;
            this.type = 0;
            this.target = 2 | 4;
          }
          return TransformEffect2;
        }();
        var ClipEffect = function() {
          function ClipEffect2(path, target) {
            this.path = path;
            this.target = target;
            this.type = 1;
          }
          return ClipEffect2;
        }();
        var OpacityEffect = function() {
          function OpacityEffect2(opacity2) {
            this.opacity = opacity2;
            this.type = 2;
            this.target = 2 | 4;
          }
          return OpacityEffect2;
        }();
        var isTransformEffect = function(effect) {
          return effect.type === 0;
        };
        var isClipEffect = function(effect) {
          return effect.type === 1;
        };
        var isOpacityEffect = function(effect) {
          return effect.type === 2;
        };
        var equalPath = function(a2, b) {
          if (a2.length === b.length) {
            return a2.some(function(v, i2) {
              return v === b[i2];
            });
          }
          return false;
        };
        var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
          return path.map(function(point, index) {
            switch (index) {
              case 0:
                return point.add(deltaX, deltaY);
              case 1:
                return point.add(deltaX + deltaW, deltaY);
              case 2:
                return point.add(deltaX + deltaW, deltaY + deltaH);
              case 3:
                return point.add(deltaX, deltaY + deltaH);
            }
            return point;
          });
        };
        var StackingContext = function() {
          function StackingContext2(container) {
            this.element = container;
            this.inlineLevel = [];
            this.nonInlineLevel = [];
            this.negativeZIndex = [];
            this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
            this.positiveZIndex = [];
            this.nonPositionedFloats = [];
            this.nonPositionedInlineLevel = [];
          }
          return StackingContext2;
        }();
        var ElementPaint = function() {
          function ElementPaint2(container, parent) {
            this.container = container;
            this.parent = parent;
            this.effects = [];
            this.curves = new BoundCurves(this.container);
            if (this.container.styles.opacity < 1) {
              this.effects.push(new OpacityEffect(this.container.styles.opacity));
            }
            if (this.container.styles.transform !== null) {
              var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
              var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
              var matrix2 = this.container.styles.transform;
              this.effects.push(new TransformEffect(offsetX, offsetY, matrix2));
            }
            if (this.container.styles.overflowX !== 0) {
              var borderBox = calculateBorderBoxPath(this.curves);
              var paddingBox2 = calculatePaddingBoxPath(this.curves);
              if (equalPath(borderBox, paddingBox2)) {
                this.effects.push(new ClipEffect(borderBox, 2 | 4));
              } else {
                this.effects.push(new ClipEffect(borderBox, 2));
                this.effects.push(new ClipEffect(paddingBox2, 4));
              }
            }
          }
          ElementPaint2.prototype.getEffects = function(target) {
            var inFlow = [2, 3].indexOf(this.container.styles.position) === -1;
            var parent = this.parent;
            var effects = this.effects.slice(0);
            while (parent) {
              var croplessEffects = parent.effects.filter(function(effect) {
                return !isClipEffect(effect);
              });
              if (inFlow || parent.container.styles.position !== 0 || !parent.parent) {
                effects.unshift.apply(effects, croplessEffects);
                inFlow = [2, 3].indexOf(parent.container.styles.position) === -1;
                if (parent.container.styles.overflowX !== 0) {
                  var borderBox = calculateBorderBoxPath(parent.curves);
                  var paddingBox2 = calculatePaddingBoxPath(parent.curves);
                  if (!equalPath(borderBox, paddingBox2)) {
                    effects.unshift(new ClipEffect(paddingBox2, 2 | 4));
                  }
                }
              } else {
                effects.unshift.apply(effects, croplessEffects);
              }
              parent = parent.parent;
            }
            return effects.filter(function(effect) {
              return contains(effect.target, target);
            });
          };
          return ElementPaint2;
        }();
        var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
          parent.container.elements.forEach(function(child) {
            var treatAsRealStackingContext = contains(child.flags, 4);
            var createsStackingContext2 = contains(child.flags, 2);
            var paintContainer = new ElementPaint(child, parent);
            if (contains(child.styles.display, 2048)) {
              listItems.push(paintContainer);
            }
            var listOwnerItems = contains(child.flags, 8) ? [] : listItems;
            if (treatAsRealStackingContext || createsStackingContext2) {
              var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
              var stack = new StackingContext(paintContainer);
              if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                var order_1 = child.styles.zIndex.order;
                if (order_1 < 0) {
                  var index_1 = 0;
                  parentStack.negativeZIndex.some(function(current, i2) {
                    if (order_1 > current.element.container.styles.zIndex.order) {
                      index_1 = i2;
                      return false;
                    } else if (index_1 > 0) {
                      return true;
                    }
                    return false;
                  });
                  parentStack.negativeZIndex.splice(index_1, 0, stack);
                } else if (order_1 > 0) {
                  var index_2 = 0;
                  parentStack.positiveZIndex.some(function(current, i2) {
                    if (order_1 >= current.element.container.styles.zIndex.order) {
                      index_2 = i2 + 1;
                      return false;
                    } else if (index_2 > 0) {
                      return true;
                    }
                    return false;
                  });
                  parentStack.positiveZIndex.splice(index_2, 0, stack);
                } else {
                  parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                }
              } else {
                if (child.styles.isFloating()) {
                  parentStack.nonPositionedFloats.push(stack);
                } else {
                  parentStack.nonPositionedInlineLevel.push(stack);
                }
              }
              parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            } else {
              if (child.styles.isInlineLevel()) {
                stackingContext.inlineLevel.push(paintContainer);
              } else {
                stackingContext.nonInlineLevel.push(paintContainer);
              }
              parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(child.flags, 8)) {
              processListItems(child, listOwnerItems);
            }
          });
        };
        var processListItems = function(owner, elements) {
          var numbering = owner instanceof OLElementContainer ? owner.start : 1;
          var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
          for (var i2 = 0; i2 < elements.length; i2++) {
            var item = elements[i2];
            if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) {
              numbering = item.container.value;
            }
            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
          }
        };
        var parseStackingContexts = function(container) {
          var paintContainer = new ElementPaint(container, null);
          var root = new StackingContext(paintContainer);
          var listItems = [];
          parseStackTree(paintContainer, root, root, listItems);
          processListItems(paintContainer.container, listItems);
          return root;
        };
        var parsePathForBorder = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
          }
        };
        var parsePathForBorderDoubleOuter = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
          }
        };
        var parsePathForBorderDoubleInner = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
          }
        };
        var parsePathForBorderStroke = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
            case 1:
              return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
            case 2:
              return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            case 3:
            default:
              return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
          }
        };
        var createStrokePathFromCurves = function(outer1, outer2) {
          var path = [];
          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }
          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }
          return path;
        };
        var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
          var path = [];
          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }
          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }
          if (isBezierCurve(inner2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
          } else {
            path.push(inner2);
          }
          if (isBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
          } else {
            path.push(inner1);
          }
          return path;
        };
        var paddingBox = function(element) {
          var bounds = element.bounds;
          var styles = element.styles;
          return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
        };
        var contentBox = function(element) {
          var styles = element.styles;
          var bounds = element.bounds;
          var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, bounds.width);
          var paddingRight2 = getAbsoluteValue(styles.paddingRight, bounds.width);
          var paddingTop2 = getAbsoluteValue(styles.paddingTop, bounds.width);
          var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, bounds.width);
          return bounds.add(paddingLeft2 + styles.borderLeftWidth, paddingTop2 + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft2 + paddingRight2), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop2 + paddingBottom2));
        };
        var calculateBackgroundPositioningArea = function(backgroundOrigin2, element) {
          if (backgroundOrigin2 === 0) {
            return element.bounds;
          }
          if (backgroundOrigin2 === 2) {
            return contentBox(element);
          }
          return paddingBox(element);
        };
        var calculateBackgroundPaintingArea = function(backgroundClip2, element) {
          if (backgroundClip2 === 0) {
            return element.bounds;
          }
          if (backgroundClip2 === 2) {
            return contentBox(element);
          }
          return paddingBox(element);
        };
        var calculateBackgroundRendering = function(container, index, intrinsicSize) {
          var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
          var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
          var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
          var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
          var position2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
          var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position2, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
          var offsetX = Math.round(backgroundPositioningArea.left + position2[0]);
          var offsetY = Math.round(backgroundPositioningArea.top + position2[1]);
          return [path, offsetX, offsetY, sizeWidth, sizeHeight];
        };
        var isAuto = function(token) {
          return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
        };
        var hasIntrinsicValue = function(value) {
          return typeof value === "number";
        };
        var calculateBackgroundSize = function(size, _a, bounds) {
          var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
          var first = size[0], second = size[1];
          if (!first) {
            return [0, 0];
          }
          if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
          }
          var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
          if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
              var targetRatio = bounds.width / bounds.height;
              return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
            }
            return [bounds.width, bounds.height];
          }
          var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
          var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
          var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
          if (isAuto(first) && (!second || isAuto(second))) {
            if (hasIntrinsicWidth && hasIntrinsicHeight) {
              return [intrinsicWidth, intrinsicHeight];
            }
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
              return [bounds.width, bounds.height];
            }
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
              var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
              var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
              return [width_1, height_1];
            }
            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [width_2, height_2];
          }
          if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;
            if (isLengthPercentage(first)) {
              width_3 = getAbsoluteValue(first, bounds.width);
            } else if (isLengthPercentage(second)) {
              height_3 = getAbsoluteValue(second, bounds.height);
            }
            if (isAuto(first)) {
              width_3 = height_3 * intrinsicProportion;
            } else if (!second || isAuto(second)) {
              height_3 = width_3 / intrinsicProportion;
            }
            return [width_3, height_3];
          }
          var width = null;
          var height = null;
          if (isLengthPercentage(first)) {
            width = getAbsoluteValue(first, bounds.width);
          } else if (second && isLengthPercentage(second)) {
            height = getAbsoluteValue(second, bounds.height);
          }
          if (width !== null && (!second || isAuto(second))) {
            height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
          }
          if (height !== null && isAuto(first)) {
            width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
          }
          if (width !== null && height !== null) {
            return [width, height];
          }
          throw new Error("Unable to calculate background-size for element");
        };
        var getBackgroundValueForIndex = function(values, index) {
          var value = values[index];
          if (typeof value === "undefined") {
            return values[0];
          }
          return value;
        };
        var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
          var x = _a[0], y = _a[1];
          var width = _b[0], height = _b[1];
          switch (repeat) {
            case 2:
              return [
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
              ];
            case 3:
              return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
              ];
            case 1:
              return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
              ];
            default:
              return [
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
              ];
          }
        };
        var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        var SAMPLE_TEXT = "Hidden Text";
        var FontMetrics = function() {
          function FontMetrics2(document3) {
            this._data = {};
            this._document = document3;
          }
          FontMetrics2.prototype.parseMetrics = function(fontFamily2, fontSize2) {
            var container = this._document.createElement("div");
            var img = this._document.createElement("img");
            var span = this._document.createElement("span");
            var body = this._document.body;
            container.style.visibility = "hidden";
            container.style.fontFamily = fontFamily2;
            container.style.fontSize = fontSize2;
            container.style.margin = "0";
            container.style.padding = "0";
            container.style.whiteSpace = "nowrap";
            body.appendChild(container);
            img.src = SMALL_IMAGE;
            img.width = 1;
            img.height = 1;
            img.style.margin = "0";
            img.style.padding = "0";
            img.style.verticalAlign = "baseline";
            span.style.fontFamily = fontFamily2;
            span.style.fontSize = fontSize2;
            span.style.margin = "0";
            span.style.padding = "0";
            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;
            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.style.lineHeight = "normal";
            img.style.verticalAlign = "super";
            var middle = img.offsetTop - container.offsetTop + 2;
            body.removeChild(container);
            return { baseline, middle };
          };
          FontMetrics2.prototype.getMetrics = function(fontFamily2, fontSize2) {
            var key = fontFamily2 + " " + fontSize2;
            if (typeof this._data[key] === "undefined") {
              this._data[key] = this.parseMetrics(fontFamily2, fontSize2);
            }
            return this._data[key];
          };
          return FontMetrics2;
        }();
        var Renderer = function() {
          function Renderer2(context, options) {
            this.context = context;
            this.options = options;
          }
          return Renderer2;
        }();
        var MASK_OFFSET = 1e4;
        var CanvasRenderer = function(_super) {
          __extends(CanvasRenderer2, _super);
          function CanvasRenderer2(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this._activeEffects = [];
            _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
            _this.ctx = _this.canvas.getContext("2d");
            if (!options.canvas) {
              _this.canvas.width = Math.floor(options.width * options.scale);
              _this.canvas.height = Math.floor(options.height * options.scale);
              _this.canvas.style.width = options.width + "px";
              _this.canvas.style.height = options.height + "px";
            }
            _this.fontMetrics = new FontMetrics(document);
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.ctx.textBaseline = "bottom";
            _this._activeEffects = [];
            _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
            return _this;
          }
          CanvasRenderer2.prototype.applyEffects = function(effects) {
            var _this = this;
            while (this._activeEffects.length) {
              this.popEffect();
            }
            effects.forEach(function(effect) {
              return _this.applyEffect(effect);
            });
          };
          CanvasRenderer2.prototype.applyEffect = function(effect) {
            this.ctx.save();
            if (isOpacityEffect(effect)) {
              this.ctx.globalAlpha = effect.opacity;
            }
            if (isTransformEffect(effect)) {
              this.ctx.translate(effect.offsetX, effect.offsetY);
              this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
              this.ctx.translate(-effect.offsetX, -effect.offsetY);
            }
            if (isClipEffect(effect)) {
              this.path(effect.path);
              this.ctx.clip();
            }
            this._activeEffects.push(effect);
          };
          CanvasRenderer2.prototype.popEffect = function() {
            this._activeEffects.pop();
            this.ctx.restore();
          };
          CanvasRenderer2.prototype.renderStack = function(stack) {
            return __awaiter(this, void 0, void 0, function() {
              var styles;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    styles = stack.element.container.styles;
                    if (!styles.isVisible())
                      return [3, 2];
                    return [4, this.renderStackContent(stack)];
                  case 1:
                    _a.sent();
                    _a.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          };
          CanvasRenderer2.prototype.renderNode = function(paint) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    if (contains(paint.container.flags, 16)) {
                      debugger;
                    }
                    if (!paint.container.styles.isVisible())
                      return [3, 3];
                    return [4, this.renderNodeBackgroundAndBorders(paint)];
                  case 1:
                    _a.sent();
                    return [4, this.renderNodeContent(paint)];
                  case 2:
                    _a.sent();
                    _a.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          };
          CanvasRenderer2.prototype.renderTextWithLetterSpacing = function(text, letterSpacing2, baseline) {
            var _this = this;
            if (letterSpacing2 === 0) {
              this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
            } else {
              var letters = segmentGraphemes(text.text);
              letters.reduce(function(left, letter) {
                _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                return left + _this.ctx.measureText(letter).width;
              }, text.bounds.left);
            }
          };
          CanvasRenderer2.prototype.createFontStyle = function(styles) {
            var fontVariant2 = styles.fontVariant.filter(function(variant) {
              return variant === "normal" || variant === "small-caps";
            }).join("");
            var fontFamily2 = fixIOSSystemFonts(styles.fontFamily).join(", ");
            var fontSize2 = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
            return [
              [styles.fontStyle, fontVariant2, styles.fontWeight, fontSize2, fontFamily2].join(" "),
              fontFamily2,
              fontSize2
            ];
          };
          CanvasRenderer2.prototype.renderTextNode = function(text, styles) {
            return __awaiter(this, void 0, void 0, function() {
              var _a, font, fontFamily2, fontSize2, _b, baseline, middle, paintOrder2;
              var _this = this;
              return __generator(this, function(_c) {
                _a = this.createFontStyle(styles), font = _a[0], fontFamily2 = _a[1], fontSize2 = _a[2];
                this.ctx.font = font;
                this.ctx.direction = styles.direction === 1 ? "rtl" : "ltr";
                this.ctx.textAlign = "left";
                this.ctx.textBaseline = "alphabetic";
                _b = this.fontMetrics.getMetrics(fontFamily2, fontSize2), baseline = _b.baseline, middle = _b.middle;
                paintOrder2 = styles.paintOrder;
                text.textBounds.forEach(function(text2) {
                  paintOrder2.forEach(function(paintOrderLayer) {
                    switch (paintOrderLayer) {
                      case 0:
                        _this.ctx.fillStyle = asString(styles.color);
                        _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                        var textShadows = styles.textShadow;
                        if (textShadows.length && text2.text.trim().length) {
                          textShadows.slice(0).reverse().forEach(function(textShadow2) {
                            _this.ctx.shadowColor = asString(textShadow2.color);
                            _this.ctx.shadowOffsetX = textShadow2.offsetX.number * _this.options.scale;
                            _this.ctx.shadowOffsetY = textShadow2.offsetY.number * _this.options.scale;
                            _this.ctx.shadowBlur = textShadow2.blur.number;
                            _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                          });
                          _this.ctx.shadowColor = "";
                          _this.ctx.shadowOffsetX = 0;
                          _this.ctx.shadowOffsetY = 0;
                          _this.ctx.shadowBlur = 0;
                        }
                        if (styles.textDecorationLine.length) {
                          _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                          styles.textDecorationLine.forEach(function(textDecorationLine2) {
                            switch (textDecorationLine2) {
                              case 1:
                                _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top + baseline), text2.bounds.width, 1);
                                break;
                              case 2:
                                _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top), text2.bounds.width, 1);
                                break;
                              case 3:
                                _this.ctx.fillRect(text2.bounds.left, Math.ceil(text2.bounds.top + middle), text2.bounds.width, 1);
                                break;
                            }
                          });
                        }
                        break;
                      case 1:
                        if (styles.webkitTextStrokeWidth && text2.text.trim().length) {
                          _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                          _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                          _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                          _this.ctx.strokeText(text2.text, text2.bounds.left, text2.bounds.top + baseline);
                        }
                        _this.ctx.strokeStyle = "";
                        _this.ctx.lineWidth = 0;
                        _this.ctx.lineJoin = "miter";
                        break;
                    }
                  });
                });
                return [2];
              });
            });
          };
          CanvasRenderer2.prototype.renderReplacedElement = function(container, curves, image2) {
            if (image2 && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
              var box = contentBox(container);
              var path = calculatePaddingBoxPath(curves);
              this.path(path);
              this.ctx.save();
              this.ctx.clip();
              this.ctx.drawImage(image2, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
              this.ctx.restore();
            }
          };
          CanvasRenderer2.prototype.renderNodeContent = function(paint) {
            return __awaiter(this, void 0, void 0, function() {
              var container, curves, styles, _i, _a, child, image2, image2, iframeRenderer, canvas, size, _b, fontFamily2, fontSize2, baseline, bounds, x, textBounds, img, image2, url, fontFamily2, bounds;
              return __generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    this.applyEffects(paint.getEffects(4));
                    container = paint.container;
                    curves = paint.curves;
                    styles = container.styles;
                    _i = 0, _a = container.textNodes;
                    _c.label = 1;
                  case 1:
                    if (!(_i < _a.length))
                      return [3, 4];
                    child = _a[_i];
                    return [4, this.renderTextNode(child, styles)];
                  case 2:
                    _c.sent();
                    _c.label = 3;
                  case 3:
                    _i++;
                    return [3, 1];
                  case 4:
                    if (!(container instanceof ImageElementContainer))
                      return [3, 8];
                    _c.label = 5;
                  case 5:
                    _c.trys.push([5, 7, , 8]);
                    return [4, this.context.cache.match(container.src)];
                  case 6:
                    image2 = _c.sent();
                    this.renderReplacedElement(container, curves, image2);
                    return [3, 8];
                  case 7:
                    _c.sent();
                    this.context.logger.error("Error loading image " + container.src);
                    return [3, 8];
                  case 8:
                    if (container instanceof CanvasElementContainer) {
                      this.renderReplacedElement(container, curves, container.canvas);
                    }
                    if (!(container instanceof SVGElementContainer))
                      return [3, 12];
                    _c.label = 9;
                  case 9:
                    _c.trys.push([9, 11, , 12]);
                    return [4, this.context.cache.match(container.svg)];
                  case 10:
                    image2 = _c.sent();
                    this.renderReplacedElement(container, curves, image2);
                    return [3, 12];
                  case 11:
                    _c.sent();
                    this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                    return [3, 12];
                  case 12:
                    if (!(container instanceof IFrameElementContainer && container.tree))
                      return [3, 14];
                    iframeRenderer = new CanvasRenderer2(this.context, {
                      scale: this.options.scale,
                      backgroundColor: container.backgroundColor,
                      x: 0,
                      y: 0,
                      width: container.width,
                      height: container.height
                    });
                    return [4, iframeRenderer.render(container.tree)];
                  case 13:
                    canvas = _c.sent();
                    if (container.width && container.height) {
                      this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                    }
                    _c.label = 14;
                  case 14:
                    if (container instanceof InputElementContainer) {
                      size = Math.min(container.bounds.width, container.bounds.height);
                      if (container.type === CHECKBOX) {
                        if (container.checked) {
                          this.ctx.save();
                          this.path([
                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                            new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                            new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                            new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                            new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                            new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                          ]);
                          this.ctx.fillStyle = asString(INPUT_COLOR);
                          this.ctx.fill();
                          this.ctx.restore();
                        }
                      } else if (container.type === RADIO) {
                        if (container.checked) {
                          this.ctx.save();
                          this.ctx.beginPath();
                          this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                          this.ctx.fillStyle = asString(INPUT_COLOR);
                          this.ctx.fill();
                          this.ctx.restore();
                        }
                      }
                    }
                    if (isTextInputElement(container) && container.value.length) {
                      _b = this.createFontStyle(styles), fontFamily2 = _b[0], fontSize2 = _b[1];
                      baseline = this.fontMetrics.getMetrics(fontFamily2, fontSize2).baseline;
                      this.ctx.font = fontFamily2;
                      this.ctx.fillStyle = asString(styles.color);
                      this.ctx.textBaseline = "alphabetic";
                      this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                      bounds = contentBox(container);
                      x = 0;
                      switch (container.styles.textAlign) {
                        case 1:
                          x += bounds.width / 2;
                          break;
                        case 2:
                          x += bounds.width;
                          break;
                      }
                      textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                      this.ctx.save();
                      this.path([
                        new Vector(bounds.left, bounds.top),
                        new Vector(bounds.left + bounds.width, bounds.top),
                        new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                        new Vector(bounds.left, bounds.top + bounds.height)
                      ]);
                      this.ctx.clip();
                      this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                      this.ctx.restore();
                      this.ctx.textBaseline = "alphabetic";
                      this.ctx.textAlign = "left";
                    }
                    if (!contains(container.styles.display, 2048))
                      return [3, 20];
                    if (!(container.styles.listStyleImage !== null))
                      return [3, 19];
                    img = container.styles.listStyleImage;
                    if (!(img.type === 0))
                      return [3, 18];
                    image2 = void 0;
                    url = img.url;
                    _c.label = 15;
                  case 15:
                    _c.trys.push([15, 17, , 18]);
                    return [4, this.context.cache.match(url)];
                  case 16:
                    image2 = _c.sent();
                    this.ctx.drawImage(image2, container.bounds.left - (image2.width + 10), container.bounds.top);
                    return [3, 18];
                  case 17:
                    _c.sent();
                    this.context.logger.error("Error loading list-style-image " + url);
                    return [3, 18];
                  case 18:
                    return [3, 20];
                  case 19:
                    if (paint.listValue && container.styles.listStyleType !== -1) {
                      fontFamily2 = this.createFontStyle(styles)[0];
                      this.ctx.font = fontFamily2;
                      this.ctx.fillStyle = asString(styles.color);
                      this.ctx.textBaseline = "middle";
                      this.ctx.textAlign = "right";
                      bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                      this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                      this.ctx.textBaseline = "bottom";
                      this.ctx.textAlign = "left";
                    }
                    _c.label = 20;
                  case 20:
                    return [2];
                }
              });
            });
          };
          CanvasRenderer2.prototype.renderStackContent = function(stack) {
            return __awaiter(this, void 0, void 0, function() {
              var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
              return __generator(this, function(_p) {
                switch (_p.label) {
                  case 0:
                    if (contains(stack.element.container.flags, 16)) {
                      debugger;
                    }
                    return [4, this.renderNodeBackgroundAndBorders(stack.element)];
                  case 1:
                    _p.sent();
                    _i = 0, _a = stack.negativeZIndex;
                    _p.label = 2;
                  case 2:
                    if (!(_i < _a.length))
                      return [3, 5];
                    child = _a[_i];
                    return [4, this.renderStack(child)];
                  case 3:
                    _p.sent();
                    _p.label = 4;
                  case 4:
                    _i++;
                    return [3, 2];
                  case 5:
                    return [4, this.renderNodeContent(stack.element)];
                  case 6:
                    _p.sent();
                    _b = 0, _c = stack.nonInlineLevel;
                    _p.label = 7;
                  case 7:
                    if (!(_b < _c.length))
                      return [3, 10];
                    child = _c[_b];
                    return [4, this.renderNode(child)];
                  case 8:
                    _p.sent();
                    _p.label = 9;
                  case 9:
                    _b++;
                    return [3, 7];
                  case 10:
                    _d = 0, _e = stack.nonPositionedFloats;
                    _p.label = 11;
                  case 11:
                    if (!(_d < _e.length))
                      return [3, 14];
                    child = _e[_d];
                    return [4, this.renderStack(child)];
                  case 12:
                    _p.sent();
                    _p.label = 13;
                  case 13:
                    _d++;
                    return [3, 11];
                  case 14:
                    _f = 0, _g = stack.nonPositionedInlineLevel;
                    _p.label = 15;
                  case 15:
                    if (!(_f < _g.length))
                      return [3, 18];
                    child = _g[_f];
                    return [4, this.renderStack(child)];
                  case 16:
                    _p.sent();
                    _p.label = 17;
                  case 17:
                    _f++;
                    return [3, 15];
                  case 18:
                    _h = 0, _j = stack.inlineLevel;
                    _p.label = 19;
                  case 19:
                    if (!(_h < _j.length))
                      return [3, 22];
                    child = _j[_h];
                    return [4, this.renderNode(child)];
                  case 20:
                    _p.sent();
                    _p.label = 21;
                  case 21:
                    _h++;
                    return [3, 19];
                  case 22:
                    _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                    _p.label = 23;
                  case 23:
                    if (!(_k < _l.length))
                      return [3, 26];
                    child = _l[_k];
                    return [4, this.renderStack(child)];
                  case 24:
                    _p.sent();
                    _p.label = 25;
                  case 25:
                    _k++;
                    return [3, 23];
                  case 26:
                    _m = 0, _o = stack.positiveZIndex;
                    _p.label = 27;
                  case 27:
                    if (!(_m < _o.length))
                      return [3, 30];
                    child = _o[_m];
                    return [4, this.renderStack(child)];
                  case 28:
                    _p.sent();
                    _p.label = 29;
                  case 29:
                    _m++;
                    return [3, 27];
                  case 30:
                    return [2];
                }
              });
            });
          };
          CanvasRenderer2.prototype.mask = function(paths) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(this.canvas.width, 0);
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.lineTo(0, 0);
            this.formatPath(paths.slice(0).reverse());
            this.ctx.closePath();
          };
          CanvasRenderer2.prototype.path = function(paths) {
            this.ctx.beginPath();
            this.formatPath(paths);
            this.ctx.closePath();
          };
          CanvasRenderer2.prototype.formatPath = function(paths) {
            var _this = this;
            paths.forEach(function(point, index) {
              var start = isBezierCurve(point) ? point.start : point;
              if (index === 0) {
                _this.ctx.moveTo(start.x, start.y);
              } else {
                _this.ctx.lineTo(start.x, start.y);
              }
              if (isBezierCurve(point)) {
                _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
              }
            });
          };
          CanvasRenderer2.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = pattern;
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
          };
          CanvasRenderer2.prototype.resizeImage = function(image2, width, height) {
            var _a;
            if (image2.width === width && image2.height === height) {
              return image2;
            }
            var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
            var canvas = ownerDocument.createElement("canvas");
            canvas.width = Math.max(1, width);
            canvas.height = Math.max(1, height);
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0, 0, width, height);
            return canvas;
          };
          CanvasRenderer2.prototype.renderBackgroundImage = function(container) {
            return __awaiter(this, void 0, void 0, function() {
              var index, _loop_1, this_1, _i, _a, backgroundImage2;
              return __generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    index = container.styles.backgroundImage.length - 1;
                    _loop_1 = function(backgroundImage3) {
                      var image2, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position2, x, y, _g, rx, ry, radialGradient_1, midX, midY, f2, invF;
                      return __generator(this, function(_h) {
                        switch (_h.label) {
                          case 0:
                            if (!(backgroundImage3.type === 0))
                              return [3, 5];
                            image2 = void 0;
                            url = backgroundImage3.url;
                            _h.label = 1;
                          case 1:
                            _h.trys.push([1, 3, , 4]);
                            return [4, this_1.context.cache.match(url)];
                          case 2:
                            image2 = _h.sent();
                            return [3, 4];
                          case 3:
                            _h.sent();
                            this_1.context.logger.error("Error loading background-image " + url);
                            return [3, 4];
                          case 4:
                            if (image2) {
                              _c = calculateBackgroundRendering(container, index, [
                                image2.width,
                                image2.height,
                                image2.width / image2.height
                              ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                              pattern = this_1.ctx.createPattern(this_1.resizeImage(image2, width, height), "repeat");
                              this_1.renderRepeat(path, pattern, x, y);
                            }
                            return [3, 6];
                          case 5:
                            if (isLinearGradient(backgroundImage3)) {
                              _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                              _e = calculateGradientDirection(backgroundImage3.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                              canvas = document.createElement("canvas");
                              canvas.width = width;
                              canvas.height = height;
                              ctx = canvas.getContext("2d");
                              gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                              processColorStops(backgroundImage3.stops, lineLength).forEach(function(colorStop) {
                                return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                              });
                              ctx.fillStyle = gradient_1;
                              ctx.fillRect(0, 0, width, height);
                              if (width > 0 && height > 0) {
                                pattern = this_1.ctx.createPattern(canvas, "repeat");
                                this_1.renderRepeat(path, pattern, x, y);
                              }
                            } else if (isRadialGradient(backgroundImage3)) {
                              _f = calculateBackgroundRendering(container, index, [
                                null,
                                null,
                                null
                              ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                              position2 = backgroundImage3.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage3.position;
                              x = getAbsoluteValue(position2[0], width);
                              y = getAbsoluteValue(position2[position2.length - 1], height);
                              _g = calculateRadius(backgroundImage3, x, y, width, height), rx = _g[0], ry = _g[1];
                              if (rx > 0 && ry > 0) {
                                radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                processColorStops(backgroundImage3.stops, rx * 2).forEach(function(colorStop) {
                                  return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                });
                                this_1.path(path);
                                this_1.ctx.fillStyle = radialGradient_1;
                                if (rx !== ry) {
                                  midX = container.bounds.left + 0.5 * container.bounds.width;
                                  midY = container.bounds.top + 0.5 * container.bounds.height;
                                  f2 = ry / rx;
                                  invF = 1 / f2;
                                  this_1.ctx.save();
                                  this_1.ctx.translate(midX, midY);
                                  this_1.ctx.transform(1, 0, 0, f2, 0, 0);
                                  this_1.ctx.translate(-midX, -midY);
                                  this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                  this_1.ctx.restore();
                                } else {
                                  this_1.ctx.fill();
                                }
                              }
                            }
                            _h.label = 6;
                          case 6:
                            index--;
                            return [2];
                        }
                      });
                    };
                    this_1 = this;
                    _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                    _b.label = 1;
                  case 1:
                    if (!(_i < _a.length))
                      return [3, 4];
                    backgroundImage2 = _a[_i];
                    return [5, _loop_1(backgroundImage2)];
                  case 2:
                    _b.sent();
                    _b.label = 3;
                  case 3:
                    _i++;
                    return [3, 1];
                  case 4:
                    return [2];
                }
              });
            });
          };
          CanvasRenderer2.prototype.renderSolidBorder = function(color2, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                this.path(parsePathForBorder(curvePoints, side));
                this.ctx.fillStyle = asString(color2);
                this.ctx.fill();
                return [2];
              });
            });
          };
          CanvasRenderer2.prototype.renderDoubleBorder = function(color2, width, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function() {
              var outerPaths, innerPaths;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    if (!(width < 3))
                      return [3, 2];
                    return [4, this.renderSolidBorder(color2, side, curvePoints)];
                  case 1:
                    _a.sent();
                    return [2];
                  case 2:
                    outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                    this.path(outerPaths);
                    this.ctx.fillStyle = asString(color2);
                    this.ctx.fill();
                    innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                    this.path(innerPaths);
                    this.ctx.fill();
                    return [2];
                }
              });
            });
          };
          CanvasRenderer2.prototype.renderNodeBackgroundAndBorders = function(paint) {
            return __awaiter(this, void 0, void 0, function() {
              var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
              var _this = this;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    this.applyEffects(paint.getEffects(2));
                    styles = paint.container.styles;
                    hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                    borders = [
                      { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                      { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                      { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                      { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
                    ];
                    backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                    if (!(hasBackground || styles.boxShadow.length))
                      return [3, 2];
                    this.ctx.save();
                    this.path(backgroundPaintingArea);
                    this.ctx.clip();
                    if (!isTransparent(styles.backgroundColor)) {
                      this.ctx.fillStyle = asString(styles.backgroundColor);
                      this.ctx.fill();
                    }
                    return [4, this.renderBackgroundImage(paint.container)];
                  case 1:
                    _a.sent();
                    this.ctx.restore();
                    styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
                      _this.ctx.save();
                      var borderBoxArea = calculateBorderBoxPath(paint.curves);
                      var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                      var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                      if (shadow.inset) {
                        _this.path(borderBoxArea);
                        _this.ctx.clip();
                        _this.mask(shadowPaintingArea);
                      } else {
                        _this.mask(borderBoxArea);
                        _this.ctx.clip();
                        _this.path(shadowPaintingArea);
                      }
                      _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                      _this.ctx.shadowOffsetY = shadow.offsetY.number;
                      _this.ctx.shadowColor = asString(shadow.color);
                      _this.ctx.shadowBlur = shadow.blur.number;
                      _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
                      _this.ctx.fill();
                      _this.ctx.restore();
                    });
                    _a.label = 2;
                  case 2:
                    side = 0;
                    _i = 0, borders_1 = borders;
                    _a.label = 3;
                  case 3:
                    if (!(_i < borders_1.length))
                      return [3, 13];
                    border = borders_1[_i];
                    if (!(border.style !== 0 && !isTransparent(border.color) && border.width > 0))
                      return [3, 11];
                    if (!(border.style === 2))
                      return [3, 5];
                    return [4, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2)];
                  case 4:
                    _a.sent();
                    return [3, 11];
                  case 5:
                    if (!(border.style === 3))
                      return [3, 7];
                    return [4, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3)];
                  case 6:
                    _a.sent();
                    return [3, 11];
                  case 7:
                    if (!(border.style === 4))
                      return [3, 9];
                    return [4, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                  case 8:
                    _a.sent();
                    return [3, 11];
                  case 9:
                    return [4, this.renderSolidBorder(border.color, side, paint.curves)];
                  case 10:
                    _a.sent();
                    _a.label = 11;
                  case 11:
                    side++;
                    _a.label = 12;
                  case 12:
                    _i++;
                    return [3, 3];
                  case 13:
                    return [2];
                }
              });
            });
          };
          CanvasRenderer2.prototype.renderDashedDottedBorder = function(color2, width, side, curvePoints, style) {
            return __awaiter(this, void 0, void 0, function() {
              var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
              return __generator(this, function(_a) {
                this.ctx.save();
                strokePaths = parsePathForBorderStroke(curvePoints, side);
                boxPaths = parsePathForBorder(curvePoints, side);
                if (style === 2) {
                  this.path(boxPaths);
                  this.ctx.clip();
                }
                if (isBezierCurve(boxPaths[0])) {
                  startX = boxPaths[0].start.x;
                  startY = boxPaths[0].start.y;
                } else {
                  startX = boxPaths[0].x;
                  startY = boxPaths[0].y;
                }
                if (isBezierCurve(boxPaths[1])) {
                  endX = boxPaths[1].end.x;
                  endY = boxPaths[1].end.y;
                } else {
                  endX = boxPaths[1].x;
                  endY = boxPaths[1].y;
                }
                if (side === 0 || side === 2) {
                  length = Math.abs(startX - endX);
                } else {
                  length = Math.abs(startY - endY);
                }
                this.ctx.beginPath();
                if (style === 3) {
                  this.formatPath(strokePaths);
                } else {
                  this.formatPath(boxPaths.slice(0, 2));
                }
                dashLength = width < 3 ? width * 3 : width * 2;
                spaceLength = width < 3 ? width * 2 : width;
                if (style === 3) {
                  dashLength = width;
                  spaceLength = width;
                }
                useLineDash = true;
                if (length <= dashLength * 2) {
                  useLineDash = false;
                } else if (length <= dashLength * 2 + spaceLength) {
                  multiplier = length / (2 * dashLength + spaceLength);
                  dashLength *= multiplier;
                  spaceLength *= multiplier;
                } else {
                  numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                  minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                  maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                  spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
                }
                if (useLineDash) {
                  if (style === 3) {
                    this.ctx.setLineDash([0, dashLength + spaceLength]);
                  } else {
                    this.ctx.setLineDash([dashLength, spaceLength]);
                  }
                }
                if (style === 3) {
                  this.ctx.lineCap = "round";
                  this.ctx.lineWidth = width;
                } else {
                  this.ctx.lineWidth = width * 2 + 1.1;
                }
                this.ctx.strokeStyle = asString(color2);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                if (style === 2) {
                  if (isBezierCurve(boxPaths[0])) {
                    path1 = boxPaths[3];
                    path2 = boxPaths[0];
                    this.ctx.beginPath();
                    this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                    this.ctx.stroke();
                  }
                  if (isBezierCurve(boxPaths[1])) {
                    path1 = boxPaths[1];
                    path2 = boxPaths[2];
                    this.ctx.beginPath();
                    this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                    this.ctx.stroke();
                  }
                }
                this.ctx.restore();
                return [2];
              });
            });
          };
          CanvasRenderer2.prototype.render = function(element) {
            return __awaiter(this, void 0, void 0, function() {
              var stack;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    if (this.options.backgroundColor) {
                      this.ctx.fillStyle = asString(this.options.backgroundColor);
                      this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                    }
                    stack = parseStackingContexts(element);
                    return [4, this.renderStack(stack)];
                  case 1:
                    _a.sent();
                    this.applyEffects([]);
                    return [2, this.canvas];
                }
              });
            });
          };
          return CanvasRenderer2;
        }(Renderer);
        var isTextInputElement = function(container) {
          if (container instanceof TextareaElementContainer) {
            return true;
          } else if (container instanceof SelectElementContainer) {
            return true;
          } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            return true;
          }
          return false;
        };
        var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
          switch (clip) {
            case 0:
              return calculateBorderBoxPath(curves);
            case 2:
              return calculateContentBoxPath(curves);
            case 1:
            default:
              return calculatePaddingBoxPath(curves);
          }
        };
        var canvasTextAlign = function(textAlign2) {
          switch (textAlign2) {
            case 1:
              return "center";
            case 2:
              return "right";
            case 0:
            default:
              return "left";
          }
        };
        var iOSBrokenFonts = ["-apple-system", "system-ui"];
        var fixIOSSystemFonts = function(fontFamilies) {
          return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily2) {
            return iOSBrokenFonts.indexOf(fontFamily2) === -1;
          }) : fontFamilies;
        };
        var ForeignObjectRenderer = function(_super) {
          __extends(ForeignObjectRenderer2, _super);
          function ForeignObjectRenderer2(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
            _this.ctx = _this.canvas.getContext("2d");
            _this.options = options;
            _this.canvas.width = Math.floor(options.width * options.scale);
            _this.canvas.height = Math.floor(options.height * options.scale);
            _this.canvas.style.width = options.width + "px";
            _this.canvas.style.height = options.height + "px";
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
            return _this;
          }
          ForeignObjectRenderer2.prototype.render = function(element) {
            return __awaiter(this, void 0, void 0, function() {
              var svg, img;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                    return [4, loadSerializedSVG(svg)];
                  case 1:
                    img = _a.sent();
                    if (this.options.backgroundColor) {
                      this.ctx.fillStyle = asString(this.options.backgroundColor);
                      this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                    }
                    this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                    return [2, this.canvas];
                }
              });
            });
          };
          return ForeignObjectRenderer2;
        }(Renderer);
        var loadSerializedSVG = function(svg) {
          return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };
        var Logger2 = function() {
          function Logger3(_a) {
            var id = _a.id, enabled = _a.enabled;
            this.id = id;
            this.enabled = enabled;
            this.start = Date.now();
          }
          Logger3.prototype.debug = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (this.enabled) {
              if (typeof window !== "undefined" && window.console && typeof console.debug === "function") {
                console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
              } else {
                this.info.apply(this, args);
              }
            }
          };
          Logger3.prototype.getTime = function() {
            return Date.now() - this.start;
          };
          Logger3.prototype.info = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (this.enabled) {
              if (typeof window !== "undefined" && window.console && typeof console.info === "function") {
                console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
              }
            }
          };
          Logger3.prototype.warn = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (this.enabled) {
              if (typeof window !== "undefined" && window.console && typeof console.warn === "function") {
                console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
              } else {
                this.info.apply(this, args);
              }
            }
          };
          Logger3.prototype.error = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (this.enabled) {
              if (typeof window !== "undefined" && window.console && typeof console.error === "function") {
                console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
              } else {
                this.info.apply(this, args);
              }
            }
          };
          Logger3.instances = {};
          return Logger3;
        }();
        var Context = function() {
          function Context2(options, windowBounds) {
            var _a;
            this.windowBounds = windowBounds;
            this.instanceName = "#" + Context2.instanceCount++;
            this.logger = new Logger2({ id: this.instanceName, enabled: options.logging });
            this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
          }
          Context2.instanceCount = 1;
          return Context2;
        }();
        var html2canvas2 = function(element, options) {
          if (options === void 0) {
            options = {};
          }
          return renderElement(element, options);
        };
        if (typeof window !== "undefined") {
          CacheStorage.setContext(window);
        }
        var renderElement = function(element, opts) {
          return __awaiter(void 0, void 0, void 0, function() {
            var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor2, renderOptions, canvas, renderer, root, renderer;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            return __generator(this, function(_u) {
              switch (_u.label) {
                case 0:
                  if (!element || typeof element !== "object") {
                    return [2, Promise.reject("Invalid element provided as first argument")];
                  }
                  ownerDocument = element.ownerDocument;
                  if (!ownerDocument) {
                    throw new Error("Element is not attached to a Document");
                  }
                  defaultView = ownerDocument.defaultView;
                  if (!defaultView) {
                    throw new Error("Document is not attached to a Window");
                  }
                  resourceOptions = {
                    allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                    imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15e3,
                    proxy: opts.proxy,
                    useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                  };
                  contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                  windowOptions = {
                    windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                    windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                    scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                    scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                  };
                  windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                  context = new Context(contextOptions, windowBounds);
                  foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                  cloneOptions = {
                    allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                    onclone: opts.onclone,
                    ignoreElements: opts.ignoreElements,
                    inlineImages: foreignObjectRendering,
                    copyStyles: foreignObjectRendering
                  };
                  context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                  documentCloner = new DocumentCloner(context, element, cloneOptions);
                  clonedElement = documentCloner.clonedReferenceElement;
                  if (!clonedElement) {
                    return [2, Promise.reject("Unable to find element in cloned iframe")];
                  }
                  return [4, documentCloner.toIFrame(ownerDocument, windowBounds)];
                case 1:
                  container = _u.sent();
                  _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                  backgroundColor2 = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                  renderOptions = {
                    canvas: opts.canvas,
                    backgroundColor: backgroundColor2,
                    scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                    x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                    y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                    width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                    height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                  };
                  if (!foreignObjectRendering)
                    return [3, 3];
                  context.logger.debug("Document cloned, using foreign object rendering");
                  renderer = new ForeignObjectRenderer(context, renderOptions);
                  return [4, renderer.render(clonedElement)];
                case 2:
                  canvas = _u.sent();
                  return [3, 5];
                case 3:
                  context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                  context.logger.debug("Starting DOM parsing");
                  root = parseTree(context, clonedElement);
                  if (backgroundColor2 === root.styles.backgroundColor) {
                    root.styles.backgroundColor = COLORS.TRANSPARENT;
                  }
                  context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                  renderer = new CanvasRenderer(context, renderOptions);
                  return [4, renderer.render(root)];
                case 4:
                  canvas = _u.sent();
                  _u.label = 5;
                case 5:
                  if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                    if (!DocumentCloner.destroy(container)) {
                      context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                    }
                  }
                  context.logger.debug("Finished rendering");
                  return [2, canvas];
              }
            });
          });
        };
        var parseBackgroundColor = function(context, element, backgroundColorOverride) {
          var ownerDocument = element.ownerDocument;
          var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
          var defaultBackgroundColor = typeof backgroundColorOverride === "string" ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 4294967295;
          return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
        };
        return html2canvas2;
      });
    }
  });

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global2, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global2.document ? factory(global2, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global2);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document3 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document3;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.6.0", jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          jquery: version,
          constructor: jQuery,
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          guid: 1,
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        });
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window3) {
          var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document4, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
            var i2 = 0, len = list.length;
            for (; i2 < len; i2++) {
              if (list[i2] === elem) {
                return i2;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "\uFFFD";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
          }, { dir: "parentNode", next: "legend" });
          try {
            push2.apply(arr2 = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr2[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: arr2.length ? function(target, els) {
                pushNative.apply(target, slice2.call(els));
              } : function(target, els) {
                var j = target.length, i2 = 0;
                while (target[j++] = els[i2++]) {
                }
                target.length = j - 1;
              }
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document4;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext !== context || !support2.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(results, newContext.querySelectorAll(newSelector));
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document4.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr3 = attrs.split("|"), i2 = arr3.length;
            while (i2--) {
              Expr.attrHandle[arr3[i2]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document4 || doc.nodeType !== 9 || !doc.documentElement) {
              return document4;
            }
            document4 = doc;
            docElem = document4.documentElement;
            documentIsHTML = !isXML(document4);
            if (preferredDoc != document4 && (subWindow = document4.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }
            support2.scope = assert(function(el) {
              docElem.appendChild(el).appendChild(document4.createElement("div"));
              return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            support2.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(el) {
              el.appendChild(document4.createComment(""));
              return !el.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document4.getElementsByClassName);
            support2.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document4.getElementsByName || !document4.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i2++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document4.querySelectorAll)) {
              assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                input = document4.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                el.querySelectorAll("\\\f");
                rbuggyQSA.push("[\\r\\n\\f]");
              });
              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document4.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a == document4 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                  return -1;
                }
                if (b == document4 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a == document4 ? -1 : b == document4 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i2] === bp[i2]) {
                i2++;
              }
              return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : 0;
            };
            return document4;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle2(expr, document4, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document4) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document4) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                });
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, _context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf2(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document4.activeElement && (!document4.hasFocus || document4.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),
              "checked": function(elem) {
                var nodeName2 = elem.nodeName.toLowerCase();
                return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
          };
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            } : function(elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if (skip && skip === elem.nodeName.toLowerCase()) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      uniqueCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              Sizzle2(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })).replace(rtrim2, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document4 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document4) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document4, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document4.createElement("fieldset")) & 1;
          });
          if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self2 = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self2[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self2[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init4 = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document3, true));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document3.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : selector(jQuery);
          }
          return jQuery.makeArray(selector, this);
        };
        init4.prototype = jQuery.fn;
        rootjQuery = jQuery(document3);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
          },
          add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
          },
          addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                        } else {
                          maxDepth++;
                          then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(e, process.stackTrace);
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getStackHook) {
                        process.stackTrace = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                  tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                  tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(function() {
                  state = stateString;
                }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          isReady: false,
          readyWait: 1,
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document3, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document3.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document3.readyState === "complete" || document3.readyState !== "loading" && !document3.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document3.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document3.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document3.createDocumentFragment(), div = fragment.appendChild(document3.createElement("div")), input = document3.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              noBubble: true
            },
            click: {
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", returnTrue);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync2(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result && result.value;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                });
                event.stopImmediatePropagation();
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery.event.special[type] = {
            setup: function() {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            _default: function() {
              return true;
            },
            delegateType
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document3.createElement("div"), div = document3.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document3.createElement("table");
                tr = document3.createElement("tr");
                trChild = document3.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document3.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
          }
          return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
        }
        jQuery.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          cssProps: {},
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        });
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document3.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(jQuery.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          }));
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document3.createElement("input"), select = document3.createElement("select"), opt = select.appendChild(document3.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document3.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery(this).addClass(value.call(this, j2, getClass(this)));
              });
            }
            classes = classesToArray(value);
            if (classes.length) {
              while (elem = this[i++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    if (cur.indexOf(" " + clazz + " ") < 0) {
                      cur += clazz + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute("class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery(this).removeClass(value.call(this, j2, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classes = classesToArray(value);
            if (classes.length) {
              while (elem = this[i++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    while (cur.indexOf(" " + clazz + " ") > -1) {
                      cur = cur.replace(" " + clazz + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute("class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (isFunction(value)) {
              return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
              });
            }
            return this.each(function() {
              var className, i, self2, classNames;
              if (isValidValue) {
                i = 0;
                self2 = jQuery(this);
                classNames = classesToArray(value);
                while (className = classNames[i++]) {
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : stripAndCollapse(jQuery.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document3], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document3;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document3)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
              type,
              isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        if (!support.focusin) {
          jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              }
            };
          });
        }
        var location2 = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document3.createElement("a");
        originAnchor.href = location2.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location2.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location2.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": JSON.parse,
              "text xml": jQuery.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document3.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self2 = jQuery(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          0: 200,
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(xhr.status, xhr.statusText);
                        }
                      } else {
                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document3.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document3.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document3.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document3.location.href;
              context.head.appendChild(base);
            } else {
              context = document3;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery.ajax({
              url,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = prop === "pageYOffset";
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          });
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                }
                return value2 === void 0 ? jQuery.css(elem, type2, extra) : jQuery.style(elem, type2, value2, extra);
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
          jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        });
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

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
  var CDN_BASE_PATH = "https://cdn.jsdelivr.net/gh/strigo/strigo-sdk";
  var ASSESSMENT_RECORDER_URL = "https://assessment-recorder.web.app";

  // src/modules/url/url.ts
  var STRIGO_CHILD_IFRAME_PARAM = "strigoChildIframe";
  function paramsToObject(entries) {
    const result = {};
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  }
  function extractUrlParams(search) {
    const urlParams = new URLSearchParams(search);
    const entries = urlParams.entries();
    return paramsToObject(entries);
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
  function generateStrigoIframeURL(config) {
    const { subDomain, user, webApiKey, development } = config;
    return development ? `http://${LOCAL_STRIGO_URL}/academy/courses?token=${user.token.token}&webApiKey=${webApiKey}` : `https://${subDomain}.${BASE_STRIGO_URL}/academy/courses?token=${user.token.token}&webApiKey=${webApiKey}`;
  }
  function generateStrigoChildIframeURL(url) {
    const currentUrl = new URL(url);
    currentUrl.searchParams.set(STRIGO_CHILD_IFRAME_PARAM, "true");
    return currentUrl.toString();
  }
  function isStrigoChildIframe() {
    return window.location.search.includes(STRIGO_CHILD_IFRAME_PARAM);
  }
  function removeStrigoChildIframeParam() {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.delete(STRIGO_CHILD_IFRAME_PARAM);
    url.search = searchParams.toString();
    window.history.replaceState(window.history.state, "", url);
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
      return `http://localhost:${"7000"}/styles/strigo.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo.min.css`;
    }
    return `${CDN_BASE_PATH}@master/dist/production/styles/strigo.min.css`;
  }
  function generateWidgetCssURL(development, version) {
    if (development) {
      return `http://localhost:${"7000"}/styles/strigo-widget.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-widget.min.css`;
    }
    return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-widget.min.css`;
  }
  function generateRecorderCssURL(development, version) {
    if (development) {
      return `http://localhost:${"7000"}/styles/strigo-assessment-recorder.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-assessment-recorder.min.css`;
    }
    return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-assessment-recorder.min.css`;
  }
  function generateAssessmentRecorderURL(development) {
    return development ? `http://localhost:${"undefined"}` : ASSESSMENT_RECORDER_URL;
  }
  function isInRecordingMode() {
    const { search } = window.location;
    const urlParams = extractUrlParams(search);
    return "strigoAssessmentRecorder" in urlParams;
  }
  function isDevelopment() {
    const { search } = window.location;
    const urlParams = extractUrlParams(search);
    return "development" in urlParams;
  }

  // src/services/logger.ts
  var Logger = class {
    constructor(config) {
      this.url = config?.url;
    }
    setup(config) {
      this.url = config.url;
    }
    logToRemote(level, message, context) {
      return fetch(this.url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          level,
          message,
          context
        })
      }).then((result) => {
        if (!result.ok) {
          console.warn("Logging to Strigo failed", { result });
        }
      }).catch((error) => {
        console.warn("Logging to Strigo failed", { err: error });
      });
    }
    logToConsole(level, message, context) {
      const enrichedMessage = `${new Date().toISOString()} - ${message}`;
      const parsedContext = context.err instanceof Error ? { ...context, err: { message: context.err.message, name: context.err.name, stack: context.err.stack } } : context;
      console[level](enrichedMessage, context ? `
${JSON.stringify(parsedContext)}` : "");
    }
    getDefaultContext() {
      const config = getConfig();
      if (!config) {
        return {};
      }
      const { user, subDomain, initSite, development, version, selectedWidgetFlavor } = config;
      return {
        token: user?.token.token,
        initSite: initSite?.href,
        subDomain,
        development,
        version,
        selectedWidgetFlavor
      };
    }
    log(level, message, context) {
      const enrichedContext = { ...this.getDefaultContext(), ...context };
      try {
        if (this.url && !getConfig()?.development) {
          this.logToRemote(level, message, enrichedContext);
        }
        this.logToConsole(level, `Academy - ${message}`, enrichedContext);
      } catch (err) {
        console.log("Logging error:", { err });
      }
    }
    debug(message, context = {}) {
      this.log("debug", message, context);
    }
    info(message, context = {}) {
      this.log("info", message, context);
    }
    warn(message, context = {}) {
      this.log("warn", message, context);
    }
    error(message, context = {}) {
      this.log("error", message, context);
    }
  };
  var LoggerInstance = new Logger();

  // src/modules/storage-utils/storage-utils.ts
  function getStorageData(storageType, storageName) {
    try {
      const value = JSON.parse(window[storageType].getItem(storageName));
      return value;
    } catch (error) {
      LoggerInstance.error("get storage data error", { err: error });
      return null;
    }
  }
  function setupStorage(storageType, storageName, data) {
    try {
      window[storageType].setItem(storageName, JSON.stringify(data));
      return data;
    } catch (error) {
      LoggerInstance.error("setup storage error", { err: error });
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
      LoggerInstance.error("set storage value error", { err: error });
      return null;
    }
  }
  function clearStorage(storageType, storageName) {
    try {
      window[storageType].removeItem(storageName);
    } catch (error) {
      LoggerInstance.error("clear storage error", { err: error });
    }
  }

  // src/modules/config/config.ts
  function getConfig() {
    const config = getStorageData("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */);
    return config;
  }
  function init(initConfig) {
    const config = getConfig();
    const initializedConfig = setupStorage("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */, {
      ...config,
      ...initConfig
    });
    return initializedConfig;
  }
  function setup(setupConfig) {
    const currentConfig = getConfig();
    const config = setupStorage("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */, {
      ...currentConfig,
      ...setupConfig
    });
    return config;
  }
  function getConfigValue(key) {
    const session = getConfig();
    return session?.[key];
  }
  function clearConfig() {
    clearStorage("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */);
  }
  async function fetchRemoteConfiguration(token, development) {
    try {
      const configDomain = development ? "http://localhost:3000" : "https://app.strigo.io";
      const response = await fetch(`${configDomain}/api/internal/academy/v1/config`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch remote configuration: ${response.statusText}`);
      }
      const configuration = await response.json();
      return configuration.data;
    } catch (err) {
      LoggerInstance.warn("Error fetching configuration from Strigo", { err });
      return null;
    }
  }

  // src/modules/session/session.ts
  function setup2(initialSession) {
    const session = setupStorage("sessionStorage" /* SESSION_STORAGE */, "strigoSession" /* STRIGO_SESSION */, initialSession);
    return session;
  }
  function getSession() {
    const session = getStorageData("sessionStorage" /* SESSION_STORAGE */, "strigoSession" /* STRIGO_SESSION */);
    return session;
  }
  function isPanelOpen() {
    return getSession()?.isPanelOpen;
  }
  function getWidgetFlavor() {
    return getSession()?.widgetFlavor;
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

  // src/modules/events-storage/events-storage.ts
  function getEventsStorageData() {
    try {
      return JSON.parse(window["localStorage" /* LOCAL_STORAGE */].getItem("strigoEvents" /* STRIGO_EVENTS */));
    } catch (error) {
      LoggerInstance.error("Get events storage error", { error });
      return null;
    }
  }
  function init2() {
    try {
      const currentEventsStorage = getEventsStorageData();
      if (currentEventsStorage) {
        LoggerInstance.debug("Events storage already exists");
        return currentEventsStorage;
      }
      const storageEvents = { events: [] };
      window["localStorage" /* LOCAL_STORAGE */].setItem("strigoEvents" /* STRIGO_EVENTS */, JSON.stringify(storageEvents));
      return storageEvents;
    } catch (error) {
      LoggerInstance.error("Init events storage error", { error });
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
      if (getWidgetFlavor() === "overlay" /* OVERLAY */) {
        const customEvent = new CustomEvent("overlay-widget-event" /* OVERLAY_WIDGET_EVENT */, {
          bubbles: true,
          detail: {
            key: "strigoEvents",
            oldValue: prev,
            newValue: JSON.stringify(initialState)
          }
        });
        window.dispatchEvent(customEvent);
      }
      return initialState;
    } catch (error) {
      LoggerInstance.error("Push event to storage error", { error });
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
      LoggerInstance.error("Pop event from storage error", { error });
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
      LoggerInstance.error("Get event from storage error", { error });
      return null;
    }
  }
  function clearEventsStorage() {
    try {
      window["localStorage" /* LOCAL_STORAGE */].removeItem("strigoEvents" /* STRIGO_EVENTS */);
    } catch (error) {
      LoggerInstance.error("Clear events storage error", { error });
    }
  }

  // src/modules/assessments-storage/assessments-storage.ts
  function getAssessmentsStorageData() {
    try {
      return JSON.parse(window["localStorage" /* LOCAL_STORAGE */].getItem("strigoAssessments" /* STRIGO_ASSESSMENTS */));
    } catch (error) {
      LoggerInstance.error("Get assessments storage error", { error });
      return null;
    }
  }
  function init3() {
    try {
      const currentAssessmentsStorage = getAssessmentsStorageData();
      if (currentAssessmentsStorage) {
        LoggerInstance.debug("Assessments storage already exists");
        return currentAssessmentsStorage;
      }
      const strigoAssessments = { assessments: [] };
      window["localStorage" /* LOCAL_STORAGE */].setItem("strigoAssessments" /* STRIGO_ASSESSMENTS */, JSON.stringify(strigoAssessments));
      return strigoAssessments;
    } catch (error) {
      LoggerInstance.error("Init assessments storage error", { error });
      return null;
    }
  }
  function setup3(initialStorage) {
    try {
      const strigoAssessments = initialStorage ? { assessments: [...initialStorage] } : { assessments: [] };
      window["localStorage" /* LOCAL_STORAGE */].setItem("strigoAssessments" /* STRIGO_ASSESSMENTS */, JSON.stringify(strigoAssessments));
      return strigoAssessments;
    } catch (error) {
      LoggerInstance.error("Assessments storage setup error", { error });
      return null;
    }
  }
  function clearAssessmentStorage() {
    try {
      window["localStorage" /* LOCAL_STORAGE */].removeItem("strigoAssessments" /* STRIGO_ASSESSMENTS */);
    } catch (error) {
      LoggerInstance.error("Clear assessments storage error", { error });
    }
  }

  // src/modules/assessment-recorder/assessment-recorder.ts
  var import_html2canvas = __toESM(require_html2canvas(), 1);

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
  function toggleWidget() {
    const widget = document.getElementById("strigo-widget");
    const isOpen = widget.classList.contains("slide-in");
    widget.classList.toggle("slide-in");
    setTimeout(() => {
      const arrow = document.getElementById("strigo-arrow");
      arrow.innerHTML = isOpen ? CHEVRON_LEFT : CHEVRON_RIGHT;
    }, 300);
  }
  function createWidget(url, strigoMain) {
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
      toggleWidget();
    };
    collapseDiv.appendChild(collapseButton);
    const strigoExercisesIframe = document.createElement("iframe");
    strigoExercisesIframe.className = "strigo-iframe";
    strigoExercisesIframe.id = "strigo-exercises";
    strigoExercisesIframe.src = url;
    const widgetDiv = document.createElement("div");
    widgetDiv.id = "strigo-widget";
    widgetDiv.appendChild(strigoExercisesIframe);
    strigoMain.appendChild(widgetDiv);
    return strigoExercisesIframe;
  }
  function removeWidget() {
    document.getElementById("strigo-widget").remove();
  }
  function openWidget() {
    const widget = document.getElementById("strigo-widget");
    if (widget.classList.contains("slide-in")) {
      return;
    }
    widget.classList.add("slide-in");
  }

  // src/modules/element-selector/element-profiler.js
  function getElementProfiler() {
    var Limit;
    (function(Limit2) {
      Limit2[Limit2["All"] = 0] = "All";
      Limit2[Limit2["Two"] = 1] = "Two";
      Limit2[Limit2["One"] = 2] = "One";
    })(Limit || (Limit = {}));
    let config;
    let rootDocument;
    function getElementProfileNodesInfo(input, options) {
      if (input.nodeType !== Node.ELEMENT_NODE) {
        throw new Error(`Can't generate CSS selector for non-element node type.`);
      }
      if (input.tagName.toLowerCase() === "html") {
        return "html";
      }
      const defaults = {
        root: document.body,
        idName: (name) => true,
        className: (name) => true,
        tagName: (name) => true,
        attr: (name, value) => false,
        seedMinLength: 1,
        optimizedMinLength: 2,
        threshold: 1e3,
        maxNumberOfTries: 1e4
      };
      config = Object.assign(Object.assign({}, defaults), options);
      rootDocument = findRootDocument(config.root, defaults);
      let nodesInfo = bottomUpSearch(input);
      return nodesInfo;
    }
    function generateSelectorFromNodesInfo(nodesInfo, options) {
      const defaults = {
        root: document.body,
        idName: (name) => true,
        className: (name) => true,
        tagName: (name) => true,
        attr: (name, value) => false,
        seedMinLength: 1,
        optimizedMinLength: 2,
        threshold: 1e3,
        maxNumberOfTries: 1e4
      };
      config = Object.assign(Object.assign({}, defaults), options);
      rootDocument = findRootDocument(config.root, defaults);
      let pathToProduceSelectorsFrom = generateUniquePath(nodesInfo, Limit.All, () => generateUniquePath(nodesInfo, Limit.Two, () => generateUniquePath(nodesInfo, Limit.One)));
      if (pathToProduceSelectorsFrom) {
        let selectorToFindElementBy = selector(pathToProduceSelectorsFrom);
        const element = rootDocument.querySelector(selectorToFindElementBy);
        const optimized = sort(optimize(pathToProduceSelectorsFrom, element));
        if (optimized.length > 0) {
          pathToProduceSelectorsFrom = optimized[0];
        }
        return selector(pathToProduceSelectorsFrom);
      } else {
        throw new Error(`Selector was not found.`);
      }
    }
    function getLevelPath(nodeIdentifiers, limit) {
      const id2 = maybe(nodeIdentifiers.find((node) => node.identifier === "id"));
      const attributes = maybe(...nodeIdentifiers.filter((node) => node.identifier === "attribute"));
      const classNames2 = maybe(...nodeIdentifiers.filter((node) => node.identifier === "className"));
      const tagName2 = maybe(...nodeIdentifiers.filter((node) => node.identifier === "tagName"));
      const nth = nodeIdentifiers.find((node) => node.identifier === "index").index;
      let levelPath = id2 || attributes || classNames2 || tagName2 || [any()];
      if (limit === Limit.All) {
        if (nth) {
          levelPath = levelPath.concat(levelPath.filter(dispensableNth).map((node) => nthChild(node, nth)));
        }
      } else if (limit === Limit.Two) {
        levelPath = levelPath.slice(0, 1);
        if (nth) {
          levelPath = levelPath.concat(levelPath.filter(dispensableNth).map((node) => nthChild(node, nth)));
        }
      } else if (limit === Limit.One) {
        const [node] = levelPath = levelPath.slice(0, 1);
        if (nth && dispensableNth(node)) {
          levelPath = [nthChild(node, nth)];
        }
      }
      return levelPath;
    }
    function generatePathStack(nodesInfo, limit) {
      let stack = nodesInfo.map(({ nodeIdentifiers, level }) => {
        let levelPath = getLevelPath(nodeIdentifiers, limit);
        for (let node of levelPath) {
          node.level = level;
        }
        return levelPath;
      });
      return stack;
    }
    function findRootDocument(rootNode, defaults) {
      if (rootNode.nodeType === Node.DOCUMENT_NODE) {
        return rootNode;
      }
      if (rootNode === defaults.root) {
        return rootNode.ownerDocument;
      }
      return rootNode;
    }
    function bottomUpSearch(input) {
      let nodesInfo = [];
      let current = input;
      let i = 0;
      while (current && current !== config.root.parentElement) {
        const nodeIdentifiers = [
          maybe(id(current)),
          maybe(tagName(current)),
          maybe(...attr(current)),
          maybe(...classNames(current)),
          maybe(index(current))
        ].filter(notEmpty).flat().sort((a, b) => a.penalty - b.penalty);
        nodesInfo.push({ nodeIdentifiers, level: i });
        if (nodesInfo.length >= config.seedMinLength) {
          let pathToProduceSelectorsFrom = generateUniquePath(nodesInfo, Limit.All, () => generateUniquePath(nodesInfo, Limit.Two, () => generateUniquePath(nodesInfo, Limit.One)));
          if (pathToProduceSelectorsFrom) {
            break;
          }
        }
        current = current.parentElement;
        i++;
      }
      return nodesInfo;
    }
    function generateUniquePath(nodesInfo, limit, fallback) {
      const pathStack = generatePathStack(nodesInfo, limit);
      return findUniquePath(pathStack, fallback);
    }
    function findUniquePath(stack, fallback) {
      const paths = sort(combinations(stack));
      if (paths.length > config.threshold) {
        return fallback ? fallback() : null;
      }
      for (let candidate of paths) {
        if (unique(candidate)) {
          return candidate;
        }
      }
      return null;
    }
    function selector(path) {
      let node = path[0];
      let query = node.name;
      for (let i = 1; i < path.length; i++) {
        const level = path[i].level || 0;
        if (node.level === level - 1) {
          query = `${path[i].name} > ${query}`;
        } else {
          query = `${path[i].name} ${query}`;
        }
        node = path[i];
      }
      return query;
    }
    function penalty(path) {
      return path.map((node) => node.penalty).reduce((acc, i) => acc + i, 0);
    }
    function unique(path) {
      switch (rootDocument.querySelectorAll(selector(path)).length) {
        case 0:
          throw new Error(`Can't select any node with this selector: ${selector(path)}`);
        case 1:
          return true;
        default:
          return false;
      }
    }
    function id(input) {
      if (!input?.getAttribute) {
        alert(JSON.stringify(input));
      }
      const elementId = input.getAttribute("id");
      if (elementId && config.idName(elementId)) {
        return {
          name: "#" + cssesc(elementId, { isIdentifier: true }),
          penalty: 0,
          identifier: "id"
        };
      }
      return null;
    }
    function attr(input) {
      const attrs = Array.from(input.attributes).filter((attr2) => config.attr(attr2.name, attr2.value));
      return attrs.map((attr2) => ({
        name: "[" + cssesc(attr2.name, { isIdentifier: true }) + '="' + cssesc(attr2.value) + '"]',
        penalty: 0.5,
        identifier: "attribute"
      }));
    }
    function classNames(input) {
      const names = Array.from(input.classList).filter(config.className);
      return names.map((name) => ({
        name: "." + cssesc(name, { isIdentifier: true }),
        penalty: 1,
        identifier: "className"
      }));
    }
    function tagName(input) {
      const name = input.tagName.toLowerCase();
      if (config.tagName(name)) {
        return {
          name,
          penalty: 2,
          identifier: "tagName"
        };
      }
      return null;
    }
    function any() {
      return {
        name: "*",
        penalty: 3,
        identifier: "any"
      };
    }
    function index(input) {
      const parent = input.parentNode;
      if (!parent) {
        return null;
      }
      let child = parent.firstChild;
      if (!child) {
        return null;
      }
      let i = 0;
      while (child) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          i++;
        }
        if (child === input) {
          break;
        }
        child = child.nextSibling;
      }
      return {
        index: i,
        outOf: parent.childElementCount,
        penalty: 4,
        identifier: "index"
      };
    }
    function nthChild(node, i) {
      return {
        name: node.name + `:nth-child(${i})`,
        penalty: node.penalty + 1
      };
    }
    function dispensableNth(node) {
      return node.name !== "html" && !node.name.startsWith("#");
    }
    function maybe(...level) {
      const list = level.filter(notEmpty);
      if (list.length > 0) {
        return list;
      }
      return null;
    }
    function notEmpty(value) {
      return value !== null && value !== void 0;
    }
    function* combinations(stack, path = []) {
      if (stack.length > 0) {
        for (let node of stack[0]) {
          yield* combinations(stack.slice(1, stack.length), path.concat(node));
        }
      } else {
        yield path;
      }
    }
    function sort(paths) {
      return Array.from(paths).sort((a, b) => penalty(a) - penalty(b));
    }
    function* optimize(path, input, scope = {
      counter: 0,
      visited: /* @__PURE__ */ new Map()
    }) {
      if (path.length > 2 && path.length > config.optimizedMinLength) {
        for (let i = 1; i < path.length - 1; i++) {
          if (scope.counter > config.maxNumberOfTries) {
            return;
          }
          scope.counter += 1;
          const newPath = [...path];
          newPath.splice(i, 1);
          const newPathKey = selector(newPath);
          if (scope.visited.has(newPathKey)) {
            return;
          }
          if (unique(newPath) && same(newPath, input)) {
            yield newPath;
            scope.visited.set(newPathKey, true);
            yield* optimize(newPath, input, scope);
          }
        }
      }
    }
    function same(path, input) {
      return rootDocument.querySelector(selector(path)) === input;
    }
    const regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
    const regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
    const regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
    const defaultOptions = {
      escapeEverything: false,
      isIdentifier: false,
      quotes: "single",
      wrap: false
    };
    function cssesc(string, opt = {}) {
      const options = Object.assign(Object.assign({}, defaultOptions), opt);
      if (options.quotes != "single" && options.quotes != "double") {
        options.quotes = "single";
      }
      const quote = options.quotes == "double" ? '"' : "'";
      const isIdentifier = options.isIdentifier;
      const firstChar = string.charAt(0);
      let output = "";
      let counter = 0;
      const length = string.length;
      while (counter < length) {
        const character = string.charAt(counter++);
        let codePoint = character.charCodeAt(0);
        let value = void 0;
        if (codePoint < 32 || codePoint > 126) {
          if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
            const extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
            } else {
              counter--;
            }
          }
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else {
          if (options.escapeEverything) {
            if (regexAnySingleEscape.test(character)) {
              value = "\\" + character;
            } else {
              value = "\\" + codePoint.toString(16).toUpperCase() + " ";
            }
          } else if (/[\t\n\f\r\x0B]/.test(character)) {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = character;
          }
        }
        output += value;
      }
      if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
          output = "\\-" + output.slice(1);
        } else if (/\d/.test(firstChar)) {
          output = "\\3" + firstChar + " " + output.slice(1);
        }
      }
      output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
          return $0;
        }
        return ($1 || "") + $2;
      });
      if (!isIdentifier && options.wrap) {
        return quote + output + quote;
      }
      return output;
    }
    return { getElementProfileNodesInfo, generateSelectorFromNodesInfo };
  }

  // src/modules/element-selector/element-selector.js
  function getElementProfile(e, { dataAttribute: dataAttribute2 } = {}) {
    const elementProfiler = getElementProfiler();
    const options = {
      seedMinLength: 6,
      optimizedMinLength: e.target.id ? 2 : 10,
      threshold: 2e3,
      attr: (name) => name === dataAttribute2
    };
    const nodesInfo = elementProfiler.getElementProfileNodesInfo(e.target, options);
    console.log("Just FYI - this is how it can generate css selector:", elementProfiler.generateSelectorFromNodesInfo(nodesInfo, options));
    return nodesInfo;
  }
  function getElementSelector(nodesInfo) {
    const elementProfiler = getElementProfiler();
    const options = {
      seedMinLength: 6,
      optimizedMinLength: 10,
      threshold: 2e3,
      attr: (name) => name === dataAttribute
    };
    const elementSelector = elementProfiler.generateSelectorFromNodesInfo(nodesInfo, options);
    return elementSelector;
  }
  function startElementSelector(rootDocument, options) {
    this.saveSelectedSelector = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Removing mouse over event listener from the selected element.");
      rootDocument.removeEventListener("mouseover", this.mouseOverEvent);
      const elementProfile = getElementProfile(e, {
        dataAttribute: "some-custom-strigo-attribute"
      });
      this.elementProfile = elementProfile || {};
      const selectorOverlay2 = rootDocument.getElementById("element-selector-overlay");
      if (!selectorOverlay2) {
        console.error("Missing selector overlay element!");
      }
      rootDocument?.body?.removeChild(selectorOverlay2);
      console.log("Selected element with elementProfile:", this.elementProfile);
      options.onElementProfileCreated(this.elementProfile);
    };
    function setStyle(el, propertyObject) {
      for (const property in propertyObject) {
        el.style[property] = propertyObject[property];
      }
    }
    this.move = (e, overlayElement, skippedSelectors = []) => {
      if (overlayElement === e.target) {
        return;
      }
      const element = e.target;
      if (skippedSelectors.includes(element.id)) {
        return;
      }
      const calcDimensions = {
        top: -window.scrollY,
        left: -window.scrollX
      };
      let elem = e.target;
      while (elem && elem !== rootDocument.body) {
        calcDimensions.top += elem.offsetTop;
        calcDimensions.left += elem.offsetLeft;
        elem = elem.offsetParent;
      }
      const width = element.offsetWidth + 2;
      const height = element.offsetHeight + 2;
      const newDimensions = {
        top: calcDimensions.top - 2 + "px",
        left: calcDimensions.left - 2 + "px",
        width: width + "px",
        height: height + "px"
      };
      setStyle(overlayElement, newDimensions);
    };
    this.mouseOverEvent = (e) => {
      const overlayElement = rootDocument.getElementById("element-selector-overlay");
      this.move(e, overlayElement, ["element-selector-overlay", "strigo-assessment-recorder-iframe"]);
      const hoveredElement = e.target;
      hoveredElement.addEventListener("click", this.saveSelectedSelector);
    };
    this.removeClickListenerFromHoveredElement = (e) => {
      const hoveredElement = e.target;
      hoveredElement.removeEventListener("click", this.saveSelectedSelector);
    };
    const selectorOverlay = rootDocument.createElement("div");
    selectorOverlay.setAttribute("id", "element-selector-overlay");
    selectorOverlay.setAttribute("id", "element-selector-overlay");
    selectorOverlay.setAttribute("style", `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: ${options.zIndex || 2147483646};
      padding: 1px;
      position: fixed;
      background: rgba(105, 108, 191, 0.2);
      border: 2px dashed #696CBF;
      box-sizing: border-box;
      border-radius: 4px;
    `);
    console.log("Appending overlay selector element.");
    rootDocument.body.appendChild(selectorOverlay);
    rootDocument.addEventListener("mouseover", this.mouseOverEvent);
    rootDocument.addEventListener("mouseout", this.removeClickListenerFromHoveredElement);
  }

  // src/modules/assessment-recorder/assessment-recorder.ts
  function addAssessmentRecorderIframe(development) {
    const assessmentRecorderUrl = generateAssessmentRecorderURL(development);
    appendCssFile({ parentElement: getHeadElement(), url: generateRecorderCssURL(development) });
    const assessmentRecorderIframe = appendIFrame({
      classNames: ["strigo-assessment-recorder-iframe", "drawer", "is-open"],
      id: "strigo-assessment-recorder-iframe",
      parentElement: window.document.body,
      url: assessmentRecorderUrl
    });
    window.addEventListener("message", (ev) => {
      if (!ev || !ev.data || ev.origin !== assessmentRecorderUrl) {
        return;
      }
      let recorderMessage;
      try {
        recorderMessage = JSON.parse(ev.data);
      } catch (err) {
        return;
      }
      const { messageType, payload } = recorderMessage;
      switch (messageType) {
        case "start-capture" /* START_CAPTURE */: {
          LoggerInstance.info("Start capturing message received");
          assessmentRecorderIframe.classList.remove("is-open");
          setTimeout(() => {
            assessmentRecorderIframe.classList.add("semi-open");
          }, 600);
          const { elementType, rootElementSelector } = payload?.captureParams;
          window.Strigo.startElementSelector((elementProfile) => {
            const recorederIframe = document.getElementById("strigo-assessment-recorder-iframe");
            const elementSelector = getElementSelector(elementProfile);
            recorederIframe.classList.remove("semi-open");
            recorederIframe.classList.add("is-open");
            (0, import_html2canvas.default)(document.querySelector(elementSelector), { backgroundColor: "#3d408f" }).then((canvas) => {
              const selectedElement = {
                imageData: canvas.toDataURL(),
                profile: elementProfile,
                querySelector: elementSelector
              };
              recorederIframe.contentWindow.postMessage(JSON.stringify({
                messageType: "end-capture" /* END_CAPTURE */,
                payload: {
                  elementType,
                  selectedElement
                }
              }), "*");
            });
          }, rootElementSelector);
          break;
        }
        case "submit-assessment" /* SUBMIT_ASSESSMENT */: {
          window.opener.postMessage(JSON.stringify(payload), "*");
          window.close();
          break;
        }
        case "cancel-assessment" /* CANCEL_ASSESSMENT */: {
          window.close();
          break;
        }
        default: {
          break;
        }
      }
    }, false);
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
      var self2 = this;
      var a = elements[self2.a].element;
      var b = elements[self2.b].element;
      if (self2.dragging) {
        getOption(options, "onDragEnd", NOOP)(getSizes());
      }
      self2.dragging = false;
      global[removeEventListener]("mouseup", self2.stop);
      global[removeEventListener]("touchend", self2.stop);
      global[removeEventListener]("touchcancel", self2.stop);
      global[removeEventListener]("mousemove", self2.move);
      global[removeEventListener]("touchmove", self2.move);
      self2.stop = null;
      self2.move = null;
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
      self2.gutter.style.cursor = "";
      self2.parent.style.cursor = "";
      document2.body.style.cursor = "";
    }
    function startDragging(e) {
      if ("button" in e && e.button !== 0) {
        return;
      }
      var self2 = this;
      var a = elements[self2.a].element;
      var b = elements[self2.b].element;
      if (!self2.dragging) {
        getOption(options, "onDragStart", NOOP)(getSizes());
      }
      e.preventDefault();
      self2.dragging = true;
      self2.move = drag.bind(self2);
      self2.stop = stopDragging.bind(self2);
      global[addEventListener]("mouseup", self2.stop);
      global[addEventListener]("touchend", self2.stop);
      global[addEventListener]("touchcancel", self2.stop);
      global[addEventListener]("mousemove", self2.move);
      global[addEventListener]("touchmove", self2.move);
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
      self2.gutter.style.cursor = cursor;
      self2.parent.style.cursor = cursor;
      document2.body.style.cursor = cursor;
      calculateSizes.call(self2);
      self2.dragOffset = getMousePosition(e) - self2.end;
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
  function showLoader() {
    const loaderDiv = document.createElement("div");
    loaderDiv.className = "strigo-loader";
    loaderDiv.innerHTML = SPINNER;
    document.body.appendChild(loaderDiv);
  }
  function hideLoader() {
    const preloader = document.querySelector(".strigo-loader");
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (!preloader.style.opacity) {
          preloader.style.opacity = "1";
        }
        const opacity = parseFloat(preloader.style.opacity);
        if (opacity > 0) {
          preloader.style.opacity = (opacity - 0.1).toString();
        } else {
          preloader.style.pointerEvents = "none";
          clearInterval(interval);
          resolve();
        }
      }, 200);
    });
  }

  // src/modules/events-sender/events-sender.ts
  function postEventMessage() {
    const newEvent = getEventValue();
    if (newEvent) {
      LoggerInstance.info("Posting event", newEvent);
      const strigoIframe = document.getElementById("strigo-exercises");
      strigoIframe.contentWindow.postMessage(newEvent, "*");
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

  // src/modules/no-code-assessment/no-code-assessment.ts
  var addDocumentObserver = function(windowElement) {
    const documentElement = windowElement.document;
    const assessments = getAssessmentsStorageData().assessments;
    const observerHandler = function() {
      assessments.forEach((assessment) => {
        const { eventName, expectedResult, selector } = assessment;
        const element = documentElement.querySelector(selector);
        if (element?.innerText?.includes(expectedResult) || element?.value?.includes(expectedResult)) {
          windowElement.Strigo.sendEvent(eventName);
        }
      });
    };
    const observer = new MutationObserver(observerHandler);
    observer.observe(documentElement, {
      subtree: true,
      attributes: true,
      attributeOldValue: true,
      characterDataOldValue: true,
      characterData: true
    });
    return observer;
  };

  // src/modules/widgets/overlay.ts
  var import_jquery = __toESM(require_jquery(), 1);
  function makeOverlayWidgetVisible() {
    document.getElementById("strigo-widget").classList.add("slide-in");
    document.getElementById("strigo-widget").classList.add("loaded");
  }
  var OverlayWidget = class {
    constructor() {
      this.onStrigoEventHandler = (customEvent) => {
        storageChanged(customEvent?.detail);
      };
    }
    init() {
      LoggerInstance.info("overlay init called");
      return "OVERLAY" /* OVERLAY */;
    }
    setup({ development, version }) {
      LoggerInstance.info("overlay setup called");
      appendCssFile({
        parentElement: getHeadElement(),
        url: generateWidgetCssURL(development, version)
      });
      const strigoMain = document.createElement("div");
      strigoMain.id = "strigo-main";
      strigoMain.className = "strigo-main";
      document.body.appendChild(strigoMain);
      const myDiv = document.createElement("div");
      myDiv.id = "strigo-transparent";
      myDiv.className = "strigo-transparent";
      strigoMain.appendChild(myDiv);
      const academyPlayerFrame = createWidget(generateStrigoIframeURL(getConfig()), strigoMain);
      this.initEventListeners(academyPlayerFrame);
      this.documentObserver = addDocumentObserver(window);
      console.log("-----------Slitting the page----------------", (0, import_jquery.default)("#strigo-widget"), (0, import_jquery.default)("#root"));
      const spliterr = split_es_default(["#strigo-transparent", "#strigo-widget"], {
        sizes: [75, 25],
        gutterSize: 20
      });
      spliterr.pairs.gutter.style.pointerEvents = "all";
    }
    shutdown() {
      LoggerInstance.info("overlay shutdown called");
      this.removeEventListeners();
      this.documentObserver.disconnect();
      removeWidget();
    }
    open() {
      openWidget();
    }
    initEventListeners(academyPlayerFrame) {
      initAcademyPlayerLoadedListeners(academyPlayerFrame, makeOverlayWidgetVisible);
      initHostEventListeners();
      window.addEventListener("overlay-widget-event" /* OVERLAY_WIDGET_EVENT */, this.onStrigoEventHandler);
    }
    removeEventListeners() {
      removeHostEventListeners();
      window.removeEventListener("overlay-widget-event" /* OVERLAY_WIDGET_EVENT */, this.onStrigoEventHandler);
    }
  };
  var overlay_default = new OverlayWidget();

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
  function onHostEventHandler(ev) {
    if (!ev || !ev.data) {
      return;
    }
    switch (ev.data) {
      case "close" /* SHUTDOWN */: {
        LoggerInstance.info("Shutdown message received");
        window.Strigo?.shutdown();
        break;
      }
      case "destroy" /* DESTROY */: {
        LoggerInstance.info("Destroy message received");
        window.Strigo?.destroy();
        break;
      }
      case "challenge-success" /* CHALLENGE_SUCCESS */: {
        LoggerInstance.info("Challenge event success received");
        if (getWidgetFlavor() === "overlay" /* OVERLAY */) {
          overlay_default.open();
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  function initHostEventListeners() {
    window.addEventListener("message" /* MESSAGE */, onHostEventHandler, false);
  }
  function removeHostEventListeners() {
    window.removeEventListener("message" /* MESSAGE */, onHostEventHandler);
  }
  function initAcademyPlayerLoadedListeners(academyPlayerIframe, onLoadCallback) {
    academyPlayerIframe.addEventListener("load", async () => {
      if (!!getSessionValue("isLoading")) {
        if (onLoadCallback) {
          await onLoadCallback();
        }
        setSessionValue("isLoading", false);
      }
      postAllEventMessages();
    });
  }
  function initChildEventListeners(childIframe) {
    const originalHost = getConfigValue("initSite")?.host;
    childIframe.addEventListener("load", function() {
      addDocumentObserver(childIframe.contentWindow);
      try {
        const currentHost = this.contentWindow.location.host;
        if (currentHost !== originalHost) {
          window.Strigo.shutdown();
        }
      } catch (error) {
        LoggerInstance.error(error);
        window.Strigo.shutdown();
      }
    });
  }

  // src/modules/widgets/iframe.ts
  var IframeWidget = class {
    init() {
      let SDKType;
      if (isStrigoChildIframe()) {
        LoggerInstance.info("Child SDK window");
        SDKType = "CHILD" /* CHILD */;
        window.dispatchEvent(new Event("strigo-opened"));
        removeStrigoChildIframeParam();
      } else {
        LoggerInstance.info("Parent SDK window");
        SDKType = "PARENT" /* PARENT */;
      }
      return SDKType;
    }
    setup({ development, version }) {
      LoggerInstance.info("iframe setup started");
      clearDoc();
      appendCssFile({
        parentElement: getHeadElement(),
        url: generateCssURL(development, version)
      });
      showLoader();
      const config = getConfig();
      const mainDiv = generatePageStructure();
      const academyPlayerFrame = appendIFrame({
        parentElement: mainDiv,
        url: generateStrigoIframeURL(config),
        classNames: STRIGO_IFRAME_CLASSES,
        id: "strigo-exercises"
      });
      const childFrame = appendIFrame({
        parentElement: mainDiv,
        url: generateStrigoChildIframeURL(config.initSite.href),
        classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES,
        id: "original-site"
      });
      split_es_default(["#strigo-exercises", "#original-site"], {
        sizes: [25, 75],
        maxSize: getSplitMaxSizes(),
        minSize: getSplitMinSizes(),
        gutterSize: 20
      });
      this.initEventListeners(academyPlayerFrame, childFrame);
    }
    shutdown() {
      LoggerInstance.info("iframe shutdown called");
      reloadPage();
    }
    initEventListeners(academyPlayerFrame, childFrame) {
      initAcademyPlayerLoadedListeners(academyPlayerFrame, hideLoader);
      initChildEventListeners(childFrame);
      initHostEventListeners();
      window.addEventListener("storage" /* STORAGE */, storageChanged);
    }
  };
  var iframe_default = new IframeWidget();

  // src/modules/widgets/widget-factory.ts
  function getWidgetFlavor2(selectedWidgetFlavor) {
    if (selectedWidgetFlavor && selectedWidgetFlavor === "dynamic" /* DYNAMIC */) {
      return isIframeSupported() ? "iframe" /* IFRAME */ : "overlay" /* OVERLAY */;
    }
    return selectedWidgetFlavor;
  }
  function getWidget(widgetFlavor) {
    let widget = null;
    switch (widgetFlavor) {
      case "iframe" /* IFRAME */: {
        widget = iframe_default;
        break;
      }
      case "overlay" /* OVERLAY */: {
        widget = overlay_default;
        break;
      }
      default:
        LoggerInstance.error("Widget flavor is not supported", { widgetFlavor });
        throw new Error(`Widget flavor ${widgetFlavor} is not supported`);
    }
    return widget;
  }

  // src/strigo/index.ts
  var StrigoSDK = class {
    constructor() {
      this.config = {};
    }
    init() {
      try {
        LoggerInstance.info("Initializing SDK...");
        if (this.config.initialized) {
          LoggerInstance.info("SDK was already initialized");
          return;
        }
        init2();
        init3();
        const { webApiKey, subDomain, selectedWidgetFlavor } = extractInitScriptParams();
        if (!webApiKey || !subDomain || !selectedWidgetFlavor) {
          throw new Error("Init data is missing");
        }
        const widgetFlavor = getWidgetFlavor2(selectedWidgetFlavor);
        init({ webApiKey, subDomain, selectedWidgetFlavor: widgetFlavor });
        const widget = getWidget(widgetFlavor);
        this.config.sdkType = widget.init();
        this.config.initialized = true;
        LoggerInstance.info("Initialized SDK.");
        if (this.config.sdkType !== "CHILD" /* CHILD */ && isPanelOpen()) {
          this.setup();
        }
      } catch (err) {
        LoggerInstance.error("Could not initialize SDK", { err });
      }
    }
    async setup(data) {
      try {
        LoggerInstance.info("Starting to setup SDK...");
        if (this.config.isOpen || this.config.sdkType === "CHILD" /* CHILD */) {
          LoggerInstance.info("panel is already opened");
          return;
        }
        if (!this.config.initialized) {
          throw new Error("SDK was not initialized");
        }
        const config = getConfig();
        const { email, token, development = false, version, openWidget: openWidget2 = true } = { ...config.user, ...config, ...data };
        if (!development && (!email || !token)) {
          throw new Error("Setup data is missing");
        }
        const configuration = await fetchRemoteConfiguration(token, development);
        if (configuration) {
          const { loggingConfig, userAssessments } = configuration;
          LoggerInstance.debug("Configuration fetched from Strigo");
          LoggerInstance.setup(loggingConfig);
          setup3(userAssessments);
        }
        setup({
          user: {
            email,
            token
          },
          initSite: getUrlData(),
          development,
          version,
          loggingConfig: configuration?.loggingConfig
        });
        this.config.configured = true;
        LoggerInstance.info("Finished SDK setup.");
        if (openWidget2) {
          this.open();
        }
      } catch (err) {
        LoggerInstance.error("Could not setup SDK", { err });
      }
    }
    open() {
      try {
        LoggerInstance.info("Opening academy panel...");
        if (!this.config.configured) {
          throw new Error("SDK was not set up");
        }
        if (this.config.isOpen || this.config.sdkType === "CHILD" /* CHILD */) {
          LoggerInstance.info("Panel is already opened");
          return;
        }
        const config = getConfig();
        setup2({
          currentUrl: config.initSite.href,
          isPanelOpen: true,
          isLoading: true,
          widgetFlavor: config.selectedWidgetFlavor
        });
        const widget = getWidget(config.selectedWidgetFlavor);
        widget.setup({ version: config.version, development: config.development });
        this.config.isOpen = true;
        LoggerInstance.info("Opened academy panel.");
      } catch (err) {
        LoggerInstance.error("Could not open academy panel", { err });
      }
    }
    shutdown() {
      try {
        LoggerInstance.info("Closing academy panel...");
        if (this.config.sdkType === "CHILD" /* CHILD */) {
          window.parent.postMessage(JSON.stringify({ messageType: "close" /* SHUTDOWN */ }), "*");
          LoggerInstance.info("Notified parent frame to close academy panel.");
          return;
        }
        if (!this.config.isOpen) {
          LoggerInstance.info("Tried to close unopened academy panel");
          return;
        }
        const widget = getWidget(getWidgetFlavor());
        clearSession();
        widget.shutdown();
        this.config.isOpen = false;
        LoggerInstance.info("Closed academy panel.");
      } catch (err) {
        LoggerInstance.error("Could not close academy panel", { err });
      }
    }
    destroy() {
      try {
        LoggerInstance.info("Destroying SDK...");
        if (this.config.sdkType === "CHILD" /* CHILD */) {
          window.parent.postMessage(JSON.stringify({ messageType: "destroy" /* DESTROY */ }), "*");
          LoggerInstance.info("Notified parent frame to destroy SDK.");
          return;
        }
        clearConfig();
        clearEventsStorage();
        clearAssessmentStorage();
        this.shutdown();
        this.config = {};
        LoggerInstance.info("Destroyed SDK.");
      } catch (err) {
        LoggerInstance.error("Could not destroy SDK", { err });
      }
    }
    sendEvent(eventName) {
      pushEventValue({ eventName });
      LoggerInstance.debug("sendEvent called", { eventName });
    }
    startElementSelector(onElementProfileCreated, rootElementSelector) {
      LoggerInstance.debug("startElementSelector called");
      const rootElement = rootElementSelector ? window.document.querySelector(rootElementSelector) : window.document.body;
      startElementSelector(window.document, { onElementProfileCreated, zIndex: 9999999999, rootElement });
    }
    assessmentRecorder(development) {
      addAssessmentRecorderIframe(development);
    }
  };
  var Strigo = new StrigoSDK();

  // src/strigo.sdk.ts
  window.Strigo = Strigo;
  if (isInRecordingMode()) {
    console.log("In recording mode");
    const development = isDevelopment();
    console.log({ development });
    window.Strigo.assessmentRecorder(development);
  } else {
    window.Strigo.init();
  }
})();
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
