#!/usr/bin/env node

import { exec } from 'node:child_process'

// exec('npm run test', (error, stdout, stderr) => {
//   console.log(stdout)
//
//   if (error) {
//     console.error(`exec error: ${error}`);
//     throw new Error('tests failed!')
//   }
//
//   console.log('All tests passed\n\n');
// });

exec('git diff --diff-filter=d --name-only --cached | grep -E \'\\.(mjs|js|jsx|ts|tsx)$\'', (error, stdout, stderr) => {
  if (error) {
    console.warn(`exec warning: ${error}`);
  } else {
    const files = stdout.split('\n').filter(file => file)

    console.log('files', files)
  }
});
