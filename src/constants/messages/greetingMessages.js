import { EOL } from 'os';
import { store } from '../../store/store.js';

const { userName } = store;

export const GREETING_MESSAGES = {
  printWelcome: () => `Welcome to the File Manager, ${userName}!${EOL}`,
  printGoodbye: () => `${EOL}Thank you for using File Manager, ${userName}!`,
};
