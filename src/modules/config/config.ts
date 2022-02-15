import { clearStorage, getStorageData, setStorageValue, setupStorage } from "../storage-utils/storage-utils";
import { STORAGE_NAMES, STORAGE_TYPES } from "../storage-utils/storage-utils.types";

import { StrigoConfig } from "./config.types";

export function init(): StrigoConfig {
  // Get the state from local storage
  const config = getStorageData(STORAGE_TYPES.LOCAL_STORAGE, STORAGE_NAMES.STRIGO_CONFIG);
  return config as StrigoConfig;
}

export function setup(initialConfig: StrigoConfig): StrigoConfig {
  const config = setupStorage<StrigoConfig>(STORAGE_TYPES.LOCAL_STORAGE, STORAGE_NAMES.STRIGO_CONFIG, initialConfig);
  return config as StrigoConfig;
}

export function getConfig(): StrigoConfig {
  const config = getStorageData(STORAGE_TYPES.LOCAL_STORAGE, STORAGE_NAMES.STRIGO_CONFIG);
  return config as StrigoConfig;
}

export function setConfigValue(key: string, value: any): StrigoConfig {
  const config = setStorageValue(STORAGE_TYPES.LOCAL_STORAGE, STORAGE_NAMES.STRIGO_CONFIG, key, value);

  return config as StrigoConfig;
}

export function clearConfig() {
  clearStorage(STORAGE_TYPES.LOCAL_STORAGE, STORAGE_NAMES.STRIGO_CONFIG);
}
