/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

//  const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log("friends:", friends);
 

//  for(let i = 0;i <friends.length; i ++ ){
//     console.log(friends[i]);
//  }

/*
1 Ітерація
const item = 'Mango';

2 Ітерація
const item = 'Kiwi';

3 Ітерація
const item = 'Poly';

4 Ітерація
const item = 'Ajax';
*/



// for(const friend of friends){
// console.log(friend);
// }

/*
? Напиши скрипт для перебору масиву fruits.
? Для кожного елемента масиву виведи в консоль рядок
? у форматі номер_елемента: значення_елемента.
? Нумерація елементів повинна починатися з 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];
// console.log(fruits);

// // let i = 0;

// // for (const fruit of fruits){
// //     console.log(  `${i}:${fruit}`);
// //     i++
// // }

// // for(let i = 0; i< fruits.length; i++){
// //     console.log(  `${i}:${fruits[i]}`);
// // }

// for(let i = 0; i< fruits.length; i++){
//     console.log(  `${i + 1}:${fruits[i]}`);
// }


  /*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');

// const rectArea = +rectSides[0] * +rectSides[1];

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;
// for(let i = 0; i <numbers.length ; i ++){
// const number = numbers[i];

// if(number %2 === 0){
//   total += number;
// }
  
// }

// console.log('numbers: ', numbers);
// console.log('total: ', total);


/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for(let i = 0; i < namesArr.length; i++){
//   console.log(`${namesArr[i]} : ${phonesArr[i]}`);
// }
/*
? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
*/

// const string = 'Our office is closed so we`re working from home today.';


// const words = string.split(' ');


// const newString = words.slice(1, -1).join(' ');


// console.log(newString);

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

//  const values = [17, -10, 94, -30, 1, 23, -20];
//  let min = values[0];

//  for(let i = 1; i < values.length; i ++ ){
//   if(values[i] < min){
//     min = values[i];
//   }
//  }


//  console.log('Minimum value:', min);


/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// const totalSalaries = managerSalaries.concat(developersSalaries);

// for (let i = 0; i < totalSalaries.length; i++) {
//   total += totalSalaries[i];
// }
// console.log(total);

