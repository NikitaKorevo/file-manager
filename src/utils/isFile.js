import { lstat } from 'fs/promises';

export const isFile = async (path) => {
  try {
    const stats = await lstat(path);
    return stats.isFile();
  } catch (error) {
    return false;
  }
};
