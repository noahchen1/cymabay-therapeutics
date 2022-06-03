const launchUI = document.getElementById('launch-UI')
const resumeBtn = document.getElementById('resume-btn')
const aboutUsBtn = document.getElementById('about-us')
const EASL_BTN = document.getElementById('EASL-btn')
const CLINICAL_TRIALS_BTN = document.getElementById('clinical-trial-btn')

const homeLeftColumn = document.getElementById('home-left-column')
const RIGHT_COLUMN = document.getElementById('right-column')
const aboutLeftColumn = document.getElementById('about-left-column')
const EASL_Presentation = document.getElementById('EASL-presentations')
const CLINICAL_TRIALS = document.getElementById('clinical-trials')

resumeBtn.addEventListener('click', e => {
    launchUI.style.display = 'none';
})

// right column code
aboutUsBtn.addEventListener('click', e => {
    homeLeftColumn.classList.add('hidden')
    aboutLeftColumn.classList.remove('hidden')
    EASL_Presentation.classList.add('hidden')
    CLINICAL_TRIALS.classList.add('hidden')
})

EASL_BTN.addEventListener('click', e => {
    homeLeftColumn.classList.add('hidden')
    aboutLeftColumn.classList.add('hidden')
    RIGHT_COLUMN.classList.add('hidden')
    CLINICAL_TRIALS.classList.add('hidden')
    EASL_Presentation.classList.remove('hidden')
})

CLINICAL_TRIALS_BTN.addEventListener('click', e => {
    homeLeftColumn.classList.add('hidden')
    aboutLeftColumn.classList.add('hidden')
    RIGHT_COLUMN.classList.add('hidden')
    EASL_Presentation.classList.add('hidden')
    CLINICAL_TRIALS.classList.remove('hidden')
})

