/*
 * Цикли
 *
 * - Інкремент і декремент
 * - Цикли while і do...while
 * - Цикл for
 */

//  let a = 10;
//  const b = ++a;
// a--;
// a--;
// a--;
//  console.log(a);
// ++a;
//  console.log(a);
//  console.log(b);

/*
? Виведіть числа від 1 до 50
*/

//  let i = 1;

// while (i <= 50) {
//   console.log(i);

//   i++;
//  }

/*
? Напишіть цикл, який пропонує prompt ввести число більше за 100.
? Якщо відвідувач введе інше число – попросити ввести ще раз, і так далі.
*/
// Через цикл while

// let userInput = +prompt('Введіть число більше за 100');

// while (userInput <= 100) {
//        userInput = +prompt('Введіть число більше за 100');
//      }
    
//      alert('Done!');


//  let userInput;

// do {
//    userInput = +prompt('Введіть число більше за 100');
// } while (userInput <= 100);

// alert('Done!');

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

//  for (let i = 2; i <= 10; i++) {
//  if (i % 2 === 0) {
//      console.log(i);
//   }
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// for (let i = 1; i <= 100; i++){
//  if(i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
//  }else if( i % 5 === 0){
// console.log("Buzz");
//  }else if (i % 3 === 0 ){
//     console.log("Fizz");
//  }

//  else{
//     console.log(i);
//  }
        
//     }
/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/

//  const a = 20;
//  const b = 100;

// for (let i = 20; i <= 100; i++ ){
//    if(i % 5 === 0){
//       console.log(i);
//    }
// }

/*
? Напиши скрипт, який підраховує суму всіх парних чисел,
? які входять в діапазон чисел у змінних від min до max.
? Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
*/

//  const min = 0;
//  const max = 5;

//  let total = 0;

// for (let i = min; i <= max; i ++){
//    if(i % 2 === 0){
//       total += i;
//    }
// }

// console.log(total);