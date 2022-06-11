import { stdin, stdout, exit, chdir } from 'process';
import readLine from 'readline';
import { homedir } from 'os';
import { GREETING_MESSAGES, SYSTEM_MESSAGES } from './constants/messages/index.js';
import { navigationAndWorkingDirectory } from './modules/NavigationAndWorkingDirectory/navigationAndWorkingDirectory.js';
import { basicOperationsWithFiles } from './modules/BasicOperationsWithFiles/BasicOperationsWithFiles.js';

try {
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
      const [command, ...parameters] = input.split(' ').filter(Boolean);

      switch (command) {
        case '.exit':
          endApp();
          break;

        case 'up':
        case 'cd':
        case 'ls':
          await navigationAndWorkingDirectory(readLineApp, command, parameters);
          break;

        case 'cat':
        case 'add':
        case 'rn':
        case 'cp':
        case 'mv':
        case 'rm':
          await basicOperationsWithFiles(readLineApp, command, parameters);
          break;

        default:
          break;
      }

      readLineApp.prompt();
    });
  };

  startApp();
} catch (error) {
  console.log(error.message);
}
