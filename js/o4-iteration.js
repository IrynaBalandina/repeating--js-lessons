// * Через цикл for...in

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// for(const key in feedback){
// console.log(`${key}: ${feedback[key]}`);
// }
// let totalFeedback = 0;
// for (const key in feedback){
// totalFeedback += feedback[key];

// };
// console.log(totalFeedback);

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log(feedback);

// const feedbackKeys = Object.keys(feedback);
// console.log(feedbackKeys);

// let totalFeedback = 0;
// for(const key of feedbackKeys ){
// totalFeedback += feedback[key];

//   // console.log(key);
// }
// console.log(totalFeedback);

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

console.log(feedback);

const feedbackValues = Object.values(feedback);
console.log(feedbackValues);
let totalFeedback = 0;
 for(const value of feedbackValues){
  totalFeedback += value;
 }

 console.log(totalFeedback);