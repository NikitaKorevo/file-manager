import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { access, rename as renameFS } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  try {
    try {
      await access(path.join(__dirname, 'files', 'wrongFilename.md'));
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.message !== 'FS operation failed') {
        await renameFS(
          path.join(__dirname, 'files', 'wrongFilename.txt'),
          path.join(__dirname, 'files', 'wrongFilename.md')
        );
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.log(new Error('FS operation failed'));
  }
};

rename();
