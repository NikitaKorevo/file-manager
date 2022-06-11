import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const useFilenameDirname = (importURL) => {
  const __filename = fileURLToPath(importURL);
  const __dirname = dirname(__filename);

  return { __filename, __dirname };
};
