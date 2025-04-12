const user = {
    firstName: "Iryna",
    lastName: "Balandina",
}

const userCopy = user;



console.log('user:', user);
console.log('userCopy:', userCopy);

userCopy.firstName = "Aryna";

console.log('user:', user);
console.log('userCopy:', userCopy);