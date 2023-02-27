#!/usr/bin/env node
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

import newUser from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;

while (i < 3) {
    let m = getRandomInt(100);
    console.log("Question:", m);
    const name1 = readlineSync.question('Your answer:');
    if ((m % 2 === 0) && (name1 === 'yes')) {
        i +=1;
        console.log('Correct!');
    } else if ((m % 2 > 0) && (name1 === 'no')) {
        i +=1;
        console.log('Correct!');
    }  else {
        i = 0;
        if (m % 2 > 0) {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log("Let's try again, Bill!");
        } else {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
            console.log("Let's try again, Bill!");
        };
        break;
    };
};

if (i === 3) {
console.log(`Congratulations, ${name}!`);
};




    
