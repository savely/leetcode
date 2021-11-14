/*
#1286. Iterator for Combination

Design the CombinationIterator class:

CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase 
English letters and a number combinationLength as arguments.
next() Returns the next combination of length combinationLength in lexicographical order.
hasNext() Returns true if and only if there exists a next combination.
 

Example 1:

Input
["CombinationIterator", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[["abc", 2], [], [], [], [], [], []]
Output
[null, "ab", true, "ac", true, "bc", false]

Explanation
CombinationIterator itr = new CombinationIterator("abc", 2);
itr.next();    // return "ab"
itr.hasNext(); // return True
itr.next();    // return "ac"
itr.hasNext(); // return True
itr.next();    // return "bc"
itr.hasNext(); // return False
 

Constraints:

1 <= combinationLength <= characters.length <= 15
All the characters of characters are unique.
At most 104 calls will be made to next and hasNext.
It's guaranteed that all calls of the function next are valid.

*/

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
 var CombinationIterator = function(characters, combinationLength) {

    this.min = characters.charCodeAt(0);
    this.max = characters.charCodeAt(characters.length - 1);
    this.len = combinationLength;
    this.current = [];
    this.nextCombination = "";

    for(let i = 0; i< this.len; i++) {
        this.current.push(this.min);
    }

    this.currentCombination = this._stringify();
    this._next();
    
};

CombinationIterator.prototype._next = function() {

    let curry = 1, isValid = true;

    for(let i = this.len - 1; i >= 0; i--) {

        const next = this.current[i] + curry, isNextValid = next <= this.max;

        if(isNextValid) {
            this.current[i] = next;
            break;
        }

        if(i === 0 && !isNextValid) {
            isValid = false;
            break;
        }

        this.current[i] = this.min;
    }

    this.nextCombination = isValid ? this._stringify() : "";
};

CombinationIterator.prototype._stringify = function() {

    let str = "";

    for(const code of this.current) {
        str += String.fromCharCode(code);
    }

    return str;
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {

    const ret = this.currentCombination;
    this.currentCombination = this.nextCombination;

    if(this.hasNext()) this._next();

    return ret;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.currentCombination !== "";
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const iterator = new CombinationIterator("abc", 2);