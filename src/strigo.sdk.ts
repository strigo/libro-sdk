import { isRecordingMode } from './modules/assessment-recorder/assessment-recorder';
import * as urlTools from './modules/url/url';
import { Strigo } from './strigo';

window.Strigo = Strigo;

if (isRecordingMode()) {
  console.log('Strigo recorder mode');
  window.Strigo.assessmentRecorder();
} else {
  window.Strigo.init();
}