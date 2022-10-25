export const enum EventTypes {
  STORAGE = 'storage',
  MESSAGE = 'message',
  OVERLAY_WIDGET_EVENT = 'overlay-widget-event',
}

export const enum MessageTypes {
  MOVE = 'move',
  SHUTDOWN = 'close',
  DESTROY = 'destroy',
  RENDERED = 'rendered',
  CHALLENGE_SUCCESS = 'challenge-success',
  URL_TRIGGERED = 'url-triggered',
}
