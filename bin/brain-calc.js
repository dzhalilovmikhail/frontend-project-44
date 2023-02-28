#!/usr/bin/env node
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

import newUser from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log('Hello,', name, '!');

console.log('What is the result of the expression?');

let i = 0;

while (i < 3) {
    let m = getRandomInt(30);
    let n = getRandomInt(30);
    let znach = getRandomInt(100);
    if (znach < 33 ) {
        console.log("Qestion:", m,'+',n);
        const name1 = readlineSync.question('Your answer: ');
        const answer = parseInt(name1, 10);
        if (answer === m+n) {
            i +=1;
            console.log('Correct!');  
        } else {
            i = 0;
            console.log("'",name1,"' is wrong answer ;(. Correct answer was '",m+n,"'.");
            console.log("Let's try again,",name,'!');
            break;
        }; 
    } else if (znach > 66) {
        console.log("Qestion:", m,'*',n);
        const name1 = readlineSync.question('Your answer: ');
        const answer = parseInt(name1, 10);
        if (answer === m*n) {
            i +=1;
            console.log('Correct!');  
        } else {
            i = 0;
            console.log("'",name1,"' is wrong answer ;(. Correct answer was '",m*n,"'.");
            console.log("Let's try again,",name,'!');
            break;
        };         
    } else {
        console.log("Qestion:", m,'-',n);
        const name1 = readlineSync.question('Your answer: ');
        const answer = parseInt(name1, 10);
        if (answer === m-n) {
            i +=1;
            console.log('Correct!');  
        } else {
            i = 0;
            console.log("'",name1,"' is wrong answer ;(. Correct answer was '",m-n,"'.");
            console.log("Let's try again,",name,'!');
            break;
        }; 
    };

};

if (i === 3) {
console.log(`Congratulations, ${name}!`);
};
