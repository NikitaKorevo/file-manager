import { join } from 'path';
import { createWriteStream } from 'fs';
import { stdin } from 'process';
import useFilenameDirname from '../utils/useFilenameDirname.mjs';

const { __dirname } = useFilenameDirname(import.meta.url);

export const write = async () => {
  const writeStream = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));

  writeStream.on('error', (error) => console.log(error.message));
  stdin.on('data', (chunk) => writeStream.write(chunk));
};

write();
