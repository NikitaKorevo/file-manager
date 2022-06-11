import { resolve } from 'path';
import { createReadStream } from 'fs';
import { stdout } from 'process';
import { SYSTEM_MESSAGES } from '../../constants/messages/index.js';

export const read = async (currentDirectory, filePath) => {
  try {
    const readStream = createReadStream(resolve(currentDirectory, ...filePath));

    readStream.on('data', (chunk) => stdout.write(chunk));
    readStream.on('end', () => {
      console.log(SYSTEM_MESSAGES.printCurrentDirectory());
    });
  } catch (error) {
    console.log(error.message);
  }
};
