// 1.1 arrow functions
const sayHello = (name = "human") => "Hello " + name;
const nicolas = sayHello("Nicolas");
console.log(nicolas);

// button event with arrow function
// const button = document.querySelector("button");
// button.addEventListener("click", (event) => console.log(event));

// 1.2 Template Literlas
const sayHello2 = (name = "human") => `Hello ${name}`;
const nicolas2 = sayHello2("Nicolas");
console.log(nicolas2);

// 1.3 Object Destructuring
const human = {
  name: "Nico",
  lastName: "Serrano",
  nationality: "with i was korean",
  favFood: {
    breakfast: "sab",
    lunch: "doncas",
    dinner: "sanb + doncas",
  },
};
const {
  name: diffName,
  lastName,
  nationality,
  favFood: { breakfast, lunch, dinner },
} = human;

console.log(diffName, lastName, nationality);
console.log(breakfast, lunch, dinner);
