class TrieNode {
  constructor(value) {
    this.value = value
    this.children = {}
    this.end = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('*')
  }

  insert(value) {
    let lastNode = this.root
    for (let i = 0; i < value.length; i++) {
      const val = value.charAt(i)
      if (!lastNode.children[val]) lastNode.children[val] = new TrieNode(val)
      lastNode = lastNode.children[val]
    }
    lastNode.end = true
  }

  search(value) {
    let lastNode = this.root
    for (let i = 0; i < value.length; i++) {
      const val = value.charAt(i)
      if (!lastNode.children[val]) return false
      lastNode = lastNode.children[val]
      if (value.length - 1 && lastNode.end) return true
    }
    return true
  }
}

const trie = new Trie()
trie.insert('Jesse')
trie.search('Jessx')
