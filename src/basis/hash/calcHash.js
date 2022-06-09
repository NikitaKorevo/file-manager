import { join } from 'path';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import useFilenameDirname from '../utils/useFilenameDirname.mjs';

const { __dirname } = useFilenameDirname(import.meta.url);

export const calculateHash = async () => {
  return readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'))
    .then((data) => {
      return createHash('sha256').update(data).digest('hex');
    })
    .catch(() => {
      console.log(new Error('FS operation failed'));
    });
};

console.log(await calculateHash());
