#!/usr/bin/env node

import { exec } from 'node:child_process'

exec('npm run test', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    throw new Error('tests failed!')
  }
});
