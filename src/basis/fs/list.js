import { readdir } from 'fs/promises';

export const list = async (folderPath) => {
  return await readdir(folderPath)
    .then((fileNames) => {
      return fileNames;
    })
    .catch(() => {
      console.log(new Error('FS operation failed'));
    });
};
