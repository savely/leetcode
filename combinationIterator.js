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
    const res = [];
    const traverse = (str, index) => {
        if (str.length === combinationLength) {
            res.push(str);
            return;
        }
        for (let i = index; i < characters.length; i++) {
            traverse(str+characters[i], i+1);
        }
    }
    traverse('', 0);
    this.combinations = res;
    this.currIndex = 0;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    this.currIndex++;
    return this.combinations[this.currIndex - 1];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.currIndex < this.combinations.length;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
