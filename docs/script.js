// localStorage.clear()

let questions = JSON.parse(localStorage.getItem("AllQuestions")) || [
  {
    question: "1. What is 5 + 3?",
    options: {
      a: 6,
      b: 7,
      c: 8,
      d: 9,
    },
    answer: "c",
  },
  {
    question: "2. What is 12 - 4?",
    options: {
      a: 5,
      b: 6,
      c: 7,
      d: 8,
    },
    answer: "d",
  },
  {
    question: "3. What is 3 × 4?",
    options: {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
    },
    answer: "c",
  },
  {
    question: "4. What is 16 ÷ 2?",
    options: {
      a: 6,
      b: 7,
      c: 8,
      d: 9,
    },
    answer: "c",
  },
  {
    question: "5. What is 9 + 6?",
    options: {
      a: 14,
      b: 15,
      c: 16,
      d: 17,
    },
    answer: "b",
  },
  {
    question: "6. What is 20 - 9?",
    options: {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
    },
    answer: "b",
  },
  {
    question: "7. What is 5 × 6?",
    options: {
      a: 28,
      b: 30,
      c: 32,
      d: 35,
    },
    answer: "b",
  },
  {
    question: "8. What is 18 ÷ 3?",
    options: {
      a: 4,
      b: 5,
      c: 6,
      d: 7,
    },
    answer: "c",
  },
  {
    question: "9. What is 7 + 5?",
    options: {
      a: 11,
      b: 12,
      c: 13,
      d: 14,
    },
    answer: "b",
  },
  {
    question: "10. What is 15 - 6?",
    options: {
      a: 7,
      b: 8,
      c: 9,
      d: 10,
    },
    answer: "c",
  },
];

localStorage.setItem("AllQuestions", JSON.stringify(questions));

localStorage.setItem("questionNumber", JSON.stringify(questions.length))


let userAnswers = [];
let correction = [];

let currentQuestion = 0;

let quiz = document.querySelector(".container");

let optionSelced = "";

let = document.querySelector("form");

function submitForm(e) {
  e.preventDefault();

  let formElements = addQuestionForm.children;
  if (
    formElements[1].value != "" &&
    formElements[3].value != "" &&
    formElements[5].value != "" &&
    formElements[7].value != "" &&
    formElements[9].value != "" &&
    formElements[11].value != ""
  ) {
    let inputs = {
      question: formElements[1].value,
      options: {
        a: formElements[3].value,
        b: formElements[5].value,
        c: formElements[7].value,
        d: formElements[9].value,
      },
      answer: formElements[11].value,
    };

    let getAllQestions = JSON.parse(localStorage.getItem("AllQuestions"));
    getAllQestions.push(inputs);
    questions = getAllQestions;

    localStorage.setItem("AllQuestions", JSON.stringify(getAllQestions));

    formElements[1].value != "";
    formElements[3].value != "";
    formElements[5].value != "";
    formElements[7].value != "";
    formElements[9].value != "";
    formElements[11].value != "";
  }
}

function showQuestion() {
  quiz.innerHTML = `
     <div class="flex items-center justify-between">
            <h3 class="text-[#BD41BB] text-[1.8em] ">You<span class="text-[#6272FF]">Quiz</span></h3>
       <span class="time bg-[#32415F] px-[15px] py-[4px] rounded-2xl text-[#6CEE97]">10</span> 
          </div>
          <span class="lineTime h-[5px] bg-[#6CEE97] w-[100%]"></span>
          <h2  class="text-[1.1em]"> ${questions[currentQuestion].question}</h2>
          <h3 onclick="userAnswer(this)" data-answer="a" class="border-[2px] opElement cursor-pointer rounded-md px-[10px] py-[12px]">A. ${
            questions[currentQuestion].options.a
          }</h3>
          <h3 onclick="userAnswer(this)" data-answer="b" class="border-[2px] opElement cursor-pointer rounded-md px-[10px] py-[12px]">B. ${
            questions[currentQuestion].options.b
          }</h3>
          <h3 onclick="userAnswer(this)" data-answer="c" class="border-[2px] opElement cursor-pointer rounded-md px-[10px] py-[12px]">C. ${
            questions[currentQuestion].options.c
          }</h3>
          <h3 onclick="userAnswer(this)" data-answer="d" class="border-[2px] opElement cursor-pointer rounded-md px-[10px] py-[12px]">D. ${
            questions[currentQuestion].options.d
          }</h3>
          <div class="flex justify-between">
              <button onclick="previous()" class="btn prevBtn px-[20px] py-1 ${
                currentQuestion ? "bg-[#6cb3ee]" : "bg-[#e4e4e4]"
              }  hover:bottom-2 rounded-[18px] text-[#1c1c1c]">Previous</button>
              <button onclick="next()" class="px-[20px] next py-1 bg-[#fe4b2b] rounded-[18px] text-white">skip</button>
          </div>
          `;
  setOption();
}

showQuestion();

let prevBtn = document.querySelector(".prevBtn");

function next() {
  if (currentQuestion < questions.length) {
    userAnswers[currentQuestion] = optionSelced;
    if (questions[currentQuestion].answer != userAnswers[currentQuestion]) {
      correction.push({
        ques: questions[currentQuestion].question,
        corect:
          questions[currentQuestion].options[questions[currentQuestion].answer],
        wrong: questions[currentQuestion].options[userAnswers[currentQuestion]],
      });
    }
    currentQuestion++;
    showQuestion();
  } else {
    localStorage.setItem("correction", JSON.stringify(correction));

    location.href = "result.html";
  }
}
function previous() {
  if (currentQuestion > 0) {
    currentQuestion--;
    userAnswers.pop();
    correction.pop();
    showQuestion();
  }
}

function userAnswer(userAns) {
  let next = document.querySelector(".next");
  next.innerHTML = "next";
  next.style.backgroundColor = "#6cb3ee";

  optionSelced = userAns.getAttribute("data-answer");
}

function setOption() {
  let opElements = document.querySelectorAll("h3");

  opElements.forEach((e) => {
    e.style.cursor = "pointer";
    e.addEventListener("click", () => {
      opElements.forEach((el) => {
        el.style.backgroundColor = "#fff";
      });
      e.style.backgroundColor = "#6272FF";
    });
  });
}



// to do add time functionality

// function startTimer() {
//   let time = document.querySelector(".time");
//   let lineTim = document.querySelector(".lineTime");
//   let maxTime = 11;
//   let lineTimWidth = 100;
//   for (let i = 0; i < 11; i++) {
//     setTimeout(() => {
//       time.innerHTML = maxTime - 1;
//       maxTime--;
//       if (lineTimWidth < 45) {
//         lineTim.style.backgroundColor = "#ff5733 ";
//         time.style.color = "#ff5733 ";
//       }
//       if (maxTime == 0) {
//         optionSelced = "";
//         next();
//       }
//     }, i * 1000);
//   }

//   for (let i = 0; i < 1001; i++) {
//     setTimeout(() => {
//       lineTim.style.width = `${lineTimWidth}%`;
//       lineTimWidth = lineTimWidth - 0.1;
//     }, i * 10);
//   }
// }

// startTimer();
