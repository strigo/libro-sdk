import html2canvas from 'html2canvas';

import { Logger } from '../../services/logger';
import { appendCssFile, appendIFrame, getHeadElement } from '../document/document';
import { getElementSelector } from '../element-selector/element-selector';
import {
  generateAssessmentRecorderURL,
  generateRecorderCssURL,
  getURLWithoutStrigoRecorderParams,
  isRecordingUrlParamExists,
} from '../url/url';

import {
  AssessmentRecorderMessage,
  AssessmentRecorderMessageTypes,
  CaptureParams,
  SelectedElement,
  ASSESSMENT_RECORDER_ID_PARAM,
} from './assessment-recorder.types';

export function isRecordingMode(): boolean {
  if (isRecordingUrlParamExists() || window.sessionStorage.getItem('isStrigoRecordingMode')) {
    return true;
  }

  return false;
}

export function addAssessmentRecorderIframe(): void {
  window.sessionStorage.setItem('isStrigoRecordingMode', 'true');
  const assessmentUuid = new URL(window.location.href).searchParams.get(ASSESSMENT_RECORDER_ID_PARAM);
  window.sessionStorage.setItem(ASSESSMENT_RECORDER_ID_PARAM, assessmentUuid);

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
        case AssessmentRecorderMessageTypes.START_CAPTURE: {
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
                  messageType: AssessmentRecorderMessageTypes.END_CAPTURE,
                  payload: {
                    elementType,
                    selectedElement,
                  },
                  windowName: window.name,
                }),
                '*'
              );
            });
          }, rootElementSelector);

          break;
        }

        case AssessmentRecorderMessageTypes.SUBMIT_ASSESSMENT: {
          const recorderWindowId = window.sessionStorage.getItem(ASSESSMENT_RECORDER_ID_PARAM);
          window.sessionStorage.removeItem('isStrigoRecordingMode');
          const urlToSave = getURLWithoutStrigoRecorderParams(window.location.href);

          window.opener.postMessage(
            {
              assessment: {
                ...payload.assessment,
                url: urlToSave,
              },
              recorderWindowId,
            },
            '*'
          );
          window.close();

          break;
        }

        case AssessmentRecorderMessageTypes.CANCEL_ASSESSMENT: {
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
