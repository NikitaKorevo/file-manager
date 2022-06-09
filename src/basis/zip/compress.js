import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import useFilenameDirname from '../utils/useFilenameDirname.mjs';

const { __dirname } = useFilenameDirname(import.meta.url);

export const compress = async () => {
  const readStream = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
  const writeStream = createWriteStream(join(__dirname, 'files', 'archive.gz'));
  const gzip = createGzip();

  await pipeline(readStream, gzip, writeStream).catch((error) => {
    console.log(error.message);
  });
};

compress();
