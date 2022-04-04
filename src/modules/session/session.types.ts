import { WIDGET_FLAVORS } from "../widgets/widget.types";
export interface StrigoSession {
  currentUrl: string;
  isPanelOpen: boolean;
  isLoading?: boolean;
  widgetFlavor: WIDGET_FLAVORS;
}
