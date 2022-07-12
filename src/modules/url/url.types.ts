import { WidgetFlavors } from '../widgets/widget.types';

export interface InitScriptParams {
  webApiKey: string;
  subDomain: string;
  selectedWidgetFlavor: WidgetFlavors;
}
