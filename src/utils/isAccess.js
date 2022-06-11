import { access } from 'fs/promises';

export const isAccess = async (path) => {
  try {
    await access(path);
    return true;
  } catch (error) {
    return false;
  }
};
