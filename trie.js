/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this._hash = new Map()
    this._symbol = ''
    this._isEnd  = false 
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
    if(word === '') return

    
    if(!this._hash.has(word[0])) {
       const  newLeaf = new Trie()
       newLeaf._symbol = word[0]  
       this._hash.set(word[0], newLeaf)
    }
    const leaf = this._hash.get(word[0])
    if(leaf._symbol === word) {
        leaf._isEnd = true
    }

    return leaf.insert(word.slice(1))
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
    if(word === '') return true
    
    if(!this._hash.has(word[0])) return false

    const leaf = this._hash.get(word[0])

    if(leaf._symbol === word) return leaf._isEnd

    return leaf.search(word.slice(1))
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
    if(prefix === '') return true

    if(!this._hash.has(prefix[0])) return false

    return this._hash.get(prefix[0]).startsWith(prefix.slice(1))

};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 let tr = new Trie()

 const words = ["app","apple","beer", 'add','jam','rental',].map(w => tr.insert(w))
 console.log(tr.search("apps"))
 console.log(tr.search("app"))
console.log('----------------------')
console.log(tr)

