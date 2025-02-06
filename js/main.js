const generatesArandomInteger = (min, max) => {
  function convertsToNumber(num){
    if(typeof num === 'number'){
      return num;
    } else if(typeof num === 'string') {
      return (parseInt(num));
    }

    return null;
  }

  let fromNum = convertsToNumber(min);
  let toNum = convertsToNumber(max);

  function generateNumber(){
    return Math.floor(Math.random() * (toNum - fromNum + 1) + fromNum);
  }

  if(fromNum === null && toNum === null) {
    console.log('Нет аргументов для работы');
    return;
  }

  if(fromNum !== null && toNum === null) {
    toNum = Math.floor(fromNum);
    fromNum = 0;
    return console.log(generateNumber());
  }

  if(fromNum !== null && toNum !== null) {
    if(Number.isNaN(fromNum)) {
      console.log('Минимальное значение не является числом');
      return;
    } else if(fromNum < 0) {
      console.log('Минимальное значение не может быть меньше 0');
      return;
    } else {
      fromNum = Math.ceil(fromNum);
    }

    if(Number.isNaN(toNum)) {
      console.log('Максимальное  значение не является числом');
      return;
    } else if(toNum === 0 || toNum < fromNum){
      console.log('Максимальное значение не может быть меньше минимального или равнятся 0');
      return;
    } else {
      toNum = Math.floor(max);
    }

    return console.log(generateNumber());
  }
};


// Оптимизированный код
// const generatesArandomInteger = (min, max) => {
//   const convertsToNumber = (num) => {
//     if (typeof num === 'number') return num;
//     if (typeof num === 'string') return parseInt(num);
//     return null;
//   };

//   let fromNum = convertsToNumber(min);
//   let toNum = convertsToNumber(max);

//   if (fromNum === null && toNum === null) {
//     console.log('Нет аргументов для работы');
//     return;
//   }

//   if (toNum === null) {
//     toNum = Math.floor(fromNum);
//     fromNum = 0;
//   }

//   if (fromNum === null) {
//     console.log('Минимальное значение не может быть null');
//     return;
//   }

//   fromNum = Math.ceil(fromNum);
//   toNum = Math.floor(toNum);

//   if (Number.isNaN(fromNum)) {
//     console.log('Минимальное значение не является числом');
//     return;
//   }
//   if (fromNum < 0) {
//     console.log('Минимальное значение не может быть меньше 0');
//     return;
//   }
//   if (Number.isNaN(toNum) || toNum <= 0 || toNum < fromNum) {
//     console.log('Максимальное значение не может быть меньше минимального или равнятся 0');
//     return;
//   }

//   const generateNumber = () => Math.floor(Math.random() * (toNum - fromNum + 1) + fromNum);
//   console.log(generateNumber());
// };


console.log('%cПередаём пустые параметры', 'color: green; font-weight: bold;');
generatesArandomInteger();
console.log('%cПередаём один параметр: (10)', 'color: green; font-weight: bold;');
generatesArandomInteger(10);
console.log('%cОдин параметр является строкой: ("Строка", 30)', 'color: green; font-weight: bold;');
generatesArandomInteger('Строка', 30);
console.log('%cОдин параметр является "строкой": (10, "Строка")', 'color: green; font-weight: bold;');
generatesArandomInteger(10, 'Строка');
console.log('%cОдин параметр является строкой с числом внутри: (10, "26")', 'color: green; font-weight: bold;');
generatesArandomInteger(10, '26');
console.log('%cМинимальный параметр меньше 0: (-29, 800)', 'color: green; font-weight: bold;');
generatesArandomInteger(-29, 800);
console.log('%cМаксимальный параметр меньше 0: (341, -9860)', 'color: green; font-weight: bold;');
generatesArandomInteger(341, -9860);
console.log('%cОба параметра числа: (430, 1263)', 'color: green; font-weight: bold;');
generatesArandomInteger(430, 1263);
