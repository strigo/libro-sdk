import {
  clearStorage,
  getStorageData,
  setStorageValue,
  setupStorage
} from "../storage-utils/storage-utils";
import {
  STORAGE_NAMES,
  STORAGE_TYPES
} from "../storage-utils/storage-utils.types";
import { LibroSession } from "./session.types";

export function init() {
  const session = getStorageData(
    STORAGE_TYPES.SESSION_STORAGE,
    STORAGE_NAMES.LIBRO_SESSION
  );
  if (!session) {
  }
  return session as LibroSession;
}

export function setup(initialSession: LibroSession): LibroSession {
  const session = setupStorage<LibroSession>(
    STORAGE_TYPES.SESSION_STORAGE,
    STORAGE_NAMES.LIBRO_SESSION,
    initialSession
  );
  return session as LibroSession;
}

export function isPanelOpen(): boolean {
  return getSession()?.isPanelOpen;
}

export function getSession(): LibroSession {
  const session = getStorageData(
    STORAGE_TYPES.SESSION_STORAGE,
    STORAGE_NAMES.LIBRO_SESSION
  );
  return session as LibroSession;
}

export function setSessionValue(key: string, value: any) {
  const session = setStorageValue(
    STORAGE_TYPES.SESSION_STORAGE,
    STORAGE_NAMES.LIBRO_SESSION,
    key,
    value
  );

  return session as LibroSession;
}

export function clearSession() {
  clearStorage(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.LIBRO_SESSION);
}

window.onunload = function () {
  clearStorage(STORAGE_TYPES.SESSION_STORAGE, STORAGE_NAMES.LIBRO_SESSION);
};
