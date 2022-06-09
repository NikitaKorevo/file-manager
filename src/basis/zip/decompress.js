import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createUnzip } from 'zlib';
import useFilenameDirname from '../utils/useFilenameDirname.mjs';

const { __dirname } = useFilenameDirname(import.meta.url);

export const decompress = async () => {
  const readStream = createReadStream(join(__dirname, 'files', 'archive.gz'));
  const writeStream = createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'));
  const gunzip = createUnzip();

  await pipeline(readStream, gunzip, writeStream).catch((error) => {
    console.log(error.message);
  });
};

decompress();
