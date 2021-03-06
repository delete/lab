var CHOICES = {
  'rock': 'images/rock.png',
  'paper': 'images/paper.jpg',
  'scissors': 'images/scissors.png'
};

(function () {
  var chooseOptions = document.getElementById('options');

  chooseOptions.addEventListener('click', function (event) {
    var target = event.toElement || event.srcTarget || event.target || event.srcElement;

    var playerChoice = target.id;
    var computerChoice = getComputerChoice();

    displayResults(playerChoice, computerChoice);

    setTimeout(function(){
      defaultEnv()
    }, 1500);
  });
}());

function getComputerChoice () {
  var options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random()*3)];
};

function displayResults (playerChoice, compChoice) {
    
  changeImages(playerChoice, compChoice);
  
  if ( playerChoice == compChoice ) {
    setResultMessage('Tie!', 'tie');

  } else if ( (isRock(playerChoice) && isScissors(compChoice)) || 
    (isPaper(playerChoice) && isRock(compChoice)) || 
    (isScissors(playerChoice) && isPaper(compChoice)) ) {
      setResultMessage('You Win!', 'win');

  } else {
    setResultMessage('You Lose!', 'lose');
  }

  function isRock(choice) {
    return choice === 'rock'
  }
  function isScissors(choice){
    return choice === 'scissors'
  }
  function isPaper(choice) {
    return choice === 'paper'
  }

};

function changeImages (playerChoice, compChoice) {
  var playerHand = document.getElementById('right_hand');
  playerHand.setAttribute('src', CHOICES[playerChoice]);

  var compHand = document.getElementById('left_hand');
  compHand.setAttribute('src', CHOICES[compChoice]);
};

function setResultMessage (text, result) {
  var message = document.getElementById('message');

  switch (result) {
    case 'tie':
      message.setAttribute('class', 'tie');
      message.innerHTML = text;
      break;

    case 'win':
      message.setAttribute('class', 'win');
      message.innerHTML = text;
      break;

    case 'lose':
      message.setAttribute('class', 'lose');
      message.innerHTML = text;
      break;
      
    default:
      message.setAttribute('class', '');
  }
};

function defaultEnv () {
  var playerHand = document.getElementById('right_hand');
  playerHand.setAttribute('src', 'images/right_fist.png');

  var compHand = document.getElementById('left_hand');
  compHand.setAttribute('src', 'images/left_fist.png');

  var message = document.getElementById('message');
  message.innerHTML = 'Choose you option!';
  message.setAttribute('class', '');
};

