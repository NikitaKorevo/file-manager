import { dirname, resolve } from 'path';
import { cwd } from 'process';
import { ERROR_MESSAGES, SYSTEM_MESSAGES } from '../../constants/messages/index.js';
import { isAccess } from '../../utils/isAccess.js';
import { read } from '../../basis/streams/read.js';
import { create } from '../../basis/fs/create.js';

export const basicOperationsWithFiles = async (readLineApp, command, parameters) => {
  const currentDirectory = cwd();

  switch (command) {
    case 'cat':
      if (!(await isAccess(currentDirectory, ...parameters))) {
        return ERROR_MESSAGES.printOperationFailed();
      }

      await read(currentDirectory, parameters);
      break;

    case 'add':
      if (parameters.length !== 1) {
        return ERROR_MESSAGES.printOperationFailed();
      }

      await create(currentDirectory, ...parameters);
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
