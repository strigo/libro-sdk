export const enum EVENT_TYPES {
  STORAGE = 'storage',
  MESSAGE = 'message',
  OVERLAY_WIDGET_EVENT = 'overlay-widget-event',
}

export const enum MESSAGE_TYPES {
  SHUTDOWN = 'close',
  DESTROY = 'destroy',
  RENDERED = 'rendered',
  CHALLENGE_SUCCESS = 'challenge-success',
}
