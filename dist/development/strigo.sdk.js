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
      (function(global3, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global3 = typeof globalThis !== "undefined" ? globalThis : global3 || self, global3.html2canvas = factory());
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

  // node_modules/interactjs/dist/interact.min.js
  var require_interact_min = __commonJS({
    "node_modules/interactjs/dist/interact.min.js"(exports, module) {
      !function(t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
      }(function() {
        var t = {};
        Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(t2) {
          return !(!t2 || !t2.Window) && t2 instanceof t2.Window;
        };
        var e = {};
        Object.defineProperty(e, "__esModule", { value: true }), e.getWindow = function(e2) {
          return (0, t.default)(e2) ? e2 : (e2.ownerDocument || e2).defaultView || r.window;
        }, e.init = o, e.window = e.realWindow = void 0;
        var n = void 0;
        e.realWindow = n;
        var r = void 0;
        function o(t2) {
          e.realWindow = n = t2;
          var o2 = t2.document.createTextNode("");
          o2.ownerDocument !== t2.document && typeof t2.wrap == "function" && t2.wrap(o2) === o2 && (t2 = t2.wrap(t2)), e.window = r = t2;
        }
        e.window = r, typeof window != "undefined" && window && o(window);
        var i = {};
        function a(t2) {
          return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, a(t2);
        }
        Object.defineProperty(i, "__esModule", { value: true }), i.default = void 0;
        var s = function(t2) {
          return !!t2 && a(t2) === "object";
        }, l = function(t2) {
          return typeof t2 == "function";
        }, u = { window: function(n2) {
          return n2 === e.window || (0, t.default)(n2);
        }, docFrag: function(t2) {
          return s(t2) && t2.nodeType === 11;
        }, object: s, func: l, number: function(t2) {
          return typeof t2 == "number";
        }, bool: function(t2) {
          return typeof t2 == "boolean";
        }, string: function(t2) {
          return typeof t2 == "string";
        }, element: function(t2) {
          if (!t2 || a(t2) !== "object")
            return false;
          var n2 = e.getWindow(t2) || e.window;
          return /object|function/.test(typeof Element == "undefined" ? "undefined" : a(Element)) ? t2 instanceof Element || t2 instanceof n2.Element : t2.nodeType === 1 && typeof t2.nodeName == "string";
        }, plainObject: function(t2) {
          return s(t2) && !!t2.constructor && /function Object\b/.test(t2.constructor.toString());
        }, array: function(t2) {
          return s(t2) && t2.length !== void 0 && l(t2.splice);
        } };
        i.default = u;
        var c = {};
        function f(t2) {
          var e2 = t2.interaction;
          if (e2.prepared.name === "drag") {
            var n2 = e2.prepared.axis;
            n2 === "x" ? (e2.coords.cur.page.y = e2.coords.start.page.y, e2.coords.cur.client.y = e2.coords.start.client.y, e2.coords.velocity.client.y = 0, e2.coords.velocity.page.y = 0) : n2 === "y" && (e2.coords.cur.page.x = e2.coords.start.page.x, e2.coords.cur.client.x = e2.coords.start.client.x, e2.coords.velocity.client.x = 0, e2.coords.velocity.page.x = 0);
          }
        }
        function d(t2) {
          var e2 = t2.iEvent, n2 = t2.interaction;
          if (n2.prepared.name === "drag") {
            var r2 = n2.prepared.axis;
            if (r2 === "x" || r2 === "y") {
              var o2 = r2 === "x" ? "y" : "x";
              e2.page[o2] = n2.coords.start.page[o2], e2.client[o2] = n2.coords.start.client[o2], e2.delta[o2] = 0;
            }
          }
        }
        Object.defineProperty(c, "__esModule", { value: true }), c.default = void 0;
        var p = { id: "actions/drag", install: function(t2) {
          var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
          n2.prototype.draggable = p.draggable, e2.map.drag = p, e2.methodDict.drag = "draggable", r2.actions.drag = p.defaults;
        }, listeners: { "interactions:before-action-move": f, "interactions:action-resume": f, "interactions:action-move": d, "auto-start:check": function(t2) {
          var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.buttons, o2 = n2.options.drag;
          if (o2 && o2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || (r2 & n2.options.drag.mouseButtons) != 0))
            return t2.action = { name: "drag", axis: o2.lockAxis === "start" ? o2.startAxis : o2.lockAxis }, false;
        } }, draggable: function(t2) {
          return i.default.object(t2) ? (this.options.drag.enabled = t2.enabled !== false, this.setPerAction("drag", t2), this.setOnEvents("drag", t2), /^(xy|x|y|start)$/.test(t2.lockAxis) && (this.options.drag.lockAxis = t2.lockAxis), /^(xy|x|y)$/.test(t2.startAxis) && (this.options.drag.startAxis = t2.startAxis), this) : i.default.bool(t2) ? (this.options.drag.enabled = t2, this) : this.options.drag;
        }, beforeMove: f, move: d, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
          return "move";
        } }, v = p;
        c.default = v;
        var h = {};
        Object.defineProperty(h, "__esModule", { value: true }), h.default = void 0;
        var g = { init: function(t2) {
          var e2 = t2;
          g.document = e2.document, g.DocumentFragment = e2.DocumentFragment || y, g.SVGElement = e2.SVGElement || y, g.SVGSVGElement = e2.SVGSVGElement || y, g.SVGElementInstance = e2.SVGElementInstance || y, g.Element = e2.Element || y, g.HTMLElement = e2.HTMLElement || g.Element, g.Event = e2.Event, g.Touch = e2.Touch || y, g.PointerEvent = e2.PointerEvent || e2.MSPointerEvent;
        }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
        function y() {
        }
        var m = g;
        h.default = m;
        var b = {};
        Object.defineProperty(b, "__esModule", { value: true }), b.default = void 0;
        var x = { init: function(t2) {
          var e2 = h.default.Element, n2 = t2.navigator || {};
          x.supportsTouch = "ontouchstart" in t2 || i.default.func(t2.DocumentTouch) && h.default.document instanceof t2.DocumentTouch, x.supportsPointerEvent = n2.pointerEnabled !== false && !!h.default.PointerEvent, x.isIOS = /iP(hone|od|ad)/.test(n2.platform), x.isIOS7 = /iP(hone|od|ad)/.test(n2.platform) && /OS 7[^\d]/.test(n2.appVersion), x.isIe9 = /MSIE 9/.test(n2.userAgent), x.isOperaMobile = n2.appName === "Opera" && x.supportsTouch && /Presto/.test(n2.userAgent), x.prefixedMatchesSelector = "matches" in e2.prototype ? "matches" : "webkitMatchesSelector" in e2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e2.prototype ? "oMatchesSelector" : "msMatchesSelector", x.pEventTypes = x.supportsPointerEvent ? h.default.PointerEvent === t2.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, x.wheelEvent = h.default.document && "onmousewheel" in h.default.document ? "mousewheel" : "wheel";
        }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, w = x;
        b.default = w;
        var _ = {};
        function P(t2) {
          var e2 = t2.parentNode;
          if (i.default.docFrag(e2)) {
            for (; (e2 = e2.host) && i.default.docFrag(e2); )
              ;
            return e2;
          }
          return e2;
        }
        function O(t2, n2) {
          return e.window !== e.realWindow && (n2 = n2.replace(/\/deep\//g, " ")), t2[b.default.prefixedMatchesSelector](n2);
        }
        Object.defineProperty(_, "__esModule", { value: true }), _.closest = function(t2, e2) {
          for (; i.default.element(t2); ) {
            if (O(t2, e2))
              return t2;
            t2 = P(t2);
          }
          return null;
        }, _.getActualElement = function(t2) {
          return t2.correspondingUseElement || t2;
        }, _.getElementClientRect = j, _.getElementRect = function(t2) {
          var n2 = j(t2);
          if (!b.default.isIOS7 && n2) {
            var r2 = T(e.getWindow(t2));
            n2.left += r2.x, n2.right += r2.x, n2.top += r2.y, n2.bottom += r2.y;
          }
          return n2;
        }, _.getPath = function(t2) {
          for (var e2 = []; t2; )
            e2.push(t2), t2 = P(t2);
          return e2;
        }, _.getScrollXY = T, _.indexOfDeepestElement = function(t2) {
          for (var n2, r2 = [], o2 = 0; o2 < t2.length; o2++) {
            var i2 = t2[o2], a2 = t2[n2];
            if (i2 && o2 !== n2)
              if (a2) {
                var s2 = E(i2), l2 = E(a2);
                if (s2 !== i2.ownerDocument)
                  if (l2 !== i2.ownerDocument)
                    if (s2 !== l2) {
                      r2 = r2.length ? r2 : S(a2);
                      var u2 = void 0;
                      if (a2 instanceof h.default.HTMLElement && i2 instanceof h.default.SVGElement && !(i2 instanceof h.default.SVGSVGElement)) {
                        if (i2 === l2)
                          continue;
                        u2 = i2.ownerSVGElement;
                      } else
                        u2 = i2;
                      for (var c2 = S(u2, a2.ownerDocument), f2 = 0; c2[f2] && c2[f2] === r2[f2]; )
                        f2++;
                      var d2 = [c2[f2 - 1], c2[f2], r2[f2]];
                      if (d2[0])
                        for (var p2 = d2[0].lastChild; p2; ) {
                          if (p2 === d2[1]) {
                            n2 = o2, r2 = c2;
                            break;
                          }
                          if (p2 === d2[2])
                            break;
                          p2 = p2.previousSibling;
                        }
                    } else
                      v2 = i2, g2 = a2, void 0, void 0, (parseInt(e.getWindow(v2).getComputedStyle(v2).zIndex, 10) || 0) >= (parseInt(e.getWindow(g2).getComputedStyle(g2).zIndex, 10) || 0) && (n2 = o2);
                  else
                    n2 = o2;
              } else
                n2 = o2;
          }
          var v2, g2;
          return n2;
        }, _.matchesSelector = O, _.matchesUpTo = function(t2, e2, n2) {
          for (; i.default.element(t2); ) {
            if (O(t2, e2))
              return true;
            if ((t2 = P(t2)) === n2)
              return O(t2, e2);
          }
          return false;
        }, _.nodeContains = function(t2, e2) {
          if (t2.contains)
            return t2.contains(e2);
          for (; e2; ) {
            if (e2 === t2)
              return true;
            e2 = e2.parentNode;
          }
          return false;
        }, _.parentNode = P, _.trySelector = function(t2) {
          return !!i.default.string(t2) && (h.default.document.querySelector(t2), true);
        };
        var E = function(t2) {
          return t2.parentNode || t2.host;
        };
        function S(t2, e2) {
          for (var n2, r2 = [], o2 = t2; (n2 = E(o2)) && o2 !== e2 && n2 !== o2.ownerDocument; )
            r2.unshift(o2), o2 = n2;
          return r2;
        }
        function T(t2) {
          return { x: (t2 = t2 || e.window).scrollX || t2.document.documentElement.scrollLeft, y: t2.scrollY || t2.document.documentElement.scrollTop };
        }
        function j(t2) {
          var e2 = t2 instanceof h.default.SVGElement ? t2.getBoundingClientRect() : t2.getClientRects()[0];
          return e2 && { left: e2.left, right: e2.right, top: e2.top, bottom: e2.bottom, width: e2.width || e2.right - e2.left, height: e2.height || e2.bottom - e2.top };
        }
        var M = {};
        Object.defineProperty(M, "__esModule", { value: true }), M.default = function(t2, e2) {
          for (var n2 in e2)
            t2[n2] = e2[n2];
          return t2;
        };
        var k = {};
        function I(t2, e2) {
          (e2 == null || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        function D(t2, e2, n2) {
          return t2 === "parent" ? (0, _.parentNode)(n2) : t2 === "self" ? e2.getRect(n2) : (0, _.closest)(n2, t2);
        }
        Object.defineProperty(k, "__esModule", { value: true }), k.addEdges = function(t2, e2, n2) {
          t2.left && (e2.left += n2.x), t2.right && (e2.right += n2.x), t2.top && (e2.top += n2.y), t2.bottom && (e2.bottom += n2.y), e2.width = e2.right - e2.left, e2.height = e2.bottom - e2.top;
        }, k.getStringOptionResult = D, k.rectToXY = function(t2) {
          return t2 && { x: "x" in t2 ? t2.x : t2.left, y: "y" in t2 ? t2.y : t2.top };
        }, k.resolveRectLike = function(t2, e2, n2, r2) {
          var o2, a2 = t2;
          return i.default.string(a2) ? a2 = D(a2, e2, n2) : i.default.func(a2) && (a2 = a2.apply(void 0, function(t3) {
            if (Array.isArray(t3))
              return I(t3);
          }(o2 = r2) || function(t3) {
            if (typeof Symbol != "undefined" && t3[Symbol.iterator] != null || t3["@@iterator"] != null)
              return Array.from(t3);
          }(o2) || function(t3, e3) {
            if (t3) {
              if (typeof t3 == "string")
                return I(t3, e3);
              var n3 = Object.prototype.toString.call(t3).slice(8, -1);
              return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? I(t3, e3) : void 0;
            }
          }(o2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }())), i.default.element(a2) && (a2 = (0, _.getElementRect)(a2)), a2;
        }, k.tlbrToXywh = function(t2) {
          return !t2 || "x" in t2 && "y" in t2 || ((t2 = (0, M.default)({}, t2)).x = t2.left || 0, t2.y = t2.top || 0, t2.width = t2.width || (t2.right || 0) - t2.x, t2.height = t2.height || (t2.bottom || 0) - t2.y), t2;
        }, k.xywhToTlbr = function(t2) {
          return !t2 || "left" in t2 && "top" in t2 || ((t2 = (0, M.default)({}, t2)).left = t2.x || 0, t2.top = t2.y || 0, t2.right = t2.right || t2.left + t2.width, t2.bottom = t2.bottom || t2.top + t2.height), t2;
        };
        var A = {};
        Object.defineProperty(A, "__esModule", { value: true }), A.default = function(t2, e2, n2) {
          var r2 = t2.options[n2], o2 = r2 && r2.origin || t2.options.origin, i2 = (0, k.resolveRectLike)(o2, t2, e2, [t2 && e2]);
          return (0, k.rectToXY)(i2) || { x: 0, y: 0 };
        };
        var z = {};
        function C(t2) {
          return t2.trim().split(/ +/);
        }
        Object.defineProperty(z, "__esModule", { value: true }), z.default = function t2(e2, n2, r2) {
          if (r2 = r2 || {}, i.default.string(e2) && e2.search(" ") !== -1 && (e2 = C(e2)), i.default.array(e2))
            return e2.reduce(function(e3, o3) {
              return (0, M.default)(e3, t2(o3, n2, r2));
            }, r2);
          if (i.default.object(e2) && (n2 = e2, e2 = ""), i.default.func(n2))
            r2[e2] = r2[e2] || [], r2[e2].push(n2);
          else if (i.default.array(n2))
            for (var o2 = 0; o2 < n2.length; o2++) {
              var a2;
              a2 = n2[o2], t2(e2, a2, r2);
            }
          else if (i.default.object(n2))
            for (var s2 in n2) {
              var l2 = C(s2).map(function(t3) {
                return "".concat(e2).concat(t3);
              });
              t2(l2, n2[s2], r2);
            }
          return r2;
        };
        var R = {};
        Object.defineProperty(R, "__esModule", { value: true }), R.default = void 0, R.default = function(t2, e2) {
          return Math.sqrt(t2 * t2 + e2 * e2);
        };
        var F = {};
        Object.defineProperty(F, "__esModule", { value: true }), F.default = function(t2, e2) {
          t2.__set || (t2.__set = {});
          var n2 = function(n3) {
            typeof t2[n3] != "function" && n3 !== "__set" && Object.defineProperty(t2, n3, { get: function() {
              return n3 in t2.__set ? t2.__set[n3] : t2.__set[n3] = e2[n3];
            }, set: function(e3) {
              t2.__set[n3] = e3;
            }, configurable: true });
          };
          for (var r2 in e2)
            n2(r2);
          return t2;
        };
        var X = {};
        function B(t2) {
          return t2 instanceof h.default.Event || t2 instanceof h.default.Touch;
        }
        function Y(t2, e2, n2) {
          return t2 = t2 || "page", (n2 = n2 || {}).x = e2[t2 + "X"], n2.y = e2[t2 + "Y"], n2;
        }
        function W(t2, e2) {
          return e2 = e2 || { x: 0, y: 0 }, b.default.isOperaMobile && B(t2) ? (Y("screen", t2, e2), e2.x += window.scrollX, e2.y += window.scrollY) : Y("page", t2, e2), e2;
        }
        function L(t2, e2) {
          return e2 = e2 || {}, b.default.isOperaMobile && B(t2) ? Y("screen", t2, e2) : Y("client", t2, e2), e2;
        }
        function U(t2) {
          var e2 = [];
          return i.default.array(t2) ? (e2[0] = t2[0], e2[1] = t2[1]) : t2.type === "touchend" ? t2.touches.length === 1 ? (e2[0] = t2.touches[0], e2[1] = t2.changedTouches[0]) : t2.touches.length === 0 && (e2[0] = t2.changedTouches[0], e2[1] = t2.changedTouches[1]) : (e2[0] = t2.touches[0], e2[1] = t2.touches[1]), e2;
        }
        function V(t2) {
          for (var e2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n2 = 0; n2 < t2.length; n2++) {
            var r2 = t2[n2];
            for (var o2 in e2)
              e2[o2] += r2[o2];
          }
          for (var i2 in e2)
            e2[i2] /= t2.length;
          return e2;
        }
        Object.defineProperty(X, "__esModule", { value: true }), X.coordsToEvent = function(t2) {
          return { coords: t2, get page() {
            return this.coords.page;
          }, get client() {
            return this.coords.client;
          }, get timeStamp() {
            return this.coords.timeStamp;
          }, get pageX() {
            return this.coords.page.x;
          }, get pageY() {
            return this.coords.page.y;
          }, get clientX() {
            return this.coords.client.x;
          }, get clientY() {
            return this.coords.client.y;
          }, get pointerId() {
            return this.coords.pointerId;
          }, get target() {
            return this.coords.target;
          }, get type() {
            return this.coords.type;
          }, get pointerType() {
            return this.coords.pointerType;
          }, get buttons() {
            return this.coords.buttons;
          }, preventDefault: function() {
          } };
        }, X.copyCoords = function(t2, e2) {
          t2.page = t2.page || {}, t2.page.x = e2.page.x, t2.page.y = e2.page.y, t2.client = t2.client || {}, t2.client.x = e2.client.x, t2.client.y = e2.client.y, t2.timeStamp = e2.timeStamp;
        }, X.getClientXY = L, X.getEventTargets = function(t2) {
          var e2 = i.default.func(t2.composedPath) ? t2.composedPath() : t2.path;
          return [_.getActualElement(e2 ? e2[0] : t2.target), _.getActualElement(t2.currentTarget)];
        }, X.getPageXY = W, X.getPointerId = function(t2) {
          return i.default.number(t2.pointerId) ? t2.pointerId : t2.identifier;
        }, X.getPointerType = function(t2) {
          return i.default.string(t2.pointerType) ? t2.pointerType : i.default.number(t2.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t2.pointerType] : /touch/.test(t2.type || "") || t2 instanceof h.default.Touch ? "touch" : "mouse";
        }, X.getTouchPair = U, X.getXY = Y, X.isNativePointer = B, X.newCoords = function() {
          return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
        }, X.pointerAverage = V, Object.defineProperty(X, "pointerExtend", { enumerable: true, get: function() {
          return F.default;
        } }), X.setCoordDeltas = function(t2, e2, n2) {
          t2.page.x = n2.page.x - e2.page.x, t2.page.y = n2.page.y - e2.page.y, t2.client.x = n2.client.x - e2.client.x, t2.client.y = n2.client.y - e2.client.y, t2.timeStamp = n2.timeStamp - e2.timeStamp;
        }, X.setCoordVelocity = function(t2, e2) {
          var n2 = Math.max(e2.timeStamp / 1e3, 1e-3);
          t2.page.x = e2.page.x / n2, t2.page.y = e2.page.y / n2, t2.client.x = e2.client.x / n2, t2.client.y = e2.client.y / n2, t2.timeStamp = n2;
        }, X.setCoords = function(t2, e2, n2) {
          var r2 = e2.length > 1 ? V(e2) : e2[0];
          W(r2, t2.page), L(r2, t2.client), t2.timeStamp = n2;
        }, X.setZeroCoords = function(t2) {
          t2.page.x = 0, t2.page.y = 0, t2.client.x = 0, t2.client.y = 0;
        }, X.touchAngle = function(t2, e2) {
          var n2 = e2 + "X", r2 = e2 + "Y", o2 = U(t2), i2 = o2[1][n2] - o2[0][n2], a2 = o2[1][r2] - o2[0][r2];
          return 180 * Math.atan2(a2, i2) / Math.PI;
        }, X.touchBBox = function(t2) {
          if (!t2.length)
            return null;
          var e2 = U(t2), n2 = Math.min(e2[0].pageX, e2[1].pageX), r2 = Math.min(e2[0].pageY, e2[1].pageY), o2 = Math.max(e2[0].pageX, e2[1].pageX), i2 = Math.max(e2[0].pageY, e2[1].pageY);
          return { x: n2, y: r2, left: n2, top: r2, right: o2, bottom: i2, width: o2 - n2, height: i2 - r2 };
        }, X.touchDistance = function(t2, e2) {
          var n2 = e2 + "X", r2 = e2 + "Y", o2 = U(t2), i2 = o2[0][n2] - o2[1][n2], a2 = o2[0][r2] - o2[1][r2];
          return (0, R.default)(i2, a2);
        };
        var N = {};
        function q(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function G(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(N, "__esModule", { value: true }), N.BaseEvent = void 0;
        var $ = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), G(this, "immediatePropagationStopped", false), G(this, "propagationStopped", false), this._interaction = e3;
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "preventDefault", value: function() {
          } }, { key: "stopPropagation", value: function() {
            this.propagationStopped = true;
          } }, { key: "stopImmediatePropagation", value: function() {
            this.immediatePropagationStopped = this.propagationStopped = true;
          } }]) && q(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        N.BaseEvent = $, Object.defineProperty($.prototype, "interaction", { get: function() {
          return this._interaction._proxy;
        }, set: function() {
        } });
        var H = {};
        Object.defineProperty(H, "__esModule", { value: true }), H.remove = H.merge = H.from = H.findIndex = H.find = H.contains = void 0, H.contains = function(t2, e2) {
          return t2.indexOf(e2) !== -1;
        }, H.remove = function(t2, e2) {
          return t2.splice(t2.indexOf(e2), 1);
        };
        var K = function(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            t2.push(r2);
          }
          return t2;
        };
        H.merge = K, H.from = function(t2) {
          return K([], t2);
        };
        var Z = function(t2, e2) {
          for (var n2 = 0; n2 < t2.length; n2++)
            if (e2(t2[n2], n2, t2))
              return n2;
          return -1;
        };
        H.findIndex = Z, H.find = function(t2, e2) {
          return t2[Z(t2, e2)];
        };
        var J = {};
        function Q(t2) {
          return Q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, Q(t2);
        }
        function tt(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function et(t2, e2) {
          return et = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, et(t2, e2);
        }
        function nt(t2, e2) {
          if (e2 && (Q(e2) === "object" || typeof e2 == "function"))
            return e2;
          if (e2 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
          return rt(t2);
        }
        function rt(t2) {
          if (t2 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }
        function ot(t2) {
          return ot = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, ot(t2);
        }
        function it(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(J, "__esModule", { value: true }), J.DropEvent = void 0;
        var at = function(t2) {
          !function(t3, e3) {
            if (typeof e3 != "function" && e3 !== null)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && et(t3, e3);
          }(a2, t2);
          var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }(), function() {
            var t3, e3 = ot(r2);
            if (o2) {
              var n3 = ot(this).constructor;
              t3 = Reflect.construct(e3, arguments, n3);
            } else
              t3 = e3.apply(this, arguments);
            return nt(this, t3);
          });
          function a2(t3, e3, n3) {
            var r3;
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, a2), it(rt(r3 = i2.call(this, e3._interaction)), "dropzone", void 0), it(rt(r3), "dragEvent", void 0), it(rt(r3), "relatedTarget", void 0), it(rt(r3), "draggable", void 0), it(rt(r3), "propagationStopped", false), it(rt(r3), "immediatePropagationStopped", false);
            var o3 = n3 === "dragleave" ? t3.prev : t3.cur, s2 = o3.element, l2 = o3.dropzone;
            return r3.type = n3, r3.target = s2, r3.currentTarget = s2, r3.dropzone = l2, r3.dragEvent = e3, r3.relatedTarget = e3.target, r3.draggable = e3.interactable, r3.timeStamp = e3.timeStamp, r3;
          }
          return e2 = a2, (n2 = [{ key: "reject", value: function() {
            var t3 = this, e3 = this._interaction.dropState;
            if (this.type === "dropactivate" || this.dropzone && e3.cur.dropzone === this.dropzone && e3.cur.element === this.target)
              if (e3.prev.dropzone = this.dropzone, e3.prev.element = this.target, e3.rejected = true, e3.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
                var n3 = e3.activeDrops, r3 = H.findIndex(n3, function(e4) {
                  var n4 = e4.dropzone, r4 = e4.element;
                  return n4 === t3.dropzone && r4 === t3.target;
                });
                e3.activeDrops.splice(r3, 1);
                var o3 = new a2(e3, this.dragEvent, "dropdeactivate");
                o3.dropzone = this.dropzone, o3.target = this.target, this.dropzone.fire(o3);
              } else
                this.dropzone.fire(new a2(e3, this.dragEvent, "dragleave"));
          } }, { key: "preventDefault", value: function() {
          } }, { key: "stopPropagation", value: function() {
            this.propagationStopped = true;
          } }, { key: "stopImmediatePropagation", value: function() {
            this.immediatePropagationStopped = this.propagationStopped = true;
          } }]) && tt(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), a2;
        }(N.BaseEvent);
        J.DropEvent = at;
        var st = {};
        function lt(t2, e2) {
          for (var n2 = 0; n2 < t2.slice().length; n2++) {
            var r2 = t2.slice()[n2], o2 = r2.dropzone, i2 = r2.element;
            e2.dropzone = o2, e2.target = i2, o2.fire(e2), e2.propagationStopped = e2.immediatePropagationStopped = false;
          }
        }
        function ut(t2, e2) {
          for (var n2 = function(t3, e3) {
            for (var n3 = t3.interactables, r3 = [], o3 = 0; o3 < n3.list.length; o3++) {
              var a2 = n3.list[o3];
              if (a2.options.drop.enabled) {
                var s2 = a2.options.drop.accept;
                if (!(i.default.element(s2) && s2 !== e3 || i.default.string(s2) && !_.matchesSelector(e3, s2) || i.default.func(s2) && !s2({ dropzone: a2, draggableElement: e3 })))
                  for (var l2 = i.default.string(a2.target) ? a2._context.querySelectorAll(a2.target) : i.default.array(a2.target) ? a2.target : [a2.target], u2 = 0; u2 < l2.length; u2++) {
                    var c2 = l2[u2];
                    c2 !== e3 && r3.push({ dropzone: a2, element: c2, rect: a2.getRect(c2) });
                  }
              }
            }
            return r3;
          }(t2, e2), r2 = 0; r2 < n2.length; r2++) {
            var o2 = n2[r2];
            o2.rect = o2.dropzone.getRect(o2.element);
          }
          return n2;
        }
        function ct(t2, e2, n2) {
          for (var r2 = t2.dropState, o2 = t2.interactable, i2 = t2.element, a2 = [], s2 = 0; s2 < r2.activeDrops.length; s2++) {
            var l2 = r2.activeDrops[s2], u2 = l2.dropzone, c2 = l2.element, f2 = l2.rect;
            a2.push(u2.dropCheck(e2, n2, o2, i2, c2, f2) ? c2 : null);
          }
          var d2 = _.indexOfDeepestElement(a2);
          return r2.activeDrops[d2] || null;
        }
        function ft(t2, e2, n2) {
          var r2 = t2.dropState, o2 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
          return n2.type === "dragstart" && (o2.activate = new J.DropEvent(r2, n2, "dropactivate"), o2.activate.target = null, o2.activate.dropzone = null), n2.type === "dragend" && (o2.deactivate = new J.DropEvent(r2, n2, "dropdeactivate"), o2.deactivate.target = null, o2.deactivate.dropzone = null), r2.rejected || (r2.cur.element !== r2.prev.element && (r2.prev.dropzone && (o2.leave = new J.DropEvent(r2, n2, "dragleave"), n2.dragLeave = o2.leave.target = r2.prev.element, n2.prevDropzone = o2.leave.dropzone = r2.prev.dropzone), r2.cur.dropzone && (o2.enter = new J.DropEvent(r2, n2, "dragenter"), n2.dragEnter = r2.cur.element, n2.dropzone = r2.cur.dropzone)), n2.type === "dragend" && r2.cur.dropzone && (o2.drop = new J.DropEvent(r2, n2, "drop"), n2.dropzone = r2.cur.dropzone, n2.relatedTarget = r2.cur.element), n2.type === "dragmove" && r2.cur.dropzone && (o2.move = new J.DropEvent(r2, n2, "dropmove"), o2.move.dragmove = n2, n2.dropzone = r2.cur.dropzone)), o2;
        }
        function dt(t2, e2) {
          var n2 = t2.dropState, r2 = n2.activeDrops, o2 = n2.cur, i2 = n2.prev;
          e2.leave && i2.dropzone.fire(e2.leave), e2.enter && o2.dropzone.fire(e2.enter), e2.move && o2.dropzone.fire(e2.move), e2.drop && o2.dropzone.fire(e2.drop), e2.deactivate && lt(r2, e2.deactivate), n2.prev.dropzone = o2.dropzone, n2.prev.element = o2.element;
        }
        function pt(t2, e2) {
          var n2 = t2.interaction, r2 = t2.iEvent, o2 = t2.event;
          if (r2.type === "dragmove" || r2.type === "dragend") {
            var i2 = n2.dropState;
            e2.dynamicDrop && (i2.activeDrops = ut(e2, n2.element));
            var a2 = r2, s2 = ct(n2, a2, o2);
            i2.rejected = i2.rejected && !!s2 && s2.dropzone === i2.cur.dropzone && s2.element === i2.cur.element, i2.cur.dropzone = s2 && s2.dropzone, i2.cur.element = s2 && s2.element, i2.events = ft(n2, 0, a2);
          }
        }
        Object.defineProperty(st, "__esModule", { value: true }), st.default = void 0;
        var vt = { id: "actions/drop", install: function(t2) {
          var e2 = t2.actions, n2 = t2.interactStatic, r2 = t2.Interactable, o2 = t2.defaults;
          t2.usePlugin(c.default), r2.prototype.dropzone = function(t3) {
            return function(t4, e3) {
              if (i.default.object(e3)) {
                if (t4.options.drop.enabled = e3.enabled !== false, e3.listeners) {
                  var n3 = (0, z.default)(e3.listeners), r3 = Object.keys(n3).reduce(function(t5, e4) {
                    return t5[/^(enter|leave)/.test(e4) ? "drag".concat(e4) : /^(activate|deactivate|move)/.test(e4) ? "drop".concat(e4) : e4] = n3[e4], t5;
                  }, {});
                  t4.off(t4.options.drop.listeners), t4.on(r3), t4.options.drop.listeners = r3;
                }
                return i.default.func(e3.ondrop) && t4.on("drop", e3.ondrop), i.default.func(e3.ondropactivate) && t4.on("dropactivate", e3.ondropactivate), i.default.func(e3.ondropdeactivate) && t4.on("dropdeactivate", e3.ondropdeactivate), i.default.func(e3.ondragenter) && t4.on("dragenter", e3.ondragenter), i.default.func(e3.ondragleave) && t4.on("dragleave", e3.ondragleave), i.default.func(e3.ondropmove) && t4.on("dropmove", e3.ondropmove), /^(pointer|center)$/.test(e3.overlap) ? t4.options.drop.overlap = e3.overlap : i.default.number(e3.overlap) && (t4.options.drop.overlap = Math.max(Math.min(1, e3.overlap), 0)), "accept" in e3 && (t4.options.drop.accept = e3.accept), "checker" in e3 && (t4.options.drop.checker = e3.checker), t4;
              }
              return i.default.bool(e3) ? (t4.options.drop.enabled = e3, t4) : t4.options.drop;
            }(this, t3);
          }, r2.prototype.dropCheck = function(t3, e3, n3, r3, o3, a2) {
            return function(t4, e4, n4, r4, o4, a3, s2) {
              var l2 = false;
              if (!(s2 = s2 || t4.getRect(a3)))
                return !!t4.options.drop.checker && t4.options.drop.checker(e4, n4, l2, t4, a3, r4, o4);
              var u2 = t4.options.drop.overlap;
              if (u2 === "pointer") {
                var c2 = (0, A.default)(r4, o4, "drag"), f2 = X.getPageXY(e4);
                f2.x += c2.x, f2.y += c2.y;
                var d2 = f2.x > s2.left && f2.x < s2.right, p2 = f2.y > s2.top && f2.y < s2.bottom;
                l2 = d2 && p2;
              }
              var v2 = r4.getRect(o4);
              if (v2 && u2 === "center") {
                var h2 = v2.left + v2.width / 2, g2 = v2.top + v2.height / 2;
                l2 = h2 >= s2.left && h2 <= s2.right && g2 >= s2.top && g2 <= s2.bottom;
              }
              return v2 && i.default.number(u2) && (l2 = Math.max(0, Math.min(s2.right, v2.right) - Math.max(s2.left, v2.left)) * Math.max(0, Math.min(s2.bottom, v2.bottom) - Math.max(s2.top, v2.top)) / (v2.width * v2.height) >= u2), t4.options.drop.checker && (l2 = t4.options.drop.checker(e4, n4, l2, t4, a3, r4, o4)), l2;
            }(this, t3, e3, n3, r3, o3, a2);
          }, n2.dynamicDrop = function(e3) {
            return i.default.bool(e3) ? (t2.dynamicDrop = e3, n2) : t2.dynamicDrop;
          }, (0, M.default)(e2.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), e2.methodDict.drop = "dropzone", t2.dynamicDrop = false, o2.actions.drop = vt.defaults;
        }, listeners: { "interactions:before-action-start": function(t2) {
          var e2 = t2.interaction;
          e2.prepared.name === "drag" && (e2.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
        }, "interactions:after-action-start": function(t2, e2) {
          var n2 = t2.interaction, r2 = (t2.event, t2.iEvent);
          if (n2.prepared.name === "drag") {
            var o2 = n2.dropState;
            o2.activeDrops = null, o2.events = null, o2.activeDrops = ut(e2, n2.element), o2.events = ft(n2, 0, r2), o2.events.activate && (lt(o2.activeDrops, o2.events.activate), e2.fire("actions/drop:start", { interaction: n2, dragEvent: r2 }));
          }
        }, "interactions:action-move": pt, "interactions:after-action-move": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.iEvent;
          n2.prepared.name === "drag" && (dt(n2, n2.dropState.events), e2.fire("actions/drop:move", { interaction: n2, dragEvent: r2 }), n2.dropState.events = {});
        }, "interactions:action-end": function(t2, e2) {
          if (t2.interaction.prepared.name === "drag") {
            var n2 = t2.interaction, r2 = t2.iEvent;
            pt(t2, e2), dt(n2, n2.dropState.events), e2.fire("actions/drop:end", { interaction: n2, dragEvent: r2 });
          }
        }, "interactions:stop": function(t2) {
          var e2 = t2.interaction;
          if (e2.prepared.name === "drag") {
            var n2 = e2.dropState;
            n2 && (n2.activeDrops = null, n2.events = null, n2.cur.dropzone = null, n2.cur.element = null, n2.prev.dropzone = null, n2.prev.element = null, n2.rejected = false);
          }
        } }, getActiveDrops: ut, getDrop: ct, getDropEvents: ft, fireDropEvents: dt, defaults: { enabled: false, accept: null, overlap: "pointer" } }, ht = vt;
        st.default = ht;
        var gt = {};
        function yt(t2) {
          var e2 = t2.interaction, n2 = t2.iEvent, r2 = t2.phase;
          if (e2.prepared.name === "gesture") {
            var o2 = e2.pointers.map(function(t3) {
              return t3.pointer;
            }), a2 = r2 === "start", s2 = r2 === "end", l2 = e2.interactable.options.deltaSource;
            if (n2.touches = [o2[0], o2[1]], a2)
              n2.distance = X.touchDistance(o2, l2), n2.box = X.touchBBox(o2), n2.scale = 1, n2.ds = 0, n2.angle = X.touchAngle(o2, l2), n2.da = 0, e2.gesture.startDistance = n2.distance, e2.gesture.startAngle = n2.angle;
            else if (s2) {
              var u2 = e2.prevEvent;
              n2.distance = u2.distance, n2.box = u2.box, n2.scale = u2.scale, n2.ds = 0, n2.angle = u2.angle, n2.da = 0;
            } else
              n2.distance = X.touchDistance(o2, l2), n2.box = X.touchBBox(o2), n2.scale = n2.distance / e2.gesture.startDistance, n2.angle = X.touchAngle(o2, l2), n2.ds = n2.scale - e2.gesture.scale, n2.da = n2.angle - e2.gesture.angle;
            e2.gesture.distance = n2.distance, e2.gesture.angle = n2.angle, i.default.number(n2.scale) && n2.scale !== 1 / 0 && !isNaN(n2.scale) && (e2.gesture.scale = n2.scale);
          }
        }
        Object.defineProperty(gt, "__esModule", { value: true }), gt.default = void 0;
        var mt = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t2) {
          var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
          n2.prototype.gesturable = function(t3) {
            return i.default.object(t3) ? (this.options.gesture.enabled = t3.enabled !== false, this.setPerAction("gesture", t3), this.setOnEvents("gesture", t3), this) : i.default.bool(t3) ? (this.options.gesture.enabled = t3, this) : this.options.gesture;
          }, e2.map.gesture = mt, e2.methodDict.gesture = "gesturable", r2.actions.gesture = mt.defaults;
        }, listeners: { "interactions:action-start": yt, "interactions:action-move": yt, "interactions:action-end": yt, "interactions:new": function(t2) {
          t2.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
        }, "auto-start:check": function(t2) {
          if (!(t2.interaction.pointers.length < 2)) {
            var e2 = t2.interactable.options.gesture;
            if (e2 && e2.enabled)
              return t2.action = { name: "gesture" }, false;
          }
        } }, defaults: {}, getCursor: function() {
          return "";
        } }, bt = mt;
        gt.default = bt;
        var xt = {};
        function wt(t2, e2, n2, r2, o2, a2, s2) {
          if (!e2)
            return false;
          if (e2 === true) {
            var l2 = i.default.number(a2.width) ? a2.width : a2.right - a2.left, u2 = i.default.number(a2.height) ? a2.height : a2.bottom - a2.top;
            if (s2 = Math.min(s2, Math.abs((t2 === "left" || t2 === "right" ? l2 : u2) / 2)), l2 < 0 && (t2 === "left" ? t2 = "right" : t2 === "right" && (t2 = "left")), u2 < 0 && (t2 === "top" ? t2 = "bottom" : t2 === "bottom" && (t2 = "top")), t2 === "left") {
              var c2 = l2 >= 0 ? a2.left : a2.right;
              return n2.x < c2 + s2;
            }
            if (t2 === "top") {
              var f2 = u2 >= 0 ? a2.top : a2.bottom;
              return n2.y < f2 + s2;
            }
            if (t2 === "right")
              return n2.x > (l2 >= 0 ? a2.right : a2.left) - s2;
            if (t2 === "bottom")
              return n2.y > (u2 >= 0 ? a2.bottom : a2.top) - s2;
          }
          return !!i.default.element(r2) && (i.default.element(e2) ? e2 === r2 : _.matchesUpTo(r2, e2, o2));
        }
        function _t(t2) {
          var e2 = t2.iEvent, n2 = t2.interaction;
          if (n2.prepared.name === "resize" && n2.resizeAxes) {
            var r2 = e2;
            n2.interactable.options.resize.square ? (n2.resizeAxes === "y" ? r2.delta.x = r2.delta.y : r2.delta.y = r2.delta.x, r2.axes = "xy") : (r2.axes = n2.resizeAxes, n2.resizeAxes === "x" ? r2.delta.y = 0 : n2.resizeAxes === "y" && (r2.delta.x = 0));
          }
        }
        Object.defineProperty(xt, "__esModule", { value: true }), xt.default = void 0;
        var Pt = { id: "actions/resize", before: ["actions/drag"], install: function(t2) {
          var e2 = t2.actions, n2 = t2.browser, r2 = t2.Interactable, o2 = t2.defaults;
          Pt.cursors = function(t3) {
            return t3.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
          }(n2), Pt.defaultMargin = n2.supportsTouch || n2.supportsPointerEvent ? 20 : 10, r2.prototype.resizable = function(e3) {
            return function(t3, e4, n3) {
              return i.default.object(e4) ? (t3.options.resize.enabled = e4.enabled !== false, t3.setPerAction("resize", e4), t3.setOnEvents("resize", e4), i.default.string(e4.axis) && /^x$|^y$|^xy$/.test(e4.axis) ? t3.options.resize.axis = e4.axis : e4.axis === null && (t3.options.resize.axis = n3.defaults.actions.resize.axis), i.default.bool(e4.preserveAspectRatio) ? t3.options.resize.preserveAspectRatio = e4.preserveAspectRatio : i.default.bool(e4.square) && (t3.options.resize.square = e4.square), t3) : i.default.bool(e4) ? (t3.options.resize.enabled = e4, t3) : t3.options.resize;
            }(this, e3, t2);
          }, e2.map.resize = Pt, e2.methodDict.resize = "resizable", o2.actions.resize = Pt.defaults;
        }, listeners: { "interactions:new": function(t2) {
          t2.interaction.resizeAxes = "xy";
        }, "interactions:action-start": function(t2) {
          !function(t3) {
            var e2 = t3.iEvent, n2 = t3.interaction;
            if (n2.prepared.name === "resize" && n2.prepared.edges) {
              var r2 = e2, o2 = n2.rect;
              n2._rects = { start: (0, M.default)({}, o2), corrected: (0, M.default)({}, o2), previous: (0, M.default)({}, o2), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
            }
          }(t2), _t(t2);
        }, "interactions:action-move": function(t2) {
          !function(t3) {
            var e2 = t3.iEvent, n2 = t3.interaction;
            if (n2.prepared.name === "resize" && n2.prepared.edges) {
              var r2 = e2, o2 = n2.interactable.options.resize.invert, i2 = o2 === "reposition" || o2 === "negate", a2 = n2.rect, s2 = n2._rects, l2 = s2.start, u2 = s2.corrected, c2 = s2.delta, f2 = s2.previous;
              if ((0, M.default)(f2, u2), i2) {
                if ((0, M.default)(u2, a2), o2 === "reposition") {
                  if (u2.top > u2.bottom) {
                    var d2 = u2.top;
                    u2.top = u2.bottom, u2.bottom = d2;
                  }
                  if (u2.left > u2.right) {
                    var p2 = u2.left;
                    u2.left = u2.right, u2.right = p2;
                  }
                }
              } else
                u2.top = Math.min(a2.top, l2.bottom), u2.bottom = Math.max(a2.bottom, l2.top), u2.left = Math.min(a2.left, l2.right), u2.right = Math.max(a2.right, l2.left);
              for (var v2 in u2.width = u2.right - u2.left, u2.height = u2.bottom - u2.top, u2)
                c2[v2] = u2[v2] - f2[v2];
              r2.edges = n2.prepared.edges, r2.rect = u2, r2.deltaRect = c2;
            }
          }(t2), _t(t2);
        }, "interactions:action-end": function(t2) {
          var e2 = t2.iEvent, n2 = t2.interaction;
          if (n2.prepared.name === "resize" && n2.prepared.edges) {
            var r2 = e2;
            r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
          }
        }, "auto-start:check": function(t2) {
          var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.element, o2 = t2.rect, a2 = t2.buttons;
          if (o2) {
            var s2 = (0, M.default)({}, e2.coords.cur.page), l2 = n2.options.resize;
            if (l2 && l2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || (a2 & l2.mouseButtons) != 0)) {
              if (i.default.object(l2.edges)) {
                var u2 = { left: false, right: false, top: false, bottom: false };
                for (var c2 in u2)
                  u2[c2] = wt(c2, l2.edges[c2], s2, e2._latestPointer.eventTarget, r2, o2, l2.margin || Pt.defaultMargin);
                u2.left = u2.left && !u2.right, u2.top = u2.top && !u2.bottom, (u2.left || u2.right || u2.top || u2.bottom) && (t2.action = { name: "resize", edges: u2 });
              } else {
                var f2 = l2.axis !== "y" && s2.x > o2.right - Pt.defaultMargin, d2 = l2.axis !== "x" && s2.y > o2.bottom - Pt.defaultMargin;
                (f2 || d2) && (t2.action = { name: "resize", axes: (f2 ? "x" : "") + (d2 ? "y" : "") });
              }
              return !t2.action && void 0;
            }
          }
        } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t2) {
          var e2 = t2.edges, n2 = t2.axis, r2 = t2.name, o2 = Pt.cursors, i2 = null;
          if (n2)
            i2 = o2[r2 + n2];
          else if (e2) {
            for (var a2 = "", s2 = ["top", "bottom", "left", "right"], l2 = 0; l2 < s2.length; l2++) {
              var u2 = s2[l2];
              e2[u2] && (a2 += u2);
            }
            i2 = o2[a2];
          }
          return i2;
        }, defaultMargin: null }, Ot = Pt;
        xt.default = Ot;
        var Et = {};
        Object.defineProperty(Et, "__esModule", { value: true }), Et.default = void 0;
        var St = { id: "actions", install: function(t2) {
          t2.usePlugin(gt.default), t2.usePlugin(xt.default), t2.usePlugin(c.default), t2.usePlugin(st.default);
        } };
        Et.default = St;
        var Tt = {};
        Object.defineProperty(Tt, "__esModule", { value: true }), Tt.default = void 0;
        var jt, Mt, kt = 0, It = { request: function(t2) {
          return jt(t2);
        }, cancel: function(t2) {
          return Mt(t2);
        }, init: function(t2) {
          if (jt = t2.requestAnimationFrame, Mt = t2.cancelAnimationFrame, !jt)
            for (var e2 = ["ms", "moz", "webkit", "o"], n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2];
              jt = t2["".concat(r2, "RequestAnimationFrame")], Mt = t2["".concat(r2, "CancelAnimationFrame")] || t2["".concat(r2, "CancelRequestAnimationFrame")];
            }
          jt = jt && jt.bind(t2), Mt = Mt && Mt.bind(t2), jt || (jt = function(e3) {
            var n3 = Date.now(), r3 = Math.max(0, 16 - (n3 - kt)), o2 = t2.setTimeout(function() {
              e3(n3 + r3);
            }, r3);
            return kt = n3 + r3, o2;
          }, Mt = function(t3) {
            return clearTimeout(t3);
          });
        } };
        Tt.default = It;
        var Dt = {};
        Object.defineProperty(Dt, "__esModule", { value: true }), Dt.default = void 0, Dt.getContainer = zt, Dt.getScroll = Ct, Dt.getScrollSize = function(t2) {
          return i.default.window(t2) && (t2 = window.document.body), { x: t2.scrollWidth, y: t2.scrollHeight };
        }, Dt.getScrollSizeDelta = function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.element, o2 = n2 && n2.interactable.options[n2.prepared.name].autoScroll;
          if (!o2 || !o2.enabled)
            return e2(), { x: 0, y: 0 };
          var i2 = zt(o2.container, n2.interactable, r2), a2 = Ct(i2);
          e2();
          var s2 = Ct(i2);
          return { x: s2.x - a2.x, y: s2.y - a2.y };
        };
        var At = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(t2) {
          At.isScrolling = true, Tt.default.cancel(At.i), t2.autoScroll = At, At.interaction = t2, At.prevTime = At.now(), At.i = Tt.default.request(At.scroll);
        }, stop: function() {
          At.isScrolling = false, At.interaction && (At.interaction.autoScroll = null), Tt.default.cancel(At.i);
        }, scroll: function() {
          var t2 = At.interaction, e2 = t2.interactable, n2 = t2.element, r2 = t2.prepared.name, o2 = e2.options[r2].autoScroll, a2 = zt(o2.container, e2, n2), s2 = At.now(), l2 = (s2 - At.prevTime) / 1e3, u2 = o2.speed * l2;
          if (u2 >= 1) {
            var c2 = { x: At.x * u2, y: At.y * u2 };
            if (c2.x || c2.y) {
              var f2 = Ct(a2);
              i.default.window(a2) ? a2.scrollBy(c2.x, c2.y) : a2 && (a2.scrollLeft += c2.x, a2.scrollTop += c2.y);
              var d2 = Ct(a2), p2 = { x: d2.x - f2.x, y: d2.y - f2.y };
              (p2.x || p2.y) && e2.fire({ type: "autoscroll", target: n2, interactable: e2, delta: p2, interaction: t2, container: a2 });
            }
            At.prevTime = s2;
          }
          At.isScrolling && (Tt.default.cancel(At.i), At.i = Tt.default.request(At.scroll));
        }, check: function(t2, e2) {
          var n2;
          return (n2 = t2.options[e2].autoScroll) == null ? void 0 : n2.enabled;
        }, onInteractionMove: function(t2) {
          var e2 = t2.interaction, n2 = t2.pointer;
          if (e2.interacting() && At.check(e2.interactable, e2.prepared.name))
            if (e2.simulation)
              At.x = At.y = 0;
            else {
              var r2, o2, a2, s2, l2 = e2.interactable, u2 = e2.element, c2 = e2.prepared.name, f2 = l2.options[c2].autoScroll, d2 = zt(f2.container, l2, u2);
              if (i.default.window(d2))
                s2 = n2.clientX < At.margin, r2 = n2.clientY < At.margin, o2 = n2.clientX > d2.innerWidth - At.margin, a2 = n2.clientY > d2.innerHeight - At.margin;
              else {
                var p2 = _.getElementClientRect(d2);
                s2 = n2.clientX < p2.left + At.margin, r2 = n2.clientY < p2.top + At.margin, o2 = n2.clientX > p2.right - At.margin, a2 = n2.clientY > p2.bottom - At.margin;
              }
              At.x = o2 ? 1 : s2 ? -1 : 0, At.y = a2 ? 1 : r2 ? -1 : 0, At.isScrolling || (At.margin = f2.margin, At.speed = f2.speed, At.start(e2));
            }
        } };
        function zt(t2, n2, r2) {
          return (i.default.string(t2) ? (0, k.getStringOptionResult)(t2, n2, r2) : t2) || (0, e.getWindow)(r2);
        }
        function Ct(t2) {
          return i.default.window(t2) && (t2 = window.document.body), { x: t2.scrollLeft, y: t2.scrollTop };
        }
        var Rt = { id: "auto-scroll", install: function(t2) {
          var e2 = t2.defaults, n2 = t2.actions;
          t2.autoScroll = At, At.now = function() {
            return t2.now();
          }, n2.phaselessTypes.autoscroll = true, e2.perAction.autoScroll = At.defaults;
        }, listeners: { "interactions:new": function(t2) {
          t2.interaction.autoScroll = null;
        }, "interactions:destroy": function(t2) {
          t2.interaction.autoScroll = null, At.stop(), At.interaction && (At.interaction = null);
        }, "interactions:stop": At.stop, "interactions:action-move": function(t2) {
          return At.onInteractionMove(t2);
        } } }, Ft = Rt;
        Dt.default = Ft;
        var Xt = {};
        Object.defineProperty(Xt, "__esModule", { value: true }), Xt.copyAction = function(t2, e2) {
          return t2.name = e2.name, t2.axis = e2.axis, t2.edges = e2.edges, t2;
        }, Xt.sign = void 0, Xt.warnOnce = function(t2, n2) {
          var r2 = false;
          return function() {
            return r2 || (e.window.console.warn(n2), r2 = true), t2.apply(this, arguments);
          };
        }, Xt.sign = function(t2) {
          return t2 >= 0 ? 1 : -1;
        };
        var Bt = {};
        function Yt(t2) {
          return i.default.bool(t2) ? (this.options.styleCursor = t2, this) : t2 === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
        }
        function Wt(t2) {
          return i.default.func(t2) ? (this.options.actionChecker = t2, this) : t2 === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
        }
        Object.defineProperty(Bt, "__esModule", { value: true }), Bt.default = void 0;
        var Lt = { id: "auto-start/interactableMethods", install: function(t2) {
          var e2 = t2.Interactable;
          e2.prototype.getAction = function(e3, n2, r2, o2) {
            var i2 = function(t3, e4, n3, r3, o3) {
              var i3 = t3.getRect(r3), a2 = { action: null, interactable: t3, interaction: n3, element: r3, rect: i3, buttons: e4.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e4.button] };
              return o3.fire("auto-start:check", a2), a2.action;
            }(this, n2, r2, o2, t2);
            return this.options.actionChecker ? this.options.actionChecker(e3, n2, i2, this, o2, r2) : i2;
          }, e2.prototype.ignoreFrom = (0, Xt.warnOnce)(function(t3) {
            return this._backCompatOption("ignoreFrom", t3);
          }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e2.prototype.allowFrom = (0, Xt.warnOnce)(function(t3) {
            return this._backCompatOption("allowFrom", t3);
          }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e2.prototype.actionChecker = Wt, e2.prototype.styleCursor = Yt;
        } };
        Bt.default = Lt;
        var Ut = {};
        function Vt(t2, e2, n2, r2, o2) {
          return e2.testIgnoreAllow(e2.options[t2.name], n2, r2) && e2.options[t2.name].enabled && $t(e2, n2, t2, o2) ? t2 : null;
        }
        function Nt(t2, e2, n2, r2, o2, i2, a2) {
          for (var s2 = 0, l2 = r2.length; s2 < l2; s2++) {
            var u2 = r2[s2], c2 = o2[s2], f2 = u2.getAction(e2, n2, t2, c2);
            if (f2) {
              var d2 = Vt(f2, u2, c2, i2, a2);
              if (d2)
                return { action: d2, interactable: u2, element: c2 };
            }
          }
          return { action: null, interactable: null, element: null };
        }
        function qt(t2, e2, n2, r2, o2) {
          var a2 = [], s2 = [], l2 = r2;
          function u2(t3) {
            a2.push(t3), s2.push(l2);
          }
          for (; i.default.element(l2); ) {
            a2 = [], s2 = [], o2.interactables.forEachMatch(l2, u2);
            var c2 = Nt(t2, e2, n2, a2, s2, r2, o2);
            if (c2.action && !c2.interactable.options[c2.action.name].manualStart)
              return c2;
            l2 = _.parentNode(l2);
          }
          return { action: null, interactable: null, element: null };
        }
        function Gt(t2, e2, n2) {
          var r2 = e2.action, o2 = e2.interactable, i2 = e2.element;
          r2 = r2 || { name: null }, t2.interactable = o2, t2.element = i2, (0, Xt.copyAction)(t2.prepared, r2), t2.rect = o2 && r2.name ? o2.getRect(i2) : null, Zt(t2, n2), n2.fire("autoStart:prepared", { interaction: t2 });
        }
        function $t(t2, e2, n2, r2) {
          var o2 = t2.options, i2 = o2[n2.name].max, a2 = o2[n2.name].maxPerElement, s2 = r2.autoStart.maxInteractions, l2 = 0, u2 = 0, c2 = 0;
          if (!(i2 && a2 && s2))
            return false;
          for (var f2 = 0; f2 < r2.interactions.list.length; f2++) {
            var d2 = r2.interactions.list[f2], p2 = d2.prepared.name;
            if (d2.interacting()) {
              if (++l2 >= s2)
                return false;
              if (d2.interactable === t2) {
                if ((u2 += p2 === n2.name ? 1 : 0) >= i2)
                  return false;
                if (d2.element === e2 && (c2++, p2 === n2.name && c2 >= a2))
                  return false;
              }
            }
          }
          return s2 > 0;
        }
        function Ht(t2, e2) {
          return i.default.number(t2) ? (e2.autoStart.maxInteractions = t2, this) : e2.autoStart.maxInteractions;
        }
        function Kt(t2, e2, n2) {
          var r2 = n2.autoStart.cursorElement;
          r2 && r2 !== t2 && (r2.style.cursor = ""), t2.ownerDocument.documentElement.style.cursor = e2, t2.style.cursor = e2, n2.autoStart.cursorElement = e2 ? t2 : null;
        }
        function Zt(t2, e2) {
          var n2 = t2.interactable, r2 = t2.element, o2 = t2.prepared;
          if (t2.pointerType === "mouse" && n2 && n2.options.styleCursor) {
            var a2 = "";
            if (o2.name) {
              var s2 = n2.options[o2.name].cursorChecker;
              a2 = i.default.func(s2) ? s2(o2, n2, r2, t2._interacting) : e2.actions.map[o2.name].getCursor(o2);
            }
            Kt(t2.element, a2 || "", e2);
          } else
            e2.autoStart.cursorElement && Kt(e2.autoStart.cursorElement, "", e2);
        }
        Object.defineProperty(Ut, "__esModule", { value: true }), Ut.default = void 0;
        var Jt = { id: "auto-start/base", before: ["actions"], install: function(t2) {
          var e2 = t2.interactStatic, n2 = t2.defaults;
          t2.usePlugin(Bt.default), n2.base.actionChecker = null, n2.base.styleCursor = true, (0, M.default)(n2.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e2.maxInteractions = function(e3) {
            return Ht(e3, t2);
          }, t2.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: $t, cursorElement: null };
        }, listeners: { "interactions:down": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget;
          n2.interacting() || Gt(n2, qt(n2, r2, o2, i2, e2), e2);
        }, "interactions:move": function(t2, e2) {
          !function(t3, e3) {
            var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget;
            n2.pointerType !== "mouse" || n2.pointerIsDown || n2.interacting() || Gt(n2, qt(n2, r2, o2, i2, e3), e3);
          }(t2, e2), function(t3, e3) {
            var n2 = t3.interaction;
            if (n2.pointerIsDown && !n2.interacting() && n2.pointerWasMoved && n2.prepared.name) {
              e3.fire("autoStart:before-start", t3);
              var r2 = n2.interactable, o2 = n2.prepared.name;
              o2 && r2 && (r2.options[o2].manualStart || !$t(r2, n2.element, n2.prepared, e3) ? n2.stop() : (n2.start(n2.prepared, r2, n2.element), Zt(n2, e3)));
            }
          }(t2, e2);
        }, "interactions:stop": function(t2, e2) {
          var n2 = t2.interaction, r2 = n2.interactable;
          r2 && r2.options.styleCursor && Kt(n2.element, "", e2);
        } }, maxInteractions: Ht, withinInteractionLimit: $t, validateAction: Vt }, Qt = Jt;
        Ut.default = Qt;
        var te = {};
        Object.defineProperty(te, "__esModule", { value: true }), te.default = void 0;
        var ee = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.eventTarget, o2 = t2.dx, a2 = t2.dy;
          if (n2.prepared.name === "drag") {
            var s2 = Math.abs(o2), l2 = Math.abs(a2), u2 = n2.interactable.options.drag, c2 = u2.startAxis, f2 = s2 > l2 ? "x" : s2 < l2 ? "y" : "xy";
            if (n2.prepared.axis = u2.lockAxis === "start" ? f2[0] : u2.lockAxis, f2 !== "xy" && c2 !== "xy" && c2 !== f2) {
              n2.prepared.name = null;
              for (var d2 = r2, p2 = function(t3) {
                if (t3 !== n2.interactable) {
                  var o3 = n2.interactable.options.drag;
                  if (!o3.manualStart && t3.testIgnoreAllow(o3, d2, r2)) {
                    var i2 = t3.getAction(n2.downPointer, n2.downEvent, n2, d2);
                    if (i2 && i2.name === "drag" && function(t4, e3) {
                      if (!e3)
                        return false;
                      var n3 = e3.options.drag.startAxis;
                      return t4 === "xy" || n3 === "xy" || n3 === t4;
                    }(f2, t3) && Ut.default.validateAction(i2, t3, d2, r2, e2))
                      return t3;
                  }
                }
              }; i.default.element(d2); ) {
                var v2 = e2.interactables.forEachMatch(d2, p2);
                if (v2) {
                  n2.prepared.name = "drag", n2.interactable = v2, n2.element = d2;
                  break;
                }
                d2 = (0, _.parentNode)(d2);
              }
            }
          }
        } } };
        te.default = ee;
        var ne = {};
        function re(t2) {
          var e2 = t2.prepared && t2.prepared.name;
          if (!e2)
            return null;
          var n2 = t2.interactable.options;
          return n2[e2].hold || n2[e2].delay;
        }
        Object.defineProperty(ne, "__esModule", { value: true }), ne.default = void 0;
        var oe = { id: "auto-start/hold", install: function(t2) {
          var e2 = t2.defaults;
          t2.usePlugin(Ut.default), e2.perAction.hold = 0, e2.perAction.delay = 0;
        }, listeners: { "interactions:new": function(t2) {
          t2.interaction.autoStartHoldTimer = null;
        }, "autoStart:prepared": function(t2) {
          var e2 = t2.interaction, n2 = re(e2);
          n2 > 0 && (e2.autoStartHoldTimer = setTimeout(function() {
            e2.start(e2.prepared, e2.interactable, e2.element);
          }, n2));
        }, "interactions:move": function(t2) {
          var e2 = t2.interaction, n2 = t2.duplicate;
          e2.autoStartHoldTimer && e2.pointerWasMoved && !n2 && (clearTimeout(e2.autoStartHoldTimer), e2.autoStartHoldTimer = null);
        }, "autoStart:before-start": function(t2) {
          var e2 = t2.interaction;
          re(e2) > 0 && (e2.prepared.name = null);
        } }, getHoldDuration: re }, ie = oe;
        ne.default = ie;
        var ae = {};
        Object.defineProperty(ae, "__esModule", { value: true }), ae.default = void 0;
        var se = { id: "auto-start", install: function(t2) {
          t2.usePlugin(Ut.default), t2.usePlugin(ne.default), t2.usePlugin(te.default);
        } };
        ae.default = se;
        var le = {};
        function ue(t2) {
          return /^(always|never|auto)$/.test(t2) ? (this.options.preventDefault = t2, this) : i.default.bool(t2) ? (this.options.preventDefault = t2 ? "always" : "never", this) : this.options.preventDefault;
        }
        function ce(t2) {
          var e2 = t2.interaction, n2 = t2.event;
          e2.interactable && e2.interactable.checkAndPreventDefault(n2);
        }
        function fe(t2) {
          var n2 = t2.Interactable;
          n2.prototype.preventDefault = ue, n2.prototype.checkAndPreventDefault = function(n3) {
            return function(t3, n4, r2) {
              var o2 = t3.options.preventDefault;
              if (o2 !== "never")
                if (o2 !== "always") {
                  if (n4.events.supportsPassive && /^touch(start|move)$/.test(r2.type)) {
                    var a2 = (0, e.getWindow)(r2.target).document, s2 = n4.getDocOptions(a2);
                    if (!s2 || !s2.events || s2.events.passive !== false)
                      return;
                  }
                  /^(mouse|pointer|touch)*(down|start)/i.test(r2.type) || i.default.element(r2.target) && (0, _.matchesSelector)(r2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || r2.preventDefault();
                } else
                  r2.preventDefault();
            }(this, t2, n3);
          }, t2.interactions.docEvents.push({ type: "dragstart", listener: function(e2) {
            for (var n3 = 0; n3 < t2.interactions.list.length; n3++) {
              var r2 = t2.interactions.list[n3];
              if (r2.element && (r2.element === e2.target || (0, _.nodeContains)(r2.element, e2.target)))
                return void r2.interactable.checkAndPreventDefault(e2);
            }
          } });
        }
        Object.defineProperty(le, "__esModule", { value: true }), le.default = void 0, le.install = fe;
        var de = { id: "core/interactablePreventDefault", install: fe, listeners: ["down", "move", "up", "cancel"].reduce(function(t2, e2) {
          return t2["interactions:".concat(e2)] = ce, t2;
        }, {}) };
        le.default = de;
        var pe = {};
        Object.defineProperty(pe, "__esModule", { value: true }), pe.default = void 0, pe.default = {};
        var ve, he = {};
        Object.defineProperty(he, "__esModule", { value: true }), he.default = void 0, function(t2) {
          t2.touchAction = "touchAction", t2.boxSizing = "boxSizing", t2.noListeners = "noListeners";
        }(ve || (ve = {}));
        ve.touchAction, ve.boxSizing, ve.noListeners;
        var ge = { id: "dev-tools", install: function() {
        } };
        he.default = ge;
        var ye = {};
        Object.defineProperty(ye, "__esModule", { value: true }), ye.default = function t2(e2) {
          var n2 = {};
          for (var r2 in e2) {
            var o2 = e2[r2];
            i.default.plainObject(o2) ? n2[r2] = t2(o2) : i.default.array(o2) ? n2[r2] = H.from(o2) : n2[r2] = o2;
          }
          return n2;
        };
        var me = {};
        function be(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var n2 = t3 == null ? null : typeof Symbol != "undefined" && t3[Symbol.iterator] || t3["@@iterator"];
            if (n2 != null) {
              var r2, o2, i2 = [], a2 = true, s2 = false;
              try {
                for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (i2.push(r2.value), !e3 || i2.length !== e3); a2 = true)
                  ;
              } catch (t4) {
                s2 = true, o2 = t4;
              } finally {
                try {
                  a2 || n2.return == null || n2.return();
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return i2;
            }
          }(t2, e2) || function(t3, e3) {
            if (t3) {
              if (typeof t3 == "string")
                return xe(t3, e3);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? xe(t3, e3) : void 0;
            }
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function xe(t2, e2) {
          (e2 == null || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        function we(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function _e(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(me, "__esModule", { value: true }), me.default = void 0, me.getRectOffset = Ee;
        var Pe = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), _e(this, "states", []), _e(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), _e(this, "startDelta", void 0), _e(this, "result", void 0), _e(this, "endResult", void 0), _e(this, "edges", void 0), _e(this, "interaction", void 0), this.interaction = e3, this.result = Oe();
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "start", value: function(t3, e3) {
            var n3 = t3.phase, r2 = this.interaction, o2 = function(t4) {
              var e4 = t4.interactable.options[t4.prepared.name], n4 = e4.modifiers;
              return n4 && n4.length ? n4 : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(t5) {
                var n5 = e4[t5];
                return n5 && n5.enabled && { options: n5, methods: n5._methods };
              }).filter(function(t5) {
                return !!t5;
              });
            }(r2);
            this.prepareStates(o2), this.edges = (0, M.default)({}, r2.edges), this.startOffset = Ee(r2.rect, e3), this.startDelta = { x: 0, y: 0 };
            var i2 = this.fillArg({ phase: n3, pageCoords: e3, preEnd: false });
            return this.result = Oe(), this.startAll(i2), this.result = this.setAll(i2);
          } }, { key: "fillArg", value: function(t3) {
            var e3 = this.interaction;
            return t3.interaction = e3, t3.interactable = e3.interactable, t3.element = e3.element, t3.rect = t3.rect || e3.rect, t3.edges = this.edges, t3.startOffset = this.startOffset, t3;
          } }, { key: "startAll", value: function(t3) {
            for (var e3 = 0; e3 < this.states.length; e3++) {
              var n3 = this.states[e3];
              n3.methods.start && (t3.state = n3, n3.methods.start(t3));
            }
          } }, { key: "setAll", value: function(t3) {
            var e3 = t3.phase, n3 = t3.preEnd, r2 = t3.skipModifiers, o2 = t3.rect;
            t3.coords = (0, M.default)({}, t3.pageCoords), t3.rect = (0, M.default)({}, o2);
            for (var i2 = r2 ? this.states.slice(r2) : this.states, a2 = Oe(t3.coords, t3.rect), s2 = 0; s2 < i2.length; s2++) {
              var l2, u2 = i2[s2], c2 = u2.options, f2 = (0, M.default)({}, t3.coords), d2 = null;
              (l2 = u2.methods) != null && l2.set && this.shouldDo(c2, n3, e3) && (t3.state = u2, d2 = u2.methods.set(t3), k.addEdges(this.interaction.edges, t3.rect, { x: t3.coords.x - f2.x, y: t3.coords.y - f2.y })), a2.eventProps.push(d2);
            }
            a2.delta.x = t3.coords.x - t3.pageCoords.x, a2.delta.y = t3.coords.y - t3.pageCoords.y, a2.rectDelta.left = t3.rect.left - o2.left, a2.rectDelta.right = t3.rect.right - o2.right, a2.rectDelta.top = t3.rect.top - o2.top, a2.rectDelta.bottom = t3.rect.bottom - o2.bottom;
            var p2 = this.result.coords, v2 = this.result.rect;
            if (p2 && v2) {
              var h2 = a2.rect.left !== v2.left || a2.rect.right !== v2.right || a2.rect.top !== v2.top || a2.rect.bottom !== v2.bottom;
              a2.changed = h2 || p2.x !== a2.coords.x || p2.y !== a2.coords.y;
            }
            return a2;
          } }, { key: "applyToInteraction", value: function(t3) {
            var e3 = this.interaction, n3 = t3.phase, r2 = e3.coords.cur, o2 = e3.coords.start, i2 = this.result, a2 = this.startDelta, s2 = i2.delta;
            n3 === "start" && (0, M.default)(this.startDelta, i2.delta);
            for (var l2 = 0; l2 < [[o2, a2], [r2, s2]].length; l2++) {
              var u2 = be([[o2, a2], [r2, s2]][l2], 2), c2 = u2[0], f2 = u2[1];
              c2.page.x += f2.x, c2.page.y += f2.y, c2.client.x += f2.x, c2.client.y += f2.y;
            }
            var d2 = this.result.rectDelta, p2 = t3.rect || e3.rect;
            p2.left += d2.left, p2.right += d2.right, p2.top += d2.top, p2.bottom += d2.bottom, p2.width = p2.right - p2.left, p2.height = p2.bottom - p2.top;
          } }, { key: "setAndApply", value: function(t3) {
            var e3 = this.interaction, n3 = t3.phase, r2 = t3.preEnd, o2 = t3.skipModifiers, i2 = this.setAll(this.fillArg({ preEnd: r2, phase: n3, pageCoords: t3.modifiedCoords || e3.coords.cur.page }));
            if (this.result = i2, !i2.changed && (!o2 || o2 < this.states.length) && e3.interacting())
              return false;
            if (t3.modifiedCoords) {
              var a2 = e3.coords.cur.page, s2 = { x: t3.modifiedCoords.x - a2.x, y: t3.modifiedCoords.y - a2.y };
              i2.coords.x += s2.x, i2.coords.y += s2.y, i2.delta.x += s2.x, i2.delta.y += s2.y;
            }
            this.applyToInteraction(t3);
          } }, { key: "beforeEnd", value: function(t3) {
            var e3 = t3.interaction, n3 = t3.event, r2 = this.states;
            if (r2 && r2.length) {
              for (var o2 = false, i2 = 0; i2 < r2.length; i2++) {
                var a2 = r2[i2];
                t3.state = a2;
                var s2 = a2.options, l2 = a2.methods, u2 = l2.beforeEnd && l2.beforeEnd(t3);
                if (u2)
                  return this.endResult = u2, false;
                o2 = o2 || !o2 && this.shouldDo(s2, true, t3.phase, true);
              }
              o2 && e3.move({ event: n3, preEnd: true });
            }
          } }, { key: "stop", value: function(t3) {
            var e3 = t3.interaction;
            if (this.states && this.states.length) {
              var n3 = (0, M.default)({ states: this.states, interactable: e3.interactable, element: e3.element, rect: null }, t3);
              this.fillArg(n3);
              for (var r2 = 0; r2 < this.states.length; r2++) {
                var o2 = this.states[r2];
                n3.state = o2, o2.methods.stop && o2.methods.stop(n3);
              }
              this.states = null, this.endResult = null;
            }
          } }, { key: "prepareStates", value: function(t3) {
            this.states = [];
            for (var e3 = 0; e3 < t3.length; e3++) {
              var n3 = t3[e3], r2 = n3.options, o2 = n3.methods, i2 = n3.name;
              this.states.push({ options: r2, methods: o2, index: e3, name: i2 });
            }
            return this.states;
          } }, { key: "restoreInteractionCoords", value: function(t3) {
            var e3 = t3.interaction, n3 = e3.coords, r2 = e3.rect, o2 = e3.modification;
            if (o2.result) {
              for (var i2 = o2.startDelta, a2 = o2.result, s2 = a2.delta, l2 = a2.rectDelta, u2 = [[n3.start, i2], [n3.cur, s2]], c2 = 0; c2 < u2.length; c2++) {
                var f2 = be(u2[c2], 2), d2 = f2[0], p2 = f2[1];
                d2.page.x -= p2.x, d2.page.y -= p2.y, d2.client.x -= p2.x, d2.client.y -= p2.y;
              }
              r2.left -= l2.left, r2.right -= l2.right, r2.top -= l2.top, r2.bottom -= l2.bottom;
            }
          } }, { key: "shouldDo", value: function(t3, e3, n3, r2) {
            return !(!t3 || t3.enabled === false || r2 && !t3.endOnly || t3.endOnly && !e3 || n3 === "start" && !t3.setStart);
          } }, { key: "copyFrom", value: function(t3) {
            this.startOffset = t3.startOffset, this.startDelta = t3.startDelta, this.edges = t3.edges, this.states = t3.states.map(function(t4) {
              return (0, ye.default)(t4);
            }), this.result = Oe((0, M.default)({}, t3.result.coords), (0, M.default)({}, t3.result.rect));
          } }, { key: "destroy", value: function() {
            for (var t3 in this)
              this[t3] = null;
          } }]) && we(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        function Oe(t2, e2) {
          return { rect: e2, coords: t2, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
        }
        function Ee(t2, e2) {
          return t2 ? { left: e2.x - t2.left, top: e2.y - t2.top, right: t2.right - e2.x, bottom: t2.bottom - e2.y } : { left: 0, top: 0, right: 0, bottom: 0 };
        }
        me.default = Pe;
        var Se = {};
        function Te(t2) {
          var e2 = t2.iEvent, n2 = t2.interaction.modification.result;
          n2 && (e2.modifiers = n2.eventProps);
        }
        Object.defineProperty(Se, "__esModule", { value: true }), Se.addEventModifiers = Te, Se.default = void 0, Se.makeModifier = function(t2, e2) {
          var n2 = t2.defaults, r2 = { start: t2.start, set: t2.set, beforeEnd: t2.beforeEnd, stop: t2.stop }, o2 = function(t3) {
            var o3 = t3 || {};
            for (var i2 in o3.enabled = o3.enabled !== false, n2)
              i2 in o3 || (o3[i2] = n2[i2]);
            var a2 = { options: o3, methods: r2, name: e2, enable: function() {
              return o3.enabled = true, a2;
            }, disable: function() {
              return o3.enabled = false, a2;
            } };
            return a2;
          };
          return e2 && typeof e2 == "string" && (o2._defaults = n2, o2._methods = r2), o2;
        };
        var je = { id: "modifiers/base", before: ["actions"], install: function(t2) {
          t2.defaults.perAction.modifiers = [];
        }, listeners: { "interactions:new": function(t2) {
          var e2 = t2.interaction;
          e2.modification = new me.default(e2);
        }, "interactions:before-action-start": function(t2) {
          var e2 = t2.interaction.modification;
          e2.start(t2, t2.interaction.coords.start.page), t2.interaction.edges = e2.edges, e2.applyToInteraction(t2);
        }, "interactions:before-action-move": function(t2) {
          return t2.interaction.modification.setAndApply(t2);
        }, "interactions:before-action-end": function(t2) {
          return t2.interaction.modification.beforeEnd(t2);
        }, "interactions:action-start": Te, "interactions:action-move": Te, "interactions:action-end": Te, "interactions:after-action-start": function(t2) {
          return t2.interaction.modification.restoreInteractionCoords(t2);
        }, "interactions:after-action-move": function(t2) {
          return t2.interaction.modification.restoreInteractionCoords(t2);
        }, "interactions:stop": function(t2) {
          return t2.interaction.modification.stop(t2);
        } } }, Me = je;
        Se.default = Me;
        var ke = {};
        Object.defineProperty(ke, "__esModule", { value: true }), ke.defaults = void 0, ke.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
        var Ie = {};
        function De(t2) {
          return De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, De(t2);
        }
        function Ae(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function ze(t2, e2) {
          return ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, ze(t2, e2);
        }
        function Ce(t2, e2) {
          if (e2 && (De(e2) === "object" || typeof e2 == "function"))
            return e2;
          if (e2 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
          return Re(t2);
        }
        function Re(t2) {
          if (t2 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }
        function Fe(t2) {
          return Fe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, Fe(t2);
        }
        function Xe(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(Ie, "__esModule", { value: true }), Ie.InteractEvent = void 0;
        var Be = function(t2) {
          !function(t3, e3) {
            if (typeof e3 != "function" && e3 !== null)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && ze(t3, e3);
          }(a2, t2);
          var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }(), function() {
            var t3, e3 = Fe(r2);
            if (o2) {
              var n3 = Fe(this).constructor;
              t3 = Reflect.construct(e3, arguments, n3);
            } else
              t3 = e3.apply(this, arguments);
            return Ce(this, t3);
          });
          function a2(t3, e3, n3, r3, o3, s2, l2) {
            var u2;
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, a2), Xe(Re(u2 = i2.call(this, t3)), "relatedTarget", null), Xe(Re(u2), "screenX", void 0), Xe(Re(u2), "screenY", void 0), Xe(Re(u2), "button", void 0), Xe(Re(u2), "buttons", void 0), Xe(Re(u2), "ctrlKey", void 0), Xe(Re(u2), "shiftKey", void 0), Xe(Re(u2), "altKey", void 0), Xe(Re(u2), "metaKey", void 0), Xe(Re(u2), "page", void 0), Xe(Re(u2), "client", void 0), Xe(Re(u2), "delta", void 0), Xe(Re(u2), "rect", void 0), Xe(Re(u2), "x0", void 0), Xe(Re(u2), "y0", void 0), Xe(Re(u2), "t0", void 0), Xe(Re(u2), "dt", void 0), Xe(Re(u2), "duration", void 0), Xe(Re(u2), "clientX0", void 0), Xe(Re(u2), "clientY0", void 0), Xe(Re(u2), "velocity", void 0), Xe(Re(u2), "speed", void 0), Xe(Re(u2), "swipe", void 0), Xe(Re(u2), "axes", void 0), Xe(Re(u2), "preEnd", void 0), o3 = o3 || t3.element;
            var c2 = t3.interactable, f2 = (c2 && c2.options || ke.defaults).deltaSource, d2 = (0, A.default)(c2, o3, n3), p2 = r3 === "start", v2 = r3 === "end", h2 = p2 ? Re(u2) : t3.prevEvent, g2 = p2 ? t3.coords.start : v2 ? { page: h2.page, client: h2.client, timeStamp: t3.coords.cur.timeStamp } : t3.coords.cur;
            return u2.page = (0, M.default)({}, g2.page), u2.client = (0, M.default)({}, g2.client), u2.rect = (0, M.default)({}, t3.rect), u2.timeStamp = g2.timeStamp, v2 || (u2.page.x -= d2.x, u2.page.y -= d2.y, u2.client.x -= d2.x, u2.client.y -= d2.y), u2.ctrlKey = e3.ctrlKey, u2.altKey = e3.altKey, u2.shiftKey = e3.shiftKey, u2.metaKey = e3.metaKey, u2.button = e3.button, u2.buttons = e3.buttons, u2.target = o3, u2.currentTarget = o3, u2.preEnd = s2, u2.type = l2 || n3 + (r3 || ""), u2.interactable = c2, u2.t0 = p2 ? t3.pointers[t3.pointers.length - 1].downTime : h2.t0, u2.x0 = t3.coords.start.page.x - d2.x, u2.y0 = t3.coords.start.page.y - d2.y, u2.clientX0 = t3.coords.start.client.x - d2.x, u2.clientY0 = t3.coords.start.client.y - d2.y, u2.delta = p2 || v2 ? { x: 0, y: 0 } : { x: u2[f2].x - h2[f2].x, y: u2[f2].y - h2[f2].y }, u2.dt = t3.coords.delta.timeStamp, u2.duration = u2.timeStamp - u2.t0, u2.velocity = (0, M.default)({}, t3.coords.velocity[f2]), u2.speed = (0, R.default)(u2.velocity.x, u2.velocity.y), u2.swipe = v2 || r3 === "inertiastart" ? u2.getSwipe() : null, u2;
          }
          return e2 = a2, (n2 = [{ key: "getSwipe", value: function() {
            var t3 = this._interaction;
            if (t3.prevEvent.speed < 600 || this.timeStamp - t3.prevEvent.timeStamp > 150)
              return null;
            var e3 = 180 * Math.atan2(t3.prevEvent.velocityY, t3.prevEvent.velocityX) / Math.PI;
            e3 < 0 && (e3 += 360);
            var n3 = 112.5 <= e3 && e3 < 247.5, r3 = 202.5 <= e3 && e3 < 337.5;
            return { up: r3, down: !r3 && 22.5 <= e3 && e3 < 157.5, left: n3, right: !n3 && (292.5 <= e3 || e3 < 67.5), angle: e3, speed: t3.prevEvent.speed, velocity: { x: t3.prevEvent.velocityX, y: t3.prevEvent.velocityY } };
          } }, { key: "preventDefault", value: function() {
          } }, { key: "stopImmediatePropagation", value: function() {
            this.immediatePropagationStopped = this.propagationStopped = true;
          } }, { key: "stopPropagation", value: function() {
            this.propagationStopped = true;
          } }]) && Ae(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), a2;
        }(N.BaseEvent);
        Ie.InteractEvent = Be, Object.defineProperties(Be.prototype, { pageX: { get: function() {
          return this.page.x;
        }, set: function(t2) {
          this.page.x = t2;
        } }, pageY: { get: function() {
          return this.page.y;
        }, set: function(t2) {
          this.page.y = t2;
        } }, clientX: { get: function() {
          return this.client.x;
        }, set: function(t2) {
          this.client.x = t2;
        } }, clientY: { get: function() {
          return this.client.y;
        }, set: function(t2) {
          this.client.y = t2;
        } }, dx: { get: function() {
          return this.delta.x;
        }, set: function(t2) {
          this.delta.x = t2;
        } }, dy: { get: function() {
          return this.delta.y;
        }, set: function(t2) {
          this.delta.y = t2;
        } }, velocityX: { get: function() {
          return this.velocity.x;
        }, set: function(t2) {
          this.velocity.x = t2;
        } }, velocityY: { get: function() {
          return this.velocity.y;
        }, set: function(t2) {
          this.velocity.y = t2;
        } } });
        var Ye = {};
        function We(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function Le(t2, e2, n2) {
          return e2 && We(t2.prototype, e2), n2 && We(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
        }
        function Ue(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(Ye, "__esModule", { value: true }), Ye.PointerInfo = void 0;
        var Ve = Le(function t2(e2, n2, r2, o2, i2) {
          !function(t3, e3) {
            if (!(t3 instanceof e3))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), Ue(this, "id", void 0), Ue(this, "pointer", void 0), Ue(this, "event", void 0), Ue(this, "downTime", void 0), Ue(this, "downTarget", void 0), this.id = e2, this.pointer = n2, this.event = r2, this.downTime = o2, this.downTarget = i2;
        });
        Ye.PointerInfo = Ve;
        var Ne, qe, Ge = {};
        function $e(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function He(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(Ge, "__esModule", { value: true }), Ge.Interaction = void 0, Object.defineProperty(Ge, "PointerInfo", { enumerable: true, get: function() {
          return Ye.PointerInfo;
        } }), Ge.default = Ge._ProxyValues = Ge._ProxyMethods = void 0, Ge._ProxyValues = Ne, function(t2) {
          t2.interactable = "", t2.element = "", t2.prepared = "", t2.pointerIsDown = "", t2.pointerWasMoved = "", t2._proxy = "";
        }(Ne || (Ge._ProxyValues = Ne = {})), Ge._ProxyMethods = qe, function(t2) {
          t2.start = "", t2.move = "", t2.end = "", t2.stop = "", t2.interacting = "";
        }(qe || (Ge._ProxyMethods = qe = {}));
        var Ke = 0, Ze = function() {
          function t2(e3) {
            var n3 = this, r2 = e3.pointerType, o2 = e3.scopeFire;
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), He(this, "interactable", null), He(this, "element", null), He(this, "rect", null), He(this, "_rects", void 0), He(this, "edges", null), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, Xt.warnOnce)(function(t3) {
              this.move(t3);
            }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: X.newCoords(), prev: X.newCoords(), cur: X.newCoords(), delta: X.newCoords(), velocity: X.newCoords() }), He(this, "_id", Ke++), this._scopeFire = o2, this.pointerType = r2;
            var i2 = this;
            this._proxy = {};
            var a2 = function(t3) {
              Object.defineProperty(n3._proxy, t3, { get: function() {
                return i2[t3];
              } });
            };
            for (var s2 in Ne)
              a2(s2);
            var l2 = function(t3) {
              Object.defineProperty(n3._proxy, t3, { value: function() {
                return i2[t3].apply(i2, arguments);
              } });
            };
            for (var u2 in qe)
              l2(u2);
            this._scopeFire("interactions:new", { interaction: this });
          }
          var e2, n2;
          return e2 = t2, n2 = [{ key: "pointerMoveTolerance", get: function() {
            return 1;
          } }, { key: "pointerDown", value: function(t3, e3, n3) {
            var r2 = this.updatePointer(t3, e3, n3, true), o2 = this.pointers[r2];
            this._scopeFire("interactions:down", { pointer: t3, event: e3, eventTarget: n3, pointerIndex: r2, pointerInfo: o2, type: "down", interaction: this });
          } }, { key: "start", value: function(t3, e3, n3) {
            return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (t3.name === "gesture" ? 2 : 1) || !e3.options[t3.name].enabled) && ((0, Xt.copyAction)(this.prepared, t3), this.interactable = e3, this.element = n3, this.rect = e3.getRect(n3), this.edges = this.prepared.edges ? (0, M.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
          } }, { key: "pointerMove", value: function(t3, e3, n3) {
            this.simulation || this.modification && this.modification.endResult || this.updatePointer(t3, e3, n3, false);
            var r2, o2, i2 = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
            this.pointerIsDown && !this.pointerWasMoved && (r2 = this.coords.cur.client.x - this.coords.start.client.x, o2 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, R.default)(r2, o2) > this.pointerMoveTolerance);
            var a2 = this.getPointerIndex(t3), s2 = { pointer: t3, pointerIndex: a2, pointerInfo: this.pointers[a2], event: e3, type: "move", eventTarget: n3, dx: r2, dy: o2, duplicate: i2, interaction: this };
            i2 || X.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", s2), i2 || this.simulation || (this.interacting() && (s2.type = null, this.move(s2)), this.pointerWasMoved && X.copyCoords(this.coords.prev, this.coords.cur));
          } }, { key: "move", value: function(t3) {
            t3 && t3.event || X.setZeroCoords(this.coords.delta), (t3 = (0, M.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, t3 || {})).phase = "move", this._doPhase(t3);
          } }, { key: "pointerUp", value: function(t3, e3, n3, r2) {
            var o2 = this.getPointerIndex(t3);
            o2 === -1 && (o2 = this.updatePointer(t3, e3, n3, false));
            var i2 = /cancel$/i.test(e3.type) ? "cancel" : "up";
            this._scopeFire("interactions:".concat(i2), { pointer: t3, pointerIndex: o2, pointerInfo: this.pointers[o2], event: e3, eventTarget: n3, type: i2, curEventTarget: r2, interaction: this }), this.simulation || this.end(e3), this.removePointer(t3, e3);
          } }, { key: "documentBlur", value: function(t3) {
            this.end(t3), this._scopeFire("interactions:blur", { event: t3, type: "blur", interaction: this });
          } }, { key: "end", value: function(t3) {
            var e3;
            this._ending = true, t3 = t3 || this._latestPointer.event, this.interacting() && (e3 = this._doPhase({ event: t3, interaction: this, phase: "end" })), this._ending = false, e3 === true && this.stop();
          } }, { key: "currentAction", value: function() {
            return this._interacting ? this.prepared.name : null;
          } }, { key: "interacting", value: function() {
            return this._interacting;
          } }, { key: "stop", value: function() {
            this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
          } }, { key: "getPointerIndex", value: function(t3) {
            var e3 = X.getPointerId(t3);
            return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : H.findIndex(this.pointers, function(t4) {
              return t4.id === e3;
            });
          } }, { key: "getPointerInfo", value: function(t3) {
            return this.pointers[this.getPointerIndex(t3)];
          } }, { key: "updatePointer", value: function(t3, e3, n3, r2) {
            var o2 = X.getPointerId(t3), i2 = this.getPointerIndex(t3), a2 = this.pointers[i2];
            return r2 = r2 !== false && (r2 || /(down|start)$/i.test(e3.type)), a2 ? a2.pointer = t3 : (a2 = new Ye.PointerInfo(o2, t3, e3, null, null), i2 = this.pointers.length, this.pointers.push(a2)), X.setCoords(this.coords.cur, this.pointers.map(function(t4) {
              return t4.pointer;
            }), this._now()), X.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), r2 && (this.pointerIsDown = true, a2.downTime = this.coords.cur.timeStamp, a2.downTarget = n3, X.pointerExtend(this.downPointer, t3), this.interacting() || (X.copyCoords(this.coords.start, this.coords.cur), X.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = e3, this.pointerWasMoved = false)), this._updateLatestPointer(t3, e3, n3), this._scopeFire("interactions:update-pointer", { pointer: t3, event: e3, eventTarget: n3, down: r2, pointerInfo: a2, pointerIndex: i2, interaction: this }), i2;
          } }, { key: "removePointer", value: function(t3, e3) {
            var n3 = this.getPointerIndex(t3);
            if (n3 !== -1) {
              var r2 = this.pointers[n3];
              this._scopeFire("interactions:remove-pointer", { pointer: t3, event: e3, eventTarget: null, pointerIndex: n3, pointerInfo: r2, interaction: this }), this.pointers.splice(n3, 1), this.pointerIsDown = false;
            }
          } }, { key: "_updateLatestPointer", value: function(t3, e3, n3) {
            this._latestPointer.pointer = t3, this._latestPointer.event = e3, this._latestPointer.eventTarget = n3;
          } }, { key: "destroy", value: function() {
            this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
          } }, { key: "_createPreparedEvent", value: function(t3, e3, n3, r2) {
            return new Ie.InteractEvent(this, t3, this.prepared.name, e3, this.element, n3, r2);
          } }, { key: "_fireEvent", value: function(t3) {
            var e3;
            (e3 = this.interactable) == null || e3.fire(t3), (!this.prevEvent || t3.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t3);
          } }, { key: "_doPhase", value: function(t3) {
            var e3 = t3.event, n3 = t3.phase, r2 = t3.preEnd, o2 = t3.type, i2 = this.rect;
            if (i2 && n3 === "move" && (k.addEdges(this.edges, i2, this.coords.delta[this.interactable.options.deltaSource]), i2.width = i2.right - i2.left, i2.height = i2.bottom - i2.top), this._scopeFire("interactions:before-action-".concat(n3), t3) === false)
              return false;
            var a2 = t3.iEvent = this._createPreparedEvent(e3, n3, r2, o2);
            return this._scopeFire("interactions:action-".concat(n3), t3), n3 === "start" && (this.prevEvent = a2), this._fireEvent(a2), this._scopeFire("interactions:after-action-".concat(n3), t3), true;
          } }, { key: "_now", value: function() {
            return Date.now();
          } }], n2 && $e(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        Ge.Interaction = Ze;
        var Je = Ze;
        Ge.default = Je;
        var Qe = {};
        function tn(t2) {
          t2.pointerIsDown && (on(t2.coords.cur, t2.offset.total), t2.offset.pending.x = 0, t2.offset.pending.y = 0);
        }
        function en(t2) {
          nn(t2.interaction);
        }
        function nn(t2) {
          if (!function(t3) {
            return !(!t3.offset.pending.x && !t3.offset.pending.y);
          }(t2))
            return false;
          var e2 = t2.offset.pending;
          return on(t2.coords.cur, e2), on(t2.coords.delta, e2), k.addEdges(t2.edges, t2.rect, e2), e2.x = 0, e2.y = 0, true;
        }
        function rn(t2) {
          var e2 = t2.x, n2 = t2.y;
          this.offset.pending.x += e2, this.offset.pending.y += n2, this.offset.total.x += e2, this.offset.total.y += n2;
        }
        function on(t2, e2) {
          var n2 = t2.page, r2 = t2.client, o2 = e2.x, i2 = e2.y;
          n2.x += o2, n2.y += i2, r2.x += o2, r2.y += i2;
        }
        Object.defineProperty(Qe, "__esModule", { value: true }), Qe.addTotal = tn, Qe.applyPending = nn, Qe.default = void 0, Ge._ProxyMethods.offsetBy = "";
        var an = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t2) {
          t2.Interaction.prototype.offsetBy = rn;
        }, listeners: { "interactions:new": function(t2) {
          t2.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
        }, "interactions:update-pointer": function(t2) {
          return tn(t2.interaction);
        }, "interactions:before-action-start": en, "interactions:before-action-move": en, "interactions:before-action-end": function(t2) {
          var e2 = t2.interaction;
          if (nn(e2))
            return e2.move({ offset: true }), e2.end(), false;
        }, "interactions:stop": function(t2) {
          var e2 = t2.interaction;
          e2.offset.total.x = 0, e2.offset.total.y = 0, e2.offset.pending.x = 0, e2.offset.pending.y = 0;
        } } }, sn = an;
        Qe.default = sn;
        var ln = {};
        function un(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function cn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(ln, "__esModule", { value: true }), ln.default = ln.InertiaState = void 0;
        var fn = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), cn(this, "active", false), cn(this, "isModified", false), cn(this, "smoothEnd", false), cn(this, "allowResume", false), cn(this, "modification", void 0), cn(this, "modifierCount", 0), cn(this, "modifierArg", void 0), cn(this, "startCoords", void 0), cn(this, "t0", 0), cn(this, "v0", 0), cn(this, "te", 0), cn(this, "targetOffset", void 0), cn(this, "modifiedOffset", void 0), cn(this, "currentOffset", void 0), cn(this, "lambda_v0", 0), cn(this, "one_ve_v0", 0), cn(this, "timeout", void 0), cn(this, "interaction", void 0), this.interaction = e3;
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "start", value: function(t3) {
            var e3 = this.interaction, n3 = dn(e3);
            if (!n3 || !n3.enabled)
              return false;
            var r2 = e3.coords.velocity.client, o2 = (0, R.default)(r2.x, r2.y), i2 = this.modification || (this.modification = new me.default(e3));
            if (i2.copyFrom(e3.modification), this.t0 = e3._now(), this.allowResume = n3.allowResume, this.v0 = o2, this.currentOffset = { x: 0, y: 0 }, this.startCoords = e3.coords.cur.page, this.modifierArg = i2.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - e3.coords.cur.timeStamp < 50 && o2 > n3.minSpeed && o2 > n3.endSpeed)
              this.startInertia();
            else {
              if (i2.result = i2.setAll(this.modifierArg), !i2.result.changed)
                return false;
              this.startSmoothEnd();
            }
            return e3.modification.result.rect = null, e3.offsetBy(this.targetOffset), e3._doPhase({ interaction: e3, event: t3, phase: "inertiastart" }), e3.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), e3.modification.result.rect = null, this.active = true, e3.simulation = this, true;
          } }, { key: "startInertia", value: function() {
            var t3 = this, e3 = this.interaction.coords.velocity.client, n3 = dn(this.interaction), r2 = n3.resistance, o2 = -Math.log(n3.endSpeed / this.v0) / r2;
            this.targetOffset = { x: (e3.x - o2) / r2, y: (e3.y - o2) / r2 }, this.te = o2, this.lambda_v0 = r2 / this.v0, this.one_ve_v0 = 1 - n3.endSpeed / this.v0;
            var i2 = this.modification, a2 = this.modifierArg;
            a2.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, i2.result = i2.setAll(a2), i2.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + i2.result.delta.x, y: this.targetOffset.y + i2.result.delta.y }), this.onNextFrame(function() {
              return t3.inertiaTick();
            });
          } }, { key: "startSmoothEnd", value: function() {
            var t3 = this;
            this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
              return t3.smoothEndTick();
            });
          } }, { key: "onNextFrame", value: function(t3) {
            var e3 = this;
            this.timeout = Tt.default.request(function() {
              e3.active && t3();
            });
          } }, { key: "inertiaTick", value: function() {
            var t3, e3, n3, r2, o2, i2 = this, a2 = this.interaction, s2 = dn(a2).resistance, l2 = (a2._now() - this.t0) / 1e3;
            if (l2 < this.te) {
              var u2, c2 = 1 - (Math.exp(-s2 * l2) - this.lambda_v0) / this.one_ve_v0;
              this.isModified ? (0, 0, t3 = this.targetOffset.x, e3 = this.targetOffset.y, n3 = this.modifiedOffset.x, r2 = this.modifiedOffset.y, u2 = { x: vn(o2 = c2, 0, t3, n3), y: vn(o2, 0, e3, r2) }) : u2 = { x: this.targetOffset.x * c2, y: this.targetOffset.y * c2 };
              var f2 = { x: u2.x - this.currentOffset.x, y: u2.y - this.currentOffset.y };
              this.currentOffset.x += f2.x, this.currentOffset.y += f2.y, a2.offsetBy(f2), a2.move(), this.onNextFrame(function() {
                return i2.inertiaTick();
              });
            } else
              a2.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
          } }, { key: "smoothEndTick", value: function() {
            var t3 = this, e3 = this.interaction, n3 = e3._now() - this.t0, r2 = dn(e3).smoothEndDuration;
            if (n3 < r2) {
              var o2 = { x: hn(n3, 0, this.targetOffset.x, r2), y: hn(n3, 0, this.targetOffset.y, r2) }, i2 = { x: o2.x - this.currentOffset.x, y: o2.y - this.currentOffset.y };
              this.currentOffset.x += i2.x, this.currentOffset.y += i2.y, e3.offsetBy(i2), e3.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
                return t3.smoothEndTick();
              });
            } else
              e3.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
          } }, { key: "resume", value: function(t3) {
            var e3 = t3.pointer, n3 = t3.event, r2 = t3.eventTarget, o2 = this.interaction;
            o2.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o2.updatePointer(e3, n3, r2, true), o2._doPhase({ interaction: o2, event: n3, phase: "resume" }), (0, X.copyCoords)(o2.coords.prev, o2.coords.cur), this.stop();
          } }, { key: "end", value: function() {
            this.interaction.move(), this.interaction.end(), this.stop();
          } }, { key: "stop", value: function() {
            this.active = this.smoothEnd = false, this.interaction.simulation = null, Tt.default.cancel(this.timeout);
          } }]) && un(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        function dn(t2) {
          var e2 = t2.interactable, n2 = t2.prepared;
          return e2 && e2.options && n2.name && e2.options[n2.name].inertia;
        }
        ln.InertiaState = fn;
        var pn = { id: "inertia", before: ["modifiers", "actions"], install: function(t2) {
          var e2 = t2.defaults;
          t2.usePlugin(Qe.default), t2.usePlugin(Se.default), t2.actions.phases.inertiastart = true, t2.actions.phases.resume = true, e2.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
        }, listeners: { "interactions:new": function(t2) {
          var e2 = t2.interaction;
          e2.inertia = new fn(e2);
        }, "interactions:before-action-end": function(t2) {
          var e2 = t2.interaction, n2 = t2.event;
          return (!e2._interacting || e2.simulation || !e2.inertia.start(n2)) && null;
        }, "interactions:down": function(t2) {
          var e2 = t2.interaction, n2 = t2.eventTarget, r2 = e2.inertia;
          if (r2.active)
            for (var o2 = n2; i.default.element(o2); ) {
              if (o2 === e2.element) {
                r2.resume(t2);
                break;
              }
              o2 = _.parentNode(o2);
            }
        }, "interactions:stop": function(t2) {
          var e2 = t2.interaction.inertia;
          e2.active && e2.stop();
        }, "interactions:before-action-resume": function(t2) {
          var e2 = t2.interaction.modification;
          e2.stop(t2), e2.start(t2, t2.interaction.coords.cur.page), e2.applyToInteraction(t2);
        }, "interactions:before-action-inertiastart": function(t2) {
          return t2.interaction.modification.setAndApply(t2);
        }, "interactions:action-resume": Se.addEventModifiers, "interactions:action-inertiastart": Se.addEventModifiers, "interactions:after-action-inertiastart": function(t2) {
          return t2.interaction.modification.restoreInteractionCoords(t2);
        }, "interactions:after-action-resume": function(t2) {
          return t2.interaction.modification.restoreInteractionCoords(t2);
        } } };
        function vn(t2, e2, n2, r2) {
          var o2 = 1 - t2;
          return o2 * o2 * e2 + 2 * o2 * t2 * n2 + t2 * t2 * r2;
        }
        function hn(t2, e2, n2, r2) {
          return -n2 * (t2 /= r2) * (t2 - 2) + e2;
        }
        var gn = pn;
        ln.default = gn;
        var yn = {};
        function mn(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function bn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        function xn(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            if (t2.immediatePropagationStopped)
              break;
            r2(t2);
          }
        }
        Object.defineProperty(yn, "__esModule", { value: true }), yn.Eventable = void 0;
        var wn = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), bn(this, "options", void 0), bn(this, "types", {}), bn(this, "propagationStopped", false), bn(this, "immediatePropagationStopped", false), bn(this, "global", void 0), this.options = (0, M.default)({}, e3 || {});
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "fire", value: function(t3) {
            var e3, n3 = this.global;
            (e3 = this.types[t3.type]) && xn(t3, e3), !t3.propagationStopped && n3 && (e3 = n3[t3.type]) && xn(t3, e3);
          } }, { key: "on", value: function(t3, e3) {
            var n3 = (0, z.default)(t3, e3);
            for (t3 in n3)
              this.types[t3] = H.merge(this.types[t3] || [], n3[t3]);
          } }, { key: "off", value: function(t3, e3) {
            var n3 = (0, z.default)(t3, e3);
            for (t3 in n3) {
              var r2 = this.types[t3];
              if (r2 && r2.length)
                for (var o2 = 0; o2 < n3[t3].length; o2++) {
                  var i2 = n3[t3][o2], a2 = r2.indexOf(i2);
                  a2 !== -1 && r2.splice(a2, 1);
                }
            }
          } }, { key: "getRect", value: function(t3) {
            return null;
          } }]) && mn(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        yn.Eventable = wn;
        var _n = {};
        Object.defineProperty(_n, "__esModule", { value: true }), _n.default = function(t2, e2) {
          if (e2.phaselessTypes[t2])
            return true;
          for (var n2 in e2.map)
            if (t2.indexOf(n2) === 0 && t2.substr(n2.length) in e2.phases)
              return true;
          return false;
        };
        var Pn = {};
        Object.defineProperty(Pn, "__esModule", { value: true }), Pn.createInteractStatic = function(t2) {
          var e2 = function e3(n2, r2) {
            var o2 = t2.interactables.get(n2, r2);
            return o2 || ((o2 = t2.interactables.new(n2, r2)).events.global = e3.globalEvents), o2;
          };
          return e2.getPointerAverage = X.pointerAverage, e2.getTouchBBox = X.touchBBox, e2.getTouchDistance = X.touchDistance, e2.getTouchAngle = X.touchAngle, e2.getElementRect = _.getElementRect, e2.getElementClientRect = _.getElementClientRect, e2.matchesSelector = _.matchesSelector, e2.closest = _.closest, e2.globalEvents = {}, e2.version = "1.10.14", e2.scope = t2, e2.use = function(t3, e3) {
            return this.scope.usePlugin(t3, e3), this;
          }, e2.isSet = function(t3, e3) {
            return !!this.scope.interactables.get(t3, e3 && e3.context);
          }, e2.on = (0, Xt.warnOnce)(function(t3, e3, n2) {
            if (i.default.string(t3) && t3.search(" ") !== -1 && (t3 = t3.trim().split(/ +/)), i.default.array(t3)) {
              for (var r2 = 0; r2 < t3.length; r2++) {
                var o2 = t3[r2];
                this.on(o2, e3, n2);
              }
              return this;
            }
            if (i.default.object(t3)) {
              for (var a2 in t3)
                this.on(a2, t3[a2], e3);
              return this;
            }
            return (0, _n.default)(t3, this.scope.actions) ? this.globalEvents[t3] ? this.globalEvents[t3].push(e3) : this.globalEvents[t3] = [e3] : this.scope.events.add(this.scope.document, t3, e3, { options: n2 }), this;
          }, "The interact.on() method is being deprecated"), e2.off = (0, Xt.warnOnce)(function(t3, e3, n2) {
            if (i.default.string(t3) && t3.search(" ") !== -1 && (t3 = t3.trim().split(/ +/)), i.default.array(t3)) {
              for (var r2 = 0; r2 < t3.length; r2++) {
                var o2 = t3[r2];
                this.off(o2, e3, n2);
              }
              return this;
            }
            if (i.default.object(t3)) {
              for (var a2 in t3)
                this.off(a2, t3[a2], e3);
              return this;
            }
            var s2;
            return (0, _n.default)(t3, this.scope.actions) ? t3 in this.globalEvents && (s2 = this.globalEvents[t3].indexOf(e3)) !== -1 && this.globalEvents[t3].splice(s2, 1) : this.scope.events.remove(this.scope.document, t3, e3, n2), this;
          }, "The interact.off() method is being deprecated"), e2.debug = function() {
            return this.scope;
          }, e2.supportsTouch = function() {
            return b.default.supportsTouch;
          }, e2.supportsPointerEvent = function() {
            return b.default.supportsPointerEvent;
          }, e2.stop = function() {
            for (var t3 = 0; t3 < this.scope.interactions.list.length; t3++)
              this.scope.interactions.list[t3].stop();
            return this;
          }, e2.pointerMoveTolerance = function(t3) {
            return i.default.number(t3) ? (this.scope.interactions.pointerMoveTolerance = t3, this) : this.scope.interactions.pointerMoveTolerance;
          }, e2.addDocument = function(t3, e3) {
            this.scope.addDocument(t3, e3);
          }, e2.removeDocument = function(t3) {
            this.scope.removeDocument(t3);
          }, e2;
        };
        var On = {};
        function En(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function Sn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(On, "__esModule", { value: true }), On.Interactable = void 0;
        var Tn = function() {
          function t2(n3, r3, o2, i2) {
            !function(t3, e2) {
              if (!(t3 instanceof e2))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), Sn(this, "options", void 0), Sn(this, "_actions", void 0), Sn(this, "target", void 0), Sn(this, "events", new yn.Eventable()), Sn(this, "_context", void 0), Sn(this, "_win", void 0), Sn(this, "_doc", void 0), Sn(this, "_scopeEvents", void 0), Sn(this, "_rectChecker", void 0), this._actions = r3.actions, this.target = n3, this._context = r3.context || o2, this._win = (0, e.getWindow)((0, _.trySelector)(n3) ? this._context : n3), this._doc = this._win.document, this._scopeEvents = i2, this.set(r3);
          }
          var n2, r2;
          return n2 = t2, (r2 = [{ key: "_defaults", get: function() {
            return { base: {}, perAction: {}, actions: {} };
          } }, { key: "setOnEvents", value: function(t3, e2) {
            return i.default.func(e2.onstart) && this.on("".concat(t3, "start"), e2.onstart), i.default.func(e2.onmove) && this.on("".concat(t3, "move"), e2.onmove), i.default.func(e2.onend) && this.on("".concat(t3, "end"), e2.onend), i.default.func(e2.oninertiastart) && this.on("".concat(t3, "inertiastart"), e2.oninertiastart), this;
          } }, { key: "updatePerActionListeners", value: function(t3, e2, n3) {
            (i.default.array(e2) || i.default.object(e2)) && this.off(t3, e2), (i.default.array(n3) || i.default.object(n3)) && this.on(t3, n3);
          } }, { key: "setPerAction", value: function(t3, e2) {
            var n3 = this._defaults;
            for (var r3 in e2) {
              var o2 = r3, a2 = this.options[t3], s2 = e2[o2];
              o2 === "listeners" && this.updatePerActionListeners(t3, a2.listeners, s2), i.default.array(s2) ? a2[o2] = H.from(s2) : i.default.plainObject(s2) ? (a2[o2] = (0, M.default)(a2[o2] || {}, (0, ye.default)(s2)), i.default.object(n3.perAction[o2]) && "enabled" in n3.perAction[o2] && (a2[o2].enabled = s2.enabled !== false)) : i.default.bool(s2) && i.default.object(n3.perAction[o2]) ? a2[o2].enabled = s2 : a2[o2] = s2;
            }
          } }, { key: "getRect", value: function(t3) {
            return t3 = t3 || (i.default.element(this.target) ? this.target : null), i.default.string(this.target) && (t3 = t3 || this._context.querySelector(this.target)), (0, _.getElementRect)(t3);
          } }, { key: "rectChecker", value: function(t3) {
            var e2 = this;
            return i.default.func(t3) ? (this._rectChecker = t3, this.getRect = function(t4) {
              var n3 = (0, M.default)({}, e2._rectChecker(t4));
              return "width" in n3 || (n3.width = n3.right - n3.left, n3.height = n3.bottom - n3.top), n3;
            }, this) : t3 === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
          } }, { key: "_backCompatOption", value: function(t3, e2) {
            if ((0, _.trySelector)(e2) || i.default.object(e2)) {
              for (var n3 in this.options[t3] = e2, this._actions.map)
                this.options[n3][t3] = e2;
              return this;
            }
            return this.options[t3];
          } }, { key: "origin", value: function(t3) {
            return this._backCompatOption("origin", t3);
          } }, { key: "deltaSource", value: function(t3) {
            return t3 === "page" || t3 === "client" ? (this.options.deltaSource = t3, this) : this.options.deltaSource;
          } }, { key: "context", value: function() {
            return this._context;
          } }, { key: "inContext", value: function(t3) {
            return this._context === t3.ownerDocument || (0, _.nodeContains)(this._context, t3);
          } }, { key: "testIgnoreAllow", value: function(t3, e2, n3) {
            return !this.testIgnore(t3.ignoreFrom, e2, n3) && this.testAllow(t3.allowFrom, e2, n3);
          } }, { key: "testAllow", value: function(t3, e2, n3) {
            return !t3 || !!i.default.element(n3) && (i.default.string(t3) ? (0, _.matchesUpTo)(n3, t3, e2) : !!i.default.element(t3) && (0, _.nodeContains)(t3, n3));
          } }, { key: "testIgnore", value: function(t3, e2, n3) {
            return !(!t3 || !i.default.element(n3)) && (i.default.string(t3) ? (0, _.matchesUpTo)(n3, t3, e2) : !!i.default.element(t3) && (0, _.nodeContains)(t3, n3));
          } }, { key: "fire", value: function(t3) {
            return this.events.fire(t3), this;
          } }, { key: "_onOff", value: function(t3, e2, n3, r3) {
            i.default.object(e2) && !i.default.array(e2) && (r3 = n3, n3 = null);
            var o2 = t3 === "on" ? "add" : "remove", a2 = (0, z.default)(e2, n3);
            for (var s2 in a2) {
              s2 === "wheel" && (s2 = b.default.wheelEvent);
              for (var l2 = 0; l2 < a2[s2].length; l2++) {
                var u2 = a2[s2][l2];
                (0, _n.default)(s2, this._actions) ? this.events[t3](s2, u2) : i.default.string(this.target) ? this._scopeEvents["".concat(o2, "Delegate")](this.target, this._context, s2, u2, r3) : this._scopeEvents[o2](this.target, s2, u2, r3);
              }
            }
            return this;
          } }, { key: "on", value: function(t3, e2, n3) {
            return this._onOff("on", t3, e2, n3);
          } }, { key: "off", value: function(t3, e2, n3) {
            return this._onOff("off", t3, e2, n3);
          } }, { key: "set", value: function(t3) {
            var e2 = this._defaults;
            for (var n3 in i.default.object(t3) || (t3 = {}), this.options = (0, ye.default)(e2.base), this._actions.methodDict) {
              var r3 = n3, o2 = this._actions.methodDict[r3];
              this.options[r3] = {}, this.setPerAction(r3, (0, M.default)((0, M.default)({}, e2.perAction), e2.actions[r3])), this[o2](t3[r3]);
            }
            for (var a2 in t3)
              i.default.func(this[a2]) && this[a2](t3[a2]);
            return this;
          } }, { key: "unset", value: function() {
            if (i.default.string(this.target))
              for (var t3 in this._scopeEvents.delegatedEvents)
                for (var e2 = this._scopeEvents.delegatedEvents[t3], n3 = e2.length - 1; n3 >= 0; n3--) {
                  var r3 = e2[n3], o2 = r3.selector, a2 = r3.context, s2 = r3.listeners;
                  o2 === this.target && a2 === this._context && e2.splice(n3, 1);
                  for (var l2 = s2.length - 1; l2 >= 0; l2--)
                    this._scopeEvents.removeDelegate(this.target, this._context, t3, s2[l2][0], s2[l2][1]);
                }
            else
              this._scopeEvents.remove(this.target, "all");
          } }]) && En(n2.prototype, r2), Object.defineProperty(n2, "prototype", { writable: false }), t2;
        }();
        On.Interactable = Tn;
        var jn = {};
        function Mn(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function kn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(jn, "__esModule", { value: true }), jn.InteractableSet = void 0;
        var In = function() {
          function t2(e3) {
            var n3 = this;
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), kn(this, "list", []), kn(this, "selectorMap", {}), kn(this, "scope", void 0), this.scope = e3, e3.addListeners({ "interactable:unset": function(t3) {
              var e4 = t3.interactable, r2 = e4.target, o2 = e4._context, a2 = i.default.string(r2) ? n3.selectorMap[r2] : r2[n3.scope.id], s2 = H.findIndex(a2, function(t4) {
                return t4.context === o2;
              });
              a2[s2] && (a2[s2].context = null, a2[s2].interactable = null), a2.splice(s2, 1);
            } });
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "new", value: function(t3, e3) {
            e3 = (0, M.default)(e3 || {}, { actions: this.scope.actions });
            var n3 = new this.scope.Interactable(t3, e3, this.scope.document, this.scope.events), r2 = { context: n3._context, interactable: n3 };
            return this.scope.addDocument(n3._doc), this.list.push(n3), i.default.string(t3) ? (this.selectorMap[t3] || (this.selectorMap[t3] = []), this.selectorMap[t3].push(r2)) : (n3.target[this.scope.id] || Object.defineProperty(t3, this.scope.id, { value: [], configurable: true }), t3[this.scope.id].push(r2)), this.scope.fire("interactable:new", { target: t3, options: e3, interactable: n3, win: this.scope._win }), n3;
          } }, { key: "get", value: function(t3, e3) {
            var n3 = e3 && e3.context || this.scope.document, r2 = i.default.string(t3), o2 = r2 ? this.selectorMap[t3] : t3[this.scope.id];
            if (!o2)
              return null;
            var a2 = H.find(o2, function(e4) {
              return e4.context === n3 && (r2 || e4.interactable.inContext(t3));
            });
            return a2 && a2.interactable;
          } }, { key: "forEachMatch", value: function(t3, e3) {
            for (var n3 = 0; n3 < this.list.length; n3++) {
              var r2 = this.list[n3], o2 = void 0;
              if ((i.default.string(r2.target) ? i.default.element(t3) && _.matchesSelector(t3, r2.target) : t3 === r2.target) && r2.inContext(t3) && (o2 = e3(r2)), o2 !== void 0)
                return o2;
            }
          } }]) && Mn(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        jn.InteractableSet = In;
        var Dn = {};
        function An(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function zn(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        function Cn(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var n2 = t3 == null ? null : typeof Symbol != "undefined" && t3[Symbol.iterator] || t3["@@iterator"];
            if (n2 != null) {
              var r2, o2, i2 = [], a2 = true, s2 = false;
              try {
                for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (i2.push(r2.value), !e3 || i2.length !== e3); a2 = true)
                  ;
              } catch (t4) {
                s2 = true, o2 = t4;
              } finally {
                try {
                  a2 || n2.return == null || n2.return();
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return i2;
            }
          }(t2, e2) || function(t3, e3) {
            if (t3) {
              if (typeof t3 == "string")
                return Rn(t3, e3);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Rn(t3, e3) : void 0;
            }
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function Rn(t2, e2) {
          (e2 == null || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        Object.defineProperty(Dn, "__esModule", { value: true }), Dn.default = void 0;
        var Fn = function() {
          function t2(e3) {
            !function(t3, e4) {
              if (!(t3 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2), zn(this, "currentTarget", void 0), zn(this, "originalEvent", void 0), zn(this, "type", void 0), this.originalEvent = e3, (0, F.default)(this, e3);
          }
          var e2, n2;
          return e2 = t2, (n2 = [{ key: "preventOriginalDefault", value: function() {
            this.originalEvent.preventDefault();
          } }, { key: "stopPropagation", value: function() {
            this.originalEvent.stopPropagation();
          } }, { key: "stopImmediatePropagation", value: function() {
            this.originalEvent.stopImmediatePropagation();
          } }]) && An(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), t2;
        }();
        function Xn(t2) {
          if (!i.default.object(t2))
            return { capture: !!t2, passive: false };
          var e2 = (0, M.default)({}, t2);
          return e2.capture = !!t2.capture, e2.passive = !!t2.passive, e2;
        }
        var Bn = { id: "events", install: function(t2) {
          var e2, n2 = [], r2 = {}, o2 = [], a2 = { add: s2, remove: l2, addDelegate: function(t3, e3, n3, i2, a3) {
            var l3 = Xn(a3);
            if (!r2[n3]) {
              r2[n3] = [];
              for (var f2 = 0; f2 < o2.length; f2++) {
                var d2 = o2[f2];
                s2(d2, n3, u2), s2(d2, n3, c2, true);
              }
            }
            var p2 = r2[n3], v2 = H.find(p2, function(n4) {
              return n4.selector === t3 && n4.context === e3;
            });
            v2 || (v2 = { selector: t3, context: e3, listeners: [] }, p2.push(v2)), v2.listeners.push([i2, l3]);
          }, removeDelegate: function(t3, e3, n3, o3, i2) {
            var a3, s3 = Xn(i2), f2 = r2[n3], d2 = false;
            if (f2)
              for (a3 = f2.length - 1; a3 >= 0; a3--) {
                var p2 = f2[a3];
                if (p2.selector === t3 && p2.context === e3) {
                  for (var v2 = p2.listeners, h2 = v2.length - 1; h2 >= 0; h2--) {
                    var g2 = Cn(v2[h2], 2), y2 = g2[0], m2 = g2[1], b2 = m2.capture, x2 = m2.passive;
                    if (y2 === o3 && b2 === s3.capture && x2 === s3.passive) {
                      v2.splice(h2, 1), v2.length || (f2.splice(a3, 1), l2(e3, n3, u2), l2(e3, n3, c2, true)), d2 = true;
                      break;
                    }
                  }
                  if (d2)
                    break;
                }
              }
          }, delegateListener: u2, delegateUseCapture: c2, delegatedEvents: r2, documents: o2, targets: n2, supportsOptions: false, supportsPassive: false };
          function s2(t3, e3, r3, o3) {
            var i2 = Xn(o3), s3 = H.find(n2, function(e4) {
              return e4.eventTarget === t3;
            });
            s3 || (s3 = { eventTarget: t3, events: {} }, n2.push(s3)), s3.events[e3] || (s3.events[e3] = []), t3.addEventListener && !H.contains(s3.events[e3], r3) && (t3.addEventListener(e3, r3, a2.supportsOptions ? i2 : i2.capture), s3.events[e3].push(r3));
          }
          function l2(t3, e3, r3, o3) {
            var i2 = Xn(o3), s3 = H.findIndex(n2, function(e4) {
              return e4.eventTarget === t3;
            }), u3 = n2[s3];
            if (u3 && u3.events)
              if (e3 !== "all") {
                var c3 = false, f2 = u3.events[e3];
                if (f2) {
                  if (r3 === "all") {
                    for (var d2 = f2.length - 1; d2 >= 0; d2--)
                      l2(t3, e3, f2[d2], i2);
                    return;
                  }
                  for (var p2 = 0; p2 < f2.length; p2++)
                    if (f2[p2] === r3) {
                      t3.removeEventListener(e3, r3, a2.supportsOptions ? i2 : i2.capture), f2.splice(p2, 1), f2.length === 0 && (delete u3.events[e3], c3 = true);
                      break;
                    }
                }
                c3 && !Object.keys(u3.events).length && n2.splice(s3, 1);
              } else
                for (e3 in u3.events)
                  u3.events.hasOwnProperty(e3) && l2(t3, e3, "all");
          }
          function u2(t3, e3) {
            for (var n3 = Xn(e3), o3 = new Fn(t3), a3 = r2[t3.type], s3 = Cn(X.getEventTargets(t3), 1)[0], l3 = s3; i.default.element(l3); ) {
              for (var u3 = 0; u3 < a3.length; u3++) {
                var c3 = a3[u3], f2 = c3.selector, d2 = c3.context;
                if (_.matchesSelector(l3, f2) && _.nodeContains(d2, s3) && _.nodeContains(d2, l3)) {
                  var p2 = c3.listeners;
                  o3.currentTarget = l3;
                  for (var v2 = 0; v2 < p2.length; v2++) {
                    var h2 = Cn(p2[v2], 2), g2 = h2[0], y2 = h2[1], m2 = y2.capture, b2 = y2.passive;
                    m2 === n3.capture && b2 === n3.passive && g2(o3);
                  }
                }
              }
              l3 = _.parentNode(l3);
            }
          }
          function c2(t3) {
            return u2(t3, true);
          }
          return (e2 = t2.document) == null || e2.createElement("div").addEventListener("test", null, { get capture() {
            return a2.supportsOptions = true;
          }, get passive() {
            return a2.supportsPassive = true;
          } }), t2.events = a2, a2;
        } };
        Dn.default = Bn;
        var Yn = {};
        Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = void 0;
        var Wn = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t2) {
          for (var e2 = 0; e2 < Wn.methodOrder.length; e2++) {
            var n2;
            n2 = Wn.methodOrder[e2];
            var r2 = Wn[n2](t2);
            if (r2)
              return r2;
          }
          return null;
        }, simulationResume: function(t2) {
          var e2 = t2.pointerType, n2 = t2.eventType, r2 = t2.eventTarget, o2 = t2.scope;
          if (!/down|start/i.test(n2))
            return null;
          for (var i2 = 0; i2 < o2.interactions.list.length; i2++) {
            var a2 = o2.interactions.list[i2], s2 = r2;
            if (a2.simulation && a2.simulation.allowResume && a2.pointerType === e2)
              for (; s2; ) {
                if (s2 === a2.element)
                  return a2;
                s2 = _.parentNode(s2);
              }
          }
          return null;
        }, mouseOrPen: function(t2) {
          var e2, n2 = t2.pointerId, r2 = t2.pointerType, o2 = t2.eventType, i2 = t2.scope;
          if (r2 !== "mouse" && r2 !== "pen")
            return null;
          for (var a2 = 0; a2 < i2.interactions.list.length; a2++) {
            var s2 = i2.interactions.list[a2];
            if (s2.pointerType === r2) {
              if (s2.simulation && !Ln(s2, n2))
                continue;
              if (s2.interacting())
                return s2;
              e2 || (e2 = s2);
            }
          }
          if (e2)
            return e2;
          for (var l2 = 0; l2 < i2.interactions.list.length; l2++) {
            var u2 = i2.interactions.list[l2];
            if (!(u2.pointerType !== r2 || /down/i.test(o2) && u2.simulation))
              return u2;
          }
          return null;
        }, hasPointer: function(t2) {
          for (var e2 = t2.pointerId, n2 = t2.scope, r2 = 0; r2 < n2.interactions.list.length; r2++) {
            var o2 = n2.interactions.list[r2];
            if (Ln(o2, e2))
              return o2;
          }
          return null;
        }, idle: function(t2) {
          for (var e2 = t2.pointerType, n2 = t2.scope, r2 = 0; r2 < n2.interactions.list.length; r2++) {
            var o2 = n2.interactions.list[r2];
            if (o2.pointers.length === 1) {
              var i2 = o2.interactable;
              if (i2 && (!i2.options.gesture || !i2.options.gesture.enabled))
                continue;
            } else if (o2.pointers.length >= 2)
              continue;
            if (!o2.interacting() && e2 === o2.pointerType)
              return o2;
          }
          return null;
        } };
        function Ln(t2, e2) {
          return t2.pointers.some(function(t3) {
            return t3.id === e2;
          });
        }
        var Un = Wn;
        Yn.default = Un;
        var Vn = {};
        function Nn(t2) {
          return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, Nn(t2);
        }
        function qn(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var n2 = t3 == null ? null : typeof Symbol != "undefined" && t3[Symbol.iterator] || t3["@@iterator"];
            if (n2 != null) {
              var r2, o2, i2 = [], a2 = true, s2 = false;
              try {
                for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (i2.push(r2.value), !e3 || i2.length !== e3); a2 = true)
                  ;
              } catch (t4) {
                s2 = true, o2 = t4;
              } finally {
                try {
                  a2 || n2.return == null || n2.return();
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return i2;
            }
          }(t2, e2) || function(t3, e3) {
            if (t3) {
              if (typeof t3 == "string")
                return Gn(t3, e3);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Gn(t3, e3) : void 0;
            }
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function Gn(t2, e2) {
          (e2 == null || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        function $n(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function Hn(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function Kn(t2, e2) {
          return Kn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, Kn(t2, e2);
        }
        function Zn(t2, e2) {
          if (e2 && (Nn(e2) === "object" || typeof e2 == "function"))
            return e2;
          if (e2 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t3) {
            if (t3 === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t3;
          }(t2);
        }
        function Jn(t2) {
          return Jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, Jn(t2);
        }
        Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = void 0;
        var Qn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
        function tr(t2, e2) {
          return function(n2) {
            var r2 = e2.interactions.list, o2 = X.getPointerType(n2), i2 = qn(X.getEventTargets(n2), 2), a2 = i2[0], s2 = i2[1], l2 = [];
            if (/^touch/.test(n2.type)) {
              e2.prevTouchTime = e2.now();
              for (var u2 = 0; u2 < n2.changedTouches.length; u2++) {
                var c2 = n2.changedTouches[u2], f2 = { pointer: c2, pointerId: X.getPointerId(c2), pointerType: o2, eventType: n2.type, eventTarget: a2, curEventTarget: s2, scope: e2 }, d2 = er(f2);
                l2.push([f2.pointer, f2.eventTarget, f2.curEventTarget, d2]);
              }
            } else {
              var p2 = false;
              if (!b.default.supportsPointerEvent && /mouse/.test(n2.type)) {
                for (var v2 = 0; v2 < r2.length && !p2; v2++)
                  p2 = r2[v2].pointerType !== "mouse" && r2[v2].pointerIsDown;
                p2 = p2 || e2.now() - e2.prevTouchTime < 500 || n2.timeStamp === 0;
              }
              if (!p2) {
                var h2 = { pointer: n2, pointerId: X.getPointerId(n2), pointerType: o2, eventType: n2.type, curEventTarget: s2, eventTarget: a2, scope: e2 }, g2 = er(h2);
                l2.push([h2.pointer, h2.eventTarget, h2.curEventTarget, g2]);
              }
            }
            for (var y2 = 0; y2 < l2.length; y2++) {
              var m2 = qn(l2[y2], 4), x2 = m2[0], w2 = m2[1], _2 = m2[2];
              m2[3][t2](x2, n2, w2, _2);
            }
          };
        }
        function er(t2) {
          var e2 = t2.pointerType, n2 = t2.scope, r2 = { interaction: Yn.default.search(t2), searchDetails: t2 };
          return n2.fire("interactions:find", r2), r2.interaction || n2.interactions.new({ pointerType: e2 });
        }
        function nr(t2, e2) {
          var n2 = t2.doc, r2 = t2.scope, o2 = t2.options, i2 = r2.interactions.docEvents, a2 = r2.events, s2 = a2[e2];
          for (var l2 in r2.browser.isIOS && !o2.events && (o2.events = { passive: false }), a2.delegatedEvents)
            s2(n2, l2, a2.delegateListener), s2(n2, l2, a2.delegateUseCapture, true);
          for (var u2 = o2 && o2.events, c2 = 0; c2 < i2.length; c2++) {
            var f2 = i2[c2];
            s2(n2, f2.type, f2.listener, u2);
          }
        }
        var rr = { id: "core/interactions", install: function(t2) {
          for (var e2 = {}, n2 = 0; n2 < Qn.length; n2++) {
            var r2 = Qn[n2];
            e2[r2] = tr(r2, t2);
          }
          var o2, i2 = b.default.pEventTypes;
          function a2() {
            for (var e3 = 0; e3 < t2.interactions.list.length; e3++) {
              var n3 = t2.interactions.list[e3];
              if (n3.pointerIsDown && n3.pointerType === "touch" && !n3._interacting)
                for (var r3 = function() {
                  var e4 = n3.pointers[o3];
                  t2.documents.some(function(t3) {
                    var n4 = t3.doc;
                    return (0, _.nodeContains)(n4, e4.downTarget);
                  }) || n3.removePointer(e4.pointer, e4.event);
                }, o3 = 0; o3 < n3.pointers.length; o3++)
                  r3();
            }
          }
          (o2 = h.default.PointerEvent ? [{ type: i2.down, listener: a2 }, { type: i2.down, listener: e2.pointerDown }, { type: i2.move, listener: e2.pointerMove }, { type: i2.up, listener: e2.pointerUp }, { type: i2.cancel, listener: e2.pointerUp }] : [{ type: "mousedown", listener: e2.pointerDown }, { type: "mousemove", listener: e2.pointerMove }, { type: "mouseup", listener: e2.pointerUp }, { type: "touchstart", listener: a2 }, { type: "touchstart", listener: e2.pointerDown }, { type: "touchmove", listener: e2.pointerMove }, { type: "touchend", listener: e2.pointerUp }, { type: "touchcancel", listener: e2.pointerUp }]).push({ type: "blur", listener: function(e3) {
            for (var n3 = 0; n3 < t2.interactions.list.length; n3++)
              t2.interactions.list[n3].documentBlur(e3);
          } }), t2.prevTouchTime = 0, t2.Interaction = function(e3) {
            !function(t3, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t3.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e4 && Kn(t3, e4);
            }(s2, e3);
            var n3, r3, o3, i3, a3 = (o3 = s2, i3 = function() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (t3) {
                return false;
              }
            }(), function() {
              var t3, e4 = Jn(o3);
              if (i3) {
                var n4 = Jn(this).constructor;
                t3 = Reflect.construct(e4, arguments, n4);
              } else
                t3 = e4.apply(this, arguments);
              return Zn(this, t3);
            });
            function s2() {
              return $n(this, s2), a3.apply(this, arguments);
            }
            return n3 = s2, (r3 = [{ key: "pointerMoveTolerance", get: function() {
              return t2.interactions.pointerMoveTolerance;
            }, set: function(e4) {
              t2.interactions.pointerMoveTolerance = e4;
            } }, { key: "_now", value: function() {
              return t2.now();
            } }]) && Hn(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), s2;
          }(Ge.default), t2.interactions = { list: [], new: function(e3) {
            e3.scopeFire = function(e4, n4) {
              return t2.fire(e4, n4);
            };
            var n3 = new t2.Interaction(e3);
            return t2.interactions.list.push(n3), n3;
          }, listeners: e2, docEvents: o2, pointerMoveTolerance: 1 }, t2.usePlugin(le.default);
        }, listeners: { "scope:add-document": function(t2) {
          return nr(t2, "add");
        }, "scope:remove-document": function(t2) {
          return nr(t2, "remove");
        }, "interactable:unset": function(t2, e2) {
          for (var n2 = t2.interactable, r2 = e2.interactions.list.length - 1; r2 >= 0; r2--) {
            var o2 = e2.interactions.list[r2];
            o2.interactable === n2 && (o2.stop(), e2.fire("interactions:destroy", { interaction: o2 }), o2.destroy(), e2.interactions.list.length > 2 && e2.interactions.list.splice(r2, 1));
          }
        } }, onDocSignal: nr, doOnInteractions: tr, methodNames: Qn }, or = rr;
        Vn.default = or;
        var ir = {};
        function ar(t2) {
          return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, ar(t2);
        }
        function sr() {
          return sr = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(t2, e2, n2) {
            var r2 = lr(t2, e2);
            if (r2) {
              var o2 = Object.getOwnPropertyDescriptor(r2, e2);
              return o2.get ? o2.get.call(arguments.length < 3 ? t2 : n2) : o2.value;
            }
          }, sr.apply(this, arguments);
        }
        function lr(t2, e2) {
          for (; !Object.prototype.hasOwnProperty.call(t2, e2) && (t2 = fr(t2)) !== null; )
            ;
          return t2;
        }
        function ur(t2, e2) {
          return ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, ur(t2, e2);
        }
        function cr(t2, e2) {
          if (e2 && (ar(e2) === "object" || typeof e2 == "function"))
            return e2;
          if (e2 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
          return function(t3) {
            if (t3 === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t3;
          }(t2);
        }
        function fr(t2) {
          return fr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, fr(t2);
        }
        function dr(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function pr(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function vr(t2, e2, n2) {
          return e2 && pr(t2.prototype, e2), n2 && pr(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
        }
        function hr(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(ir, "__esModule", { value: true }), ir.Scope = void 0, ir.initScope = yr;
        var gr = function() {
          function t2() {
            var e2 = this;
            dr(this, t2), hr(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), hr(this, "isInitialized", false), hr(this, "listenerMaps", []), hr(this, "browser", b.default), hr(this, "defaults", (0, ye.default)(ke.defaults)), hr(this, "Eventable", yn.Eventable), hr(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), hr(this, "interactStatic", (0, Pn.createInteractStatic)(this)), hr(this, "InteractEvent", Ie.InteractEvent), hr(this, "Interactable", void 0), hr(this, "interactables", new jn.InteractableSet(this)), hr(this, "_win", void 0), hr(this, "document", void 0), hr(this, "window", void 0), hr(this, "documents", []), hr(this, "_plugins", { list: [], map: {} }), hr(this, "onWindowUnload", function(t3) {
              return e2.removeDocument(t3.target);
            });
            var n2 = this;
            this.Interactable = function(t3) {
              !function(t4, e4) {
                if (typeof e4 != "function" && e4 !== null)
                  throw new TypeError("Super expression must either be null or a function");
                t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), Object.defineProperty(t4, "prototype", { writable: false }), e4 && ur(t4, e4);
              }(i2, t3);
              var e3, r2, o2 = (e3 = i2, r2 = function() {
                if (typeof Reflect == "undefined" || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if (typeof Proxy == "function")
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (t4) {
                  return false;
                }
              }(), function() {
                var t4, n3 = fr(e3);
                if (r2) {
                  var o3 = fr(this).constructor;
                  t4 = Reflect.construct(n3, arguments, o3);
                } else
                  t4 = n3.apply(this, arguments);
                return cr(this, t4);
              });
              function i2() {
                return dr(this, i2), o2.apply(this, arguments);
              }
              return vr(i2, [{ key: "_defaults", get: function() {
                return n2.defaults;
              } }, { key: "set", value: function(t4) {
                return sr(fr(i2.prototype), "set", this).call(this, t4), n2.fire("interactable:set", { options: t4, interactable: this }), this;
              } }, { key: "unset", value: function() {
                sr(fr(i2.prototype), "unset", this).call(this);
                var t4 = n2.interactables.list.indexOf(this);
                t4 < 0 || (sr(fr(i2.prototype), "unset", this).call(this), n2.interactables.list.splice(t4, 1), n2.fire("interactable:unset", { interactable: this }));
              } }]), i2;
            }(On.Interactable);
          }
          return vr(t2, [{ key: "addListeners", value: function(t3, e2) {
            this.listenerMaps.push({ id: e2, map: t3 });
          } }, { key: "fire", value: function(t3, e2) {
            for (var n2 = 0; n2 < this.listenerMaps.length; n2++) {
              var r2 = this.listenerMaps[n2].map[t3];
              if (r2 && r2(e2, this, t3) === false)
                return false;
            }
          } }, { key: "init", value: function(t3) {
            return this.isInitialized ? this : yr(this, t3);
          } }, { key: "pluginIsInstalled", value: function(t3) {
            return this._plugins.map[t3.id] || this._plugins.list.indexOf(t3) !== -1;
          } }, { key: "usePlugin", value: function(t3, e2) {
            if (!this.isInitialized)
              return this;
            if (this.pluginIsInstalled(t3))
              return this;
            if (t3.id && (this._plugins.map[t3.id] = t3), this._plugins.list.push(t3), t3.install && t3.install(this, e2), t3.listeners && t3.before) {
              for (var n2 = 0, r2 = this.listenerMaps.length, o2 = t3.before.reduce(function(t4, e3) {
                return t4[e3] = true, t4[mr(e3)] = true, t4;
              }, {}); n2 < r2; n2++) {
                var i2 = this.listenerMaps[n2].id;
                if (o2[i2] || o2[mr(i2)])
                  break;
              }
              this.listenerMaps.splice(n2, 0, { id: t3.id, map: t3.listeners });
            } else
              t3.listeners && this.listenerMaps.push({ id: t3.id, map: t3.listeners });
            return this;
          } }, { key: "addDocument", value: function(t3, n2) {
            if (this.getDocIndex(t3) !== -1)
              return false;
            var r2 = e.getWindow(t3);
            n2 = n2 ? (0, M.default)({}, n2) : {}, this.documents.push({ doc: t3, options: n2 }), this.events.documents.push(t3), t3 !== this.document && this.events.add(r2, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t3, window: r2, scope: this, options: n2 });
          } }, { key: "removeDocument", value: function(t3) {
            var n2 = this.getDocIndex(t3), r2 = e.getWindow(t3), o2 = this.documents[n2].options;
            this.events.remove(r2, "unload", this.onWindowUnload), this.documents.splice(n2, 1), this.events.documents.splice(n2, 1), this.fire("scope:remove-document", { doc: t3, window: r2, scope: this, options: o2 });
          } }, { key: "getDocIndex", value: function(t3) {
            for (var e2 = 0; e2 < this.documents.length; e2++)
              if (this.documents[e2].doc === t3)
                return e2;
            return -1;
          } }, { key: "getDocOptions", value: function(t3) {
            var e2 = this.getDocIndex(t3);
            return e2 === -1 ? null : this.documents[e2].options;
          } }, { key: "now", value: function() {
            return (this.window.Date || Date).now();
          } }]), t2;
        }();
        function yr(t2, n2) {
          return t2.isInitialized = true, i.default.window(n2) && e.init(n2), h.default.init(n2), b.default.init(n2), Tt.default.init(n2), t2.window = n2, t2.document = n2.document, t2.usePlugin(Vn.default), t2.usePlugin(Dn.default), t2;
        }
        function mr(t2) {
          return t2 && t2.replace(/\/.*$/, "");
        }
        ir.Scope = gr;
        var br = {}, xr = {};
        Object.defineProperty(xr, "__esModule", { value: true });
        var wr = {};
        xr.default = void 0, Object.keys(br).forEach(function(t2) {
          t2 !== "default" && t2 !== "__esModule" && (Object.prototype.hasOwnProperty.call(wr, t2) || t2 in xr && xr[t2] === br[t2] || Object.defineProperty(xr, t2, { enumerable: true, get: function() {
            return br[t2];
          } }));
        });
        var _r = new ir.Scope(), Pr = _r.interactStatic;
        xr.default = Pr;
        var Or = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
        _r.init(Or);
        var Er = {};
        Object.defineProperty(Er, "__esModule", { value: true }), Er.default = void 0, Er.default = function() {
        };
        var Sr = {};
        Object.defineProperty(Sr, "__esModule", { value: true }), Sr.default = void 0, Sr.default = function() {
        };
        var Tr = {};
        function jr(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            var n2 = t3 == null ? null : typeof Symbol != "undefined" && t3[Symbol.iterator] || t3["@@iterator"];
            if (n2 != null) {
              var r2, o2, i2 = [], a2 = true, s2 = false;
              try {
                for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (i2.push(r2.value), !e3 || i2.length !== e3); a2 = true)
                  ;
              } catch (t4) {
                s2 = true, o2 = t4;
              } finally {
                try {
                  a2 || n2.return == null || n2.return();
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return i2;
            }
          }(t2, e2) || function(t3, e3) {
            if (t3) {
              if (typeof t3 == "string")
                return Mr(t3, e3);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Mr(t3, e3) : void 0;
            }
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function Mr(t2, e2) {
          (e2 == null || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        Object.defineProperty(Tr, "__esModule", { value: true }), Tr.default = void 0, Tr.default = function(t2) {
          var e2 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(e3) {
            var n3 = jr(e3, 2), r2 = n3[0], o2 = n3[1];
            return r2 in t2 || o2 in t2;
          }), n2 = function(n3, r2) {
            for (var o2 = t2.range, i2 = t2.limits, a2 = i2 === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : i2, s2 = t2.offset, l2 = s2 === void 0 ? { x: 0, y: 0 } : s2, u2 = { range: o2, grid: t2, x: null, y: null }, c2 = 0; c2 < e2.length; c2++) {
              var f2 = jr(e2[c2], 2), d2 = f2[0], p2 = f2[1], v2 = Math.round((n3 - l2.x) / t2[d2]), h2 = Math.round((r2 - l2.y) / t2[p2]);
              u2[d2] = Math.max(a2.left, Math.min(a2.right, v2 * t2[d2] + l2.x)), u2[p2] = Math.max(a2.top, Math.min(a2.bottom, h2 * t2[p2] + l2.y));
            }
            return u2;
          };
          return n2.grid = t2, n2.coordFields = e2, n2;
        };
        var kr = {};
        Object.defineProperty(kr, "__esModule", { value: true }), Object.defineProperty(kr, "edgeTarget", { enumerable: true, get: function() {
          return Er.default;
        } }), Object.defineProperty(kr, "elements", { enumerable: true, get: function() {
          return Sr.default;
        } }), Object.defineProperty(kr, "grid", { enumerable: true, get: function() {
          return Tr.default;
        } });
        var Ir = {};
        Object.defineProperty(Ir, "__esModule", { value: true }), Ir.default = void 0;
        var Dr = { id: "snappers", install: function(t2) {
          var e2 = t2.interactStatic;
          e2.snappers = (0, M.default)(e2.snappers || {}, kr), e2.createSnapGrid = e2.snappers.grid;
        } }, Ar = Dr;
        Ir.default = Ar;
        var zr = {};
        function Cr(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function Rr(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = arguments[e2] != null ? arguments[e2] : {};
            e2 % 2 ? Cr(Object(n2), true).forEach(function(e3) {
              Fr(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : Cr(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        function Fr(t2, e2, n2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
        }
        Object.defineProperty(zr, "__esModule", { value: true }), zr.default = zr.aspectRatio = void 0;
        var Xr = { start: function(t2) {
          var e2 = t2.state, n2 = t2.rect, r2 = t2.edges, o2 = t2.pageCoords, i2 = e2.options.ratio, a2 = e2.options, s2 = a2.equalDelta, l2 = a2.modifiers;
          i2 === "preserve" && (i2 = n2.width / n2.height), e2.startCoords = (0, M.default)({}, o2), e2.startRect = (0, M.default)({}, n2), e2.ratio = i2, e2.equalDelta = s2;
          var u2 = e2.linkedEdges = { top: r2.top || r2.left && !r2.bottom, left: r2.left || r2.top && !r2.right, bottom: r2.bottom || r2.right && !r2.top, right: r2.right || r2.bottom && !r2.left };
          if (e2.xIsPrimaryAxis = !(!r2.left && !r2.right), e2.equalDelta) {
            var c2 = (u2.left ? 1 : -1) * (u2.top ? 1 : -1);
            e2.edgeSign = { x: c2, y: c2 };
          } else
            e2.edgeSign = { x: u2.left ? -1 : 1, y: u2.top ? -1 : 1 };
          if ((0, M.default)(t2.edges, u2), l2 && l2.length) {
            var f2 = new me.default(t2.interaction);
            f2.copyFrom(t2.interaction.modification), f2.prepareStates(l2), e2.subModification = f2, f2.startAll(Rr({}, t2));
          }
        }, set: function(t2) {
          var e2 = t2.state, n2 = t2.rect, r2 = t2.coords, o2 = (0, M.default)({}, r2), i2 = e2.equalDelta ? Br : Yr;
          if (i2(e2, e2.xIsPrimaryAxis, r2, n2), !e2.subModification)
            return null;
          var a2 = (0, M.default)({}, n2);
          (0, k.addEdges)(e2.linkedEdges, a2, { x: r2.x - o2.x, y: r2.y - o2.y });
          var s2 = e2.subModification.setAll(Rr(Rr({}, t2), {}, { rect: a2, edges: e2.linkedEdges, pageCoords: r2, prevCoords: r2, prevRect: a2 })), l2 = s2.delta;
          return s2.changed && (i2(e2, Math.abs(l2.x) > Math.abs(l2.y), s2.coords, s2.rect), (0, M.default)(r2, s2.coords)), s2.eventProps;
        }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
        function Br(t2, e2, n2) {
          var r2 = t2.startCoords, o2 = t2.edgeSign;
          e2 ? n2.y = r2.y + (n2.x - r2.x) * o2.y : n2.x = r2.x + (n2.y - r2.y) * o2.x;
        }
        function Yr(t2, e2, n2, r2) {
          var o2 = t2.startRect, i2 = t2.startCoords, a2 = t2.ratio, s2 = t2.edgeSign;
          if (e2) {
            var l2 = r2.width / a2;
            n2.y = i2.y + (l2 - o2.height) * s2.y;
          } else {
            var u2 = r2.height * a2;
            n2.x = i2.x + (u2 - o2.width) * s2.x;
          }
        }
        zr.aspectRatio = Xr;
        var Wr = (0, Se.makeModifier)(Xr, "aspectRatio");
        zr.default = Wr;
        var Lr = {};
        Object.defineProperty(Lr, "__esModule", { value: true }), Lr.default = void 0;
        var Ur = function() {
        };
        Ur._defaults = {};
        var Vr = Ur;
        Lr.default = Vr;
        var Nr = {};
        Object.defineProperty(Nr, "__esModule", { value: true }), Object.defineProperty(Nr, "default", { enumerable: true, get: function() {
          return Lr.default;
        } });
        var qr = {};
        function Gr(t2, e2, n2) {
          return i.default.func(t2) ? k.resolveRectLike(t2, e2.interactable, e2.element, [n2.x, n2.y, e2]) : k.resolveRectLike(t2, e2.interactable, e2.element);
        }
        Object.defineProperty(qr, "__esModule", { value: true }), qr.default = void 0, qr.getRestrictionRect = Gr, qr.restrict = void 0;
        var $r = { start: function(t2) {
          var e2 = t2.rect, n2 = t2.startOffset, r2 = t2.state, o2 = t2.interaction, i2 = t2.pageCoords, a2 = r2.options, s2 = a2.elementRect, l2 = (0, M.default)({ left: 0, top: 0, right: 0, bottom: 0 }, a2.offset || {});
          if (e2 && s2) {
            var u2 = Gr(a2.restriction, o2, i2);
            if (u2) {
              var c2 = u2.right - u2.left - e2.width, f2 = u2.bottom - u2.top - e2.height;
              c2 < 0 && (l2.left += c2, l2.right += c2), f2 < 0 && (l2.top += f2, l2.bottom += f2);
            }
            l2.left += n2.left - e2.width * s2.left, l2.top += n2.top - e2.height * s2.top, l2.right += n2.right - e2.width * (1 - s2.right), l2.bottom += n2.bottom - e2.height * (1 - s2.bottom);
          }
          r2.offset = l2;
        }, set: function(t2) {
          var e2 = t2.coords, n2 = t2.interaction, r2 = t2.state, o2 = r2.options, i2 = r2.offset, a2 = Gr(o2.restriction, n2, e2);
          if (a2) {
            var s2 = k.xywhToTlbr(a2);
            e2.x = Math.max(Math.min(s2.right - i2.right, e2.x), s2.left + i2.left), e2.y = Math.max(Math.min(s2.bottom - i2.bottom, e2.y), s2.top + i2.top);
          }
        }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
        qr.restrict = $r;
        var Hr = (0, Se.makeModifier)($r, "restrict");
        qr.default = Hr;
        var Kr = {};
        Object.defineProperty(Kr, "__esModule", { value: true }), Kr.restrictEdges = Kr.default = void 0;
        var Zr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Jr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
        function Qr(t2, e2) {
          for (var n2 = ["top", "left", "bottom", "right"], r2 = 0; r2 < n2.length; r2++) {
            var o2 = n2[r2];
            o2 in t2 || (t2[o2] = e2[o2]);
          }
          return t2;
        }
        var to = { noInner: Zr, noOuter: Jr, start: function(t2) {
          var e2, n2 = t2.interaction, r2 = t2.startOffset, o2 = t2.state, i2 = o2.options;
          if (i2) {
            var a2 = (0, qr.getRestrictionRect)(i2.offset, n2, n2.coords.start.page);
            e2 = k.rectToXY(a2);
          }
          e2 = e2 || { x: 0, y: 0 }, o2.offset = { top: e2.y + r2.top, left: e2.x + r2.left, bottom: e2.y - r2.bottom, right: e2.x - r2.right };
        }, set: function(t2) {
          var e2 = t2.coords, n2 = t2.edges, r2 = t2.interaction, o2 = t2.state, i2 = o2.offset, a2 = o2.options;
          if (n2) {
            var s2 = (0, M.default)({}, e2), l2 = (0, qr.getRestrictionRect)(a2.inner, r2, s2) || {}, u2 = (0, qr.getRestrictionRect)(a2.outer, r2, s2) || {};
            Qr(l2, Zr), Qr(u2, Jr), n2.top ? e2.y = Math.min(Math.max(u2.top + i2.top, s2.y), l2.top + i2.top) : n2.bottom && (e2.y = Math.max(Math.min(u2.bottom + i2.bottom, s2.y), l2.bottom + i2.bottom)), n2.left ? e2.x = Math.min(Math.max(u2.left + i2.left, s2.x), l2.left + i2.left) : n2.right && (e2.x = Math.max(Math.min(u2.right + i2.right, s2.x), l2.right + i2.right));
          }
        }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
        Kr.restrictEdges = to;
        var eo = (0, Se.makeModifier)(to, "restrictEdges");
        Kr.default = eo;
        var no = {};
        Object.defineProperty(no, "__esModule", { value: true }), no.restrictRect = no.default = void 0;
        var ro = (0, M.default)({ get elementRect() {
          return { top: 0, left: 0, bottom: 1, right: 1 };
        }, set elementRect(t2) {
        } }, qr.restrict.defaults), oo = { start: qr.restrict.start, set: qr.restrict.set, defaults: ro };
        no.restrictRect = oo;
        var io = (0, Se.makeModifier)(oo, "restrictRect");
        no.default = io;
        var ao = {};
        Object.defineProperty(ao, "__esModule", { value: true }), ao.restrictSize = ao.default = void 0;
        var so = { width: -1 / 0, height: -1 / 0 }, lo = { width: 1 / 0, height: 1 / 0 }, uo = { start: function(t2) {
          return Kr.restrictEdges.start(t2);
        }, set: function(t2) {
          var e2 = t2.interaction, n2 = t2.state, r2 = t2.rect, o2 = t2.edges, i2 = n2.options;
          if (o2) {
            var a2 = k.tlbrToXywh((0, qr.getRestrictionRect)(i2.min, e2, t2.coords)) || so, s2 = k.tlbrToXywh((0, qr.getRestrictionRect)(i2.max, e2, t2.coords)) || lo;
            n2.options = { endOnly: i2.endOnly, inner: (0, M.default)({}, Kr.restrictEdges.noInner), outer: (0, M.default)({}, Kr.restrictEdges.noOuter) }, o2.top ? (n2.options.inner.top = r2.bottom - a2.height, n2.options.outer.top = r2.bottom - s2.height) : o2.bottom && (n2.options.inner.bottom = r2.top + a2.height, n2.options.outer.bottom = r2.top + s2.height), o2.left ? (n2.options.inner.left = r2.right - a2.width, n2.options.outer.left = r2.right - s2.width) : o2.right && (n2.options.inner.right = r2.left + a2.width, n2.options.outer.right = r2.left + s2.width), Kr.restrictEdges.set(t2), n2.options = i2;
          }
        }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
        ao.restrictSize = uo;
        var co = (0, Se.makeModifier)(uo, "restrictSize");
        ao.default = co;
        var fo = {};
        Object.defineProperty(fo, "__esModule", { value: true }), Object.defineProperty(fo, "default", { enumerable: true, get: function() {
          return Lr.default;
        } });
        var po = {};
        Object.defineProperty(po, "__esModule", { value: true }), po.snap = po.default = void 0;
        var vo = { start: function(t2) {
          var e2, n2 = t2.interaction, r2 = t2.interactable, o2 = t2.element, i2 = t2.rect, a2 = t2.state, s2 = t2.startOffset, l2 = a2.options, u2 = l2.offsetWithOrigin ? function(t3) {
            var e3 = t3.interaction.element;
            return (0, k.rectToXY)((0, k.resolveRectLike)(t3.state.options.origin, null, null, [e3])) || (0, A.default)(t3.interactable, e3, t3.interaction.prepared.name);
          }(t2) : { x: 0, y: 0 };
          if (l2.offset === "startCoords")
            e2 = { x: n2.coords.start.page.x, y: n2.coords.start.page.y };
          else {
            var c2 = (0, k.resolveRectLike)(l2.offset, r2, o2, [n2]);
            (e2 = (0, k.rectToXY)(c2) || { x: 0, y: 0 }).x += u2.x, e2.y += u2.y;
          }
          var f2 = l2.relativePoints;
          a2.offsets = i2 && f2 && f2.length ? f2.map(function(t3, n3) {
            return { index: n3, relativePoint: t3, x: s2.left - i2.width * t3.x + e2.x, y: s2.top - i2.height * t3.y + e2.y };
          }) : [{ index: 0, relativePoint: null, x: e2.x, y: e2.y }];
        }, set: function(t2) {
          var e2 = t2.interaction, n2 = t2.coords, r2 = t2.state, o2 = r2.options, a2 = r2.offsets, s2 = (0, A.default)(e2.interactable, e2.element, e2.prepared.name), l2 = (0, M.default)({}, n2), u2 = [];
          o2.offsetWithOrigin || (l2.x -= s2.x, l2.y -= s2.y);
          for (var c2 = 0; c2 < a2.length; c2++)
            for (var f2 = a2[c2], d2 = l2.x - f2.x, p2 = l2.y - f2.y, v2 = 0, h2 = o2.targets.length; v2 < h2; v2++) {
              var g2, y2 = o2.targets[v2];
              (g2 = i.default.func(y2) ? y2(d2, p2, e2._proxy, f2, v2) : y2) && u2.push({ x: (i.default.number(g2.x) ? g2.x : d2) + f2.x, y: (i.default.number(g2.y) ? g2.y : p2) + f2.y, range: i.default.number(g2.range) ? g2.range : o2.range, source: y2, index: v2, offset: f2 });
            }
          for (var m2 = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, b2 = 0; b2 < u2.length; b2++) {
            var x2 = u2[b2], w2 = x2.range, _2 = x2.x - l2.x, P2 = x2.y - l2.y, O2 = (0, R.default)(_2, P2), E2 = O2 <= w2;
            w2 === 1 / 0 && m2.inRange && m2.range !== 1 / 0 && (E2 = false), m2.target && !(E2 ? m2.inRange && w2 !== 1 / 0 ? O2 / w2 < m2.distance / m2.range : w2 === 1 / 0 && m2.range !== 1 / 0 || O2 < m2.distance : !m2.inRange && O2 < m2.distance) || (m2.target = x2, m2.distance = O2, m2.range = w2, m2.inRange = E2, m2.delta.x = _2, m2.delta.y = P2);
          }
          return m2.inRange && (n2.x = m2.target.x, n2.y = m2.target.y), r2.closest = m2, m2;
        }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
        po.snap = vo;
        var ho = (0, Se.makeModifier)(vo, "snap");
        po.default = ho;
        var go = {};
        function yo(t2, e2) {
          (e2 == null || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
            r2[n2] = t2[n2];
          return r2;
        }
        Object.defineProperty(go, "__esModule", { value: true }), go.snapSize = go.default = void 0;
        var mo = { start: function(t2) {
          var e2 = t2.state, n2 = t2.edges, r2 = e2.options;
          if (!n2)
            return null;
          t2.state = { options: { targets: null, relativePoints: [{ x: n2.left ? 0 : 1, y: n2.top ? 0 : 1 }], offset: r2.offset || "self", origin: { x: 0, y: 0 }, range: r2.range } }, e2.targetFields = e2.targetFields || [["width", "height"], ["x", "y"]], po.snap.start(t2), e2.offsets = t2.state.offsets, t2.state = e2;
        }, set: function(t2) {
          var e2, n2, r2 = t2.interaction, o2 = t2.state, a2 = t2.coords, s2 = o2.options, l2 = o2.offsets, u2 = { x: a2.x - l2[0].x, y: a2.y - l2[0].y };
          o2.options = (0, M.default)({}, s2), o2.options.targets = [];
          for (var c2 = 0; c2 < (s2.targets || []).length; c2++) {
            var f2 = (s2.targets || [])[c2], d2 = void 0;
            if (d2 = i.default.func(f2) ? f2(u2.x, u2.y, r2) : f2) {
              for (var p2 = 0; p2 < o2.targetFields.length; p2++) {
                var v2 = (e2 = o2.targetFields[p2], n2 = 2, function(t3) {
                  if (Array.isArray(t3))
                    return t3;
                }(e2) || function(t3, e3) {
                  var n3 = t3 == null ? null : typeof Symbol != "undefined" && t3[Symbol.iterator] || t3["@@iterator"];
                  if (n3 != null) {
                    var r3, o3, i2 = [], a3 = true, s3 = false;
                    try {
                      for (n3 = n3.call(t3); !(a3 = (r3 = n3.next()).done) && (i2.push(r3.value), !e3 || i2.length !== e3); a3 = true)
                        ;
                    } catch (t4) {
                      s3 = true, o3 = t4;
                    } finally {
                      try {
                        a3 || n3.return == null || n3.return();
                      } finally {
                        if (s3)
                          throw o3;
                      }
                    }
                    return i2;
                  }
                }(e2, n2) || function(t3, e3) {
                  if (t3) {
                    if (typeof t3 == "string")
                      return yo(t3, e3);
                    var n3 = Object.prototype.toString.call(t3).slice(8, -1);
                    return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? yo(t3, e3) : void 0;
                  }
                }(e2, n2) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }()), h2 = v2[0], g2 = v2[1];
                if (h2 in d2 || g2 in d2) {
                  d2.x = d2[h2], d2.y = d2[g2];
                  break;
                }
              }
              o2.options.targets.push(d2);
            }
          }
          var y2 = po.snap.set(t2);
          return o2.options = s2, y2;
        }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
        go.snapSize = mo;
        var bo = (0, Se.makeModifier)(mo, "snapSize");
        go.default = bo;
        var xo = {};
        Object.defineProperty(xo, "__esModule", { value: true }), xo.snapEdges = xo.default = void 0;
        var wo = { start: function(t2) {
          var e2 = t2.edges;
          return e2 ? (t2.state.targetFields = t2.state.targetFields || [[e2.left ? "left" : "right", e2.top ? "top" : "bottom"]], go.snapSize.start(t2)) : null;
        }, set: go.snapSize.set, defaults: (0, M.default)((0, ye.default)(go.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
        xo.snapEdges = wo;
        var _o = (0, Se.makeModifier)(wo, "snapEdges");
        xo.default = _o;
        var Po = {};
        Object.defineProperty(Po, "__esModule", { value: true }), Object.defineProperty(Po, "default", { enumerable: true, get: function() {
          return Lr.default;
        } });
        var Oo = {};
        Object.defineProperty(Oo, "__esModule", { value: true }), Object.defineProperty(Oo, "default", { enumerable: true, get: function() {
          return Lr.default;
        } });
        var Eo = {};
        Object.defineProperty(Eo, "__esModule", { value: true }), Eo.default = void 0;
        var So = { aspectRatio: zr.default, restrictEdges: Kr.default, restrict: qr.default, restrictRect: no.default, restrictSize: ao.default, snapEdges: xo.default, snap: po.default, snapSize: go.default, spring: Po.default, avoid: Nr.default, transform: Oo.default, rubberband: fo.default };
        Eo.default = So;
        var To = {};
        Object.defineProperty(To, "__esModule", { value: true }), To.default = void 0;
        var jo = { id: "modifiers", install: function(t2) {
          var e2 = t2.interactStatic;
          for (var n2 in t2.usePlugin(Se.default), t2.usePlugin(Ir.default), e2.modifiers = Eo.default, Eo.default) {
            var r2 = Eo.default[n2], o2 = r2._defaults, i2 = r2._methods;
            o2._methods = i2, t2.defaults.perAction[n2] = o2;
          }
        } }, Mo = jo;
        To.default = Mo;
        var ko = {};
        function Io(t2) {
          return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, Io(t2);
        }
        function Do(t2, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
          }
        }
        function Ao(t2, e2) {
          return Ao = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, Ao(t2, e2);
        }
        function zo(t2, e2) {
          if (e2 && (Io(e2) === "object" || typeof e2 == "function"))
            return e2;
          if (e2 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
          return Co(t2);
        }
        function Co(t2) {
          if (t2 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t2;
        }
        function Ro(t2) {
          return Ro = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, Ro(t2);
        }
        Object.defineProperty(ko, "__esModule", { value: true }), ko.default = ko.PointerEvent = void 0;
        var Fo = function(t2) {
          !function(t3, e3) {
            if (typeof e3 != "function" && e3 !== null)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && Ao(t3, e3);
          }(a2, t2);
          var e2, n2, r2, o2, i2 = (r2 = a2, o2 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }(), function() {
            var t3, e3 = Ro(r2);
            if (o2) {
              var n3 = Ro(this).constructor;
              t3 = Reflect.construct(e3, arguments, n3);
            } else
              t3 = e3.apply(this, arguments);
            return zo(this, t3);
          });
          function a2(t3, e3, n3, r3, o3, s2) {
            var l2;
            if (function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, a2), l2 = i2.call(this, o3), X.pointerExtend(Co(l2), n3), n3 !== e3 && X.pointerExtend(Co(l2), e3), l2.timeStamp = s2, l2.originalEvent = n3, l2.type = t3, l2.pointerId = X.getPointerId(e3), l2.pointerType = X.getPointerType(e3), l2.target = r3, l2.currentTarget = null, t3 === "tap") {
              var u2 = o3.getPointerIndex(e3);
              l2.dt = l2.timeStamp - o3.pointers[u2].downTime;
              var c2 = l2.timeStamp - o3.tapTime;
              l2.double = !!o3.prevTap && o3.prevTap.type !== "doubletap" && o3.prevTap.target === l2.target && c2 < 500;
            } else
              t3 === "doubletap" && (l2.dt = e3.timeStamp - o3.tapTime, l2.double = true);
            return l2;
          }
          return e2 = a2, (n2 = [{ key: "_subtractOrigin", value: function(t3) {
            var e3 = t3.x, n3 = t3.y;
            return this.pageX -= e3, this.pageY -= n3, this.clientX -= e3, this.clientY -= n3, this;
          } }, { key: "_addOrigin", value: function(t3) {
            var e3 = t3.x, n3 = t3.y;
            return this.pageX += e3, this.pageY += n3, this.clientX += e3, this.clientY += n3, this;
          } }, { key: "preventDefault", value: function() {
            this.originalEvent.preventDefault();
          } }]) && Do(e2.prototype, n2), Object.defineProperty(e2, "prototype", { writable: false }), a2;
        }(N.BaseEvent);
        ko.PointerEvent = ko.default = Fo;
        var Xo = {};
        Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
        var Bo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t2) {
          t2.pointerEvents = Bo, t2.defaults.actions.pointerEvents = Bo.defaults, (0, M.default)(t2.actions.phaselessTypes, Bo.types);
        }, listeners: { "interactions:new": function(t2) {
          var e2 = t2.interaction;
          e2.prevTap = null, e2.tapTime = 0;
        }, "interactions:update-pointer": function(t2) {
          var e2 = t2.down, n2 = t2.pointerInfo;
          !e2 && n2.hold || (n2.hold = { duration: 1 / 0, timeout: null });
        }, "interactions:move": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget;
          t2.duplicate || n2.pointerIsDown && !n2.pointerWasMoved || (n2.pointerIsDown && Lo(t2), Yo({ interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "move" }, e2));
        }, "interactions:down": function(t2, e2) {
          !function(t3, e3) {
            for (var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget, a2 = t3.pointerIndex, s2 = n2.pointers[a2].hold, l2 = _.getPath(i2), u2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "hold", targets: [], path: l2, node: null }, c2 = 0; c2 < l2.length; c2++) {
              var f2 = l2[c2];
              u2.node = f2, e3.fire("pointerEvents:collect-targets", u2);
            }
            if (u2.targets.length) {
              for (var d2 = 1 / 0, p2 = 0; p2 < u2.targets.length; p2++) {
                var v2 = u2.targets[p2].eventable.options.holdDuration;
                v2 < d2 && (d2 = v2);
              }
              s2.duration = d2, s2.timeout = setTimeout(function() {
                Yo({ interaction: n2, eventTarget: i2, pointer: r2, event: o2, type: "hold" }, e3);
              }, d2);
            }
          }(t2, e2), Yo(t2, e2);
        }, "interactions:up": function(t2, e2) {
          Lo(t2), Yo(t2, e2), function(t3, e3) {
            var n2 = t3.interaction, r2 = t3.pointer, o2 = t3.event, i2 = t3.eventTarget;
            n2.pointerWasMoved || Yo({ interaction: n2, eventTarget: i2, pointer: r2, event: o2, type: "tap" }, e3);
          }(t2, e2);
        }, "interactions:cancel": function(t2, e2) {
          Lo(t2), Yo(t2, e2);
        } }, PointerEvent: ko.PointerEvent, fire: Yo, collectEventTargets: Wo, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
        function Yo(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget, a2 = t2.type, s2 = t2.targets, l2 = s2 === void 0 ? Wo(t2, e2) : s2, u2 = new ko.PointerEvent(a2, r2, o2, i2, n2, e2.now());
          e2.fire("pointerEvents:new", { pointerEvent: u2 });
          for (var c2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, targets: l2, type: a2, pointerEvent: u2 }, f2 = 0; f2 < l2.length; f2++) {
            var d2 = l2[f2];
            for (var p2 in d2.props || {})
              u2[p2] = d2.props[p2];
            var v2 = (0, A.default)(d2.eventable, d2.node);
            if (u2._subtractOrigin(v2), u2.eventable = d2.eventable, u2.currentTarget = d2.node, d2.eventable.fire(u2), u2._addOrigin(v2), u2.immediatePropagationStopped || u2.propagationStopped && f2 + 1 < l2.length && l2[f2 + 1].node !== u2.currentTarget)
              break;
          }
          if (e2.fire("pointerEvents:fired", c2), a2 === "tap") {
            var h2 = u2.double ? Yo({ interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: "doubletap" }, e2) : u2;
            n2.prevTap = h2, n2.tapTime = h2.timeStamp;
          }
          return u2;
        }
        function Wo(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointer, o2 = t2.event, i2 = t2.eventTarget, a2 = t2.type, s2 = n2.getPointerIndex(r2), l2 = n2.pointers[s2];
          if (a2 === "tap" && (n2.pointerWasMoved || !l2 || l2.downTarget !== i2))
            return [];
          for (var u2 = _.getPath(i2), c2 = { interaction: n2, pointer: r2, event: o2, eventTarget: i2, type: a2, path: u2, targets: [], node: null }, f2 = 0; f2 < u2.length; f2++) {
            var d2 = u2[f2];
            c2.node = d2, e2.fire("pointerEvents:collect-targets", c2);
          }
          return a2 === "hold" && (c2.targets = c2.targets.filter(function(t3) {
            var e3;
            return t3.eventable.options.holdDuration === ((e3 = n2.pointers[s2]) == null ? void 0 : e3.hold.duration);
          })), c2.targets;
        }
        function Lo(t2) {
          var e2 = t2.interaction, n2 = t2.pointerIndex, r2 = e2.pointers[n2].hold;
          r2 && r2.timeout && (clearTimeout(r2.timeout), r2.timeout = null);
        }
        var Uo = Bo;
        Xo.default = Uo;
        var Vo = {};
        function No(t2) {
          var e2 = t2.interaction;
          e2.holdIntervalHandle && (clearInterval(e2.holdIntervalHandle), e2.holdIntervalHandle = null);
        }
        Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
        var qo = { id: "pointer-events/holdRepeat", install: function(t2) {
          t2.usePlugin(Xo.default);
          var e2 = t2.pointerEvents;
          e2.defaults.holdRepeatInterval = 0, e2.types.holdrepeat = t2.actions.phaselessTypes.holdrepeat = true;
        }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t2, e2) {
          return t2["pointerEvents:".concat(e2)] = No, t2;
        }, { "pointerEvents:new": function(t2) {
          var e2 = t2.pointerEvent;
          e2.type === "hold" && (e2.count = (e2.count || 0) + 1);
        }, "pointerEvents:fired": function(t2, e2) {
          var n2 = t2.interaction, r2 = t2.pointerEvent, o2 = t2.eventTarget, i2 = t2.targets;
          if (r2.type === "hold" && i2.length) {
            var a2 = i2[0].eventable.options.holdRepeatInterval;
            a2 <= 0 || (n2.holdIntervalHandle = setTimeout(function() {
              e2.pointerEvents.fire({ interaction: n2, eventTarget: o2, type: "hold", pointer: r2, event: r2 }, e2);
            }, a2));
          }
        } }) }, Go = qo;
        Vo.default = Go;
        var $o = {};
        function Ho(t2) {
          return (0, M.default)(this.events.options, t2), this;
        }
        Object.defineProperty($o, "__esModule", { value: true }), $o.default = void 0;
        var Ko = { id: "pointer-events/interactableTargets", install: function(t2) {
          var e2 = t2.Interactable;
          e2.prototype.pointerEvents = Ho;
          var n2 = e2.prototype._backCompatOption;
          e2.prototype._backCompatOption = function(t3, e3) {
            var r2 = n2.call(this, t3, e3);
            return r2 === this && (this.events.options[t3] = e3), r2;
          };
        }, listeners: { "pointerEvents:collect-targets": function(t2, e2) {
          var n2 = t2.targets, r2 = t2.node, o2 = t2.type, i2 = t2.eventTarget;
          e2.interactables.forEachMatch(r2, function(t3) {
            var e3 = t3.events, a2 = e3.options;
            e3.types[o2] && e3.types[o2].length && t3.testIgnoreAllow(a2, r2, i2) && n2.push({ node: r2, eventable: e3, props: { interactable: t3 } });
          });
        }, "interactable:new": function(t2) {
          var e2 = t2.interactable;
          e2.events.getRect = function(t3) {
            return e2.getRect(t3);
          };
        }, "interactable:set": function(t2, e2) {
          var n2 = t2.interactable, r2 = t2.options;
          (0, M.default)(n2.events.options, e2.pointerEvents.defaults), (0, M.default)(n2.events.options, r2.pointerEvents || {});
        } } }, Zo = Ko;
        $o.default = Zo;
        var Jo = {};
        Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
        var Qo = { id: "pointer-events", install: function(t2) {
          t2.usePlugin(Xo), t2.usePlugin(Vo.default), t2.usePlugin($o.default);
        } }, ti = Qo;
        Jo.default = ti;
        var ei = {};
        function ni(t2) {
          var e2 = t2.Interactable;
          t2.actions.phases.reflow = true, e2.prototype.reflow = function(e3) {
            return function(t3, e4, n2) {
              for (var r2 = i.default.string(t3.target) ? H.from(t3._context.querySelectorAll(t3.target)) : [t3.target], o2 = n2.window.Promise, a2 = o2 ? [] : null, s2 = function() {
                var i2 = r2[l2], s3 = t3.getRect(i2);
                if (!s3)
                  return "break";
                var u2 = H.find(n2.interactions.list, function(n3) {
                  return n3.interacting() && n3.interactable === t3 && n3.element === i2 && n3.prepared.name === e4.name;
                }), c2 = void 0;
                if (u2)
                  u2.move(), a2 && (c2 = u2._reflowPromise || new o2(function(t4) {
                    u2._reflowResolve = t4;
                  }));
                else {
                  var f2 = (0, k.tlbrToXywh)(s3), d2 = { page: { x: f2.x, y: f2.y }, client: { x: f2.x, y: f2.y }, timeStamp: n2.now() }, p2 = X.coordsToEvent(d2);
                  c2 = function(t4, e5, n3, r3, o3) {
                    var i3 = t4.interactions.new({ pointerType: "reflow" }), a3 = { interaction: i3, event: o3, pointer: o3, eventTarget: n3, phase: "reflow" };
                    i3.interactable = e5, i3.element = n3, i3.prevEvent = o3, i3.updatePointer(o3, o3, n3, true), X.setZeroCoords(i3.coords.delta), (0, Xt.copyAction)(i3.prepared, r3), i3._doPhase(a3);
                    var s4 = t4.window.Promise, l3 = s4 ? new s4(function(t5) {
                      i3._reflowResolve = t5;
                    }) : void 0;
                    return i3._reflowPromise = l3, i3.start(r3, e5, n3), i3._interacting ? (i3.move(a3), i3.end(o3)) : (i3.stop(), i3._reflowResolve()), i3.removePointer(o3, o3), l3;
                  }(n2, t3, i2, e4, p2);
                }
                a2 && a2.push(c2);
              }, l2 = 0; l2 < r2.length && s2() !== "break"; l2++)
                ;
              return a2 && o2.all(a2).then(function() {
                return t3;
              });
            }(this, e3, t2);
          };
        }
        Object.defineProperty(ei, "__esModule", { value: true }), ei.default = void 0, ei.install = ni;
        var ri = { id: "reflow", install: ni, listeners: { "interactions:stop": function(t2, e2) {
          var n2 = t2.interaction;
          n2.pointerType === "reflow" && (n2._reflowResolve && n2._reflowResolve(), H.remove(e2.interactions.list, n2));
        } } }, oi = ri;
        ei.default = oi;
        var ii = { exports: {} };
        function ai(t2) {
          return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, ai(t2);
        }
        Object.defineProperty(ii.exports, "__esModule", { value: true }), ii.exports.default = void 0, xr.default.use(le.default), xr.default.use(Qe.default), xr.default.use(Jo.default), xr.default.use(ln.default), xr.default.use(To.default), xr.default.use(ae.default), xr.default.use(Et.default), xr.default.use(Dt.default), xr.default.use(ei.default);
        var si = xr.default;
        if (ii.exports.default = si, ai(ii) === "object" && ii)
          try {
            ii.exports = xr.default;
          } catch (t2) {
          }
        xr.default.default = xr.default, ii = ii.exports;
        var li = { exports: {} };
        function ui(t2) {
          return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, ui(t2);
        }
        Object.defineProperty(li.exports, "__esModule", { value: true }), li.exports.default = void 0;
        var ci = ii.default;
        if (li.exports.default = ci, ui(li) === "object" && li)
          try {
            li.exports = ii.default;
          } catch (t2) {
          }
        return ii.default.default = ii.default, li.exports;
      });
    }
  });

  // node_modules/lodash.debounce/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.debounce/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function() {
        return root.Date.now();
      };
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = debounce2;
    }
  });

  // src/modules/assessment-recorder/assessment-recorder.ts
  var import_html2canvas = __toESM(require_html2canvas(), 1);

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

  // src/strigo/consts.ts
  var INIT_SCRIPT_ID = "strigo-sdk";
  var BASE_STRIGO_URL = "strigo.io";
  var STRIGO_IFRAME_CLASSES = ["strigo-exercises"];
  var ORIGINAL_WEBSITE_IFRAME_CLASSES = ["orig-iframe"];
  var ACADEMY_HAT = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>
`;
  var CDN_BASE_PATH = "https://cdn.statically.io/gh/strigo/strigo-sdk";
  var ASSESSMENT_RECORDER_URL = "https://assessment-recorder.web.app";
  var LOCAL_STRIGO_URL = "http://local.strigo.io:3000";

  // src/modules/config/config.ts
  function getLocalStorageConfig() {
    const config = getStorageData("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */);
    return config;
  }
  function initLocalStorageConfig(initConfig) {
    const config = getLocalStorageConfig();
    const initializedConfig = setupStorage("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */, {
      ...config,
      ...initConfig
    });
    return initializedConfig;
  }
  function setupLocalStorageConfig(setupConfig) {
    const currentConfig = getLocalStorageConfig();
    const config = setupStorage("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */, {
      ...currentConfig,
      ...setupConfig
    });
    return config;
  }
  function setConfigValue(key, value) {
    const config = setStorageValue("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */, key, value);
    return config;
  }
  function getConfigValue(key) {
    const session = getLocalStorageConfig();
    return session?.[key];
  }
  function clearConfig() {
    clearStorage("localStorage" /* LOCAL_STORAGE */, "strigoConfig" /* STRIGO_CONFIG */);
  }
  async function fetchRemoteConfiguration(token) {
    try {
      const configDomain = window.Strigo.isDevelopment() ? LOCAL_STRIGO_URL : "https://app.strigo.io";
      const response = await fetch(`${configDomain}/api/internal/academy/v1/config?domain=${window.location.hostname}`, {
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
  async function sendSuccessEvent(token, eventName) {
    try {
      LoggerInstance.info("Sending success event to strigo", { eventName });
      const configDomain = window.Strigo.isDevelopment() ? LOCAL_STRIGO_URL : "https://app.strigo.io";
      const response = await fetch(`${configDomain}/api/internal/academy/v1/success-event`, {
        method: "POST",
        body: JSON.stringify({
          eventName
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`
        }
      });
      if (!response.ok) {
        throw new Error(`Failed sending success event to Strigo: ${response.statusText}`);
      }
      const successEventResponse = await response.json();
      LoggerInstance.info("Success event Response", { successEventResponse });
    } catch (err) {
      LoggerInstance.warn("Error sending success event to Strigo", { err });
      return null;
    }
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
      const config = getLocalStorageConfig();
      if (!config) {
        return {};
      }
      const { user, subDomain, initSite, version, selectedWidgetFlavor } = config;
      return {
        token: user?.token.token,
        initSite: initSite?.href,
        subDomain,
        development: window.Strigo.isDevelopment(),
        version,
        selectedWidgetFlavor
      };
    }
    log(level, message, context) {
      const enrichedContext = { ...this.getDefaultContext(), ...context };
      try {
        if (this.url && window.Strigo.isDevelopment()) {
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

  // src/modules/session/session.ts
  function setupSessionStorage(initialSession) {
    const session = setupStorage("sessionStorage" /* SESSION_STORAGE */, "strigoSession" /* STRIGO_SESSION */, initialSession);
    return session;
  }
  function getSession() {
    const session = getStorageData("sessionStorage" /* SESSION_STORAGE */, "strigoSession" /* STRIGO_SESSION */);
    return session;
  }
  function shouldPanelBeOpen() {
    return getSession() ? getSession().shouldPanelBeOpen : true;
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

  // src/modules/document/document.ts
  function getHostingAppWindow() {
    return window.top;
  }
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
  function move() {
    const widget = document.getElementById("strigo-widget");
    const collapseDiv = document.getElementById("strigo-collapse-div");
    const academyHat = document.getElementById("strigo-academy-hat");
    widget.classList.toggle("align-left");
    collapseDiv.classList.toggle("align-left");
    academyHat.classList.toggle("align-left");
    const dockingSide = widget.classList.contains("align-left") ? "left" /* LEFT */ : "right" /* RIGHT */;
    const strigoIframe = document.getElementById("strigo-exercises");
    setConfigValue("dockingSide", dockingSide);
    strigoIframe.contentWindow.postMessage({ dockingSide }, "*");
  }
  function removeWidget(hostingAppWindow) {
    hostingAppWindow.document.getElementById("strigo-widget").remove();
  }
  function openWidget() {
    const widget = document.getElementById("strigo-widget");
    widget.classList.add("slide-in");
    widget.classList.add("loaded");
    const collapseDiv = document.getElementById("strigo-collapse-div");
    collapseDiv.classList.remove("slide-in");
    const academyHat = document.getElementById("strigo-academy-hat");
    academyHat.classList.remove("slide-in");
  }
  function collapseWidget() {
    const widget = document.getElementById("strigo-widget");
    widget.classList.remove("slide-in");
    widget.classList.remove("loaded");
    const collapseDiv = document.getElementById("strigo-collapse-div");
    collapseDiv.classList.add("slide-in");
    const academyHat = document.getElementById("strigo-academy-hat");
    academyHat.classList.add("slide-in");
  }
  var navigationObserver = function(pageMutations) {
    const filteredMutations = pageMutations.filter((mutation) => {
      return ["HTML", "BODY"].includes(mutation.target.nodeName);
    });
    if (filteredMutations.length > 0) {
      const widget = window.document.getElementById("strigo-widget");
      if (widget) {
        console.log("*** Strigo widget already exist on the DOM.");
        return;
      }
      console.log("*** Reloading widget in navigation observer");
      setTimeout(window.Strigo.open.bind(window.Strigo), 0);
    }
  };
  function toggleWidget() {
    const previousOpenState = shouldPanelBeOpen();
    const shouldPanelBeOpen2 = !previousOpenState;
    setSessionValue("shouldPanelBeOpen", shouldPanelBeOpen2);
    if (shouldPanelBeOpen2) {
      openWidget();
    } else {
      collapseWidget();
    }
  }
  function createWidget(url) {
    const shouldPanelBeOpen2 = shouldPanelBeOpen();
    const dockingSide = getConfigValue("dockingSide");
    const academyHatDiv = document.createElement("div");
    academyHatDiv.className = "strigo-academy-hat";
    academyHatDiv.id = "strigo-academy-hat";
    academyHatDiv.onclick = () => {
      toggleWidget();
    };
    const academyHatIcon = document.createElement("div");
    academyHatIcon.className = "strigo-academy-hat-icon";
    academyHatIcon.id = "strigo-academy-hat-icon";
    academyHatIcon.innerHTML = ACADEMY_HAT;
    academyHatDiv.appendChild(academyHatIcon);
    const collapseDiv = document.createElement("div");
    collapseDiv.className = "strigo-collapse-div";
    collapseDiv.id = "strigo-collapse-div";
    const strigoExercisesIframe = document.createElement("iframe");
    strigoExercisesIframe.className = "strigo-iframe";
    strigoExercisesIframe.id = "strigo-exercises";
    strigoExercisesIframe.src = url;
    const widgetDiv = document.createElement("div");
    widgetDiv.id = "strigo-widget";
    widgetDiv.appendChild(collapseDiv);
    widgetDiv.appendChild(strigoExercisesIframe);
    if (dockingSide === "left" /* LEFT */) {
      widgetDiv.classList.add("align-left");
      collapseDiv.classList.add("align-left");
      academyHatDiv.classList.add("align-left");
    }
    document.body.appendChild(widgetDiv);
    document.body.appendChild(academyHatDiv);
    if (shouldPanelBeOpen2) {
      openWidget();
    } else {
      collapseWidget();
    }
    return strigoExercisesIframe;
  }
  function initNavigationObserver(hostingAppWindow) {
    hostingAppWindow.strigoNavigationObserver = {
      observer: new MutationObserver(navigationObserver)
    };
    const navigationObserverOptions = {
      childList: true,
      subtree: true
    };
    hostingAppWindow?.strigoNavigationObserver?.observer?.observe(hostingAppWindow.document, navigationObserverOptions);
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
        buildNodesInfoUpToRoot: false,
        threshold: 1e3,
        maxNumberOfTries: 2e3
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
        optimizedMinLength: 6,
        threshold: 1e3,
        maxNumberOfTries: 2e3,
        fallbackNodesInfo: nodesInfo,
        permutationsThreshold: 5e4
      };
      config = Object.assign(Object.assign({}, defaults), options);
      rootDocument = findRootDocument(config.root, defaults);
      const generateUniquePathWithFallbackPolicy = () => generateUniquePath(nodesInfo, Limit.All, () => generateUniquePath(nodesInfo, Limit.Two, () => generateUniquePath(nodesInfo, Limit.One, () => generateUniquePath(config.fallbackNodesInfo, Limit.All, () => generateUniquePath(config.fallbackNodesInfo, Limit.Two, () => generateUniquePath(config.fallbackNodesInfo, Limit.One))))));
      let pathToProduceSelectorsFrom = generateUniquePathWithFallbackPolicy();
      if (pathToProduceSelectorsFrom) {
        let selectorToFindElementBy = selector(pathToProduceSelectorsFrom);
        const element = rootDocument.querySelector(selectorToFindElementBy);
        const optimized = sort(optimize(pathToProduceSelectorsFrom, element));
        if (optimized.length > 0) {
          pathToProduceSelectorsFrom = optimized[0];
        }
        return selector(pathToProduceSelectorsFrom);
      } else {
        console.log("*** Selector was not found.");
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
    function countNumberOfPermutations(stack) {
      let numberOfPathPermutations = 1;
      stack.forEach((nodeLevel) => {
        numberOfPathPermutations = numberOfPathPermutations * nodeLevel.length;
      });
      return numberOfPathPermutations;
    }
    function generatePathStack(nodesInfo, limit) {
      let stack = nodesInfo.map(({ nodeIdentifiers, level }) => {
        let levelPath = getLevelPath(nodeIdentifiers, limit);
        for (let node of levelPath) {
          node.level = level;
        }
        return levelPath;
      });
      let numberOfPathPermutations = countNumberOfPermutations(stack);
      if (numberOfPathPermutations > config.permutationsThreshold) {
        return null;
      }
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
        if (!config.buildNodesInfoUpToRoot && nodesInfo.length >= config.seedMinLength) {
          const generateUniquePathWithFallbackPolicy = generateUniquePath(nodesInfo, Limit.All, () => generateUniquePath(nodesInfo, Limit.Two, () => generateUniquePath(nodesInfo, Limit.One, () => generateUniquePath(config.fallbackNodesInfo, Limit.All, () => generateUniquePath(config.fallbackNodesInfo, Limit.Two, () => generateUniquePath(config.fallbackNodesInfo, Limit.One))))));
          let pathToProduceSelectorsFrom = generateUniquePathWithFallbackPolicy();
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
      if (!pathStack) {
        return fallback ? fallback() : null;
      }
      return findUniquePath(pathStack, fallback);
    }
    function findUniquePath(stack, fallback) {
      const paths = sort(combinations(stack));
      if (paths.length > config.threshold) {
        return fallback ? fallback() : null;
      }
      for (let candidate of paths) {
        let isUnique = false;
        try {
          isUnique = unique(candidate);
        } catch (err) {
          continue;
        }
        if (isUnique || config.allowDuplicates) {
          return candidate;
        }
      }
      console.log("*** Did not found a unique path. returning null.");
      return fallback ? fallback() : null;
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
      return node.name !== "html" && !node.name.startsWith("#") && !config.allowDuplicates;
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
            console.log(`*** Selector optimization exhausted. Exceeded max number of tries - ${config.maxNumberOfTries}`);
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
      buildNodesInfoUpToRoot: true,
      optimizedMinLength: e.target.id ? 2 : 10,
      threshold: 1e3,
      attr: (name) => name === dataAttribute2
    };
    const nodesInfo = elementProfiler.getElementProfileNodesInfo(e.target, options);
    console.log("*** Just FYI - this is how it can generate css selector:", elementProfiler.generateSelectorFromNodesInfo(nodesInfo, options));
    return nodesInfo;
  }
  function getElementSelector(nodesInfo, options) {
    const elementProfiler = getElementProfiler();
    const defaultOptions = {
      allowDuplicates: false,
      optimizedMinLength: 10,
      threshold: 1e3,
      attr: (name) => name === dataAttribute,
      fallbackNodesInfo: nodesInfo
    };
    const consolidatedOptions = { ...defaultOptions, ...options };
    const elementSelector = elementProfiler.generateSelectorFromNodesInfo(nodesInfo, consolidatedOptions);
    return elementSelector;
  }
  function startElementSelector(rootDocument, options) {
    this.removeOverlayElement = () => {
      console.log("Removing mouse over event listener from the selected element.");
      rootDocument.removeEventListener("mouseover", this.mouseOverEvent);
      const selectorOverlay2 = rootDocument.getElementById("element-selector-overlay");
      if (!selectorOverlay2) {
        console.error("Missing selector overlay element!");
      }
      rootDocument?.body?.removeChild(selectorOverlay2);
    };
    this.saveSelectedSelector = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.removeOverlayElement();
      const elementProfile = getElementProfile(e, {
        dataAttribute: "some-custom-strigo-attribute"
      });
      this.elementProfile = elementProfile || {};
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
      const width = element.offsetWidth + 2;
      const height = element.offsetHeight + 2;
      function getPosition(el) {
        let x = 0;
        let y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
          x += el.offsetLeft - el.scrollLeft;
          y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
        }
        return { top: y - window.scrollY, left: x - window.scrollX };
      }
      const position = getPosition(element);
      const newDimensions = {
        top: position.top - 2 + "px",
        left: position.left - 2 + "px",
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
    window.focus();
    rootDocument.body.focus();
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        console.log("Aborting element selection...", e.key);
        this.removeOverlayElement();
        options.onElementSelectionCancel();
      }
    }, true);
  }

  // src/modules/assessment-recorder/assessment-recorder.types.ts
  var ASSESSMENT_RECORDER_ID_PARAM = "strigoAssessmentUuid";
  var ASSESSMENT_RECORDER_PARAM = "strigoAssessmentRecorder";

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
    const { subDomain, user, webApiKey } = config;
    return window.Strigo.isDevelopment() ? `${LOCAL_STRIGO_URL}/academy/courses?token=${user.token.token}&webApiKey=${webApiKey}` : `https://${subDomain}.${BASE_STRIGO_URL}/academy/courses?token=${user.token.token}&webApiKey=${webApiKey}`;
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
  function generateCssURL(version) {
    if (window.Strigo.isDevelopment()) {
      return `${"http://local.strigo.io:7002"}/styles/strigo.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo.min.css`;
    }
    return `${CDN_BASE_PATH}@master/dist/production/styles/strigo.min.css`;
  }
  function generateWidgetCssURL(version) {
    if (window.Strigo.isDevelopment()) {
      return `${"http://local.strigo.io:7002"}/styles/strigo-widget.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-widget.min.css`;
    }
    return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-widget.min.css`;
  }
  function generateAcademyHatCssURL(version) {
    if (window.Strigo.isDevelopment()) {
      return `${"http://local.strigo.io:7002"}/styles/strigo-academy-hat.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-academy-hat.min.css`;
    }
    return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-academy-hat.min.css`;
  }
  function generateRecorderCssURL(version) {
    if (window.Strigo.isDevelopment()) {
      return `${"http://local.strigo.io:7002"}/styles/strigo-assessment-recorder.css`;
    }
    if (version) {
      return `${CDN_BASE_PATH}@${version}/dist/production/styles/strigo-assessment-recorder.min.css`;
    }
    return `${CDN_BASE_PATH}@master/dist/production/styles/strigo-assessment-recorder.min.css`;
  }
  function generateAssessmentRecorderURL() {
    return window.Strigo.isDevelopment() ? "http://local.strigo.io:7015" : ASSESSMENT_RECORDER_URL;
  }
  function isRecordingUrlParamExists() {
    const { search } = window.location;
    const urlParams = extractUrlParams(search);
    return ASSESSMENT_RECORDER_PARAM in urlParams;
  }
  function getURLWithoutStrigoRecorderParams(url) {
    const capturedElementUrl = new URL(url);
    const searchParams = new URLSearchParams(capturedElementUrl.search);
    searchParams.delete(ASSESSMENT_RECORDER_ID_PARAM);
    searchParams.delete(ASSESSMENT_RECORDER_PARAM);
    capturedElementUrl.search = searchParams.toString();
    return capturedElementUrl.toString();
  }

  // src/modules/assessment-recorder/assessment-recorder.ts
  function isRecordingMode() {
    if (isRecordingUrlParamExists() || window.sessionStorage.getItem("isStrigoRecordingMode")) {
      return true;
    }
    return false;
  }
  function onElementProfileCreation(elementProfile, elementType) {
    const recorederIframe = document.getElementById("strigo-assessment-recorder-iframe");
    const elementSelector = getElementSelector(elementProfile);
    recorederIframe.classList.remove("semi-open");
    recorederIframe.classList.add("is-open");
    (0, import_html2canvas.default)(document.querySelector(elementSelector), { backgroundColor: "#c6c7e7" }).then((canvas) => {
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
        },
        windowName: window.name
      }), "*");
    });
  }
  function onElementSelectionCancel(elementType) {
    LoggerInstance.info("Aborting element selection...");
    const recorederIframe = document.getElementById("strigo-assessment-recorder-iframe");
    recorederIframe.contentWindow.postMessage(JSON.stringify({
      messageType: "end-capture" /* END_CAPTURE */,
      payload: {
        elementType,
        selectedElement: null
      },
      windowName: window.name
    }), "*");
    recorederIframe.classList.remove("semi-open");
    setTimeout(() => {
      recorederIframe.classList.add("is-open");
    }, 400);
  }
  function addAssessmentRecorderIframe() {
    window.sessionStorage.setItem("isStrigoRecordingMode", "true");
    const assessmentUuid = new URL(window.location.href).searchParams.get(ASSESSMENT_RECORDER_ID_PARAM);
    window.sessionStorage.setItem(ASSESSMENT_RECORDER_ID_PARAM, assessmentUuid);
    if (document.getElementById("strigo-assessment-recorder-iframe")) {
      return;
    }
    const assessmentRecorderUrl = generateAssessmentRecorderURL();
    appendCssFile({ parentElement: getHeadElement(), url: generateRecorderCssURL() });
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
          window.Strigo.startElementSelector((elementProfile) => onElementProfileCreation(elementProfile, elementType), () => onElementSelectionCancel(elementType), rootElementSelector);
          break;
        }
        case "submit-assessment" /* SUBMIT_ASSESSMENT */: {
          const recorderWindowId = window.sessionStorage.getItem(ASSESSMENT_RECORDER_ID_PARAM);
          window.sessionStorage.removeItem("isStrigoRecordingMode");
          const urlToSave = getURLWithoutStrigoRecorderParams(window.location.href);
          window.opener.postMessage({
            assessment: {
              ...payload.assessment,
              url: urlToSave
            },
            recorderWindowId
          }, "*");
          window.close();
          break;
        }
        case "cancel-assessment" /* CANCEL_ASSESSMENT */: {
          window.sessionStorage.removeItem("isStrigoRecordingMode");
          window.close();
          break;
        }
        default: {
          break;
        }
      }
    }, false);
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
  function initAssessmentStorage() {
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
  function setupAssessmentStorage(initialStorage) {
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

  // node_modules/split.js/dist/split.es.js
  var global2 = typeof window !== "undefined" ? window : null;
  var ssr = global2 === null;
  var document2 = !ssr ? global2.document : void 0;
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
      global2[removeEventListener]("mouseup", self2.stop);
      global2[removeEventListener]("touchend", self2.stop);
      global2[removeEventListener]("touchcancel", self2.stop);
      global2[removeEventListener]("mousemove", self2.move);
      global2[removeEventListener]("touchmove", self2.move);
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
      global2[addEventListener]("mouseup", self2.stop);
      global2[addEventListener]("touchend", self2.stop);
      global2[addEventListener]("touchcancel", self2.stop);
      global2[addEventListener]("mousemove", self2.move);
      global2[addEventListener]("touchmove", self2.move);
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

  // src/modules/widgets/overlay.ts
  var import_interactjs = __toESM(require_interact_min(), 1);

  // src/modules/no-code-assessment/no-code-assessment.ts
  var import_lodash = __toESM(require_lodash(), 1);
  var strigoLocationDataIdCamelCased = "strigoLocationId";
  var strigoLocationDataIdSnakeCased = "strigo-location-id";
  var exampleElementCountObserverOptions = {
    subtree: true,
    childList: true
  };
  var bodyObserverOptions = {
    subtree: true,
    characterData: true,
    childList: true
  };
  var locationHandlers = {};
  var assessmentState = {};
  var currentLocation;
  var assessments;
  function updateAssessmentState(assessmentId, updatedFields) {
    assessmentState[assessmentId] = { ...assessmentState[assessmentId], ...updatedFields };
  }
  function updateAssessmentStorageState(assessmentId, updatedRecord) {
    const previousState = window.sessionStorage.getItem(assessmentId);
    const parsedPreviousState = previousState ? JSON.parse(previousState) : {};
    const stateToUpdate = { ...parsedPreviousState, ...updatedRecord };
    window.sessionStorage.setItem(assessmentId, JSON.stringify(stateToUpdate));
  }
  function countAndUpdateExampleElements(assessment, locationElement) {
    const exampleElementProfile = assessment.recordedAssessment?.exampleElement?.profile;
    const softProfile = exampleElementProfile.map(({ nodeIdentifiers, level }) => {
      return {
        level,
        nodeIdentifiers: nodeIdentifiers.filter(({ identifier }) => identifier !== "className")
      };
    });
    let exampleElementSelector;
    try {
      exampleElementSelector = getElementSelector(exampleElementProfile, {
        allowDuplicates: true,
        fallbackNodesInfo: softProfile
      });
    } catch (e) {
      console.log("*** Failed to retrieve a selector for the example element");
      return;
    }
    const { _id } = assessment;
    const exampleElements = document.querySelectorAll(exampleElementSelector) || [];
    console.log("*** Example elements found:", exampleElements);
    const exampleElementsInsideTheLocationElement = Array.from(exampleElements).filter((exampleElement) => locationElement.contains(exampleElement));
    console.log("*** Example elements that are inside the location element:", exampleElementsInsideTheLocationElement);
    const currentExampleElementCount = exampleElementsInsideTheLocationElement?.length || 0;
    const previousAssessmentStorageState = window.sessionStorage.getItem(_id);
    const parsedPreviousAssessmentStorageState = previousAssessmentStorageState ? JSON.parse(previousAssessmentStorageState) : {};
    const previousExampleElementCount = parsedPreviousAssessmentStorageState?.[document.location.href];
    console.log("*** evaluating example element count", {
      currentExampleElementCount,
      previousExampleElementCount,
      exampleElementSelector,
      documentText: document.body.innerText.slice(0, 10)
    });
    if (!previousExampleElementCount) {
      console.log("*** Persisting example element count to local storage", { currentExampleElementCount });
      updateAssessmentStorageState(_id, { [document.location.href]: currentExampleElementCount });
      return currentExampleElementCount;
    }
    return currentExampleElementCount;
  }
  var onAssessmentSuccess = async (assessment, detectedMeta = {}) => {
    const { _id: assessmentId, challengeSuccessEvent } = assessment;
    console.log("*** Successfully detected assessment criteria!", {
      assessmentId,
      challengeSuccessEvent,
      ...assessment,
      window,
      ...detectedMeta
    });
    updateAssessmentState(assessmentId, { status: "SUCCESS" /* SUCCESS */ });
    LoggerInstance.info(`sent event ${challengeSuccessEvent}`);
    await window.Strigo.sendEvent(challengeSuccessEvent);
  };
  function assessAddedItems(mutations) {
    console.log("*** Got an item count mutation in the location element!");
    if (currentLocation !== document.location.href) {
      console.log("*** Aborting element count due to race condition");
      return;
    }
    const { challengeSuccessEvent, _id } = this.assessment;
    if (assessmentState[_id]?.status === "SUCCESS" /* SUCCESS */) {
      console.log("*** Assessment already completed successfully.");
      return;
    }
    let currentExampleElementCount;
    try {
      currentExampleElementCount = countAndUpdateExampleElements(this.assessment, this.locationElement);
    } catch (e) {
      return;
    }
    const previousAssessmentStorageState = window.sessionStorage.getItem(_id);
    const parsedPreviousAssessmentStorageState = previousAssessmentStorageState ? JSON.parse(previousAssessmentStorageState) : {};
    const previousExampleElementCount = parsedPreviousAssessmentStorageState?.[document.location.href];
    if (previousExampleElementCount && currentExampleElementCount > parseInt(previousExampleElementCount)) {
      console.log("*** Yo! we got a successfully added item!", {
        currentExampleElementCount,
        previousExampleElementCount
      });
      updateAssessmentStorageState(_id, { [document.location.href]: currentExampleElementCount });
      onAssessmentSuccess(this.assessment);
      locationHandlers[_id].observer.disconnect();
      delete locationHandlers[_id];
    }
  }
  var getLocationElement = (assessmentId, locationElementProfile) => {
    let locationElement;
    let locationElementSelector;
    const cachedLocationElement = assessmentState[assessmentId]?.locationElement;
    const isLocationElementStillOnDOM = window.document.contains(cachedLocationElement);
    if (cachedLocationElement && isLocationElementStillOnDOM) {
      console.log("*** Got a cached location element...", cachedLocationElement);
      locationElement = cachedLocationElement;
    } else {
      try {
        const softProfile = locationElementProfile.map(({ nodeIdentifiers, level }) => {
          return {
            level,
            nodeIdentifiers: nodeIdentifiers.filter(({ identifier }) => identifier !== "className")
          };
        });
        locationElementSelector = getElementSelector(locationElementProfile, { threshold: 5e3 });
        console.log("*** Retrieving location element by selector:", locationElementSelector);
        locationElement = window.document.querySelector(locationElementSelector);
        console.log("*** Found location element:", {
          locationElement,
          locationElementSelector
        });
        updateAssessmentState(assessmentId, { locationElement });
      } catch (err) {
        console.log("*** Error in selecting Location element", err);
      }
    }
    return { locationElement, locationElementSelector };
  };
  var addLocationContextElement = function(locationElementToDebug, locationElementSelector) {
    const newStrigoContextElement = window.document.createElement("div");
    newStrigoContextElement.dataset[strigoLocationDataIdCamelCased] = locationElementSelector;
    const calcDimensions = {
      top: -window.scrollY,
      left: -window.scrollX
    };
    let elem = locationElementToDebug;
    while (elem && elem !== window.document.body) {
      calcDimensions.top += elem.offsetTop;
      calcDimensions.left += elem.offsetLeft;
      elem = elem.offsetParent;
    }
    const locationContextElementStyle = `
      position: fixed;
      top: ${calcDimensions.top - 40}px;
      left: ${calcDimensions.left}px;
      z-index: 2147483646;
      position: fixed;
    `;
    newStrigoContextElement.setAttribute("style", locationContextElementStyle);
    window.document.body.appendChild(newStrigoContextElement);
    return newStrigoContextElement;
  };
  var addAssessmentDebugUI = function(locationElementToDebug, locationElementSelector, assessment) {
    const previousDebugAssessmentContextElement = window.document.getElementById(`${assessment._id}-context-overlay`);
    if (previousDebugAssessmentContextElement) {
      console.log("*** Already got an existing debug element for this assessment.", assessment);
      return;
    }
    locationElementToDebug.style.border = "2px dashed #696CBF";
    locationElementToDebug.style["border-radius"] = "4px";
    const assessmentContextElement = window.document.createElement("div");
    assessmentContextElement.setAttribute("id", `${assessment._id}-context-overlay`);
    const assessmentContextElementStyle = `
      width: 400px;
      padding: 1px;
      background: rgba(226, 226, 252, 0.90);
      border: 1px solid #696CBF;
      box-sizing: border-box;
      border-radius: 4px;
      color: #696CBF;
  `;
    assessmentContextElement.setAttribute("style", assessmentContextElementStyle);
    assessmentContextElement.innerHTML = `
    <div>assessmentId: ${assessment?._id}</div>
    <div>Expected text: ${assessment?.recordedAssessment?.expectedText}</div>
    <div>Selector used: ${locationElementSelector}</div>
  `;
    console.log("*** Appending assessment debug context element.");
    const strigoContextElement = window.document.querySelectorAll(`[data-${strigoLocationDataIdSnakeCased}="${locationElementSelector}"]`)?.[0];
    if (strigoContextElement) {
      strigoContextElement.appendChild(assessmentContextElement);
    } else {
      const newLocationContextElement = addLocationContextElement(locationElementToDebug, locationElementSelector);
      newLocationContextElement.appendChild(assessmentContextElement);
    }
  };
  var evaluateAssessments = function() {
    console.log("*** Evaluating Assessments...", {
      bodyTextDuringAssessment: window.document.body.innerText.slice(0, 50)
    });
    assessments.forEach((assessment) => {
      const { recordedAssessment, challengeSuccessEvent, _id } = assessment;
      const { actionType, expectedText } = recordedAssessment;
      const locationElementProfile = recordedAssessment?.locationElement?.profile;
      if (!locationElementProfile) {
        console.log("*** missing location element profile. Aborting...");
        return;
      }
      if (assessmentState?.[_id]?.status === "SUCCESS" /* SUCCESS */) {
        console.log('*** Assessment already in "success" status. Aborting...');
        return;
      }
      updateAssessmentState(_id, { status: "pending" /* PENDING */ });
      const { locationElement, locationElementSelector } = getLocationElement(_id, locationElementProfile);
      if (!locationElement) {
        console.log("*** Failed to find location element. Aborting assessment evaluation...");
        return;
      }
      const isInDebugMode = getLocalStorageConfig()?.isAcademyAssessmentDebug;
      if (isInDebugMode) {
        addAssessmentDebugUI(locationElement, locationElementSelector, assessment);
      }
      switch (actionType) {
        case "added-item" /* ADDED_ITEM */: {
          const boundedAssessAddedItems = assessAddedItems.bind({ assessment, locationElement, window });
          if (locationHandlers[_id]?.observer && locationElement === locationHandlers[_id].element) {
            locationHandlers[_id].element = locationElement;
            try {
              boundedAssessAddedItems([]);
              locationHandlers[_id].observer.observe(locationElement, exampleElementCountObserverOptions);
              LoggerInstance.info("Same reference - no need to observe again");
              console.log(" *** Same reference - no need to observe again", locationElement);
            } catch (e) {
              console.log("*** Got an error in item count", e);
              break;
            }
            break;
          }
          if (locationHandlers[_id]?.observer) {
            try {
              boundedAssessAddedItems([]);
              locationHandlers[_id].observer.observe(locationElement, exampleElementCountObserverOptions);
              LoggerInstance.info("DOM Reference have changed - observing again");
              console.log(" *** DOM Reference have changed - observing again", locationElement);
            } catch (e) {
              console.log("*** Got an error in item count", e);
              break;
            }
            break;
          }
          locationHandlers[_id] = {
            element: locationElement,
            observer: new MutationObserver(boundedAssessAddedItems)
          };
          try {
            boundedAssessAddedItems([]);
            locationHandlers[_id].observer.observe(locationElement, exampleElementCountObserverOptions);
          } catch (e) {
            console.log("*** Got an error in item count", e);
            break;
          }
          break;
        }
        case "text-change" /* TEXT_CHANGE */: {
          console.log("*** Assessing text changes in location element...", {
            locationElement,
            locationElementType: locationElement instanceof HTMLInputElement ? "input" : "non-input",
            innerTextValue: locationElement instanceof HTMLInputElement ? locationElement?.value : locationElement?.innerText,
            expectedText
          });
          if (locationElement instanceof HTMLInputElement) {
            if (locationElement?.value?.includes(expectedText)) {
              onAssessmentSuccess(assessment, { locationElement });
              break;
            }
          }
          if (locationElement?.innerText?.includes(expectedText)) {
            onAssessmentSuccess(assessment, { locationElement });
            break;
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  };
  var documentObserverHandler = function(pageMutations) {
    const isAddedNodes = pageMutations.some((mutation) => mutation.addedNodes?.length > 0);
    const isCharacterDataChanged = pageMutations.some((mutation) => mutation.type == "characterData");
    console.log("#####", { isAddedNodes, isCharacterDataChanged });
    if (!isAddedNodes && !isCharacterDataChanged) {
      console.log("*** No added nodes and no character data change were detected after url change.", {
        previousLocation: currentLocation || "",
        newLocation: document.location.href
      });
      return;
    }
    if (currentLocation === document.location.href) {
      console.log("*** No URL change and no nodes were added.");
    } else {
      console.log("*** Detected URL change!", {
        previousLocation: currentLocation || "",
        newLocation: document.location.href
      });
      currentLocation = document.location.href;
    }
    initDocumentObserver(window);
  };
  var initDocumentObserver = (0, import_lodash.default)((windowToObserve) => {
    console.log("*** Initializing document observer");
    assessments = getAssessmentsStorageData().assessments.filter(({ assessmentType }) => assessmentType === "recorded-flow");
    if (!window?.strigoObserver?.observer) {
      console.log("*** Adding Strigo observer to document body");
      window.strigoObserver = {
        observer: new MutationObserver(documentObserverHandler),
        observedBodyElement: window.document.body
      };
      evaluateAssessments();
      console.log("*** Starting to observe document body");
      window?.strigoObserver?.observer?.observe(window.document, bodyObserverOptions);
      return;
    }
    evaluateAssessments();
    if (!window.document.contains(window.strigoObserver.observedBodyElement)) {
      console.log('*** Detected a "body" element change. Re-initializing the document observer...');
      window.strigoObserver.observedBodyElement = window.document.body;
      window.strigoObserver.observer.observe(window.document, bodyObserverOptions);
    }
  }, 500);

  // src/modules/widgets/overlay.ts
  var MINIMUM_WIDTH = 342;
  function postDockableStateToStrigo() {
    console.log("Posting dockable state to Strigo...");
    const dockingSide = getConfigValue("dockingSide");
    const strigoIframe = document.getElementById("strigo-exercises");
    strigoIframe.contentWindow.postMessage({ dockable: true, dockingSide }, "*");
  }
  function setupResizeFunctionality() {
    const [maxWidth] = getSplitMaxSizes();
    (0, import_interactjs.default)("#strigo-widget").resizable({
      edges: { left: "#strigo-collapse-div", right: "#strigo-collapse-div.align-left", bottom: false, top: false },
      listeners: {
        move(event) {
          const target = event.target;
          target.style.width = `${event.rect.width < MINIMUM_WIDTH ? MINIMUM_WIDTH : event.rect.width > maxWidth ? maxWidth : event.rect.width}px`;
        },
        start() {
          const strigoExercisesIframe = document.getElementById("strigo-exercises");
          strigoExercisesIframe.style.pointerEvents = "none";
        },
        end() {
          const strigoExercisesIframe = document.getElementById("strigo-exercises");
          strigoExercisesIframe.style.pointerEvents = "auto";
        }
      },
      modifiers: [
        import_interactjs.default.modifiers.restrictEdges({
          outer: "parent"
        })
      ]
    });
  }
  var OverlayWidget = class {
    init() {
      LoggerInstance.info("overlay init called");
      return "OVERLAY" /* OVERLAY */;
    }
    setup({ version }) {
      LoggerInstance.info("overlay setup called");
      appendCssFile({
        parentElement: getHeadElement(),
        url: generateWidgetCssURL(version)
      });
      appendCssFile({
        parentElement: getHeadElement(),
        url: generateAcademyHatCssURL(version)
      });
      const academyPlayerFrame = createWidget(generateStrigoIframeURL(getLocalStorageConfig()));
      const hostingAppWindow = getHostingAppWindow();
      this.initEventListeners(hostingAppWindow, academyPlayerFrame);
      console.log("adding observer");
      initDocumentObserver(hostingAppWindow);
      initNavigationObserver(hostingAppWindow);
      console.log("observer added");
      setupResizeFunctionality();
    }
    shutdown() {
      LoggerInstance.info("overlay shutdown called");
      const hostingAppWindow = getHostingAppWindow();
      this.removeEventListeners(hostingAppWindow);
      hostingAppWindow?.strigoObserver?.observer?.disconnect();
      removeWidget(hostingAppWindow);
    }
    collapse() {
      LoggerInstance.info("overlay collapse called");
      toggleWidget();
    }
    open() {
      openWidget();
      postDockableStateToStrigo();
    }
    move() {
      move();
    }
    initEventListeners(hostingAppWindow, academyPanelFrame) {
      initAcademyPanelLoadedListeners(academyPanelFrame, postDockableStateToStrigo);
      initHostEventListeners(hostingAppWindow);
    }
    removeEventListeners(hostingAppWindow) {
      removeHostEventListeners();
    }
  };
  var overlay_default = new OverlayWidget();

  // src/modules/listeners/listeners.ts
  function onHostEventHandler(ev) {
    if (!ev || !ev.data) {
      return;
    }
    switch (ev.data) {
      case "move" /* MOVE */: {
        LoggerInstance.info("Panel move message received");
        if (getWidgetFlavor() === "overlay" /* OVERLAY */) {
          overlay_default.move();
        }
        break;
      }
      case "close" /* SHUTDOWN */: {
        LoggerInstance.info("Shutdown message received - will collapse panel");
        window.Strigo?.collapse();
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
  function initHostEventListeners(hostWindow) {
    hostWindow.addEventListener("message" /* MESSAGE */, onHostEventHandler, false);
  }
  function removeHostEventListeners() {
    window.removeEventListener("message" /* MESSAGE */, onHostEventHandler);
  }
  function initAcademyPanelLoadedListeners(academyPanelframe, onLoadCallback) {
    academyPanelframe.addEventListener("load", async () => {
      if (!!getSessionValue("isLoading")) {
        if (onLoadCallback) {
          await onLoadCallback();
        }
        setSessionValue("isLoading", false);
      }
    });
  }
  function initChildEventListeners(childIframe) {
    const originalHost = getConfigValue("initSite")?.host;
    childIframe.addEventListener("load", function() {
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
  function setupResizeFunctionality2() {
    return split_es_default(["#strigo-exercises", "#original-site"], {
      sizes: [25, 75],
      maxSize: getSplitMaxSizes(),
      minSize: getSplitMinSizes(),
      gutterSize: 2
    });
  }
  async function makeIframeWidgetVisible() {
    await hideLoader();
    const strigoIframe = document.getElementById("strigo-exercises");
    strigoIframe.contentWindow.postMessage({ dockable: false }, "*");
  }
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
    setup({ version }) {
      LoggerInstance.info("iframe setup started");
      clearDoc();
      appendCssFile({
        parentElement: getHeadElement(),
        url: generateCssURL(version)
      });
      appendCssFile({
        parentElement: getHeadElement(),
        url: generateAcademyHatCssURL(version)
      });
      showLoader();
      const config = getLocalStorageConfig();
      const mainDiv = generatePageStructure();
      const academyPanelFrame = appendIFrame({
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
      const academyHatDiv = document.createElement("div");
      academyHatDiv.className = "strigo-academy-hat align-left";
      academyHatDiv.id = "strigo-academy-hat";
      academyHatDiv.onclick = () => {
        const academyHat = document.getElementById("strigo-academy-hat");
        academyHat.classList.toggle("slide-in");
        this.splitInstance = setupResizeFunctionality2();
      };
      const academyHatIcon = document.createElement("div");
      academyHatIcon.className = "strigo-academy-hat-icon";
      academyHatIcon.id = "strigo-academy-hat-icon";
      academyHatIcon.innerHTML = ACADEMY_HAT;
      academyHatDiv.appendChild(academyHatIcon);
      mainDiv.appendChild(academyHatDiv);
      this.splitInstance = setupResizeFunctionality2();
      const hostingAppWindow = getHostingAppWindow();
      this.initEventListeners(hostingAppWindow, academyPanelFrame, childFrame);
    }
    collapse() {
      if (this.splitInstance) {
        this.splitInstance.destroy();
        this.splitInstance = split_es_default(["#strigo-exercises", "#original-site"], {
          sizes: [25, 75],
          minSize: 0,
          gutterSize: 0
        });
        this.splitInstance.collapse(0);
        const academyHat = document.getElementById("strigo-academy-hat");
        academyHat.classList.toggle("slide-in");
      }
    }
    open() {
    }
    shutdown() {
      LoggerInstance.info("iframe shutdown called");
      reloadPage();
    }
    initEventListeners(hostingAppWindow, academyPanelFrame, childFrame) {
      initAcademyPanelLoadedListeners(academyPanelFrame, makeIframeWidgetVisible);
      initChildEventListeners(childFrame);
      initHostEventListeners(childFrame.contentWindow);
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
    isDevelopment() {
      return true;
    }
    init() {
      try {
        LoggerInstance.info("Initializing SDK...");
        if (this.config.initialized) {
          LoggerInstance.info("SDK was already initialized");
          return;
        }
        initAssessmentStorage();
        const { webApiKey, subDomain, selectedWidgetFlavor } = extractInitScriptParams();
        if (!webApiKey || !subDomain || !selectedWidgetFlavor) {
          throw new Error("Init data is missing");
        }
        const widgetFlavor = getWidgetFlavor2(selectedWidgetFlavor);
        initLocalStorageConfig({ webApiKey, subDomain, selectedWidgetFlavor: widgetFlavor });
        const widget = getWidget(widgetFlavor);
        this.config.sdkType = widget.init();
        this.config.initialized = true;
        LoggerInstance.info("Initialized SDK.");
        if (this.config.sdkType !== "CHILD" /* CHILD */ && shouldPanelBeOpen()) {
          this.setup();
        }
      } catch (err) {
        LoggerInstance.error("Could not initialize SDK", { err });
      }
    }
    async setup(data) {
      try {
        LoggerInstance.info("Starting to setup SDK...");
        const strigoWidget = document.getElementById("strigo-widget");
        const isPanelOpen = this.config.isOpen && strigoWidget;
        if (isPanelOpen || this.config.sdkType === "CHILD" /* CHILD */) {
          LoggerInstance.info('panel is already opened. Aborting "setup" action...');
          return;
        }
        if (!this.config.initialized) {
          throw new Error("SDK was not initialized");
        }
        const config = getLocalStorageConfig();
        const {
          email,
          token,
          version,
          openWidget: openWidget2 = true,
          dockingSide = "right" /* RIGHT */
        } = { ...config.user, ...config, ...data };
        if (!email || !token) {
          throw new Error("Setup data is missing");
        }
        const configuration = await fetchRemoteConfiguration(token);
        if (!configuration?.allowedAcademyDomains?.includes(window.location.host.replace(/^www\./i, ""))) {
          console.log("Running on an unrelated domain. Aborting...", {
            allowedDomains: configuration?.allowedAcademyDomains,
            currentHost: window.location.host
          });
          return;
        }
        if (configuration) {
          const { loggingConfig, userAssessments } = configuration;
          LoggerInstance.debug("Configuration fetched from Strigo");
          LoggerInstance.setup(loggingConfig);
          setupAssessmentStorage(userAssessments);
        }
        setupLocalStorageConfig({
          user: {
            email,
            token
          },
          initSite: getUrlData(),
          version,
          loggingConfig: configuration?.loggingConfig,
          isAcademyAssessmentDebug: configuration?.isAcademyAssessmentDebug,
          dockingSide
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
        const strigoWidget = document.getElementById("strigo-widget");
        const isPanelOpen = this.config.isOpen && strigoWidget;
        if (isPanelOpen || this.config.sdkType === "CHILD" /* CHILD */) {
          LoggerInstance.info('Panel is already opened. Aborting "open" action...');
          return;
        }
        const config = getLocalStorageConfig();
        setupSessionStorage({
          currentUrl: config.initSite.href,
          shouldPanelBeOpen: shouldPanelBeOpen(),
          isLoading: true,
          widgetFlavor: config.selectedWidgetFlavor
        });
        const widget = getWidget(config.selectedWidgetFlavor);
        widget.setup({ version: config.version });
        this.config.isOpen = true;
        LoggerInstance.info("Opened academy panel.");
      } catch (err) {
        LoggerInstance.error("Could not open academy panel", { err });
      }
    }
    collapse() {
      LoggerInstance.info("Collapsing academy panel");
      const { selectedWidgetFlavor } = getLocalStorageConfig();
      const widget = getWidget(selectedWidgetFlavor);
      widget.collapse();
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
        widget.collapse();
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
        clearAssessmentStorage();
        this.shutdown();
        this.config = {};
        LoggerInstance.info("Destroyed SDK.");
      } catch (err) {
        LoggerInstance.error("Could not destroy SDK", { err });
      }
    }
    async sendEvent(eventName) {
      const user = getConfigValue("user");
      const { token } = user;
      await sendSuccessEvent(token, eventName);
      LoggerInstance.debug("sendEvent called", { eventName });
    }
    startElementSelector(onElementProfileCreated, onElementSelectionCancel2, rootElementSelector) {
      LoggerInstance.debug("startElementSelector called");
      const rootElement = rootElementSelector ? window.document.querySelector(rootElementSelector) : window.document.body;
      startElementSelector(window.document, {
        onElementProfileCreated,
        onElementSelectionCancel: onElementSelectionCancel2,
        zIndex: 9999999999,
        rootElement
      });
    }
    assessmentRecorder() {
      addAssessmentRecorderIframe();
    }
  };
  var Strigo = new StrigoSDK();

  // src/strigo.sdk.ts
  window.Strigo = Strigo;
  if (isRecordingMode()) {
    console.log("Strigo recorder mode");
    window.Strigo.assessmentRecorder();
  } else {
    window.Strigo.init();
  }
})();
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
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
