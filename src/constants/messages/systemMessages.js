import { EOL } from 'os';
import { cwd } from 'process';

export const SYSTEM_MESSAGES = {
  printCurrentDirectory: () => `You are currently in ${cwd()}${EOL}`,
};
