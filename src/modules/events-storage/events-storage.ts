import { STORAGE_NAMES, STORAGE_TYPES } from "../storage-utils/storage-utils.types";
import { StrigoEventsStorage, StrigoEvent } from "./events-storage.types";
import { Logger } from "../../../services/logger";

export function init(): StrigoEventsStorage {
  try {
    const currentEventsStorage = getEventsStorageData();
    if (currentEventsStorage) {
      Logger.debug("Events storage already exists");
      return currentEventsStorage;
    }

    const storageEvents = { events: [] };
    window[STORAGE_TYPES.LOCAL_STORAGE].setItem(STORAGE_NAMES.STRIGO_EVENTS, JSON.stringify(storageEvents));
    return storageEvents;
  } catch (error) {
    Logger.error("Init events storage error", { error });
    return null;
  }
}

export function setup(initialStorage?: StrigoEvent): StrigoEventsStorage {
  try {
    const storageEvents = initialStorage ? { events: [initialStorage] } : { events: [] };
    window[STORAGE_TYPES.LOCAL_STORAGE].setItem(STORAGE_NAMES.STRIGO_EVENTS, JSON.stringify(storageEvents));
    return storageEvents;
  } catch (error) {
    Logger.error("Events storage setup error", { error });
    return null;
  }
}

export function getEventsStorageData(): StrigoEventsStorage {
  try {
    return JSON.parse(window[STORAGE_TYPES.LOCAL_STORAGE].getItem(STORAGE_NAMES.STRIGO_EVENTS));
  } catch (error) {
    Logger.error("Get events storage error", { error });
    return null;
  }
}

export function pushEventValue(event: StrigoEvent): StrigoEventsStorage {
  try {
    const initialState = getEventsStorageData();
    if (!initialState) {
      throw new Error("Can't find initial state");
    }

    initialState.events.push(event);

    window[STORAGE_TYPES.LOCAL_STORAGE].setItem(STORAGE_NAMES.STRIGO_EVENTS, JSON.stringify(initialState));
    return initialState;
  } catch (error) {
    Logger.error("Push event to storage error", { error });
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

    window[STORAGE_TYPES.LOCAL_STORAGE].setItem(STORAGE_NAMES.STRIGO_EVENTS, JSON.stringify(initialState));
    return event;
  } catch (error) {
    Logger.error("Pop event from storage error", { error });
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
    Logger.error("Get event from storage error", { error });
    return null;
  }
}

export function clearEventsStorage(): void {
  try {
    window[STORAGE_TYPES.LOCAL_STORAGE].removeItem(STORAGE_NAMES.STRIGO_EVENTS);
  } catch (error) {
    Logger.error("Clear events storage error", { error });
  }
}
