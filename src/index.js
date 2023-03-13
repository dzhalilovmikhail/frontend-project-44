export const nod = (firstNumber1, secondNumber2) => {
  let firstNumber = firstNumber1;
  let secondNumber = secondNumber2;
  while ((firstNumber !== 0) && (secondNumber !== 0)) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return firstNumber + secondNumber; // One of them is 0.
};

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const progressive = (a1, di, ni, x) => {
  let answer = 0;
  let n2 = ni;
  let d2 = di;
  if (d2 < 1) {
    d2 = 1;
  }
  if (n2 < 5) {
    n2 = 5;
  }
  let progStroke = `${a1} `;
  let massive = a1;
  for (let i = 0; i < n2; i += 1) {
    massive += d2;
    if (i === x) {
      progStroke = `${progStroke}.. `;
      answer = massive;
    } else {
      progStroke = `${progStroke + String(massive)} `;
    }
  }
  console.log('Question:', progStroke);
  return answer;
};

export const prime = (number) => {
  if ((number < 0) || (number === 0) || (number === 1)) {
    return 'no';
  }

  if ((number === 2) || (number === 1)) {
    return 'yes';
  }
  for (let i = 2; (i < (1 + number / 2)); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
