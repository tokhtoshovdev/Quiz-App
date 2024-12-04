const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    correct: "c",
  },
  {
    question: "Who wrote 'Hamlet'?",
    a: "Charles Dickens",
    b: "William Shakespeare",
    c: "Mark Twain",
    correct: "b",
  },
  {
    question: "What is 2 + 2?",
    a: "3",
    b: "4",
    c: "5",
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
