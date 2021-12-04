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

    constructor(code = '', isEnd = false) {

        this.code = code;
        this.isEnd = isEnd;
        this.children = {};
    }

    add(word, i = 0) {

        if(i >= word.length) return;

        const char = word.charAt(word.length -  1 - i);

        this.children[char] = this.children[char] || new Trie(char);

        this.children[char].isEnd = this.children[char].isEnd || i === word.length - 1;

        if(i < word.length - 1) this.children[char].add(word, i + 1);
    }

};

/**
 * @param {string[]} words
 */
 var StreamChecker = function(words) {
    
    this.trie = new Trie();

    for(const word of words) {
        this.trie.add(word);
    }

    this.letters = [];

};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    

    this.letters.push(letter);
     return this.search(this.trie, this.letters.length - 1);
};

StreamChecker.prototype.search = function (trie, i) {

    if(i < 0) return false;

    const letter = this.letters[i], children = trie.children;

    if(!children[letter]) {
        return false;
    };

    if(children[letter].isEnd) return true;

    return this.search(children[letter], i - 1)
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
