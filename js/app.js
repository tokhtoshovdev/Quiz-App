const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Trainer Markup Language",
    b: "Hyper Text Markup Language",
    c: "Hyperlinks and Text Markup Language",
    correct: "b",
  },
  {
    question: "Which HTML element is used to define important text?",
    a: "<strong>",
    b: "<important>",
    c: "<b>",
    correct: "a",
  },
  {
    question: "What property is used to change the background color in CSS?",
    a: "color",
    b: "bgcolor",
    c: "background-color",
    correct: "c",
  },
  {
    question: "Which CSS property controls text size?",
    a: "font-size",
    b: "text-size",
    c: "font-style",
    correct: "a",
  },
  {
    question:
      "What is the correct syntax for referring to an external JavaScript file?",
    a: "<script src='app.js'>",
    b: "<script href='app.js'>",
    c: "<script file='app.js'>",
    correct: "a",
  },
  {
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    a: "push()",
    b: "add()",
    c: "append()",
    correct: "a",
  },
  {
    question: "What does 'CSS' stand for?",
    a: "Cascading Style Sheets",
    b: "Computer Style Sheets",
    c: "Creative Style System",
    correct: "a",
  },
  {
    question: "Which attribute is used in HTML to specify an inline style?",
    a: "style",
    b: "class",
    c: "font",
    correct: "a",
  },
  {
    question: "How can you write a comment in JavaScript?",
    a: "// This is a comment",
    b: "' This is a comment",
    c: "# This is a comment",
    correct: "a",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    a: "<link>",
    b: "<a>",
    c: "<href>",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  quiz.innerHTML = `
      <h2>${currentQuizData.question}</h2>
      <label>
        <input type="radio" name="answer" value="a">
        ${currentQuizData.a}
      </label><br>
      <label>
        <input type="radio" name="answer" value="b">
        ${currentQuizData.b}
      </label><br>
      <label>
        <input type="radio" name="answer" value="c">
        ${currentQuizData.c}
      </label>
    `;
}

submitBtn.addEventListener("click", () => {
  const answer = document.querySelector('input[name="answer"]:checked');
  if (answer) {
    if (answer.value === quizData[currentQuestion].correct) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = "";
      submitBtn.style.display = "none";
      result.innerHTML = `
          <h2>Quiz Finished!</h2>
          <p>Correct Answers: ${correctAnswers}</p>
          <p>Wrong Answers: ${wrongAnswers}</p>
        `;
    }
  } else {
    alert("Please select an answer!");
  }
});

loadQuiz();
