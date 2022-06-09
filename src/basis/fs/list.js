import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  return await readdir(join(__dirname, 'files'))
    .then((fileNames) => {
      return fileNames;
    })
    .catch(() => {
      console.log(new Error('FS operation failed'));
    });
};

console.log(await list());
