import { StorageOptions, STORAGE_TYPES } from "./storage-utils.types";
import { StrigoSession } from "../session/session.types";
import { StrigoConfig } from "../config/config.types";
import { Logger } from "../../services/logger";

export function initStorage<T extends StrigoSession | StrigoConfig>(
  storageType: STORAGE_TYPES,
  storageName: string,
  initialStorage: StrigoSession | StrigoConfig
): StorageOptions<T> {
  try {
    window[storageType].setItem(storageName, JSON.stringify(initialStorage));
    return initialStorage;
  } catch (error) {
    Logger.error("init storage error", { err: error });
    return null;
  }
}

export function getStorageData<T extends StrigoSession | StrigoConfig>(
  storageType: STORAGE_TYPES,
  storageName: string
): StorageOptions<T> {
  try {
    const value = JSON.parse(window[storageType].getItem(storageName));
    return value;
  } catch (error) {
    Logger.error("get storage data error", { err: error });
    return null;
  }
}

export function setupStorage<T extends StrigoSession | StrigoConfig>(
  storageType: STORAGE_TYPES,
  storageName: string,
  data: StrigoSession | StrigoConfig
): StorageOptions<T> {
  try {
    window[storageType].setItem(storageName, JSON.stringify(data));
    return data;
  } catch (error) {
    Logger.error("setup storage error", { err: error });
    return null;
  }
}

export function setStorageValue<T extends StrigoSession | StrigoConfig>(
  storageType: STORAGE_TYPES,
  storageName: string,
  key: string,
  value: string
): StorageOptions<T> {
  try {
    const initialState = getStorageData(storageType, storageName);
    if (!initialState) {
      throw new Error("Can't find initial state");
    }
    const newState = {
      ...initialState,
      [key]: value
    };

    window[storageType].setItem(storageName, JSON.stringify(newState));
    return newState;
  } catch (error) {
    Logger.error("set storage value error", { err: error });
    return null;
  }
}

export function clearStorage(storageType: STORAGE_TYPES, storageName: string): void {
  try {
    window[storageType].removeItem(storageName);
  } catch (error) {
    Logger.error("clear storage error", { err: error });
  }
}
