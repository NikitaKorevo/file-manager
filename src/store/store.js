import { argvObject } from '../basis/cli/args.js';

export const store = {
  userName: argvObject.username || 'User',
};
