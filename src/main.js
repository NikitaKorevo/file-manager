import { GREETING_MESSAGES } from './constants/messages/index.js';
import { stdin, stdout, exit } from 'process';
import readLine from 'readline';
import { EOL } from 'os';

const startApp = () => {
  const readLineApp = readLine.createInterface({
    input: stdin,
    output: stdout,
  });

  readLineApp.write(GREETING_MESSAGES.welcome + EOL);

  const endApp = () => {
    readLineApp.write(GREETING_MESSAGES.goodbye);
    exit();
  };

  readLineApp.on('SIGINT', () => {
    endApp();
  });

  readLineApp.on('line', (input) => {
    switch (input) {
      case '.exit':
        endApp();
        break;

      default:
        break;
    }
  });
};

startApp();
