export const enum INTERACTION_TYPES {
  CONTENT = 'content',
  CLICK = 'click',
}

export interface NoCodeAssessment {
  interactionEventType: INTERACTION_TYPES;
  selector: string;
  eventName: string;
  expectedResult: string;
  elementFound?: boolean;
  assessmentCompleted?: boolean;
}
