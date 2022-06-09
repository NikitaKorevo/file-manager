import { appStore } from '../../store/store.js';

const { userName } = appStore;

export const GREETING_MESSAGES = {
  welcome: `Welcome to the File Manager, ${userName}!`,
  goodbye: `Thank you for using File Manager, ${userName}!`,
};
