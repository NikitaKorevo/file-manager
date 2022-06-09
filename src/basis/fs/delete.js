import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { rm } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  await rm(path.join(__dirname, 'files', 'fileToRemove.txt')).catch(() =>
    console.log(new Error('FS operation failed'))
  );
};

remove();
