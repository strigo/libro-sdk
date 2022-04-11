import { EVENT_TYPES, MESSAGE_TYPES } from "./listeners.types";
import * as eventsSender from "../events-sender/events-sender";
import * as sessionManager from "../session/session";
import { STORAGE_NAMES } from "../storage-utils/storage-utils.types";
import ovelayWidget from "../widgets/overlay";
import { Logger } from "../../../services/logger";
import { WIDGET_FLAVORS } from "../widgets/widget.types";

// TODO: Remove all existing event listeners
export function removeAllEventListeners() {}

export function storageChanged({ key, oldValue, newValue }) {
  if (key !== STORAGE_NAMES.STRIGO_EVENTS) {
    return;
  }
  const newEventsStorage = JSON.parse(newValue)?.events;
  const oldEventsStorage = JSON.parse(oldValue)?.events;
  const difference = newEventsStorage.filter(
    ({ eventName: newEventName }) =>
      !oldEventsStorage.some(({ eventName: oldEventName }) => newEventName === oldEventName)
  );

  if (difference.length > 0) {
    eventsSender.postEventMessage();
  }
}

// Host event listeners
export function initHostEventListeners() {
  window.addEventListener(
    EVENT_TYPES.MESSAGE,
    (ev) => {
      if (!ev || !ev.data) return;
      switch (ev.data) {
        case MESSAGE_TYPES.SHUTDOWN: {
          window.Strigo && window.Strigo.shutdown();

          break;
        }
        case MESSAGE_TYPES.CHALLENGE_SUCCESS: {
          Logger.info("Challenge event success received");
          if (sessionManager.getWidgetFlavor() === WIDGET_FLAVORS.OVERLAY) {
            ovelayWidget.open();
          }

          break;
        }
        default: {
          break;
        }
      }
    },
    false
  );
}

export function initAcademyPlayerLoadedListeners(academyPlayerIframe: HTMLElement, onLoadCallback?: () => Promise<void> | void) {
  academyPlayerIframe.addEventListener("load", async () => {
    if (!!sessionManager.getSessionValue("isLoading")) {
      if (onLoadCallback) {
        await onLoadCallback();
      }

      sessionManager.setSessionValue("isLoading", false);
    }
    
    // Emptying events storage and posting all events
    eventsSender.postAllEventMessages();
  });
}
