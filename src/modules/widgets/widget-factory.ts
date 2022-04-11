import { Logger } from "../../../services/logger";
import { isIframeSupported } from "../document/document";
import iframeWidget from './iframe';
import overlayWidget from './overlay';
import { WIDGET_FLAVORS, IStrigoWidget } from "./widget.types";

export function getWidgetFlavor(selectedWidgetFlavor?: WIDGET_FLAVORS): WIDGET_FLAVORS {
  if (selectedWidgetFlavor && selectedWidgetFlavor === WIDGET_FLAVORS.DYNAMIC) {
    return isIframeSupported() ? WIDGET_FLAVORS.IFRAME : WIDGET_FLAVORS.OVERLAY;
  }
  return selectedWidgetFlavor;
}

export function getWidget(widgetFlavor: WIDGET_FLAVORS): IStrigoWidget | null {
  let widget = null;

  switch (widgetFlavor) {
    case WIDGET_FLAVORS.IFRAME: {
      widget = iframeWidget;
      break;
    }
    case WIDGET_FLAVORS.OVERLAY: {
      widget = overlayWidget;
      break;
    }
    default:
      Logger.error("Widget flavor is not supported", { widgetFlavor });
      
      throw new Error(`Widget flavor ${widgetFlavor} is not supported`)
  }

  return widget;
}