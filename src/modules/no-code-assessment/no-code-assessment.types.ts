// export const enum INTERACTION_TYPES {
//   CONTENT = 'content',
//   CLICK = 'click',
// }

// export interface NoCodeAssessment {
//   interactionEventType: INTERACTION_TYPES;
//   selector: string;
//   eventName: string;
//   expectedResult: string;
//   elementFound?: boolean;
//   assessmentCompleted?: boolean;
// }

export enum AssessmentType {
  CUSTOM_EVENT = 'custom-event',
  RECORDED_FLOW = 'recorded-flow',
}

export enum AssessmentActionType {
  TEXT_CHANGE = 'text-change',
  ADDED_ITEM = 'added-item',
}

export enum NodeIdentifierType {
  CLASS_NAME = 'className',
  TAG_NAME = 'tagName',
  INDEX = 'index',
}

export interface NodeIdentifier {
  penalty: number;
  name?: string;
  index?: number;
  outOf?: number;
  level?: number;
  identifier: NodeIdentifierType;
}
export interface NodeProfile {
  level: number;
  nodeIdentifiers: NodeIdentifier[];
}

export interface SelectedElement {
  profile: NodeProfile[];
  imageData: string; // TODO: upload to s3 if we want to visit this image again
}

export interface RecordedAssessment {
  locationElement?: SelectedElement;
  expectedElement?: SelectedElement;
  expectedText?: string | null;
  actionType?: AssessmentActionType;
  url: string;
}

export interface Assessment {
  _id: string;
  organizationId: string;
  name?: string;
  assessmentType: AssessmentType;
  recordingStartUrl?: string;
  challengeSuccessEvent?: string;
  recordedAssessment?: RecordedAssessment;
}
