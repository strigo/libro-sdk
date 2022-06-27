import { isRecordingMode } from './modules/assessment-recorder/assessment-recorder';
import * as urlTools from './modules/url/url';
import { Logger } from './services/logger';
import { Strigo } from './strigo';

window.Strigo = Strigo;

if (isRecordingMode()) {
  Logger.info('Strigo recorder mode')
  const development = urlTools.isDevelopment();
  window.Strigo.assessmentRecorder(development);
} else {
  window.Strigo.init();
}
