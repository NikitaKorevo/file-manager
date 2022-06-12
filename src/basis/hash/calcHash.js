import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { ERROR_MESSAGES } from '../../constants/messages/errorMessages.js';

export const calculateHash = async (currentDirectory, path = '') => {
  return readFile(resolve(currentDirectory, path))
    .then((data) => {
      return createHash('sha256').update(data).digest('hex');
    })
    .catch(() => {
      console.error(ERROR_MESSAGES.operationFailed);
    });
};
