import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { ERROR_MESSAGES } from '../../constants/messages/index.js';

export const compress = async (currentDirectory, filePath, destinationPath) => {
  try {
    const readStream = createReadStream(resolve(currentDirectory, filePath));
    const writeStream = createWriteStream(resolve(currentDirectory, `${destinationPath}.br`));
    const brotliCompress = createBrotliCompress();

    await pipeline(readStream, brotliCompress, writeStream);
    console.log('Compressed');
  } catch (error) {
    console.error(ERROR_MESSAGES.printOperationFailed());
  }
};
