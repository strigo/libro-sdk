import { Logger } from '../../services/logger';
import { clearStorage, getStorageData, setStorageValue, setupStorage } from '../storage-utils/storage-utils';
import { StorageNames, StorageTypes } from '../storage-utils/storage-utils.types';
import { LOCAL_STRIGO_URL } from '../../strigo/consts';

import { StrigoConfig, StrigoInitConfig, StrigoProtectedConfig, StrigoSetupConfig, StrigoToken } from './config.types';

export function getLocalStorageConfig(): StrigoConfig {
  const config = getStorageData<StrigoConfig>(StorageTypes.LOCAL_STORAGE, StorageNames.STRIGO_CONFIG);

  return config;
}

export function initLocalStorageConfig(initConfig: StrigoInitConfig): StrigoConfig {
  const config = getLocalStorageConfig();

  const initializedConfig = setupStorage<StrigoConfig>(StorageTypes.LOCAL_STORAGE, StorageNames.STRIGO_CONFIG, {
    ...config,
    ...initConfig,
  });

  return initializedConfig;
}

export function setupLocalStorageConfig(setupConfig: StrigoSetupConfig): StrigoConfig {
  const currentConfig = getLocalStorageConfig();

  const config = setupStorage<StrigoConfig>(StorageTypes.LOCAL_STORAGE, StorageNames.STRIGO_CONFIG, {
    ...currentConfig,
    ...setupConfig,
  });

  return config;
}

export function setConfigValue(key: keyof StrigoConfig, value: any): StrigoConfig {
  const config = setStorageValue(StorageTypes.LOCAL_STORAGE, StorageNames.STRIGO_CONFIG, key, value);

  return config as StrigoConfig;
}

export function getConfigValue(key: keyof StrigoConfig): any {
  const session = getLocalStorageConfig();

  return session?.[key];
}

export function clearConfig(): void {
  clearStorage(StorageTypes.LOCAL_STORAGE, StorageNames.STRIGO_CONFIG);
}

export async function fetchRemoteConfiguration(token: StrigoToken): Promise<StrigoProtectedConfig | null> {
  try {
    const configDomain = window.Strigo.isDevelopment() ? LOCAL_STRIGO_URL : 'https://app.strigo.io';
    const response = await fetch(`${configDomain}/api/internal/academy/v1/config?domain=${window.location.hostname}`, {
      method: 'GET',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch remote configuration: ${response.statusText}`);
    }

    const configuration = await response.json();

    return configuration.data;
  } catch (err) {
    Logger.warn('Error fetching configuration from Strigo', { err });

    return null;
  }
}
