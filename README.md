# Quiz Game

A simple quiz game implemented using HTML, CSS, and JavaScript.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [How to Run](#how-to-run)
- [Customization](#customization)


## Description

This project is a basic quiz game where users can answer a series of questions and see their score at the end. It is implemented using HTML for the structure, CSS for styling, and JavaScript for the quiz logic.

## Features

- Multiple-choice questions with options.
- Immediate feedback on the correctness of the selected answer.
- Score tracking throughout the quiz.
- Quiz completion message at the end.

## Usage

To use this quiz game, open the `index.html` file in a web browser. The quiz will start, presenting a series of questions. Choose an option for each question, and the game will provide feedback on the correctness of your answers. Your score will be displayed at the end of the quiz.
### OR

[Click here](https://shaikhsohel0082.github.io/Quiz_game/)

## How to Run

Simply open the `index.html` file in a web browser. No additional setup or installation is required.

## Customization

To customize the quiz questions, edit the `questionJSON` array in the `quiz.js` file. Each question object should have the following structure:

```javascript
{
  correctAnswer: "CorrectOption",
  options: ["Option1", "Option2", "Option3", "Option4"],
  question: "Your question goes here?",
}
