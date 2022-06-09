import { fork } from 'child_process';
import { join } from 'path';
import useFilenameDirname from '../utils/useFilenameDirname.mjs';

const { __dirname } = useFilenameDirname(import.meta.url);
const args = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
  const childProcess = fork(join(__dirname, 'files', 'script.js'), args);
  childProcess.on('error', (error) => console.log(error.message));
};

spawnChildProcess(args);
