import { LibroConfig } from "../config/config.types";
import { LibroSession } from "../session/session.types";

export enum STORAGE_NAMES {
  LIBRO_CONFIG = "libroConfig",
  LIBRO_SESSION = "libroSession"
}

export enum STORAGE_TYPES {
  SESSION_STORAGE = "sessionStorage",
  LOCAL_STORAGE = "localStorage"
}

export interface StorageOptions<T extends LibroSession | LibroConfig | null> {}
