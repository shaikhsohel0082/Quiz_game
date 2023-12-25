// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three ", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };
const questionJSON = [
  {
    correctAnswer: "Three",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "Narmadaa",
    options: ["Narmadaa", "Mahanadi", "Son", "Netravati"],
    question:
      "Which one of the following river flows between Vindhyan and Satpura ranges?",
  },
  {
    correctAnswer: "Panini",
    options: ["Kalidasa", "Charak ", "Panini", "Aryabhatt"],
    question: "Who among the following wrote Sanskrit grammar?",
  },
  {
    correctAnswer: "Silver",
    options: ["Zinc", "Silver ", "Copper", "Aluminum"],
    question: "The metal whose salts are sensitive to light is?",
  },
  {
    correctAnswer: "Russia",
    options: ["China", "India ", "Russia", "France"],
    question: "The country that has the highest in Barley Production?",
  },
  {
    correctAnswer: "Fiji",
    options: ["India", "Fiji ", "UK", "USA"],
    question: "Golf player Vijay Singh belongs to which country?",
  },
];
const questionEle = document.getElementById("question");
const optionDiv = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextButton = document.getElementById("next");

let scoreCounter = 0;
let currentQuestion = 0;

function showQuestion() {
  // deconstructing
  const { correctAnswer, options, question } = questionJSON[currentQuestion];
  //displaying the question
  questionEle.textContent = question;

  for (let i = 0; i < options.length; i++) {
    const optionButton = document.createElement("button");
    optionButton.textContent = options[i];
    optionDiv.append(optionButton);
    optionButton.addEventListener("click", () => {
      if (optionButton.innerText === correctAnswer) {
        optionButton.style.backgroundColor = "green";
        scoreCounter++;
      } else {
        optionButton.style.backgroundColor = "red";
        scoreCounter = scoreCounter - 0.25;
      }
      scoreEl.textContent = `Score: ${scoreCounter} / ${questionJSON.length}`;

      nextQuestion();
    });
  }
}

function nextQuestion() {
  currentQuestion++;
  optionDiv.textContent = "";
  if (currentQuestion >= questionJSON.length) {
    questionEle.textContent = "Quiz Completed";
    optionDiv.textContent = "";
    nextButton.style.display = "none";
  } else {
    showQuestion();
  }
}
showQuestion();
// next button event handler
nextButton.addEventListener("click", () => {
  nextQuestion();
  scoreEl.textContent = `Score: ${scoreCounter} / ${questionJSON.length}`;
});
