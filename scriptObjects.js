// let result = Math.random() * 52;
// result = Math.trunc(result);

// let result = new Date();

// let result = new Date().toDateString();

// let result = "Hello World!";
// result = result.toUpperCase();
// console.log(result);

let result = 0 / 0;

console.log(Number.isNaN(result));

function changeCard(card) {
	card.suit = "Clubs";
}

/* let card = {
	suit: "Hearts",
	value: "Queen"
}; */

let cards = [
	{
		suit: "Hearts",
		value: "Queen"
	},
	{
		suit: "Clubs",
		value: "King"
	}
];

// console.log( cards[0]. suit );
console.log( cards[1]. value );

// changeCard(card);

// console.log(card.suit);

// console.log(card.value);