export const nod = (firstNumber1, secondNumber2) => {
    let firstNumber = firstNumber1;
    let secondNumber = secondNumber2;
    while ((firstNumber != 0) && (secondNumber != 0)) {
        if (firstNumber > secondNumber) {
            firstNumber = firstNumber - secondNumber;
        } else {
            secondNumber = secondNumber - firstNumber;
        };
    };

    return firstNumber + secondNumber // One of them is 0.
  
};

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

export const progressive = (a1, d, n, x) => {

    let answer = 0;
    
    if (d < 1) {
        d = 1;
    };

    if (n < 5) {
        n = 5;
    };

    var progStroke = a1 + " ";
    let massive = a1;

    for (let i = 0; i < n; i +=1 ) {
        massive = massive + d;
        if (i === x) {
            progStroke = progStroke + ".. ";
            answer = massive;
        } else {
        progStroke = progStroke + String(massive) + " ";
        };  
    };

    console.log('Qestion:', progStroke);
    return answer;
  };

