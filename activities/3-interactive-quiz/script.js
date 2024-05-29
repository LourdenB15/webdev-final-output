const quizData = [
  {
    question: '1+0?',
    answer: '1',
  },
  {
    question: '2+0?',
    answer: '2',
  },
  {
    question: '3+0?',
    answer: '3',
  },
  {
    question: '4+0?',
    answer: '4',
  },
  {
    question: '5+0?',
    answer: '5',
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionContainer = document.getElementById('quiz');
  questionContainer.innerHTML = '';

  const currentQuestion = quizData[currentQuestionIndex];
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.textContent = currentQuestion.question;

  questionContainer.appendChild(questionElement);
}

function submitAnswer() {
  const answerInput = document.getElementById('answer');
  const userAnswer = answerInput.value.trim();
  const currentQuestion = quizData[currentQuestionIndex];

  if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score++;
  }

  answerInput.value = '';
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const questionContainer = document.getElementById('quiz');
  questionContainer.innerHTML = '';
  const scoreElement = document.getElementById('score');
  window.document.querySelector('.quiz-block').style.display = 'none';
  window.document.querySelector('.restart').style.display = 'block';
  scoreElement.textContent = `Your score: ${score} / ${quizData.length}`;
}

loadQuestion();

function refreshPage() {
  location.href = location.href;
}
