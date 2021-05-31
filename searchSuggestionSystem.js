/*
#1268. Search Suggestions System

Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names 
from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. 

If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]
 

Constraints:

1 <= products.length <= 1000
There are no repeated elements in products.
1 <= Σ products[i].length <= 2 * 10^4
All characters of products[i] are lower-case English letters.
1 <= searchWord.length <= 1000
All characters of searchWord are lower-case English letters.
*/

class TrieSearch {

    char = '';
    next   = new Array(26).fill(null);
    isEnd  = false;


    add (word) {
        this._add(word, 0)
    };

    _add(word, pos) {

        const charCode = word.charCodeAt(pos) - 97

        if(this.next[charCode] === null) {
            this.next[charCode] = new TrieSearch()
            this.next[charCode].char = word.charAt(pos)
        }
        
        if(pos === word.length - 1) {
            this.next[charCode].isEnd = true
            return 
        }
        this.next[charCode]._add(word, pos + 1)
    }

    _startsWith(str, pos) {

        if(pos === str.length -1) {
            return this.char === str[pos] ? this : null;
        }

        const charCode = str.charCodeAt(pos + 1) - 97

        if(this.next[charCode] === null) return null
        
        return this.next[charCode]._startsWith(str, pos + 1)
    }

    startsWith (str) {

        const node = this.next[str.charCodeAt(0) - 97]

        if(node === null) return []

        const lastNode = node._startsWith(str, 0)

        if(lastNode === null) return []

        const res = [];
        let n = 3;

        if(lastNode.isEnd) {
            res.push(str)
            n--
        }

        const endings = lastNode.searchEndings(n)

        for(const ending of endings) {
            res.push(str + ending)
        }

        return res
    }


    searchEndings(n) {

        if(n <= 0) return []

        const res = []

        for(const node of this.next) {

            if(node === null) continue;

            if(node.isEnd) {
                res.push(node.char)
                n--
            }

            if(n === 0) return res;

            const endings = node.searchEndings(n)


            for (const ending of endings) {
                res.push(node.char + ending)
                n--;

                if(n === 0) return res;
            }
        }

        return res
    }

}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(products, searchWord) {
  
    const search = new TrieSearch()

    for(const product of products) {
        search.add(product)
    }

    const res = []

    for(let i = 1; i <= searchWord.length; i++) {

        res.push(search.startsWith(searchWord.slice(0, i)))

    }

    return res;
};



let words = ["mobile","mouse","moneypot","monitor","mousepad"];
//words = ["bags","baggage","banner","box","cloths"];
words = ["havana"];

console.table(suggestedProducts(words, 'havana'))
