const launchUI = document.getElementById("launch-UI");
const resumeBtn = document.getElementById("resume-btn");
const RESTART_BTN = document.getElementById("restart-btn");
const aboutUsBtn = document.getElementById("about-us");
const EASL_BTN = document.getElementById("EASL-btn");
const CLINICAL_TRIALS_BTN = document.getElementById("clinical-trial-btn");
const PBC_BTN = document.getElementById("PBC-btn");
const DONATION_BTN = document.getElementById("donation-btn");
const HOME_BTN = document.getElementById("home-btn");
const PBC_ARROWS = document.getElementById("forward-backward-container");
const REQUEST_INFO_BTN = document.getElementById("request-info-btn");
const CLINICAL_FOOTER_BTN = document.getElementById("clinical-footer-btn");

const HOME_LEFT_COLUMN = document.getElementById("home-left-column");
const RIGHT_COLUMN = document.getElementById("right-column");
const ABOUT_LEFT_COLUMN = document.getElementById("about-left-column");
const EASL_PRESENTATION = document.getElementById("EASL-presentations");
const CLINICAL_TRIALS = document.getElementById("clinical-trials");
const PBC_FORM = document.getElementById("PBC-form-container");
const BTN_CONTAINER = document.getElementById("btn-container");
const REQUEST_INFO_CONTAINER = document.getElementById(
  "request-info-container"
);

const FORM_ARROW_BTN = document.getElementById("form-arrow-btn");
const PBC_QUESTIONS = document.querySelectorAll(".question-container");
const PBC_ARR = Array.from(PBC_QUESTIONS);
const INFO_ARROW_BTN = document.getElementById("info-arrow-btn");
const INFO_REQUESTED = document.querySelectorAll(".info-requested");
const INFO_REQUEST_ARR = Array.from(INFO_REQUESTED);
const PBC_FORWARD_ARR = document.getElementById("form-forward-btn");
const PBC_BACKWARD_ARR = document.getElementById("form-backward-btn");
const INFO_ARROWS = document.getElementById("info-forward-backward");
const INFO_FORWARD_ARO = document.getElementById("info-forward-btn");
const INFO_BACKWARD_ARO = document.getElementById("info-backward-btn");
const CORRECT_ANSWERS = document.querySelectorAll(".correct-answer");
const FIRST_QUESTION_INPUTS = document.querySelectorAll(
  ".first-question-radio"
);
const FIRST_CORRECT_ANSWER = document.getElementById("first-correct-answer");
const FIRST_CORRECT_LABEL = document.getElementById("frist-correct-label");
const SECOND_QUESTION_INPUTS = document.querySelectorAll(
  ".second-question-radio"
);
const SECOND_CORRECT_ANSWER = document.getElementById("second-correct-answer");
const SECOND_CORRECT_LABEL = document.getElementById("second-correct-label");
const THIRD_QUESTION_INPUTS = document.querySelectorAll(
  ".third-question-radio"
);
const THIRD_CORRECT_ANSWER = document.getElementById("third-correct-answer");
const THIRD_CORRECT_LABEL = document.getElementById("third-correct-label");
const FORTH_QUESTION_INPUTS = document.querySelectorAll(
  ".forth-question-radio"
);
const FORTH_CORRECT_ANSWER = document.getElementById("forth-correct-answer");
const FORTH_CORRECT_LABEL = document.getElementById("forth-correct-label");
const THANK_YOU_NOTE = document.getElementById("thank-you-note");
const INFO_THANK_YOU = document.getElementById("info-thank-you");

let questionCounter = 0;
let infoCounter = 0;

resumeBtn.addEventListener("click", (e) => {
  launchUI.style.display = "none";
});

RESTART_BTN.addEventListener("click", (e) => {
  launchUI.style.display = "none";
});

HOME_BTN.addEventListener("click", (e) => {
  HOME_LEFT_COLUMN.classList.remove("hidden");
  RIGHT_COLUMN.classList.remove("hidden");
  BTN_CONTAINER.style.display = "flex";
  ABOUT_LEFT_COLUMN.classList.add("hidden");
  EASL_PRESENTATION.classList.add("hidden");
  CLINICAL_TRIALS.classList.add("hidden");
  PBC_FORM.classList.add("hidden");
  REQUEST_INFO_CONTAINER.classList.add("hidden");
  HOME_BTN.style.color = "white";
  PBC_ARROWS.classList.add("hidden");
  INFO_ARROWS.classList.add("hidden");
  CORRECT_ANSWERS.forEach(answer => answer.classList.add('hidden'));
});


aboutUsBtn.addEventListener("click", (e) => {
  HOME_LEFT_COLUMN.classList.add("hidden");
  ABOUT_LEFT_COLUMN.classList.remove("hidden");
  EASL_PRESENTATION.classList.add("hidden");
  CLINICAL_TRIALS.classList.add("hidden");
  PBC_FORM.classList.add("hidden");
  REQUEST_INFO_CONTAINER.classList.add("hidden");
});

EASL_BTN.addEventListener("click", (e) => {
  HOME_LEFT_COLUMN.classList.add("hidden");
  ABOUT_LEFT_COLUMN.classList.add("hidden");
  RIGHT_COLUMN.classList.add("hidden");
  CLINICAL_TRIALS.classList.add("hidden");
  EASL_PRESENTATION.classList.remove("hidden");
  PBC_FORM.classList.add("hidden");
  HOME_BTN.style.color = "rgb(4,34,89)";
  REQUEST_INFO_CONTAINER.classList.add("hidden");
});

CLINICAL_TRIALS_BTN.addEventListener("click", (e) => {
  HOME_LEFT_COLUMN.classList.add("hidden");
  ABOUT_LEFT_COLUMN.classList.add("hidden");
  RIGHT_COLUMN.classList.add("hidden");
  EASL_PRESENTATION.classList.add("hidden");
  CLINICAL_TRIALS.classList.remove("hidden");
  PBC_FORM.classList.add("hidden");
  HOME_BTN.style.color = "rgb(4,34,89)";
  REQUEST_INFO_CONTAINER.classList.add("hidden");
});

PBC_BTN.addEventListener("click", (e) => {
  HOME_LEFT_COLUMN.classList.add("hidden");
  ABOUT_LEFT_COLUMN.classList.add("hidden");
  RIGHT_COLUMN.classList.remove("hidden");
  EASL_PRESENTATION.classList.add("hidden");
  CLINICAL_TRIALS.classList.add("hidden");
  BTN_CONTAINER.style.display = "none";
  PBC_FORM.classList.remove("hidden");
  PBC_ARROWS.classList.remove("hidden");
  REQUEST_INFO_CONTAINER.classList.add("hidden");
  THANK_YOU_NOTE.classList.add("hidden");
});

REQUEST_INFO_BTN.addEventListener("click", (e) => {
  HOME_LEFT_COLUMN.classList.add("hidden");
  ABOUT_LEFT_COLUMN.classList.add("hidden");
  RIGHT_COLUMN.classList.remove("hidden");
  EASL_PRESENTATION.classList.add("hidden");
  CLINICAL_TRIALS.classList.add("hidden");
  BTN_CONTAINER.style.display = "none";
  PBC_FORM.classList.add("hidden");
  REQUEST_INFO_CONTAINER.classList.remove("hidden");
  HOME_BTN.style.color = "white";
  INFO_ARROWS.classList.remove("hidden");
});

CLINICAL_FOOTER_BTN.addEventListener("click", (e) => {
  HOME_LEFT_COLUMN.classList.add("hidden");
  ABOUT_LEFT_COLUMN.classList.add("hidden");
  RIGHT_COLUMN.classList.remove("hidden");
  EASL_PRESENTATION.classList.add("hidden");
  CLINICAL_TRIALS.classList.add("hidden");
  BTN_CONTAINER.style.display = "none";
  PBC_FORM.classList.add("hidden");
  REQUEST_INFO_CONTAINER.classList.remove("hidden");
  HOME_BTN.style.color = "white";
});

FORM_ARROW_BTN.addEventListener("click", handleFormForwardClick);
INFO_ARROW_BTN.addEventListener("click", handleInfoForwardClick);

PBC_FORWARD_ARR.addEventListener("click", handleFormForwardClick);
PBC_BACKWARD_ARR.addEventListener("click", handleFormBackwardClick);
INFO_FORWARD_ARO.addEventListener("click", handleInfoForwardClick);
INFO_BACKWARD_ARO.addEventListener("click", handleInfoBackwardClick);

function handleFormForwardClick(e) {
  e.preventDefault();
  if (questionCounter === PBC_ARR.length - 1) {
    FORM_ARROW_BTN.type = "submit";
    FORM_ARROW_BTN.classList.add("hidden");
    PBC_QUESTIONS.forEach((question) => question.classList.add("hidden"));
    PBC_ARROWS.classList.add("hidden");
    THANK_YOU_NOTE.classList.remove("hidden");
    return;
  }

  questionCounter++;
  PBC_QUESTIONS[questionCounter].classList.remove("hidden");
  PBC_ARR.forEach((question) => {
    if (question !== PBC_QUESTIONS[questionCounter])
      question.classList.add("hidden");
  });
  CORRECT_ANSWERS.forEach((answer) => answer.classList.add("hidden"));
}

function handleFormBackwardClick(e) {
  e.preventDefault();
  if (questionCounter === 0) return;

  questionCounter--;
  PBC_QUESTIONS[questionCounter].classList.remove("hidden");
  PBC_ARR.forEach((question) => {
    if (question !== PBC_QUESTIONS[questionCounter])
      question.classList.add("hidden");
  });
  CORRECT_ANSWERS.forEach((answer) => answer.classList.add("hidden"));
}

function handleInfoForwardClick(e) {
  e.preventDefault();
  if (infoCounter === INFO_REQUEST_ARR.length - 1) {
    INFO_ARROW_BTN.type = "submit";
    INFO_ARROW_BTN.classList.add("hidden");
    INFO_REQUESTED.forEach((info) => info.classList.add("hidden"));
    INFO_ARROWS.classList.add("hidden");
    INFO_THANK_YOU.classList.remove("hidden");
    return;
  }
  infoCounter++;
  INFO_REQUESTED[infoCounter].classList.remove("hidden");
  INFO_REQUEST_ARR.forEach((info) => {
    if (info !== INFO_REQUESTED[infoCounter]) info.classList.add("hidden");
  });
}

function handleInfoBackwardClick(e) {
  e.preventDefault();
  if (infoCounter === 0) return;

  infoCounter--;
  INFO_REQUESTED[infoCounter].classList.remove("hidden");
  INFO_REQUEST_ARR.forEach((info) => {
    if (info !== INFO_REQUESTED[infoCounter]) info.classList.add("hidden");
  });
}

FIRST_QUESTION_INPUTS.forEach((input) => {
  input.addEventListener("click", (e) => {
    FIRST_CORRECT_LABEL.style.color = "red";
    FIRST_CORRECT_ANSWER.classList.remove("hidden");
    FIRST_QUESTION_INPUTS.forEach((input) => (input.disabled = true));
  });
});

SECOND_QUESTION_INPUTS.forEach((input) => {
  input.addEventListener("click", (e) => {
    SECOND_CORRECT_LABEL.style.color = "red";
    SECOND_CORRECT_ANSWER.classList.remove("hidden");
    SECOND_QUESTION_INPUTS.forEach((input) => (input.disabled = true));
  });
});

THIRD_QUESTION_INPUTS.forEach((input) => {
  input.addEventListener("click", (e) => {
    THIRD_CORRECT_LABEL.style.color = "red";
    THIRD_CORRECT_ANSWER.classList.remove("hidden");
    THIRD_QUESTION_INPUTS.forEach((input) => (input.disabled = true));
  });
});

FORTH_QUESTION_INPUTS.forEach((input) => {
  input.addEventListener("click", (e) => {
    FORTH_CORRECT_LABEL.style.color = "red";
    FORTH_CORRECT_ANSWER.classList.remove("hidden");
    FORTH_QUESTION_INPUTS.forEach((input) => (input.disabled = true));
  });
});


