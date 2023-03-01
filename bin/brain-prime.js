#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomInt, prime } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log('Hello,', name, '!');

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let i = 0;

while (i < 3) {
    let a1 = getRandomInt(100);
    if ( a1 === 0 ) {
        a1 = 1;
    };

    var mas = prime(a1);

    console.log('Question:', a1);

    const name1 = readlineSync.question('Your answer: ');
        if (name1 === mas) {
            i +=1;
            console.log('Correct!');  
        } else {
            i = 0;
            console.log("'",name1,"' is wrong answer ;(. Correct answer was '",mas,"'.");
            console.log("Let's try again,",name,'!');
            break;
        }; 

};

if (i === 3) {
    console.log(`Congratulations, ${name}!`);
};