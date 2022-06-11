import { resolve } from 'path';
import { rm } from 'fs/promises';
import { ERROR_MESSAGES } from '../../constants/messages/index.js';

export const remove = async (currentDirectory, path) => {
  try {
    await rm(resolve(currentDirectory, path));
    console.log('Deleted');
  } catch (error) {
    console.log(ERROR_MESSAGES.printOperationFailed());
  }
};
