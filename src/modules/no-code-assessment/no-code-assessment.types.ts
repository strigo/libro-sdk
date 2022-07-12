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
  exampleElement?: SelectedElement;
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

export enum AssessmentStatus {
  PENDING = 'pending',
  SUCCESS = 'SUCCESS',
}

export interface AssessmentState {
  status?: AssessmentStatus;
  locationElement?: HTMLElement;
}

// url: count
export type AssessmentItemCountRecord = Record<string, number>;

export interface AssessmentItemCountState {
  _id: AssessmentItemCountRecord;
}
