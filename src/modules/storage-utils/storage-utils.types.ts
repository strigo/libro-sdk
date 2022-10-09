import { StrigoConfig } from '../config/config.types';
import { StrigoSession } from '../session/session.types';

export enum StorageNames {
  STRIGO_CONFIG = 'strigoConfig',
  STRIGO_SESSION = 'strigoSession',
  STRIGO_EVENTS = 'strigoEvents',
  STRIGO_ASSESSMENTS = 'strigoAssessments',
  STRIGO_URL_TRIGGERS = 'strigoUrlTriggers',
}

export enum StorageTypes {
  SESSION_STORAGE = 'sessionStorage',
  LOCAL_STORAGE = 'localStorage',
}

export type StorageOptions = StrigoSession | StrigoConfig;
