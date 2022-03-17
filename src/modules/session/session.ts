import { clearStorage, getStorageData, setStorageValue, setupStorage } from "../storage-utils/storage-utils";
import { STORAGE_NAMES, STORAGE_TYPES } from "../storage-utils/storage-utils.types";
import { StrigoSession, WIDGET_FLAVORS } from "./session.types";

export function init() {
  const session = getStorageData(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.STRIGO_SESSION);
  return session as StrigoSession;
}

export function setup(initialSession: StrigoSession): StrigoSession {
  const session = setupStorage<StrigoSession>(
    STORAGE_TYPES.SESSION_STORAGE,
    STORAGE_NAMES.STRIGO_SESSION,
    initialSession
  );
  return session as StrigoSession;
}

export function isPanelOpen(): boolean {
  return getSession()?.isPanelOpen;
}

export function getWidgetFlavor(): WIDGET_FLAVORS {
  return getSession()?.widgetFlavor;
}

export function getSession(): StrigoSession {
  const session = getStorageData(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.STRIGO_SESSION);
  return session as StrigoSession;
}

export function setSessionValue(key: string, value: any) {
  const session = setStorageValue(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.STRIGO_SESSION, key, value);

  return session as StrigoSession;
}

export function getSessionValue(key: string): any {
  const session = getSession();
  return session?.[key];
}

export function clearSession() {
  clearStorage(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.STRIGO_SESSION);
}

export function setPanelClosed() {
  setSessionValue("isPanelOpen", false);
}

window.onunload = function () {
  setPanelClosed();
};
