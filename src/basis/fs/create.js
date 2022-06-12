import { resolve } from 'path';
import { open } from 'fs/promises';
import { ERROR_MESSAGES } from '../../constants/messages/index.js';

export const create = async (folderPath, fileName) => {
  try {
    const file = await open(resolve(folderPath, fileName), 'wx');
    await file.close();
  } catch (error) {
    ERROR_MESSAGES.printOperationFailed();
  }
};
