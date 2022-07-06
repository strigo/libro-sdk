import { isRecordingMode } from './modules/assessment-recorder/assessment-recorder';
import { Strigo } from './strigo';

window.Strigo = Strigo;

if (isRecordingMode()) {
  console.log('Strigo recorder mode');
  window.Strigo.assessmentRecorder();
} else {
  window.Strigo.init();
}
