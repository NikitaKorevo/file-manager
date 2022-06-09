import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { cp } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  try {
    await cp(path.join(__dirname, 'files'), path.join(__dirname, 'files_copy'), {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (error) {
    console.log(new Error('FS operation failed'));
  }
};

copy();
