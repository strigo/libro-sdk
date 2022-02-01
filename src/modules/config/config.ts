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

import { LibroConfig } from "./config.types";

export function init(): LibroConfig {
  // Get the state from local storae
  const config = getStorageData(
    STORAGE_TYPES.LOCAL_STORAGE,
    STORAGE_NAMES.LIBRO_CONFIG
  );
  return config as LibroConfig;
}

export function setup(initialConfig: LibroConfig): LibroConfig {
  const config = setupStorage<LibroConfig>(
    STORAGE_TYPES.LOCAL_STORAGE,
    STORAGE_NAMES.LIBRO_CONFIG,
    initialConfig
  );
  return config as LibroConfig;
}

export function getConfig(): LibroConfig {
  const config = getStorageData(
    STORAGE_TYPES.LOCAL_STORAGE,
    STORAGE_NAMES.LIBRO_CONFIG
  );
  return config as LibroConfig;
}

export function setConfigValue(key: string, value: any): LibroConfig {
  const config = setStorageValue(
    STORAGE_TYPES.LOCAL_STORAGE,
    STORAGE_NAMES.LIBRO_CONFIG,
    key,
    value
  );

  return config as LibroConfig;
}

export function clearConfig() {
  clearStorage(STORAGE_TYPES.LOCAL_STORAGE, STORAGE_NAMES.LIBRO_CONFIG);
}
