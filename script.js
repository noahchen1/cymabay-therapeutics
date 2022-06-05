const launchUI = document.getElementById('launch-UI')
const resumeBtn = document.getElementById('resume-btn')
const aboutUsBtn = document.getElementById('about-us')
const EASL_BTN = document.getElementById('EASL-btn')
const CLINICAL_TRIALS_BTN = document.getElementById('clinical-trial-btn')
const PBC_BTN = document.getElementById('PBC-btn')
const DONATION_BTN = document.getElementById('donation-btn')
const HOME_BTN = document.getElementById('home-btn')
const PBC_ARROWS = document.getElementById('forward-backward-container')

const HOME_LEFT_COLUMN = document.getElementById('home-left-column')
const RIGHT_COLUMN = document.getElementById('right-column')
const ABOUT_LEFT_COLUMN = document.getElementById('about-left-column')
const EASL_PRESENTATION = document.getElementById('EASL-presentations')
const CLINICAL_TRIALS = document.getElementById('clinical-trials')
const PBC_FORM = document.getElementById('PBC-form-container')
const BTN_CONTAINER = document.getElementById('btn-container')


resumeBtn.addEventListener('click', e => {
    launchUI.style.display = 'none';
})

HOME_BTN.addEventListener('click', e => {
    HOME_LEFT_COLUMN.classList.remove('hidden')
    RIGHT_COLUMN.classList.remove('hidden')
    BTN_CONTAINER.style.display = 'flex'
    ABOUT_LEFT_COLUMN.classList.add('hidden')
    EASL_PRESENTATION.classList.add('hidden')
    CLINICAL_TRIALS.classList.add('hidden')
    PBC_FORM.classList.add('hidden')
    HOME_BTN.style.color = 'white'
})

// right column code
aboutUsBtn.addEventListener('click', e => {
    HOME_LEFT_COLUMN.classList.add('hidden')
    ABOUT_LEFT_COLUMN.classList.remove('hidden')
    EASL_PRESENTATION.classList.add('hidden')
    CLINICAL_TRIALS.classList.add('hidden')
    PBC_FORM.classList.add('hidden')
})

EASL_BTN.addEventListener('click', e => {
    HOME_LEFT_COLUMN.classList.add('hidden')
    ABOUT_LEFT_COLUMN.classList.add('hidden')
    RIGHT_COLUMN.classList.add('hidden')
    CLINICAL_TRIALS.classList.add('hidden')
    EASL_PRESENTATION.classList.remove('hidden')
    PBC_FORM.classList.add('hidden')
    HOME_BTN.style.color = 'rgb(4,34,89)'
})

CLINICAL_TRIALS_BTN.addEventListener('click', e => {
    HOME_LEFT_COLUMN.classList.add('hidden')
    ABOUT_LEFT_COLUMN.classList.add('hidden')
    RIGHT_COLUMN.classList.add('hidden')
    EASL_PRESENTATION.classList.add('hidden')
    CLINICAL_TRIALS.classList.remove('hidden')
    PBC_FORM.classList.add('hidden')
    HOME_BTN.style.color = 'rgb(4,34,89)';
})

PBC_BTN.addEventListener('click', e => {
    HOME_LEFT_COLUMN.classList.add('hidden')
    ABOUT_LEFT_COLUMN.classList.add('hidden')
    RIGHT_COLUMN.classList.remove('hidden')
    EASL_PRESENTATION.classList.add('hidden')
    CLINICAL_TRIALS.classList.add('hidden')
    BTN_CONTAINER.style.display = 'none'
    PBC_FORM.classList.remove('hidden')
    PBC_ARROWS.classList.remove('hidden')
})


////////////////////////////////////////////
const FORM_ARROW_BTN = document.getElementById('form-arrow-btn')
const PBC_QUESTIONS = document.querySelectorAll('.question-container')
const PBC_ARR = Array.from(PBC_QUESTIONS)

// const for radio btns
const CORRECT_ANSWERS = document.querySelectorAll('.correct-answer')
const FIRST_QUESTION_INPUTS = document.querySelectorAll('.first-question-radio')
const FIRST_CORRECT_ANSWER = document.getElementById('first-correct-answer')
const FIRST_CORRECT_LABEL = document.getElementById("frist-correct-label")
const SECOND_QUESTION_INPUTS = document.querySelectorAll('.second-question-radio')
const SECOND_CORRECT_ANSWER = document.getElementById('second-correct-answer')
const SECOND_CORRECT_LABEL = document.getElementById('second-correct-label')
const THIRD_QUESTION_INPUTS = document.querySelectorAll('.third-question-radio')
const THIRD_CORRECT_ANSWER = document.getElementById('third-correct-answer')
const THIRD_CORRECT_LABEL = document.getElementById('third-correct-label')
const FORTH_QUESTION_INPUTS = document.querySelectorAll('.forth-question-radio')
const FORTH_CORRECT_ANSWER = document.getElementById('forth-correct-answer')
const FORTH_CORRECT_LABEL = document.getElementById('forth-correct-label')
const THANK_YOU_NOTE = document.getElementById('thank-you-note')

let questionCounter = 0

FORM_ARROW_BTN.addEventListener('click', handleFormForwardClick)

function handleFormForwardClick(e) {
    e.preventDefault()
    if(questionCounter === PBC_ARR.length - 1) {
        FORM_ARROW_BTN.type = 'submit'
        FORM_ARROW_BTN.classList.add('hidden')
        PBC_QUESTIONS.forEach(question => question.classList.add('hidden'))
        PBC_ARROWS.classList.add('hidden')
        THANK_YOU_NOTE.classList.remove('hidden')
        return
    }  
    
    questionCounter++
    PBC_QUESTIONS[questionCounter].classList.remove('hidden')
    PBC_ARR.forEach(question => {
        if(question !== PBC_QUESTIONS[questionCounter]) question.classList.add('hidden')
    })
    CORRECT_ANSWERS.forEach(answer => answer.classList.add('hidden'))
}


//Radio btn for PBC survey


FIRST_QUESTION_INPUTS.forEach(input => {
    input.addEventListener('click', e => {
        FIRST_CORRECT_LABEL.style.color = 'red'
        FIRST_CORRECT_ANSWER.classList.remove('hidden')
        FIRST_QUESTION_INPUTS.forEach(input => input.disabled = true)
    })
})

SECOND_QUESTION_INPUTS.forEach(input => {
    input.addEventListener('click', e => {
        SECOND_CORRECT_LABEL.style.color = 'red'
        SECOND_CORRECT_ANSWER.classList.remove('hidden')
        SECOND_QUESTION_INPUTS.forEach(input => input.disabled = true)
    })
})

THIRD_QUESTION_INPUTS.forEach(input => {
    input.addEventListener('click', e => {
        THIRD_CORRECT_LABEL.style.color = 'red'
        THIRD_CORRECT_ANSWER.classList.remove('hidden')
        THIRD_QUESTION_INPUTS.forEach(input => input.disabled = true)
    })
})

FORTH_QUESTION_INPUTS.forEach(input => {
    input.addEventListener('click', e => {
        FORTH_CORRECT_LABEL.style.color = 'red'
        FORTH_CORRECT_ANSWER.classList.remove('hidden')
        FORTH_QUESTION_INPUTS.forEach(input => input.disabled = true)
    })
})



