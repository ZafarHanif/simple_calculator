#!/usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message:
      "Please choose the operation you would like to perform from the following options:",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Percentage",
    ],
  },
]);
//Conditional statement to perform the selected operation
if (answer.operator === "Addition") {
  console.log("Your answer is:" + (answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "Subtraction") {
  console.log("Your answer is:" + (answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
  console.log("Your answer is:" + answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log("Your answer is:" + answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Percentage") {
  console.log(
    "Your answer is:" + (answer.firstNumber * answer.secondNumber) / 100
  );
} else {
  console.log(
    "Oops! That's not a valid selection. Please choose one of the available operators."
  );
}
