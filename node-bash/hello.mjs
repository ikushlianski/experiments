#!/usr/bin/env node

import * as os from 'node:os';

const {username} = os.userInfo();
console.log(`Hello ${username}!`);
