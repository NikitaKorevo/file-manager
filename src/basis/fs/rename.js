import { relative } from 'path';
import { rename as renameFS } from 'fs/promises';

export const rename = async (currentDirectory, filePath, newFileName) => {
  try {
    await renameFS(relative(currentDirectory, filePath), relative(currentDirectory, newFileName));
  } catch (error) {
    console.error(error.message);
  }
};
