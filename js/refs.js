/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/
// let  a = 10;
// const b = a;

// console.log('a:', a);
// console.log('b:', b);

// a = 20;

// console.log('a:', a);
// console.log('b:', b);


/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1,2,3];
// const arr2 = arr1;

// console.log('arr1:', arr1);
// console.log('arr2:', arr2);

// arr1[3] = 10;
// console.log('arr1:', arr1);
// console.log('arr2:', arr2);

/*
 * Методи масиву
 *
 * - join
 * - split (Метод рядка)
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

// const allUsers = ['Elva Harper', 'Lily Wilkins', 'Derek Medina', 'Derek Medina'];
// const allUsersStr = allUsers.join(' ');
// console.log(allUsers);
// console.log(allUsersStr);

// const phoneNumbersStr = '+380961111111,+380961111234,+380961111876';
// const phoneNumbersArr = phoneNumbersStr.split(',')
// console.log(phoneNumbersStr);
// console.log(phoneNumbersArr);


//  const allUsers = ['Elva Harper', 'Lily Wilkins', 'Derek Medina', 'Charlie Boyd', 'Jon Rowe'];
//  const allUsersCopy = allUsers.slice(2, 4);


//  console.log('allUsers:', allUsers);
//  console.log('allUsersCopy:', allUsersCopy);

//  const oldCourses = ['HTML', 'CSS', 'JavaScript'];
//  const newCourses = ['React', 'NodeJS'];
//  const allCoruses = oldCourses.concat(newCourses);

//  allCoruses.push('Python');
//  allCoruses.unshift('Python');
//  allCoruses.shift();

//  allCoruses.pop();



//  console.log('oldCourses: ', oldCourses);
//  console.log('newCourses: ', newCourses);
//  console.log('allCoruses: ', allCoruses);

//   console.log(allCoruses.indexOf('Python'));