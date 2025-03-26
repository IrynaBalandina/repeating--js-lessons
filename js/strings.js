//  const firstName = 'Chelsey';
// const lastName = 'Emerald';


// const fullName = `${firstName} ${lastName}`;
//  console.log(fullName);

// const quantity = 15;
// const orderMsg = `You ordered ${quantity} bots`;
// console.log(orderMsg);

// const firstName = prompt('Your first name');
//  const lastName = prompt ('Your last name');
//  const message = `Hello, ${firstName} ${lastName}, you are logged in! `
//  console.log(message);

// const message = 'This string is 28 chars long';
// const lengthOfMessage = message.length;
// console.log(message);
// console.log(lengthOfMessage);
// console.log('Hello'.length);

// const companyName = 'Cyberdiyne Sistems';
// const repairBots = 150;
// const defenceBots = 50;
// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(msg);

const refs = {
    box:document.querySelector('.box'),
    title:document.querySelector('.title-box'),
    btn:document.querySelector('.box-btn')
};

const boxWidthAsString = refs.box.style.width;
const boxWidth = Number.parseFloat(boxWidthAsString);
console.log(boxWidth);
const newBoxWidth = boxWidth + 100;
console.log(newBoxWidth);
refs.box.style.width = `${newBoxWidth}px`;

console.log(userRange.value);
console.log(userNumber.value);

let value = 27.8;
value = Math.floor(value);
console.log(value);

// const randomValue = Math.random();
// console.log('randomValue', randomValue);

// const randomNumber = Math.floor(Math.random() *(255 - 0 + 1)) + 0;
// console.log('randomNumber', randomNumber);
const min = 100;
const max = 120;
const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
const randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
const randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('randomNum:', randomNum1);
console.log('randomNum:', randomNum2);
console.log('randomNum:', randomNum3);