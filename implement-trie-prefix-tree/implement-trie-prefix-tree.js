class Node {
    constructor(value) {
        this.value = value
        this.children = {}
        this.end = false
    }
}

var Trie = function() {
    this.root = new Node('*')
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let lastNode = this.root
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (!lastNode.children[char]) {
            lastNode.children[char] = new Node(char)
        }
        lastNode = lastNode.children[char]
    }
    lastNode.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, prefix = false) {
     let lastNode = this.root
     for (let i = 0; i < word.length; i++) {
         const char = word[i]
         if (!lastNode.children[char]) return false
         lastNode = lastNode.children[char]
         if (i === word.length - 1 && lastNode.end) return true
     }
     return prefix
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
     return this.search(prefix, true)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */