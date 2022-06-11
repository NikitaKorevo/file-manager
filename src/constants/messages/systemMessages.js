import { EOL } from 'os';
import { cwd } from 'process';

export const SYSTEM_MESSAGES = {
  printCurrentDirectory: () => `${EOL}You are currently in ${cwd()}${EOL}`,
};
