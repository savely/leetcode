/*
#1032. Stream of Characters

Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of strings words.

For example, if words = ["abc", "xyz"] and the stream added the four characters (one by one) 'a', 'x', 'y', and 'z', your algorithm should detect that the suffix "xyz" of the characters "axyz" matches "xyz" from words.

Implement the StreamChecker class:

StreamChecker(String[] words) Initializes the object with the strings array words.
boolean query(char letter) Accepts a new character from the stream and returns true if any non-empty suffix from the stream forms a word that is in words.
 

Example 1:

Input
["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"]
[[["cd", "f", "kl"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]]
Output
[null, false, false, false, true, false, true, false, false, false, false, false, true]

Explanation
StreamChecker streamChecker = new StreamChecker(["cd", "f", "kl"]);
streamChecker.query("a"); // return False
streamChecker.query("b"); // return False
streamChecker.query("c"); // return False
streamChecker.query("d"); // return True, because 'cd' is in the wordlist
streamChecker.query("e"); // return False
streamChecker.query("f"); // return True, because 'f' is in the wordlist
streamChecker.query("g"); // return False
streamChecker.query("h"); // return False
streamChecker.query("i"); // return False
streamChecker.query("j"); // return False
streamChecker.query("k"); // return False
streamChecker.query("l"); // return True, because 'kl' is in the wordlist
 

Constraints:

1 <= words.length <= 2000
1 <= words[i].length <= 2000
words[i] consists of lowercase English letters.
letter is a lowercase English letter.
At most 4 * 104 calls will be made to query.
*/


 class Trie {

    constructor(code, isEnd = false) {

        this.code = code;
        this.isEnd = isEnd;
        this.children = {};
    } 

    add(word, i = 0) {

        if(i >= word.length) return;

        const code = word.charCodeAt(i) - 97;

        this.children[code] = this.children[code] || new Trie(code);

        this.children[code].isEnd = this.children[code].isEnd || i === word.length - 1;

        if(i < word.length - 1) this.children[code].add(word, i + 1);
    }

 };

/**
 * @param {string[]} words
 */
 var StreamChecker = function(words) {
    
    this.trie = new Trie(null);

    for(const word of words) this.trie.add(word);

    this.endings = {};

    for(const code in this.trie.children) {

        const child = this.trie.children[code];

        this.endings[code] = this.endings[code] || new Set();

        this.endings[code].add(child);
    }
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    
    const letterCode = letter.charCodeAt(0) - 97;

    const nextEndingsSet = new Set();

    let isWord = false;

    const letterEndings = this.endings[letterCode] || new Set();

    for(const {code, isEnd, children} of letterEndings) {


        if(letterCode !== code) continue;

        isWord = isWord || isEnd;

        for(const code in children) {
            const child = children[code];
            if(!this.endings[code] || !this.endings[code].has(child)) nextEndingsSet.add(child);
        }
    }

    for(const node of nextEndingsSet) {
        this.endings[node.code] = this.endings[node.code] || new Set();
        this.endings[node.code].add(node);
    }

    return isWord;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

let words = ["cd", "f", "kl"];
let queries = [["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]]

/*
[[["ab","ba","aaab","abab","baa"]],["a"],["a"],["a"],["a"],["a"],["b"],["a"],["b"],["a"],["b"],["b"],["b"],["a"],["b"],["a"],["b"],["b"],["b"],["b"],["a"],["b"],["a"],["b"],["a"],["a"],["a"],["b"],["a"],["a"],["a"]]
*/

words = ["ab","ba","aaab","abab","baa"];

queries = [["a"],["a"],["a"],["a"],["a"],["b"],["a"],["b"],["a"],["b"],["b"],["b"],["a"],["b"],["a"],["b"],["b"],["b"],["b"],["a"],["b"],["a"],["b"],["a"],["a"],["a"],["b"],["a"],["a"],["a"]];


const checker = new StreamChecker(words);

const res = [];

for(const [ch] of queries) {
    res.push(checker.query(ch));
}

const expected = [false,false,false,false,false,true,true,true,true,true,false,false,true,true,true,true,false,false,false,true,true,true,true,true,true,false,true,true,true,false];

console.table(res.map((res, i) => [res, expected[i]]));
