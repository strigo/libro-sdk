import { WidgetFlavors } from '../widgets/widget.types';
export interface StrigoSession {
  currentUrl: string;
  shouldPanelBeOpen: boolean;
  isLoading?: boolean;
  widgetFlavor: WidgetFlavors;
  isRecordingMode?: boolean;
  isContentRendered: boolean;
  urlTriggeredCourses?: string[];
}
