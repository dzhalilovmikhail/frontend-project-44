#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt, progressive } from '../index.js';

const brProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const a1 = getRandomInt(15);
    const d = getRandomInt(9);
    const n = getRandomInt(10);
    let x = 5;
    if (n < 5) {
      x = getRandomInt(x);
    } else {
      x = getRandomInt(n);
    }
    const mas = progressive(a1, d, n, x);
    const name1 = readlineSync.question('Your answer: ');
    const answer = parseInt(name1, 10);
    if (answer === mas) {
      i += 1;
      console.log('Correct!');
    } else {
      i = 0;
      console.log(`'${name1}' is wrong answer ;(. Correct answer was '${mas}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default brProgression;
