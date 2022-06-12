import { readdir } from 'fs/promises';
import { ERROR_MESSAGES } from '../../constants/messages/index.js';

export const list = async (folderPath) => {
  return await readdir(folderPath)
    .then((fileNames) => {
      return fileNames;
    })
    .catch(() => {
      ERROR_MESSAGES.printOperationFailed();
    });
};
