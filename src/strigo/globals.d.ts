import { ElementObserver, IStrigoSDK } from './types';

declare global {
  interface Window {
    Strigo: IStrigoSDK;
    strigoObserver: ElementObserver;
  }

  declare const SDK_HOSTING_PORT: string;
  declare const RECORDER_HOSTING_PORT: string;
  declare const EXTENSION: string;
}
