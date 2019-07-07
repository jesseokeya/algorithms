// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = ''
    const context = str.split(' ')
    for (let i = 0; i < context.length; i++) {
        if (context[i].trim().length > 0) {
            context[i] = context[i].charAt(0).toUpperCase() + context[i].substr(1, context[i].length)
            result += context[i] + " "
        }
    }
    return result.trim()
}

module.exports = capitalize;
