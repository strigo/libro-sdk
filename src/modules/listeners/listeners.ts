import { EVENT_TYPES, MESSAGE_TYPES } from "./listeners.types";

// TODO: Remove all existing event listeners
export function removeAllEventListeners() {}

// Host event listeners
export function initHostEventListeners() {
  window.addEventListener(
    EVENT_TYPES.MESSAGE,
    (ev) => {
      if (!ev || !ev.data) return;

      switch (ev.data) {
        case MESSAGE_TYPES.SHUTDOWN: {
          window.StrigoSDK && window.StrigoSDK.shutdown();

          break;
        }
        default: {
          break;
        }
      }
    },
    false
  );

  //TODO: Add storage event listeners here
}
