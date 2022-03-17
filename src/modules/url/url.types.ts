import { WIDGET_FLAVORS } from "../session/session.types";

export interface InitScriptParams {
  webApiKey: string;
  subDomain: string;
  selectedWidgetFlavor: WIDGET_FLAVORS;
}
