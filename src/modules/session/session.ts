import { clearStorage, getStorageData, setStorageValue, setupStorage } from '../storage-utils/storage-utils';
import { StorageNames, StorageTypes } from '../storage-utils/storage-utils.types';
import { WidgetFlavors } from '../widgets/widget.types';

import { StrigoSession } from './session.types';

export function init(): StrigoSession {
  const session = getStorageData(StorageTypes.SESSION_STORAGE, StorageNames.STRIGO_SESSION);

  return session as StrigoSession;
}

export function setupSessionStorage(initialSession: StrigoSession): StrigoSession {
  const session = setupStorage<StrigoSession>(
    StorageTypes.SESSION_STORAGE,
    StorageNames.STRIGO_SESSION,
    initialSession
  );

  return session;
}

export function getSession(): StrigoSession {
  const session = getStorageData(StorageTypes.SESSION_STORAGE, StorageNames.STRIGO_SESSION);

  return session as StrigoSession;
}

export function shouldPanelBeOpen(): boolean {
  
  return getSession() ? getSession().shouldPanelBeOpen : true;
}

export function getWidgetFlavor(): WidgetFlavors {
  return getSession()?.widgetFlavor;
}

export function setSessionValue(key: keyof StrigoSession, value: any): StrigoSession {
  const session = setStorageValue<StrigoSession>(StorageTypes.SESSION_STORAGE, StorageNames.STRIGO_SESSION, key, value);

  return session;
}

export function getSessionValue(key: keyof StrigoSession): any {
  const session = getSession();

  return session?.[key];
}

export function clearSession(): void {
  clearStorage(StorageTypes.SESSION_STORAGE, StorageNames.STRIGO_SESSION);
}
