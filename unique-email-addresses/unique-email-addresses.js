/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const unique = new Set()
    for (const email of emails) {
        const normalized = normalize(email)
        if (!unique.has(normalized)) unique.add(normalized)
    }
    return unique.size
};
​
const normalize = (email) => {
    let result = ''
    const split = email.split('@'), name = split[0], domain = split[1]
    
    for (let i = 0; i < name.length; i++) {
        const char = name.charAt(i)
        if (char === '+') break
        if (char !== '.') result += char
    }
    
    return `${result}@${domain}`
}
