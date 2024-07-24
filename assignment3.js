const quizData = [
  {
    question: "For what HTML stands for?",
    options: ["Hypertext Markup Language", "Hybridtext Markup Literature", "Hometext Making Language", "Hypertext making Language"],
    answer: "Hypertext Markup Language"
  },
  {
    question: "Which is the latest version of HTML?",
    options: ["HTML3", "HTML4", "XHTML", "HTML5"],
    answer: "HTML5"
  },
  {
    question:"For what p is used?",
    options: ["insert image", "video editing", "writing paragraph", "editing paragraph"], 
    answer: "writing paragraph"  
  },
  {
    question:"Are {} important while writing code?",
    options:["yes", "no", "may be", "should be"],
    answer: "yes"
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  // Corrected the assignment to display result
  document.body.innerHTML = `
    <div id="quiz-result">
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    </div>
  `;
}

showQuestion();
