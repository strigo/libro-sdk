export enum WIDGET_FLAVORS {
  IFRAME = "iframe",
  OVERLAY = "overlay",
  DYNAMIC = "dynamic"
}

export interface StrigoSession {
  currentUrl: string;
  isPanelOpen: boolean;
  isLoading?: boolean;
  widgetFlavor: WIDGET_FLAVORS;
}
