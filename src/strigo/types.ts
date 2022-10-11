import { StrigoToken } from '../modules/config/config.types';

export interface SDKSetupData {
  email?: string;
  token?: StrigoToken;
  version?: string;
  openWidget?: boolean;
  isPreview?: boolean;
}

export enum SdkTypes {
  PARENT = 'PARENT',
  CHILD = 'CHILD',
  OVERLAY = 'OVERLAY',
}

export interface SdkConfig {
  initialized?: boolean;
  configured?: boolean;
  isOpen?: boolean;
  sdkType?: SdkTypes;
}

export interface IStrigoSDK {
  init: () => void;
  setup: (data?: SDKSetupData) => Promise<void>;
  open: () => void;
  collapse?: () => void;
  shutdown: () => void;
  destroy: () => void;
  sendEvent: (eventName: string) => Promise<void>;
  assessmentRecorder: () => void;
  startElementSelector: (
    onElementProfileCreated: any,
    onElementSelectionCancel: any,
    rootElementSelector?: string
  ) => void;
  stopElementSelector: () => void;
  config: SdkConfig;
  isDevelopment: () => boolean;
}

export interface StrigoWindow extends Window {
  Strigo: IStrigoSDK;
}

export interface ElementObserver {
  observedBodyElement?: Element;
  observer: MutationObserver;
}
