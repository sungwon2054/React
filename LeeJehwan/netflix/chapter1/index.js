// 1.1 arrow functions
const sayHello = (name = "human") => "Hello " + name;

const nicolas = sayHello("Nicolas");

console.log(nicolas);

// button event with arrow function
const button = document.querySelector("button");
button.addEventListener("click", (event) => console.log(event));
