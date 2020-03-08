'use strict';


async function runAdventure() {
  let chosenChoice = null;

  setQuestion('Select:how are you made');
  addChoice('Bully goat');
  addChoice('brutalistic');
  addChoice('jack hammer');
  addChoice('hollowback');
  chosenChoice = await getChoice();
  
  if (chosenChoice === 'Bully goat') {
    setQuestion('which area are you gonna race in?');
    addChoice('bedroom');
    addChoice('minigolf');
    addChoice('attic');
    addChoice('bowling alley');

    chosenChoice = await getChoice();

    if (chosenChoice === 'minigolf') {
      setQuestion('which map in the area would you race in')
      addChoice('spooky sprint');
      addChoice('underwater washout');
      addChoice('which doctor way');
      addChoice('t-rex rush');

      if (chosenChoice === 'spooky sprint')
      setQuestion('which faction are you racing')
      addChoice('turbo');
      addChoice('nitro');
      addChoice('inferno');
    }
    else if (chosenChoice === 'bedroom'){
      setQuestion('which map in the area would you race in')
      addChoice('floorboard frenzy');
      addChoice('bedroom brawl');
      addChoice('Desktop dash');
      addChoice('bathroom break');
    }
  }
  else {
    setQuestion('');
    addChoice('Run away');
    
  }
}













/* --------------------------------------- */
/* -------DON'T TOUCH ANTHING BELOW------- */
/* --------------------------------------- */

window.chosenChoice = null;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');


function setQuestion(questionText) {
  questionElement.textContent = questionText;
}

function addChoice(choiceText) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('class', 'choice');

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'radio');
  inputElement.setAttribute('name', 'choice');
  inputElement.value = choiceText;
  inputElement.onclick = () => {
    window.chosenChoice = choiceText;
  };

  const labelElement = document.createElement('label');
  labelElement.for = choiceText;
  labelElement.textContent = choiceText;

  wrapperElement.appendChild(inputElement);
  wrapperElement.appendChild(labelElement);
  document.getElementById('choices').appendChild(wrapperElement);
}
function clearChoices() {
  while (choicesElement.lastChild) {
    choicesElement.removeChild(choicesElement.lastChild);
  }
}

function getChoice() {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (window.chosenChoice !== null) {
        const returnValue = window.chosenChoice;
        window.chosenChoice = null;
        clearInterval(interval);
        setQuestion('');
        clearChoices();
        resolve(returnValue);
      } 
    }, 100);
  });
}

runAdventure();
