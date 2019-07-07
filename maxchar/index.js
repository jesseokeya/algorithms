// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const mapChar = {}
    for (let i = 0; i < str.length; i++) {
        mapChar[str.charAt(i)] = mapChar[str.charAt(i)]
            ? mapChar[str.charAt(i)] + 1
            : 1
    }

    return Object.keys(mapChar).reduce((v1, v2) => (mapChar[v1] > mapChar[v2]) ? v1 : v2)
}

module.exports = maxChar;
