import { STORAGE_NAMES, STORAGE_TYPES } from "../storage-utils/storage-utils.types";
import { StrigoEventsStorage, StrigoEvent } from "./events-storage.types";

export function init(): StrigoEventsStorage {
    try {
        const currentEventsStorage = getEventsStorageData();
        if (currentEventsStorage) {
            console.log('Events storage already exists');
            return currentEventsStorage;
        }

        const storageEvents = { events: [] };
        window[STORAGE_TYPES.LOCAL_STORAGE].setItem(STORAGE_NAMES.STRIGO_EVENTS, JSON.stringify(storageEvents));
        return storageEvents;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function setup(
    initialStorage?: StrigoEvent
): StrigoEventsStorage {
    try {
        const storageEvents = initialStorage ? { events: [initialStorage] } : { events: [] };
        window[STORAGE_TYPES.LOCAL_STORAGE].setItem(STORAGE_NAMES.STRIGO_EVENTS, JSON.stringify(storageEvents));
        return storageEvents;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function getEventsStorageData(): StrigoEventsStorage {
    try {
        return JSON.parse(window[STORAGE_TYPES.LOCAL_STORAGE].getItem(STORAGE_NAMES.STRIGO_EVENTS));
    } catch (error) {
        console.log(error);
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
        console.log(error);
        return null;
    }
}

export function popEventValue(): StrigoEvent {
    try {
        const initialState = getEventsStorageData();
        if (!initialState) {
            throw new Error("Can't find initial state");
        }

        const event = initialState.events.pop();

        window[STORAGE_TYPES.LOCAL_STORAGE].setItem(STORAGE_NAMES.STRIGO_EVENTS, JSON.stringify(initialState));
        return event;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function clearEventsStorage(): void {
    try {
        window[STORAGE_TYPES.LOCAL_STORAGE].removeItem(STORAGE_NAMES.STRIGO_EVENTS);
    } catch (error) {
        console.log(error);
    }
}
