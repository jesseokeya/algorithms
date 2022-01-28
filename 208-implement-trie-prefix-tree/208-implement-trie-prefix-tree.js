class Node {
    constructor(value) {
        this.value = value
        this.children = new Map()
        this.end = false
    }
}

var Trie = function() {
    this.root = new Node("*")
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let lastNode = this.root
    for (const char of word) {
        if (!lastNode.children.has(char)) {
            lastNode.children.set(char, new Node(char))
        }
        lastNode = lastNode.children.get(char)
    }
    lastNode.end = true    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let lastNode = this.root
    for (const char of word) {
        if (!lastNode.children.has(char)) return false
        lastNode = lastNode.children.get(char)
    }
    return lastNode.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let lastNode = this.root
    for (const char of prefix) {
        if (!lastNode.children.has(char)) return false
        lastNode = lastNode.children.get(char)
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */