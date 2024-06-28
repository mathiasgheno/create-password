#!/usr/bin/env node

import chalk from 'chalk';
import { generatePassword } from './generatePassword.js';

export function init() {
  console.log(`${chalk.red.bold('WIP:')} This project is ${chalk.italic.red('Working In Progress')}.`);

  console.log(chalk.green("################################"));

  const types = ['strong', 'medium', 'weak'];

  console.table(
    types
      .map(type => ({
        type,
        password: generatePassword(type),
      })),
  );
}

init();

