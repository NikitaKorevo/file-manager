import { join } from 'path';
import { Worker } from 'worker_threads';
import { cpus } from 'os';
import useFilenameDirname from '../utils/useFilenameDirname.mjs';

const { __dirname } = useFilenameDirname(import.meta.url);

export const performCalculations = async () => {
  const incrementalNumber = 10;
  const amountCPU = cpus().length;
  const workers = [];

  for (let i = incrementalNumber; i < incrementalNumber + amountCPU; i++) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker(join(__dirname, 'worker.js'), {
        workerData: i,
      });

      worker.on('message', (result) => resolve(result));
      worker.on('error', () => reject(null));
    });

    workers.push(workerPromise);
  }

  return await Promise.allSettled(workers).then((workerResults) => {
    return workerResults.map(({ status, value, reason }) => {
      if (status === 'fulfilled') {
        return {
          status: 'resolved',
          data: value,
        };
      } else {
        return {
          status: 'error',
          data: reason,
        };
      }
    });
  });
};

console.log(await performCalculations());
