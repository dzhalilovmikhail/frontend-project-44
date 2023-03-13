#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { nod, getRandomInt } from '../index.js';

const brGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const m = getRandomInt(100);
    const n = getRandomInt(100);
    const nodNew = nod(m, n);
    console.log('Question:', m, n);
    const name1 = readlineSync.question('Your answer: ');
    const answer = parseInt(name1, 10);
    if (answer === nodNew) {
      i += 1;
      console.log('Correct!');
    } else {
      i = 0;
      console.log(`'${name1}' is wrong answer ;(. Correct answer was '${nodNew}.'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default brGcd;
