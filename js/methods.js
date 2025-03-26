// const username = '  Jacob Mercer  ';

// const result = username.slice(6, 8);
// const  result = username.toUpperCase();

// const  result = username.includes('Jacob');
// const  result = username.startsWith('J');

// const  result = username.indexOf('jgfdd');

// const  result = username.trim();

// const result = username.trim().toLowerCase();

// console.log('userName: ', username);

// console.log('result:', result);

// const answer  = 'ECMAScript';

// let userInput = prompt('Яка офіційна назва JavaScript');
// if(userInput.toLowerCase() === answer.toLowerCase()){
//     alert('Вірно!')
// }else{
//     alert ('Не знаєте? ECMAScript')
// }

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')){
//     link = link + '/';
// }
// console.log(link);

/*
? Пошук у рядку методом includes()
? Потрібно перевірити чи є в рядку заборонені слова. 
? Заборонені слова зберігаються у змінних blacklistedWord1 та blacklistedWord2.
*/

// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sale';

// const string1 = "Hello, I'm Prince Abdul, this is not SPAM, I'm offering you a million!";
// const isString1IncludesForbiddenWords = string1.toLowerCase().includes(blacklistedWord1) || string1.toLowerCase().includes(blacklistedWord2);

// console.log('string1: ', string1);
// console.log('isString1IncludesForbiddenWords: ', isString1IncludesForbiddenWords);

// const string2 = "Biggest SALE this week, don't miss out!";

// const isString2IncludesForbiddenWords = string2.toLowerCase().includes(blacklistedWord1) || string2.toLowerCase().includes(blacklistedWord2);

// console.log('string2: ', string2);
// console.log('isString2IncludesForbiddenWords: ', isString2IncludesForbiddenWords);

// const string3 = '#fatlivesmatter advertising campaign';

// const isString3IncludesForbiddenWords =
//   string3.toLowerCase().includes(blacklistedWord1) || string3.toLowerCase().includes(blacklistedWord2);

//   console.log('string3: ', string3);
//  console.log('isString3IncludesForbiddenWords: ', isString3IncludesForbiddenWords);