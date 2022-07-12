import { StorageNames, StorageTypes } from '../storage-utils/storage-utils.types';
import { Logger } from '../../services/logger';
import * as sessionManager from '../session/session';
import { EventTypes } from '../listeners/listeners.types';
import { WidgetFlavors } from '../widgets/widget.types';

import { StrigoEventsStorage, StrigoEvent } from './events-storage.types';

export function getEventsStorageData(): StrigoEventsStorage {
  try {
    return JSON.parse(window[StorageTypes.LOCAL_STORAGE].getItem(StorageNames.STRIGO_EVENTS));
  } catch (error) {
    Logger.error('Get events storage error', { error });

    return null;
  }
}

export function initEventsStorage(): StrigoEventsStorage {
  try {
    const currentEventsStorage = getEventsStorageData();

    if (currentEventsStorage) {
      Logger.debug('Events storage already exists');

      return currentEventsStorage;
    }

    const storageEvents = { events: [] };
    window[StorageTypes.LOCAL_STORAGE].setItem(StorageNames.STRIGO_EVENTS, JSON.stringify(storageEvents));

    return storageEvents;
  } catch (error) {
    Logger.error('Init events storage error', { error });

    return null;
  }
}

export function setup(initialStorage?: StrigoEvent): StrigoEventsStorage {
  try {
    const storageEvents = initialStorage ? { events: [initialStorage] } : { events: [] };
    window[StorageTypes.LOCAL_STORAGE].setItem(StorageNames.STRIGO_EVENTS, JSON.stringify(storageEvents));

    return storageEvents;
  } catch (error) {
    Logger.error('Events storage setup error', { error });

    return null;
  }
}

export function pushEventValue(event: StrigoEvent): StrigoEventsStorage {
  try {
    const initialState = getEventsStorageData();

    if (!initialState) {
      throw new Error("Can't find initial state");
    }

    const prev = JSON.stringify(initialState);
    initialState.events.push(event);

    window[StorageTypes.LOCAL_STORAGE].setItem(StorageNames.STRIGO_EVENTS, JSON.stringify(initialState));

    if (sessionManager.getWidgetFlavor() === WidgetFlavors.OVERLAY) {
      const customEvent = new CustomEvent(EventTypes.OVERLAY_WIDGET_EVENT, {
        bubbles: true,
        detail: {
          key: 'strigoEvents',
          oldValue: prev,
          newValue: JSON.stringify(initialState),
        },
      });
      window.dispatchEvent(customEvent);
    }

    return initialState;
  } catch (error) {
    Logger.error('Push event to storage error', { error });

    return null;
  }
}

export function popEventValue(): StrigoEvent {
  try {
    const initialState = getEventsStorageData();

    if (!initialState) {
      throw new Error("Can't find events storage");
    }

    const event = initialState.events.pop();

    window[StorageTypes.LOCAL_STORAGE].setItem(StorageNames.STRIGO_EVENTS, JSON.stringify(initialState));

    return event;
  } catch (error) {
    Logger.error('Pop event from storage error', { error });

    return null;
  }
}

export function getEventValue(): StrigoEvent {
  try {
    const initialState = getEventsStorageData();

    if (!initialState) {
      throw new Error("Can't find events storage");
    }

    return initialState.events.pop();
  } catch (error) {
    Logger.error('Get event from storage error', { error });

    return null;
  }
}

export function clearEventsStorage(): void {
  try {
    window[StorageTypes.LOCAL_STORAGE].removeItem(StorageNames.STRIGO_EVENTS);
  } catch (error) {
    Logger.error('Clear events storage error', { error });
  }
}
