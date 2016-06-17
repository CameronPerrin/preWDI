var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/* if(cardOne === cardTwo) {
	result = alert("You found a match!")
} */
var boards = document.getElementById('game-board');
var card = document.getElementsByClassName("card")[0];
for (var i = 0; i < 4; i++) {
	var card = document.createElement('div');
	card.classContent = 'card';
	document.getElementsByTagName('div')[0].appendChild(card);
};
function createBoard() {
	for (var i = 0; i < 4; i++) {
		var boards = document.createElement('div');
		boards.classContent = 'board';
		boards.className = 'blue-skies';
		world.appendChild(boards);
	}
	for (var i = 0; i< cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
	}
};
for (var i=0; i<cards.length; i++) {
	cardElement.addEventListener('click', isTwoCards);{
		document.getElementsByClassName("card").innerHtml = '<img src="king.png" alt="King of Diamonds" />';
	}
};
var matchOrNot = function isMatch(){
 for (var i = 0; i < cards.length; i++) {
        if (cards[i] = 2) {
            cards[i] = 'Match';
        } else {
            cards[i] = 'No Match'
        }
    }
    return cards;
    document.getElementsByClassName("card").innerHtml = ' ';
};
function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
var cards = [queen, queen, king, king];