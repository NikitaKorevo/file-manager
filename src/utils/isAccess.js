import { access } from 'fs/promises';
import { resolve } from 'path';

export const isAccess = async (...path) => {
  try {
    await access(resolve(...path));
    return true;
  } catch (error) {
    return false;
  }
};
