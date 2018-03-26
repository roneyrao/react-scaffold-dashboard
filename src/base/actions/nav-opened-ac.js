import actionCreator from 'Utils/action-generator';
import { KEY_NAV_OPENED } from 'Utils/consts';

export const actionNavOpened = actionCreator(KEY_NAV_OPENED);

export function open() {
  actionNavOpened.payload = true;
  return actionNavOpened;
}
export function close() {
  actionNavOpened.payload = false;
  return actionNavOpened;
}
