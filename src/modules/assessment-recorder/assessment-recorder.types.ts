export const ASSESSMENT_RECORDER_ID_PARAM = 'strigoAssessmentUuid';

export enum AssessmentActionType {
  TEXT_CHANGE = 'text-change',
  ADDED_ITEM = 'added-item',
}

export const enum AssessmentRecorderMessageTypes {
  START_CAPTURE = 'start-capture',
  END_CAPTURE = 'end-capture',
  SUBMIT_ASSESSMENT = 'submit-assessment',
  CANCEL_ASSESSMENT = 'cancel-assessment'
}

export enum CaptureElementTypes {
  LOCATION = 'location',
  EXAMPLE_ELEMENT = 'example-element',
}

export interface AssessmentRecorderMessage {
  messageType: AssessmentRecorderMessageTypes;
  payload: any;
}

export interface CaptureParams {
  rootElementSelector: string;
  elementType: CaptureElementTypes;
}

export interface SelectedElement {
  profile: any;
  querySelector: string;
  imageData: string;
}

export interface CapturePayload {
  elementType: CaptureElementTypes;
  selectedElement: SelectedElement;
}
