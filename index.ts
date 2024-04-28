#!/usr/bin/env node
import chalk from "chalk";
console.log(
  chalk.bold.rgb(255, 136, 0)("Welcome to ") +
    chalk.bold.rgb(255, 136, 0)("CodeWithZefi - CLI Simple Calculator")
);
//console.log(chalk.bold.rgb(0, 255, 255)("Welcome to ") + chalk.bold.rgb(0, 255, 255)("CodeWithZefi - CLI Simple Calculator"));

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: chalk.yellow("Enter first number"),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.cyan("Enter second number"),
    type: "number",
    name: "secondNumber",
  },
  {
    message: chalk.green(
      "Please choose the operation you would like to perform from the following options:"
    ),
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
  console.log(
    chalk.cyan("Your answer is: ") +
      chalk.bold.rgb(255, 69, 0)(answer.firstNumber + answer.secondNumber)
  );
} else if (answer.operator === "Subtraction") {
  console.log(
    chalk.cyan("Your answer is: ") +
      chalk.bold.rgb(255, 69, 0)(answer.firstNumber - answer.secondNumber)
  );
} else if (answer.operator === "Multiplication") {
  console.log(
    chalk.cyan("Your answer is: ") +
      chalk.bold.rgb(255, 69, 0)(answer.firstNumber * answer.secondNumber)
  );
} else if (answer.operator === "Division") {
  console.log(
    chalk.cyan("Your answer is: ") +
      chalk.bold.rgb(255, 69, 0)(answer.firstNumber / answer.secondNumber)
  );
} else if (answer.operator === "Percentage") {
  console.log(
    chalk.cyan("Your answer is:") +
      chalk.bold.rgb(
        255,
        69,
        0
      )((answer.firstNumber * answer.secondNumber) / 100)
  );
} else {
  console.log(
    chalk.red(
      "Oops! That's not a valid selection. Please choose one of the available operators."
    )
  );
}
