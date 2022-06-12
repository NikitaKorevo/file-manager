import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { ERROR_MESSAGES } from '../../constants/messages/index.js';

export const decompress = async (currentDirectory, filePath, destinationPath) => {
  try {
    const readStream = createReadStream(resolve(currentDirectory, filePath));
    const writeStream = createWriteStream(resolve(currentDirectory, destinationPath));
    const brotliDecompress = createBrotliDecompress();

    await pipeline(readStream, brotliDecompress, writeStream);
    console.log('Decompressed');
  } catch (error) {
    console.error(ERROR_MESSAGES.printOperationFailed());
  }
};
