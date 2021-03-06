/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// I'm going for an 'Exceeds Expectations' grade.

/***  `quotes` array: array of objects that stores the quotes, sources and, if they exist, source of citation and published year ***/

const quotes = [
  {
  quote: 'Let us always meet each other with smile, for the smile is the beginning of love.',
  source: 'Mother Theresia'
  },

  {
  quote:'Happiness is holding someone in your arms and knowing you hold the whole world.',
  source: 'Orhan Pamuk',
  citation: 'Snow'
  },

  {
  quote: 'I have always imagined that Paradise will be a kind of library.',
  source: 'Jorge Luis Borges',
  tags: 'literature, books, library, joy, reading, imagination, Argentinian, 20th century'
  },

  {
  quote: 'A good book is an event in my life.',
  source: 'Stendhal',
  citation: 'The Red and the Black',
  tags: 'literature, books, reading, importance, French, 19th century'
  },

  {
  quote: 'My library is an archive of longings.',
  source: 'Susan Sontag',
  citation: 'As Consciousness is Harnessed to Flesh: Journals and Notebooks',
  year: '1964-1980'
  },

  {
  quote: 'My alma mater was books, a good library.... I could spend the rest of my life reading, just satisfying my curiosity.',
  source: 'Malcom X'
  },

  {
  quote: 'Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life.',
  source: 'Roy T. Bennett',
  citation: 'The Light in the Heart'
  }
];

// console.log(quotes);


/*** `getRandomQuote`function: creates a random number and uses this number to return a random quote object ***/

function getRandomQuote() {
const randomNumber = Math.floor ( Math.random () * quotes.length );
const randomQuote = quotes[randomNumber];
console.log(randomNumber);
console.log(randomQuote);
return randomQuote;
}

getRandomQuote();


/***
`printQuote` function
- function to display a new quote every time the user clicks on the "Show another quote" button
- uses a string of HTML and quote properties
- conditional functions inside the `printQuote` function to display year and citation if available
***/

function printQuote() {
const getQuoteObject = getRandomQuote();
let quoteOutput = `<p class="quotes"> ${getQuoteObject.quote} </p> <p class="source"> ${getQuoteObject.source}`;
if (getQuoteObject.citation) {
quoteOutput += `<span class="citation"> ${getQuoteObject.citation} </span>`;
} if (getQuoteObject.year) {
quoteOutput += `<span class="year"> ${getQuoteObject.year} </span>`;
} if (getQuoteObject.tags) {
quoteOutput += `<span class="tags"> ${getQuoteObject.tags} </span>`;
}
quoteOutput += `</p>`;
document.getElementById('quote-box').innerHTML = quoteOutput; 
}

// the `inner.HTML` of the quote-box div was inserted from the Walkthrough


/*** Automatical random quote ***/

let intervalID = window.setInterval(printQuote, 10000);


/*** Automatical random background color ***/

// this function was created with the help of https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php, https://teamtreehouse.com/community/random-background-color and https://htmlcolorcodes.com/

function randomBackgroundColor() { 
  let hex = '#'; 
  let colors = [ 'B4E14F', '4181EC', 'FB8CB5', 'A187EC', '819634', 'D46E51', '0B7A23', '2783B5', 'FF7F50', '633974', '707B7C', 'D35400' ];
  hex += colors [ Math.floor ( Math.random() * colors.length ) ];
  document.body.style.background = hex; 
}



intervalID += window.setInterval(randomBackgroundColor, 10000); //adding to the automatical random quote at each change a random background color

/*** event listener ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);