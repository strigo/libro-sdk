import { StrigoToken } from '../modules/config/config.types';

export interface SDKSetupData {
  email: string;
  token: StrigoToken;
  development?: boolean;
  version?: string;
  openWidget?: boolean;
}

export enum SDK_TYPES {
  PARENT = 'PARENT',
  CHILD = 'CHILD',
  OVERLAY = 'OVERLAY',
}

export interface IStrigoSDK {
  init: () => void;
  setup: (data?: SDKSetupData) => Promise<void>;
  open: () => void;
  shutdown: () => void;
  sendEvent: (eventName: string) => void;
}

export interface StrigoWindow extends Window {
  Strigo: IStrigoSDK;
}
