import html2canvas from 'html2canvas';

import { Logger } from '../../services/logger';
import { appendCssFile, appendIFrame, getHeadElement } from '../document/document';
import { getElementSelector } from '../element-selector/element-selector';
import { generateAssessmentRecorderURL, generateRecorderCssURL, isRecordingUrlParamExists } from '../url/url';

import {
  AssessmentRecorderMessage,
  ASSESSMENT_RECORDER_MESSAGE_TYPES,
  CaptureParams,
  SelectedElement,
} from './assessment-recorder.types';

export function isRecordingMode(): boolean {

  if (isRecordingUrlParamExists() || window.sessionStorage.getItem('isStrigoRecordingMode')) {
    return true;
  }

  return false;
}

export function addAssessmentRecorderIframe(): void {
  window.sessionStorage.setItem('isStrigoRecordingMode', 'true');

  if (document.getElementById('strigo-assessment-recorder-iframe')) {
    return;
  }

  const assessmentRecorderUrl = generateAssessmentRecorderURL();
  appendCssFile({ parentElement: getHeadElement(), url: generateRecorderCssURL() });
  const assessmentRecorderIframe = appendIFrame({
    classNames: ['strigo-assessment-recorder-iframe', 'drawer', 'is-open'],
    id: 'strigo-assessment-recorder-iframe',
    parentElement: window.document.body,
    url: assessmentRecorderUrl,
  });

  window.addEventListener(
    'message',
    (ev: MessageEvent<any>) => {
      if (!ev || !ev.data || ev.origin !== assessmentRecorderUrl) {
        return;
      }

      let recorderMessage: AssessmentRecorderMessage;

      try {
        recorderMessage = JSON.parse(ev.data);
      } catch (err) {
        return;
      }

      const { messageType, payload } = recorderMessage;

      switch (messageType) {
        case ASSESSMENT_RECORDER_MESSAGE_TYPES.START_CAPTURE: {
          Logger.info('Start capturing message received');
          assessmentRecorderIframe.classList.remove('is-open');
          setTimeout(() => {
            assessmentRecorderIframe.classList.add('semi-open');
          }, 600);

          const { elementType, rootElementSelector } = payload?.captureParams as CaptureParams;

          window.Strigo.startElementSelector((elementProfile: any) => {
            const recorederIframe = document.getElementById('strigo-assessment-recorder-iframe') as HTMLIFrameElement;
            const elementSelector = getElementSelector(elementProfile);

            recorederIframe.classList.remove('semi-open');
            recorederIframe.classList.add('is-open');

            html2canvas(document.querySelector(elementSelector), { backgroundColor: '#c6c7e7' }).then((canvas) => {
              const selectedElement: SelectedElement = {
                imageData: canvas.toDataURL(),
                profile: elementProfile,
                querySelector: elementSelector,
              };

              recorederIframe.contentWindow.postMessage(
                JSON.stringify({
                  messageType: ASSESSMENT_RECORDER_MESSAGE_TYPES.END_CAPTURE,
                  payload: {
                    elementType,
                    selectedElement,
                  },
                  windowName: window.name
                }),
                '*'
              );
            });
          }, rootElementSelector);

          break;
        }

        case ASSESSMENT_RECORDER_MESSAGE_TYPES.SUBMIT_ASSESSMENT: {
          window.sessionStorage.removeItem('isStrigoRecordingMode');
          window.opener.postMessage(
            {
              assessment: {
                ...payload.assessment,
                url: window.location.href,
              },
              windowName: window.name
            },
            '*'
          );
          window.close();

          break;
        }

        case ASSESSMENT_RECORDER_MESSAGE_TYPES.CANCEL_ASSESSMENT: {
          window.sessionStorage.removeItem('isStrigoRecordingMode');
          window.close();

          break;
        }

        default: {
          break;
        }
      }
    },
    false
  );
}
