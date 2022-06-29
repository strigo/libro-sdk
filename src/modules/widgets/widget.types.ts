import { SDK_TYPES } from '../../strigo/types';

export enum WIDGET_FLAVORS {
  IFRAME = 'iframe',
  OVERLAY = 'overlay',
  DYNAMIC = 'dynamic',
}

export interface IStrigoWidget {
  init: () => SDK_TYPES;
  setup: (params: { development: boolean; version?: string }) => void;
  move: () => void;
  collapse: () => void;
  shutdown: () => void;
}

export interface IOverlayWidget extends IStrigoWidget {
  open: () => void;
}
