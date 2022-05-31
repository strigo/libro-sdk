import { IStrigoSDK } from './types';

declare global {
  interface Window {
    Strigo: IStrigoSDK;
  }

  declare const SDK_HOSTING_PORT: string;
  declare const RECORDER_HOSTING_PORT: string;
}
