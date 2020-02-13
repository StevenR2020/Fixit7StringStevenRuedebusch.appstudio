// This line of code declares the variable with the string and prints it
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently"
console.log(quoteString)

// The upperCaseString variable displays the quoteString variable in all uppercase
let upperCaseString = (quoteString.toUpperCase())
console.log(`Upper case string is: ${upperCaseString}`)

// authorString declares the string "-Henry Ford"
let authorString = "-Henry Ford"
console.log(authorString)

// completeString variable combines the quoteString and authorString variables, adding "-Henry Ford" at the end of the quote.
let completeString = quoteString + " " + authorString
console.log(completeString)

// This declares the second quote that was said by Stephen King.
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
console.log(secondQuote)

// This function puts the entire secondQuote string in lowercase letters.
let lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString)

// This line of code pulls the index of lowerCaseString at the 3rd location. In this case, it is the letter 'e'.
let stringIndex = lowerCaseString[3]
console.log(`The character at location 3 is ${stringIndex}`)


let findString = secondQuote.split('-')
alert(findString)

let popString = findString.pop(1)
alert(popString)
alert(findString)
secondQuote = findString[0]
alert(secondQuote)




//let secondQuoteTwo = findString.push(secondQuote[0])
//alert(secondQuoteTwo)






















