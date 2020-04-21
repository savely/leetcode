var MagicDictionary = function() {
    this._hash = new Map()
    this._symbol = ''
    this._isEnd  = false 
};

MagicDictionary.prototype._insert = function(word) {
    
    if(word === '') return

    
    if(!this._hash.has(word[0])) {
       const  newLeaf = new MagicDictionary()
       newLeaf._symbol = word[0]  
       this._hash.set(word[0], newLeaf)
    }
    const leaf = this._hash.get(word[0])
    if(leaf._symbol === word) {
        leaf._isEnd = true
    }

    return leaf._insert(word.slice(1))
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {

    dict.reduce((acc, word) => {acc._insert(word); return acc}, this)
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    return this._search(word, true)
}
 
MagicDictionary.prototype._search = function(word, wildcard) {

    if(word === '')  return this._isEnd && !wildcard

    if(wildcard) {
        for (let [c, lf] of Array.from(this._hash)) {
            if(c!== word[0] && lf._search(word.slice(1), false)) return true
       } 
    }
    
    if(!this._hash.has(word[0])) return false

    const leaf = this._hash.get(word[0])

    if(leaf._symbol === word) return leaf._isEnd && !wildcard

    return leaf._search(word.slice(1), wildcard)

};



/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
//["MagicDictionary", "buildDict", "search", "search", "search", "search"]
//[[], [["hello","hallo","leetcode"]], ["hello"], ["hallo"], ["hell"], ["leetcodd"]]

 //const d = new MagicDictionary()
 //d.buildDict(["hello","hallo","leetcode"])
//d.buildDict(['ax'])

 //console.log(d.search('leetcode'))

 var WordDictionary = function() {
    this._hash = new Map()
    this._symbol = ''
    this._isEnd  = false     
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
    if(word === '') return
    
    if(!this._hash.has(word[0])) {
       const  newLeaf = new WordDictionary()
       newLeaf._symbol = word[0]  
       this._hash.set(word[0], newLeaf)
    }
    const leaf = this._hash.get(word[0])
    if(leaf._symbol === word) {
        leaf._isEnd = true
    }

    leaf.addWord(word.slice(1))
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
    if(word === '') return this._isEnd
    
    if(word[0] === '.') {
        for (let [_, lf] of Array.from(this._hash)) {
            if(lf.search(word.slice(1))) return true
        } 
        return false       
    }

    if(!this._hash.has(word[0])) return false

    const leaf = this._hash.get(word[0])

    if(leaf._symbol === word) return leaf._isEnd

    return leaf.search(word.slice(1))

};

const wd = new WordDictionary()

wd.addWord('bad')
wd.addWord('dad')
wd.addWord('mad')


console.log(wd.search('m.d'))