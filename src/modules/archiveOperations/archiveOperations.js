import { cwd } from 'process';
import { ERROR_MESSAGES } from '../../constants/messages/errorMessages.js';
import { isAccess } from '../../utils/isAccess.js';
import { compress } from '../../basis/zip/compress.js';
import { decompress } from '../../basis/zip/decompress.js';

export const archiveOperations = async (command, parameters) => {
  const currentDirectory = cwd();

  switch (command) {
    case 'compress':
      if (!(await isAccess(currentDirectory, parameters[0])) || parameters.length !== 2) {
        return ERROR_MESSAGES.printOperationFailed();
      }

      await compress(currentDirectory, parameters[0], parameters[1]);
      break;

    case 'decompress':
      if (!(await isAccess(currentDirectory, parameters[0])) || parameters.length !== 2) {
        return ERROR_MESSAGES.printOperationFailed();
      }
      await decompress(currentDirectory, parameters[0], parameters[1]);
      break;

    default:
      break;
  }
};
