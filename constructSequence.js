/*
#1718. Construct the Lexicographically Largest Valid Sequence

Given an integer n, find a sequence that satisfies all of the following:

    The integer 1 occurs once in the sequence.
    Each integer between 2 and n occurs twice in the sequence.
    For every integer i between 2 and n, the distance between the two occurrences of i is exactly i.

The distance between two numbers on the sequence, a[i] and a[j], is the absolute difference of their indices, |j - i|.

Return the lexicographically largest sequence. It is guaranteed that under the given constraints, there is always a solution.

A sequence a is lexicographically larger than a sequence b (of the same length) if in the first position where a and b differ, sequence a has a number greater than the corresponding number in b. For example, [0,1,9,0] is lexicographically larger than [0,1,5,6] because the first position they differ is at the third number, and 9 is greater than 5.

 

Example 1:

Input: n = 3
Output: [3,1,2,3,2]
Explanation: [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.

Example 2:

Input: n = 5
Output: [5,3,1,4,3,5,2,4,2]

 

Constraints:

    1 <= n <= 20

*/

/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {

    const len  = n * 2 - 1;

    let maxSeq = new Array(len).fill(0);

    const cmp = (seq1, seq2) => {

        for(let i = 0; i < len; i++) {

            const diff = seq2[i] - seq1[i];

            if(diff === 0) continue;

            return diff;
        }

        return 0;
    }

    const build = (seq, numsCount) => {

        if(seq.length === len) {
            maxSeq = cmp(maxSeq, seq) > 0 ? seq : maxSeq;
            return;
        }

        for(let i = n; i >= 1; i--) {

            if(numsCount[i] === 0) continue;

            if(numsCount[i] === 1 && i !== 1 && ( seq.length < i || seq[seq.length - i] !== i)) continue;

            const nextCount = [...numsCount];
            nextCount[i]--;
            build([...seq, i], nextCount);
        }
    }

    const numsCount = new Array(n + 1).fill(2);
    numsCount[1] = 1;
    numsCount[0] = 0;

    build([], numsCount);
    
    return maxSeq;
};

let n = 3; // [3,1,2,3,2]
n = 5; // [5,3,1,4,3,5,2,4,2]
n = 9; // [9,7,5,3,1,8,6,4,2,9,7,5,3,8,6,4,1,2]

console.log(constructDistancedSequence(n));