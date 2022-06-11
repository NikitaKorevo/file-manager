import { dirname, resolve } from 'path';
import { chdir, cwd } from 'process';
import { list } from '../../basis/fs/list.js';
import { ERROR_MESSAGES, SYSTEM_MESSAGES } from '../../constants/messages/index.js';
import { isAccess } from '../../utils/isAccess.js';

export const navigationAndWorkingDirectory = async (readLineApp, command, parameters) => {
  const currentDirectory = cwd();
  const parentDirectory = dirname(currentDirectory);

  switch (command) {
    case 'up':
      chdir(parentDirectory);
      readLineApp.setPrompt(SYSTEM_MESSAGES.printCurrentDirectory());
      break;

    case 'cd':
      if (!(await isAccess(currentDirectory, ...parameters))) {
        return ERROR_MESSAGES.printOperationFailed();
      }

      chdir(resolve(currentDirectory, ...parameters));
      readLineApp.setPrompt(SYSTEM_MESSAGES.printCurrentDirectory());
      break;

    case 'ls':
      if (parameters.length > 0) {
        return ERROR_MESSAGES.printOperationFailed();
      }

      const ListAllFilesAndFolders = await list(currentDirectory);
      console.log(ListAllFilesAndFolders);
      break;

    default:
      break;
  }
};
