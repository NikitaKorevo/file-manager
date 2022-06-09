import { env } from 'process';

export const parseEnv = () => {
  const environmentVariablesWithPrefixRSS_ = Object.entries(env).filter((variable) => {
    return variable[0].startsWith('RSS_');
  });

  if (environmentVariablesWithPrefixRSS_.length !== 0) {
    return environmentVariablesWithPrefixRSS_.map((variable) => variable.join('=')).join('; ');
  } else {
    return null;
  }
};

console.log(parseEnv());
