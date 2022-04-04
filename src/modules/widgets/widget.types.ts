import { SDK_TYPES } from "../../strigo/types";

export enum WIDGET_FLAVORS {
  IFRAME = "iframe",
  OVERLAY = "overlay",
  DYNAMIC = "dynamic"
}

export interface StrigoWidget {
  init: () => SDK_TYPES;
  setup: (params: { development: boolean, version?: string }) => void;
  shutdown: () => void;
  hideLoader: () => void;
  initEventListeners: (academyPlayerFrame: HTMLIFrameElement) => void;
}

export interface OverlayWidget extends StrigoWidget {
  open: () => void;
}