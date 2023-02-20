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