import { Logger } from '../../services/logger';

import { StorageOptions, StorageTypes } from './storage-utils.types';

export function getStorageData<T extends StorageOptions>(storageType: StorageTypes, storageName: string): T | null {
  try {
    const value = JSON.parse(window[storageType].getItem(storageName));

    return value;
  } catch (error) {
    Logger.error('get storage data error', { err: error });

    return null;
  }
}

export function setupStorage<T extends StorageOptions>(
  storageType: StorageTypes,
  storageName: string,
  data: T
): T | null {
  try {
    window[storageType].setItem(storageName, JSON.stringify(data));

    return data;
  } catch (error) {
    Logger.error('setup storage error', { err: error });

    return null;
  }
}

export function setStorageValue<T extends StorageOptions>(
  storageType: StorageTypes,
  storageName: string,
  key: string,
  value: any
): T | null {
  try {
    const initialState = getStorageData<T>(storageType, storageName);

    if (!initialState) {
      throw new Error("Can't find initial state");
    }

    const newState = {
      ...initialState,
      [key]: value,
    };

    window[storageType].setItem(storageName, JSON.stringify(newState));

    return newState;
  } catch (error) {
    Logger.error('set storage value error', { err: error });

    return null;
  }
}

export function clearStorage(storageType: StorageTypes, storageName: string): void {
  try {
    window[storageType].removeItem(storageName);
  } catch (error) {
    Logger.error('clear storage error', { err: error });
  }
}
