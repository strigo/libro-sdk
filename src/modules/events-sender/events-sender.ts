import * as eventsStorageManager from "../events-storage/events-storage";
import { Logger } from "../../../services/logger";

export function postEventMessage() {
  const newEvent = eventsStorageManager.getEventValue();
  if (newEvent) {
    Logger.info("Posting event", newEvent);
    window.frames[0].postMessage(newEvent, "*");
    const poppedEvent = eventsStorageManager.popEventValue();
    if (newEvent.eventName !== poppedEvent.eventName) {
      console.error("Events storage error: popped event doesn't match new event", { newEvent, poppedEvent });
    }
  }
}

export function postAllEventMessages() {
  while (eventsStorageManager.getEventValue()) {
    postEventMessage();
  }
}
