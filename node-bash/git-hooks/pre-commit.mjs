#!/usr/bin/env node

import { exec } from 'node:child_process'

// import * as os from 'node:os';
//
// const {username} = os.userInfo();
// console.log(`Hello ${username}`);

exec('npm run test', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    throw new Error('tests failed!')
  }

  console.log(`stderr: ${stderr}`);


});
