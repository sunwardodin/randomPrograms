let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // This would output true.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding); // this is a literal lookup so it will return true as well.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);

let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // The i will ignore the case of the regex
let result3 = fccRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex); // this will match the string

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // this has multiple flags. the g will return however many phrases it finds that match. 
let result5 = twinkleStar.match(starRegex);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // The period is a wild card character, so it will find anything the matches un.
let result6 = unRegex.test(exampleStr);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
let result7 = quoteSample.match(vowelRegex); 

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // This will match all the letters of the alphabet using a-z
let result8 = quoteSample.match(alphabetRegex); 

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/gi; // Change this line
let result9 = quoteSample.match(myRegex);

let quoteSample3 = "3 blind mice.";
let myRegex4 = /[^aeiou0-9]/gi; // The ^ character negates the following things from being found
let result0 = quoteSample.match(myRegex);

let difficultSpelling = "Mississippi";
let myRegex5 = /s+/gi; // This will find any repeating letters. specifically double ss
let result12 = difficultSpelling.match(myRegex);

let chewieRegex = /Aa*/; // This will match things like Aaaaaaaaaaaa
let mesult = chewieQuote.match(chewieRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex6 = /<.*?>/; // CThis will return <> because the ? returns the shortest possible string
let tesult = text.match(myRegex);

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let Chesult = calRegex.test(rickyAndCal); // this would return true

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // $ searches for patterns at the end of strings
let casult = lastRegex.test(caboose);

let quoteSample6 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // This matches everything.
let hesult = quoteSample.match(alphabetRegexV2).length;

let quoteSample7 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // This finds anything that is not alphanumeric
let jesult = quoteSample.match(nonAlphabetRegex).length;

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // The shortcut to look for digit characters. The shortcut to look for non-digit characters is \D
let gesult = movieName.match(numRegex).length;

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let rpesult = userCheck.test(username);

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // \s This checks for white spaces. \S searches for non-white spaces
let sresult = sample.match(countWhiteSpace);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // to match only the letter h appearing between 3 and 6 times in the string Oh no
let rhesult = ohRegex.test(ohStr);

let mpString = "Eleanor Roosevelt";
let mpRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // This checks a bunch of stuff
let rkesult = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let spresult = hello.replace(wsRegex, ""); // This whole thing will remove whitespaces from a string