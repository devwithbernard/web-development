// Variables

let number1 = 5;
let number2 = 6;

let sum = number1 + number2;

console.log(number1 + " + " + number2 + " = ", sum);

// using const

const mens = [
  {
    id: 1,
    name: "Mario",
  },
  {
    id: 2,
    name: "Jean",
  },
  {
    id: 3,
    name: "",
  },
];

const mensNames = mens.filter((men) => men.id < 3).map((men) => men.name);

mensNames.forEach((name, index) => console.log(index, ":", name));
