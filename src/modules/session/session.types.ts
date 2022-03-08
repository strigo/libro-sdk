export enum WIDGET_TYPES {
  IFRAME = "iframe",
  OVERLAY = "overlay"
}

export interface StrigoSession {
  currentUrl: string;
  isPanelOpen: boolean;
  isLoading?: boolean;
  widgetType: WIDGET_TYPES;
}
