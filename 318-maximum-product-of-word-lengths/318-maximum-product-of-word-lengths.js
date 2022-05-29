/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let max = 0, seen = new Set()
    const uniqueSets = words.map((word) => new Set(word))
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        for (let j = 0; j < uniqueSets.length; j++) {
            const set = uniqueSets[j]
            if (i !== j && hasNoIntersections(word, set)) {
                max = Math.max(max, words[j].length * word.length)
            }
        }
    }
    
    return max
};

const hasNoIntersections = (word, set) => {
    let intersection = [...word].filter(char => set.has(char));
    return intersection.length === 0
}

