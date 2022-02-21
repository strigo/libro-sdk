import { StrigoToken } from "../modules/config/config.types";

export interface SDKSetupData {
  email: string;
  token: StrigoToken;
  development: boolean;
  version?: string;
}

export enum SDK_TYPES {
  HOST = "HOST",
  SUBSCRIBER = "SUBSCRIBER"
}
