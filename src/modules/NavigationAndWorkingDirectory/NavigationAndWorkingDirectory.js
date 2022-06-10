import { dirname, resolve } from 'path';
import { chdir, cwd } from 'process';
import { list } from '../../basis/fs/list.js';
import { SYSTEM_MESSAGES } from '../../constants/messages/index.js';

export const NavigationAndWorkingDirectory = async (readLineApp, command, parameters) => {
  const currentDirectory = cwd();
  const parentDirectory = dirname(currentDirectory);

  switch (command) {
    case 'up':
      chdir(parentDirectory);
      readLineApp.setPrompt(SYSTEM_MESSAGES.printCurrentDirectory());
      break;

    case 'cd':
      chdir(resolve(currentDirectory, ...parameters));
      readLineApp.setPrompt(SYSTEM_MESSAGES.printCurrentDirectory());
      break;

    case 'ls':
      const ListAllFilesAndFolders = await list(cwd());
      console.log(await ListAllFilesAndFolders);
      break;

    default:
      break;
  }
};
