import { join } from 'path';
import { createReadStream } from 'fs';
import { stdout } from 'process';
import useFilenameDirname from '../utils/useFilenameDirname.mjs';

const { __dirname } = useFilenameDirname(import.meta.url);

export const read = async () => {
  const readStream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');

  readStream.on('data', (chunk) => stdout.write(chunk));
  readStream.on('error', (error) => console.log(error.message));
};

read();
