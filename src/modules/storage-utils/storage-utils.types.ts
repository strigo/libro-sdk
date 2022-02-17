import { StrigoConfig } from "../config/config.types";
import { StrigoSession } from "../session/session.types";

export enum STORAGE_NAMES {
  STRIGO_CONFIG = "strigoConfig",
  STRIGO_SESSION = "strigoSession",
  STRIGO_EVENTS = "strigoEvents"
}

export enum STORAGE_TYPES {
  SESSION_STORAGE = "sessionStorage",
  LOCAL_STORAGE = "localStorage"
}

export interface StorageOptions<T extends StrigoSession | StrigoConfig | null> {}
