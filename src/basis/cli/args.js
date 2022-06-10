import { argv } from 'process';

const argvArray = argv.slice(2).map((argument) => {
  let [key, value] = argument.split('=');
  if (key.startsWith('--')) key = key.slice(2);

  return [key, value];
});

export const argvObject = Object.fromEntries(argvArray);
