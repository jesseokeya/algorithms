class Node {
    constructor(value) {
        this.value = value
        this.childNodes = new Map()
        this.end = false
    }
}

class Trie {
    constructor() {
        this.root = new Node("*")
    }
    
    add(word) {
        let lastNode = this.root
        for (const char of word) {
            if (!lastNode.childNodes.has(char)) {
                lastNode.childNodes.set(char, new Node(char))
            }
            lastNode = lastNode.childNodes.get(char)
        }
        lastNode.end = true
    }
    
    search(word) {
        const dfs = (idx, root) => {
            let lastNode = root
            for (let i = idx; i < word.length; i++) {
                const char = word.charAt(i)
                if (char === ".") {
                    for (const [, v] of lastNode.childNodes) {
                        if (dfs(i + 1, v)) return true
                    }
                    return false
                } else {
                    if (!lastNode.childNodes.has(char)) return false
                    lastNode = lastNode.childNodes.get(char)
                }
            }
            return lastNode.end
        }
        
        return dfs(0, this.root)
    }
}

var WordDictionary = function() {
    this.trie = new Trie()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.trie.add(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.trie.search(word)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */