import { Logger } from '../../services/logger';
import { isIframeSupported } from '../document/document';

import iframeWidget from './iframe';
import overlayWidget from './overlay';
import { WidgetFlavors, IStrigoWidget } from './widget.types';

export function getWidgetFlavor(selectedWidgetFlavor?: WidgetFlavors): WidgetFlavors {
  if (selectedWidgetFlavor && selectedWidgetFlavor === WidgetFlavors.DYNAMIC) {
    return isIframeSupported() ? WidgetFlavors.IFRAME : WidgetFlavors.OVERLAY;
  }

  return selectedWidgetFlavor;
}

export function getWidget(widgetFlavor: WidgetFlavors): IStrigoWidget | null {
  let widget = null;

  switch (widgetFlavor) {
    case WidgetFlavors.IFRAME: {
      widget = iframeWidget;
      break;
    }

    case WidgetFlavors.OVERLAY: {
      widget = overlayWidget;
      break;
    }

    default:
      Logger.error('Widget flavor is not supported', { widgetFlavor });

      throw new Error(`Widget flavor ${widgetFlavor} is not supported`);
  }

  return widget;
}
