// Source of quotes 
var quotes = [
	{
		"quote": "I'm gonna make him an offer he can't refuse",
		"source": "The Godfather",	
		"year": 1972,
		"tag": "movie"
	},
	{
		"quote": "May the Force be with you",
		"source": "Star Wars",
		"year": 1977,
		"tag": "movie"
	},
	{
		"quote": "E.T. Phone home",
		"source": "E.T. The extra-terrestrial",
		"year": 1982,
		"tag": "movie"	
	},
	{
		"quote": "There is no greater agony than bearing an untold story inside you.",
		"source": "Maya Angelou",
		"citation": "I know why the caged Bird Sings",
		"tag": "lit"
	},
	{
		"quote": "It does not do to dwell on dreams and forget to live.",
		"source": "Albus Dumbledore, Harry Potter",
		"citation": "Harry Potter and the Sorcerer's Stone",
		"year": 2001,
		"tag": "lit"
	},
	{
		"quote": "Happiness can be found even in the darkest of times if only one remembers to turn on the light",
		"source": "Albus Dumbledore, Harry Potter",
		"citation": "Harry Potter and the Prisoner of Azkaban",
		"year": 2004,
		"tag": "lit"
	},
	{
		"quote": "A day without sunshine is like, you know, night",
		"source": "Steve Martin",
		"tag": "funny"
	},
	{
		"quote": "No man has a good enough memory to be a successful liar.",
		"source": "Abraham Lincoln",
		"tag": "funny"
	}
]

// background color options 
var colors = [
	{"color": "lightblue",
		"tag": "light"},
	{"color": "orange", 
	 	"tag": 'med' },
	{"color" : "yellow", 
		"tag": "light"},
	{"color": "magenta", 
		"tag": "dark"},
	{"color": "green", 
		"tag": "dark"},
	{"color": "blue",
		"tag": "dark"},
	{"color": "lightgreen", 
		"tag": "light"},
	{"color": "red", 
		"tag": "med"},
	{"color": "black", 
		"tag": "dark"},
	{"color": "grey", 
		"tag": "med"}
]


// variables 
var usedQuotes = [];
var defaultTally = 0;
var usedFunny = [];
var usedLit = [];
var usedMovie = [];
var timeoutID = '';
var QuotesTotal = quotes.length;
var funnyTotal = 2;
var litTotal = 3;
var movieTotal = 3;
var QuotesTally = 0;
var litTally = 0;
var movieTally = 0;
var funnyTally = 0;
var sel = document.getElementById("select");

// functions


function getSelected(sel) {
	var option;
	for (i = 0; i < sel.options.length; i += 1) {
		opt = sel.options[i];
		if ( opt.selected === true) {
			break;	
		}
	}
	return opt;
}

function getNumber(input) {
	Number = Math.floor(Math.random() * input.length)
	return Number;
} // end getNumber funciton to generate random number with input for type length



function test(inside, insideTotal, insideTally, insideQuote) {

	while(insideTally < insideTotal) {
		var Numbers = getNumber(quotes);
		if (insideQuote.includes(Numbers)) {
			continue;
		} else {
			if(quotes[Numbers].tag !== inside) {
				continue;
			} else {
				insideQuote.push(Numbers);
				return quotes[Numbers];

			} // inside logic end
		} //Main if/else end 
	} // while end 
	
} // function end

function printConsole(tally, total, quote) {
	console.log("This is quote number " + tally + " out of a total of " + total + " ... Quote is: " + quote);

}

function getRandomQuote() {
	var option = sel.value;
	var holdquote = '';
/*
	do {
		var Numbers = getNumber();
	} while (quoteSelect.includes(Numbers)); 
	*/
		switch (option) {
			case "funny":
					if (funnyTally === funnyTotal) {
						usedFunny = [];
						funnyTally = 0;
						console.log("refreshed quotes");
						holdquote = test("funny", funnyTotal, funnyTally, usedFunny);
						funnyTally ++;
						printConsole(funnyTally, funnyTotal, holdquote.quote);
					} else {
						holdquote = test("funny", funnyTotal, funnyTally, usedFunny);
						funnyTally ++;
						printConsole(funnyTally, funnyTotal, holdquote.quote);
					}
					
				break;
			case "lit":
					if (litTally === litTotal) {
						usedLit = [];
						litTally = 0;
						console.log("refreshed quotes");
						holdquote = test("lit", litTotal, litTally, usedLit);
						litTally ++;
						printConsole(litTally, litTotal, holdquote.quote);
					} else {
						holdquote = test("lit", litTotal, litTally, usedLit);
						litTally ++;
						printConsole(litTally, litTotal, holdquote.quote);
					}

				break;
			case "movie":
					if (movieTally === movieTotal) {
						usedMovie = [];
						movieTally = 0;
						console.log("refreshed quotes");
						holdquote = test("movie", movieTotal, movieTally, usedMovie);
						movieTally ++;
						printConsole(movieTally, movieTotal, holdquote.quote);
					} else {
						holdquote = test("movie", movieTotal, movieTally, usedMovie);
						movieTally ++;
						printConsole(movieTally, movieTotal, holdquote.quote);
					}
				break;
			case "random":
				do {
					var Numbers = getNumber(quotes);
				} while (usedQuotes.includes(Numbers)); 
				usedQuotes.push(Numbers);
				defaultTally++;
				/*if (normalQuotes.length === QuotesTotal) {
			   		refreshQuotes();	
			   		quoteTally = 0;
				}
				*/
				if(usedQuotes.length === QuotesTotal) {
					usedQuotes = [];
					defaultTally = 0;
					console.log("refreshed Quotes");
				}	
				printConsole(defaultTally, QuotesTotal, quotes[Numbers].quote);
				holdquote = quotes[Numbers];
				break;
		}
		window.clearTimeout(timeoutID);
		return holdquote;
} // end RandomQuote - uses randome number to generate quote/ updates usedquotes and retuns the quote opbject 

function getRandomColor() {
	var background = getNumber(colors);
	var color = colors[background];
	return color;
} // end RandomColor - used to get random color for background colorchange. 


function printQuote() {
	var quote = getRandomQuote();
	var color = getRandomColor();
	if(color.tag === "light") {
		document.getElementById('body').style.color = "#000";
		document.getElementById('body').style.textShadow= "none";
		document.getElementById("loadQuote").style.backgroundColor = "#000";
		document.getElementById("loadQuote").style.color = "#fff";
		document.getElementById("select").style.backgroundColor = "#000";
		document.getElementById("select").style.color = "#fff";
		console.log("Light color tag randomly Chosen");
	} else if (color.tag === "med") {
		document.getElementById('body').style.color = "#fff";
		document.getElementById('body').style.textShadow= "2px 1px 1px #000";
		document.getElementById("loadQuote").style.backgroundColor = "blue";
		document.getElementById("loadQuote").style.color = "#fff";
		document.getElementById("select").style.backgroundColor = "blue";
		document.getElementById("select").style.color = "#fff";
		console.log("Med color tag randomly Chosen");
	} else if (color.tag === "dark") {
		document.getElementById('body').style.color = "#fff";
		document.getElementById('body').style.textShadow = "none";
		document.getElementById("loadQuote").style.backgroundColor = "#fff";
		document.getElementById("loadQuote").style.color = "#000";
		document.getElementById("select").style.backgroundColor = "#fff";
		document.getElementById("select").style.color = "#000";
		console.log("Dark color tag randomly Chosen");
	}
	var quoteHTML = "";
	quoteHTML = "<p class='quote'>" + quote.quote + "</p><p class='source'>" + quote.source;
			if (quote.citation != null) {
				quoteHTML += "<span class='citation'>" + quote.citation + "</span>"; 
			} else if (quote.year != null) {
				quoteHTML += "<span class='year'>" + quote.year + "</span>";	
			} else {
				quoteHTML += "</p>";	
			} // end else 
 
	document.getElementById('quote-box').innerHTML = quoteHTML;
	document.getElementById('body').style.background = color.color;
	
	timeoutID = window.setTimeout(printQuote, 30000);
} // end Function printQuote - used to generate the HTML to print to screen inputing quote opbject info. 

printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

