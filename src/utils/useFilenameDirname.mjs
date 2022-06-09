import { dirname } from 'path';
import { fileURLToPath } from 'url';

const useFilenameDirname = (importURL) => {
  const __filename = fileURLToPath(importURL);
  const __dirname = dirname(__filename);

  return { __filename, __dirname };
};

export default useFilenameDirname;
