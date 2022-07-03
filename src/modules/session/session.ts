import { clearStorage, getStorageData, setStorageValue, setupStorage } from '../storage-utils/storage-utils';
import { STORAGE_NAMES, STORAGE_TYPES } from '../storage-utils/storage-utils.types';
import { WIDGET_FLAVORS } from '../widgets/widget.types';

import { StrigoSession } from './session.types';

export function init(): StrigoSession {
  const session = getStorageData(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.STRIGO_SESSION);

  return session as StrigoSession;
}

export function setupSessionStorage(initialSession: StrigoSession): StrigoSession {
  const session = setupStorage<StrigoSession>(
    STORAGE_TYPES.SESSION_STORAGE,
    STORAGE_NAMES.STRIGO_SESSION,
    initialSession
  );

  return session;
}

export function getSession(): StrigoSession {
  const session = getStorageData(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.STRIGO_SESSION);

  return session as StrigoSession;
}

export function isPanelOpen(): boolean {
  return getSession()?.isPanelOpen;
}

export function getWidgetFlavor(): WIDGET_FLAVORS {
  return getSession()?.widgetFlavor;
}

export function setSessionValue(key: keyof StrigoSession, value: any): StrigoSession {
  const session = setStorageValue<StrigoSession>(
    STORAGE_TYPES.SESSION_STORAGE,
    STORAGE_NAMES.STRIGO_SESSION,
    key,
    value
  );

  return session;
}

export function getSessionValue(key: keyof StrigoSession): any {
  const session = getSession();

  return session?.[key];
}

export function clearSession(): void {
  clearStorage(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.STRIGO_SESSION);
}
