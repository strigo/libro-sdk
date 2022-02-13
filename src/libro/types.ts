import { LibroToken } from "../modules/config/config.types";

export interface SDKSetupData {
  email: string;
  token: LibroToken;
  webApiKey: string;
  subDomain: string;
  development: boolean;
}

export enum SDK_TYPES {
  HOST = "HOST",
  SUBSCRIBER = "SUBSCRIBER"
}
