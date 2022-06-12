import { dirname, resolve } from 'path';
import { chdir, cwd } from 'process';
import { list } from '../../basis/fs/list.js';
import { ERROR_MESSAGES, SYSTEM_MESSAGES } from '../../constants/messages/index.js';
import { isDirectory } from '../../utils/isDirectory.js';

export const navigationAndWorkingDirectory = async (readLineApp, command, parameters) => {
  const currentDirectory = cwd();
  const parentDirectory = dirname(currentDirectory);

  switch (command) {
    case 'up':
      if (parameters.length !== 0) {
        return ERROR_MESSAGES.printOperationFailed();
      }

      chdir(parentDirectory);
      readLineApp.setPrompt(SYSTEM_MESSAGES.printCurrentDirectory());
      break;

    case 'cd':
      if (!(await isDirectory(currentDirectory, parameters[0]))) {
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
