//
// BlackJack
// by Mark Zamoyta
//

let suits = ['Clubs','Diamonds','Hearts','Spades'];

let cardValues = ['Ace','King','Queen','Jack',
                  'Ten','Nine','Eight','Seven','Six',
                  'Five','Four','Three','Two'];

// Initialise buttons
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

// Initialise game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

// Hide Hit! and Stay buttons
hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

// Add event handler for New Game button
newGameButton.addEventListener('click', function() {
  //textArea.innerText = 'Started...';
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

// Hit! button event handler
hitButton.addEventListener('click', function() {
	playerCards.push(getNextCard());
	checkForEndOfGame();
	showStatus();
});

// Stay button event handler
stayButton.addEventListener('click', function() {
	gameOver = true;
	checkForEndOfGame();
	showStatus();
});
				  
				  /* Create function with Object: Objects
function createDeck() {
	let deck = [];
	for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
	  for (let cardvalueIdx = 0; cardvalueIdx < cardValues.length; cardvalueIdx++) {
		deck.push(cardValues[cardvalueIdx] + ' of ' + suits[suitIdx]);
	  }
	}
	return deck;
} 
*/

function createDeck() {
	let deck = [];
	for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
	  for (let cardvalueIdx = 0; cardvalueIdx < cardValues.length; cardvalueIdx++) {
		let card = {
			suit: suits[suitIdx],
			cardValue: cardValues[cardvalueIdx]
		};
		deck.push(card);
	  }
	}
	return deck;
}

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

function getCardString(card) {
	return card.cardValue + ' of ' + card.suit;
}

function getCardNumericValue(card) {
  switch(card.cardValue) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.cardValue === 'Ace') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
	updateScores();
	
	if(gameOver) {
	// let dealer take cards
		while (dealerScore < playerScore
				&& playerScore <= 21
				&& dealerScore <= 21) {
			dealerCards.push(getNextCard());
			updateScores();
		}
	}
	
	if (playerScore > 21) {
		playerWon = false;
		gameOver = true;
	}
	else if (dealerScore > 21) {
		playerWon = true;
		gameOver = true;
	}
	else if (gameOver) {
		if (playerScore > dealerScore) {
			playerWon = true;
		}
		else {
			playerWon = false;
		}
	}	
	// If scores are equal, Dealer wins
	// Game not won on score of 21 (BlackJack)
	// Game not won on having been dealt five cards
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }
  
  let dealerCardString = '';
  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
  
  let playerCardString = '';
  for (let i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }
  
  updateScores();
  
  textArea.innerText = 
    'Dealer has:\n' + 
    dealerCardString + 
    '(score: ' + dealerScore + ')\n\n' +
    
    'Player has:\n' + 
    playerCardString + 
    '(score: ' + playerScore + ')\n\n';
    
    if (gameOver) {
      if (playerWon) {
        textArea.innerText += "YOU WIN!";
      }
      else {
        textArea.innerText += "DEALER WINS";
      }
    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
    }
  /*
  for (var i = 0; i < deck.length; i++) {
    textArea.innerText += '\n' + getCardString(deck[i]);
  }
  */
}

function getNextCard() {
	return deck.shift();
}

/* Commented out on Finishing our application
let deck = createDeck();
*/

// for (let i = 0; i < deck.length; i++) {
  // console.log(deck[i]);
// }  

/* Commented out on Finishing our application
let playerCards = [ 
                    getNextCard(),
                    getNextCard()
  ];
*/

/* Commented out on Finishing our application  
console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log("   " + getCardString(playerCards[0]));
console.log("   " + getCardString(playerCards[1]));
*/

/* removed in Program Flow video series
let deck = [
            "Ace of Spades",
            "Two of Spades",
            "Three of Spades",
  ];
*/

/* Removed in Types and Arrays video series
let card1 = "Ace of Spades",
    card2 = "Ten of Hearts";

// Deprecated: Now passing in object returned from getCardString
console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log("   " + playerCards[0]);
console.log("   " + playerCards[1]);
*/