quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Copenhegen", "Paris", "Madrid",],
    answer: "Paris"
  },

  {
    question: "what is the capital of Italy?",
    options: ["Rome", "Chicago", "London", "Oslo",],
    answer: "Rome"
  },
  {
    question: "what is the capital of USA?",
    options: ["New York", "Washington D.C.", "Los Angeles", "Chicago",],
    answer: "Washington D.C."
  }
];

const question = document.getElementById("question");
const optionsList = document.querySelectorAll(".optionsList li");
const nextQuestion = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  question.innerText = quizQuestions[currentQuestionIndex].question;
  optionsList.forEach((option, index) => {
    option.innerText = quizQuestions[currentQuestionIndex].options[index];
  });

  optionsList.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.innerText === quizQuestions[currentQuestionIndex].answer) {
        score++;
        currentQuestionIndex++;
        option.classList.add("bg-green-600/70");
        optionsList.forEach(opt => {
          opt.style.pointerEvents = "none";
        });
        nextQuestion.classList.remove("hidden");
      } else {
        currentQuestionIndex++;
        option.classList.remove("bg-gray-700/60", "hover:bg-gray-700/80");
        option.classList.add("bg-red-600/70");
      }
      optionsList.forEach(opt => {
        opt.style.pointerEvents = "none";
      });
      nextQuestion.classList.remove("hidden");
    });
  });
nextQuestion.addEventListener("click", () => {
  let scoreDisplay = document.getElementById("scoreDisplay");
  
  if (currentQuestionIndex >= quizQuestions.length) {
    scoreDisplay.classList.remove("hidden");
    question.innerText = "Quiz completed!";
    scoreDisplay.innerText = `Your score: ${score} / ${quizQuestions.length}`;
    nextQuestion.classList.add("hidden");

    optionsList.forEach((option) => {
      option.style.display = "none";
    });
    return;
  }
  
  question.innerText = quizQuestions[currentQuestionIndex].question;
  optionsList.forEach((option, index) => {
    option.innerText = quizQuestions[currentQuestionIndex].options[index];
    option.classList.remove("bg-green-600/70", "bg-red-600/70");
    option.classList.add("bg-gray-700/60", "hover:bg-gray-700/80");
    option.style.pointerEvents = "auto";
  });
  
  nextQuestion.classList.add("hidden");
});
};
localStorage.setItem("score", score);
loadQuestion();
