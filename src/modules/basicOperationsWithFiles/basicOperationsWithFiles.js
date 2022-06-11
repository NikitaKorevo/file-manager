import { dirname, resolve } from 'path';
import { cwd } from 'process';
import { SYSTEM_MESSAGES } from '../../constants/messages/index.js';
import { read } from '../../basis/streams/read.js';

export const basicOperationsWithFiles = async (readLineApp, command, parameters) => {
  const currentDirectory = cwd();
  const parentDirectory = dirname(currentDirectory);

  switch (command) {
    case 'cat':
      read(currentDirectory, parameters);
      break;

    case 'add':
      break;

    case 'rn':
      break;

    case 'cp':
      break;

    case 'mv':
      break;

    case 'rm':
      break;

    default:
      break;
  }
};
