import { relative } from 'path';
import { cp } from 'fs/promises';

export const copy = async (currentDirectory, filePath, newFilePath) => {
  try {
    await cp(relative(currentDirectory, filePath), relative(currentDirectory, newFilePath), {
      errorOnExist: true,
      force: false,
      recursive: true,
    });

    console.log('Copy');
  } catch (error) {
    console.error('FS operation failed');
  }
};
