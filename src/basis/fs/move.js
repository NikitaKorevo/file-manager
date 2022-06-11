import { ERROR_MESSAGES } from '../../constants/messages/errorMessages.js';
import { copy } from './copy.js';
import { remove } from './delete.js';

export const move = async (currentDirectory, filePath, newFilePath) => {
  try {
    await copy(currentDirectory, filePath, newFilePath);
    await remove(currentDirectory, filePath);

    console.log('Moved');
  } catch (error) {
    console.error(ERROR_MESSAGES.operationFailed);
  }
};
