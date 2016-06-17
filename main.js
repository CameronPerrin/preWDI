var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/* if(cardOne === cardTwo) {
	result = alert("You found a match!")
} */
var x = getElementById('game-board');
var x = document.getElementByclassName("card")[0];
for (var i = 0; i < 4; i++) {
	var newListItem = document.createElement('div');
	newListItem.classContent = 'card';
	document.getElementsByTagName('div')[0].appendChild(newListItem);
}
createBoard()