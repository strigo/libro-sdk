import * as urlTools from './modules/url/url';
import { Strigo } from './strigo';

window.Strigo = Strigo;

if (urlTools.isInRecordingMode()) {
  console.log('In recording mode');
  const development = urlTools.isDevelopment();
  console.log({ development });
  window.Strigo.assessmentRecorder(development);
} else {
  window.Strigo.init();
}
