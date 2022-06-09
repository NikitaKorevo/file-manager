import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { open } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  try {
    const file = await open(path.join(__dirname, 'files', 'fresh.txt'), 'wx');

    await file.writeFile('I am fresh and young');
    await file.close();
  } catch (error) {
    console.log(new Error('FS operation failed'));
  }
};

create();
