import { cwd } from 'process';
import { ERROR_MESSAGES } from '../../constants/messages/index.js';
import { isAccess } from '../../utils/isAccess.js';
import { calculateHash } from '../../basis/hash/calcHash.js';

export const hashCalculation = async (command, parameters) => {
  const currentDirectory = cwd();

  switch (command) {
    case 'hash':
      if (!(await isAccess(currentDirectory, parameters[0])) || parameters.length !== 1) {
        return ERROR_MESSAGES.printOperationFailed();
      }

      console.log(await calculateHash(currentDirectory, parameters[0]));
      break;

    default:
      break;
  }
};
