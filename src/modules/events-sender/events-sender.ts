import * as eventsStorageManager from '../events-storage/events-storage';
import { Logger } from '../../services/logger';

export function postEventMessage(): void {
  const newEvent = eventsStorageManager.getEventValue();

  if (newEvent) {
    Logger.info('Posting event', newEvent);
    const strigoIframe = document.getElementById('strigo-exercises') as HTMLIFrameElement;
    strigoIframe.contentWindow.postMessage(newEvent, '*');
    const poppedEvent = eventsStorageManager.popEventValue();

    if (newEvent.eventName !== poppedEvent.eventName) {
      console.error("Events storage error: popped event doesn't match new event", { newEvent, poppedEvent });
    }
  }
}

export function postAllEventMessages(): void {
  while (eventsStorageManager.getEventValue()) {
    postEventMessage();
  }
}
