import { SdkTypes } from '../../strigo/types';

export enum WidgetFlavors {
  IFRAME = 'iframe',
  OVERLAY = 'overlay',
  DYNAMIC = 'dynamic',
}

export interface IStrigoWidget {
  init: () => SdkTypes;
  setup: (params: { version?: string }) => void;
  move: () => void;
  collapse: (shouldHideLoader?: boolean) => void;
  shutdown: () => void;
  open: () => void;
}

export interface IOverlayWidget extends IStrigoWidget {
  open: () => void;
}
