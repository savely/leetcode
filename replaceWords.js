/*
#648. Replace Words

In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

Return the sentence after the replacement.

 

Example 1:

Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"

Example 2:

Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"

 

Constraints:

    1 <= dictionary.length <= 1000
    1 <= dictionary[i].length <= 100
    dictionary[i] consists of only lower-case letters.
    1 <= sentence.length <= 106
    sentence consists of only lower-case letters and spaces.
    The number of words in sentence is in the range [1, 1000]
    The length of each word in sentence is in the range [1, 1000]
    Every two consecutive words in sentence will be separated by exactly one space.
    sentence does not have leading or trailing spaces.

*/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {

    const search = new TrieSearch();
  
    for(const prefix of dictionary) {
        search.add(prefix);
    }


    let currSearch = search, res = '', word = '', skip = false;

    for(let i = 0; i < sentence.length; i++) {

        const ch = sentence[i];

        if(ch === ' ') {
            res += `${word}${i === sentence.length - 1 ? '' : ' '}`;
            word = '';
            currSearch = search;
            skip = false;
            continue;
        }

        if(skip) continue;

        word += ch;

        if(!currSearch) continue;

        currSearch = currSearch.startsWithChar(ch);

        skip = currSearch && currSearch.isEnd;
    }

    return res + word;
};

const TrieSearch = class{

    #code;
    #next = new Array(26);
    isEnd = false;

    constructor(code) {
        this.#code = code  === undefined ? -1 : code;
    }

    add (word, from = 0) {

        if(this.isEnd || from >= word.length) return;

        const code = word.charCodeAt(from) - 'a'.charCodeAt();

        this.#next[code] = this.#next[code] || new TrieSearch(code);

        this.#next[code].add(word, from + 1);
    
        this.#next[code].isEnd ||= from === word.length - 1;

    }

    startsWithChar(ch) {
        return this.#next[ch.charCodeAt(0) - 'a'.charCodeAt()];
    }

}

let dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery";

dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs afde";

dictionary = ["a", "aa", "aaa", "aaaa"], sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"; //"a a a a a a a a bbb baba a"

console.log(replaceWords(dictionary, sentence));