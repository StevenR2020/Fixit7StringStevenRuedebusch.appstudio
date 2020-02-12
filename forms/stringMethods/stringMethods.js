// This line of code declares the variable with the string and prints it
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently"
console.log(quoteString)

let upperCaseString = (quoteString.toUpperCase())
console.log(`Upper case string is: ${upperCaseString}`)

let authorString = "-Henry Ford"
console.log(authorString)

let completeString = quoteString + " " + authorString
console.log(completeString)

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
console.log(secondQuote)

let lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString)

let stringIndex = lowerCaseString[3]
console.log(`The character at location 3 is ${stringIndex}`)

let findString = secondQuote.indexOf('-') + 1
let foundString = secondQuote.slice(findString)
console.log(foundString)








//let findString = secondQuote.slice(0, 120)
//console.log(findString)













