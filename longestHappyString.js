/*
#1405. Longest Happy String

A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
Example 2:

Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It is the only correct answer in this case.
 

Constraints:

0 <= a, b, c <= 100
a + b + c > 0

*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
     
    const queue = new PriorityQueue({compare : ([count1, l1], [count2, l2]) => count2 - count1});

    if(a > 0) queue.enqueue([a, 'a']);
    if(b > 0) queue.enqueue([b, 'b']);
    if(c > 0) queue.enqueue([c, 'c']);

    let ans = "";

    while(queue.size()) {

        const [count1, letter1] = queue.dequeue();

        if(ans.endsWith(letter1 + letter1)) {

            if(!queue.size()) return ans;

            const [count2, letter2] = queue.dequeue();

            ans += letter2;

            if(count2 > 1) queue.enqueue([count2 - 1, letter2]);
        }

        ans += letter1;

        if(count1 > 1) queue.enqueue([count1 - 1, letter1]);
  
    }

    return ans;
};

let [a, b, c] = [12,11,7];
[a, b, c] = [67,3,34];

console.log(longestDiverseString(a, b, c));