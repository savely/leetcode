/*
#1291. Sequential Digits

An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
 

Constraints:

10 <= low <= high <= 10^9

*/

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
 var sequentialDigits = function(low, high) {

    const res = [];

    let q = [9,8,7,6,5,4,3,2,1];

    while(q.length) {

        const nextQ = [];

        while(q.length) {

            const num = q.pop(); 
            let n = num % 10 + 1;

            if (n > 9) continue;

            n += num * 10;

            if(n < high)  nextQ.push(n);

            if(n >= low && n <= high) res.push(n);

        }
        q = nextQ;
    }
    
    return res.sort((a, b) => a - b);
};
