
// selecteer de stage & project fieldset
var projectFieldset = document.querySelector('fieldset:nth-of-type(3)');
var stageFieldset = document.querySelector('fieldset:nth-of-type(4)');

// geef een class mee om deze weg te halen
projectFieldset.classList.add('is-invisible');
stageFieldset.classList.add('is-invisible');

document.querySelector('input[type="radio"]:first-of-type').onclick = function() {
    projectFieldset.classList.add('is-visible');
    stageFieldset.classList.remove('is-visible');
}

document.querySelector('input[type="radio"]:nth-of-type(2)').onclick = function() {
    stageFieldset.classList.add('is-visible');
    projectFieldset.classList.remove('is-visible');
}
