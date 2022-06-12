import { cwd } from 'process';
import { EOL, cpus, homedir, userInfo, arch } from 'os';
import { ERROR_MESSAGES } from '../../constants/messages/index.js';

export const operatingSystemInfo = async (command, parameters) => {
  if (parameters.length !== 1) {
    return ERROR_MESSAGES.printOperationFailed();
  }

  switch (parameters[0]) {
    case '--EOL':
      console.log(`Default system End-Of-Line: ${JSON.stringify(EOL)}`);
      break;

    case '--cpus':
      const cores = cpus();

      console.log(`Overall amount of CPUS: ${cores.length}`);
      cores.map(({ model, speed }) => {
        const nameCPU = model.trim();
        let speedGHz = speed.toString().slice(0, 1) + '.' + speed.toString().slice(1);
        speedGHz = Number(speedGHz).toFixed(1) + ' GHz';

        return console.log({
          model: nameCPU,
          speed: speedGHz,
        });
      });
      break;

    case '--homedir':
      console.log(`Home directory: ${homedir()}`);
      break;

    case '--username':
      console.log(`Username: ${userInfo().username}`);
      break;

    case '--architecture':
      console.log(`CPU architecture: ${arch()}`);
      break;

    default:
      ERROR_MESSAGES.printOperationFailed();
      break;
  }
};
