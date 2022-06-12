import { cwd } from 'process';
import { ERROR_MESSAGES } from '../../constants/messages/index.js';
import { isAccess } from '../../utils/isAccess.js';
import { read } from '../../basis/streams/read.js';
import { create } from '../../basis/fs/create.js';
import { rename } from '../../basis/fs/rename.js';
import { copy } from '../../basis/fs/copy.js';
import { move } from '../../basis/fs/move.js';
import { remove } from '../../basis/fs/delete.js';

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
      if (!(await isAccess(currentDirectory, parameters[0])) || parameters.length !== 2) {
        return ERROR_MESSAGES.printOperationFailed();
      }
      await rename(currentDirectory, parameters[0], parameters[1]);
      break;

    case 'cp':
      if (!(await isAccess(currentDirectory, parameters[0])) || parameters.length !== 2) {
        return ERROR_MESSAGES.printOperationFailed();
      }
      await copy(currentDirectory, parameters[0], parameters[1]);
      break;

    case 'mv':
      if (!(await isAccess(currentDirectory, parameters[0])) || parameters.length !== 2) {
        return ERROR_MESSAGES.printOperationFailed();
      }
      await move(currentDirectory, parameters[0], parameters[1]);
      break;

    case 'rm':
      if (!(await isAccess(currentDirectory, parameters[0])) || parameters.length !== 1) {
        return ERROR_MESSAGES.printOperationFailed();
      }
      remove(currentDirectory, parameters[0]);
      break;

    default:
      break;
  }
};
