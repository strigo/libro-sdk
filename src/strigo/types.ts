import { StrigoToken } from '../modules/config/config.types';

export interface SDKSetupData {
  email: string;
  token: StrigoToken;
  version?: string;
  openWidget?: boolean;
}

export enum SDK_TYPES {
  PARENT = 'PARENT',
  CHILD = 'CHILD',
  OVERLAY = 'OVERLAY',
}

export interface SdkConfig {
  initialized?: boolean;
  configured?: boolean;
  isOpen?: boolean;
  sdkType?: SDK_TYPES;
}

export interface IStrigoSDK {
  init: () => void;
  setup: (data?: SDKSetupData) => Promise<void>;
  open: () => void;
  collapse?: () => void;
  shutdown: () => void;
  destroy: () => void;
  sendEvent: (eventName: string) => void;
  assessmentRecorder: () => void;
  startElementSelector: (onElementProfileCreated: any, rootElementSelector?: string) => void;
  config: SdkConfig;
  isDevelopment: () => boolean;
}

export interface StrigoWindow extends Window {
  Strigo: IStrigoSDK;
}

export interface ElementObserver {
  element: Element;
  observer: MutationObserver;
}