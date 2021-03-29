// 1.1 arrow functions
const sayHello = (name = "human") => "Hello " + name;
const nicolas = sayHello("Nicolas");
console.log(nicolas);

// button event with arrow function
const button = document.querySelector("button");
button.addEventListener("click", (event) => console.log(event));

// 1.2 Template Literlas
const sayHello2 = (name = "human") => `Hello ${name}`;
const nicolas2 = sayHello2("Nicolas");
console.log(nicolas2);
