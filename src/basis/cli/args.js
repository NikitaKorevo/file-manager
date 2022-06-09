import { argv } from 'process';

export const parseArgs = () => {
  if (argv.length < 3) return null;

  const lineArguments = argv.slice(2).map((argument) => {
    if (argument.startsWith('--')) {
      return argument.slice(2);
    } else {
      return argument;
    }
  });

  return lineArguments
    .reduce((result, currentArgument, index) => {
      if (index % 2 === 0) {
        return (result += `${currentArgument} is`);
      } else {
        return (result += ` ${currentArgument} `);
      }
    }, '')
    .trim();
};

console.log(parseArgs());
