const quizData = [
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answer: 'Mars',
  },
  {
    question: 'What is the largest ocean on Earth?',
    answer: 'Pacific Ocean',
  },
  {
    question: 'What is the smallest prime number?',
    answer: '2',
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: 'William Shakespeare',
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
