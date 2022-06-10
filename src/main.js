import { GREETING_MESSAGES, SYSTEM_MESSAGES } from './constants/messages/index.js';
import { stdin, stdout, exit, chdir } from 'process';
import readLine from 'readline';
import { homedir } from 'os';
import { NavigationAndWorkingDirectory } from './modules/NavigationAndWorkingDirectory/NavigationAndWorkingDirectory.js';

const startApp = () => {
  const readLineApp = readLine.createInterface({
    input: stdin,
    output: stdout,
  });

  chdir(homedir());
  readLineApp.setPrompt(SYSTEM_MESSAGES.printCurrentDirectory());
  readLineApp.write(GREETING_MESSAGES.printWelcome());

  const endApp = () => {
    readLineApp.setPrompt('');
    readLineApp.write(GREETING_MESSAGES.printGoodbye());
    exit();
  };

  readLineApp.on('SIGINT', () => {
    endApp();
  });

  readLineApp.on('line', async (input) => {
    const [command, ...parameters] = input.split(' ');

    switch (command) {
      case '.exit':
        endApp();
        break;

      case 'up':
      case 'cd':
      case 'ls':
        await NavigationAndWorkingDirectory(readLineApp, command, parameters);
        break;

      case 'cat ....':
        break;

      case 'add ....':
        break;

      case 'rn ....':
        break;

      case 'cp ....':
        break;

      case 'mv ....':
        break;

      case 'rm ....':
        break;

      default:
        break;
    }

    readLineApp.prompt();
  });
};

startApp();
