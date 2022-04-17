import { WIDGET_FLAVORS } from '../widgets/widget.types';

export interface InitScriptParams {
  webApiKey: string;
  subDomain: string;
  selectedWidgetFlavor: WIDGET_FLAVORS;
}
