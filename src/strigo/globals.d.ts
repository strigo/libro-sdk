import { ElementObserver, IStrigoSDK } from './types';

declare global {
  interface Window {
    Strigo: IStrigoSDK;
    strigoObserver: ElementObserver;
  }

  declare const SDK_LOCAL_URL: string;
  declare const RECORDER_LOCAL_URL: string;
  declare const IS_DEVELOPMENT: string;
}
