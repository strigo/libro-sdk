export const enum ASSESSMENT_TYPES {
  CONTENT_CHANGED = 'content-changed',
  ELEMENT_ADDED = 'element-added',
  ELEMENT_REMOVED = 'element-removed',
}
export const enum ASSESSMENT_RECORDER_MESSAGE_TYPES {
  START_CAPTURE = 'start-capture',
  END_CAPTURE = 'end-capture',
  SUBMIT_ASSESSMENT = 'submit-assessment',
  CANCEL_ASSESSMENT = 'cancel-assessment'
}

export enum CAPTURE_ELEMENT_TYPES {
  LOCATION = 'location',
  EXAMPLE_ELEMENT = 'example-element',
}

export interface AssessmentRecorderMessage {
  messageType: ASSESSMENT_RECORDER_MESSAGE_TYPES;
  payload: any;
}

export interface CaptureParams {
  rootElementSelector: string;
  elementType: CAPTURE_ELEMENT_TYPES;
}

export interface SelectedElement {
  profile: any;
  querySelector: string;
  imageData: string;
}

export interface CapturePayload {
  elementType: CAPTURE_ELEMENT_TYPES;
  selectedElement: SelectedElement;
}
