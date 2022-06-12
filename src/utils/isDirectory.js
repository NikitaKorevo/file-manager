import { lstat } from 'fs/promises';
import { resolve } from 'path';

export const isDirectory = async (currentDirectory, path) => {
  try {
    const stats = await lstat(resolve(currentDirectory, path));
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};
