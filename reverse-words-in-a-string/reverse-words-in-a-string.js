/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = fields(s)
    const values = words.split(' ')
    
    for (let i = 0; i < Math.floor(values.length / 2); i++) {
        const idx = (values.length - i) - 1;
        [values[i], values[idx]] = [values[idx], values[i]]
    }
    
    return values.join(' ')
};

const fields = (sentence) => {
    let result = ''
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence.charAt(i)
        const last = result.charAt(result.length - 1)
        if (!last || char.trim().length > 0) { 
            result += char 
        } else if (last.trim().length > 0 && i !== sentence.length - 1)  {
            result += ' '
        }
    }
    
    return result.trim()
}