import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  return readFile(join(__dirname, 'files', 'fileToRead.txt'), { encoding: 'utf-8' })
    .then((data) => data)
    .catch(() => console.log(new Error('FS operation failed')));
};

console.log(await read());
