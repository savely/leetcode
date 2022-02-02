/*
#1925. Count Square Sum Triples

A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

 

Example 1:

Input: n = 5
Output: 2
Explanation: The square triples are (3,4,5) and (4,3,5).
Example 2:

Input: n = 10
Output: 4
Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).

*/

/**
 * @param {number} n
 * @return {number}
 */
 var countTriples = function(n) {

    const squares = [];
    
    for(let i = 1; i <= n; i++) {
        squares.push(i * i);
    }

    const set = new Set(squares);

    const max = squares[squares.length - 1];

    let res = 0;

    for(let i = 0; i < squares.length - 1; i++) {

        for(let j = i; j < squares.length && squares[i] + squares[j] <= max; j++) {

            res += set.has(squares[i] + squares[j]) ? 2 : 0;
        }
    }

    return res;
};
