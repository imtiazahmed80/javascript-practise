// Iterating an Array
const numbers = [1, 2, 3, 4, 5];

//using for loop
for (let index = 0; index < numbers.length; index++) {
  console.log(index, numbers[index]);
}

// using for...of loop
for (let num of numbers) {
  console.log(num);
}

// using for...each loop
numbers.forEach(function (num, index) {
  console.log(index, num);
});

// Sort and reversing an array
const srt = [6, 3, , 7, 2, 1, 9];

srt.sort();
console.log(srt);

let developers = [
  { name: "Imtiaz", age: 26 },
  { name: "Rahat", age: 21 },
  { name: "Anika", age: 24 },
];

developers
  .sort(function (d1, d2) {
    if (d1.age > d2.age) return +1;
    if (d1.age === d2.age) return 0;
    if (d1.age < d2.age) return -1;
  })
  .reverse();

console.log(developers);
