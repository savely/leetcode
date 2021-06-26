/*
#1871. Jump Game VII

You are given a 0-indexed binary string s and two integers minJump and maxJump. In the beginning, you are standing at index 0, which is equal to '0'. You can move from index i to index j if the following conditions are fulfilled:

    i + minJump <= j <= min(i + maxJump, s.length - 1), and
    s[j] == '0'.

Return true if you can reach index s.length - 1 in s, or false otherwise.

 

Example 1:

Input: s = "011010", minJump = 2, maxJump = 3
Output: true
Explanation:
In the first step, move from index 0 to index 3. 
In the second step, move from index 3 to index 5.

Example 2:

Input: s = "01101110", minJump = 2, maxJump = 3
Output: false

 

Constraints:

    2 <= s.length <= 105
    s[i] is either '0' or '1'.
    s[0] == '0'
    1 <= minJump <= maxJump < s.length

*/

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

 var canReach = function(s, minJump, maxJump) {
    
    const target = s.length -1;
    
    if(s[target] === '1') return false;
    
    const queue = [0];
    
    for(let i = minJump; i <= target; i++) {

        if(queue[0] < i - maxJump) queue.shift();

        if(s[i] === '0') {

            for(let j = queue.length -1; j >= 0; j--) {
                const pos = queue[j];
                if(pos <= i - minJump && pos >= i - maxJump) {
                    queue.push(i);
                    break;
                }          
            }
        }

        if(!queue.length) return false;
    }

    for(let j = queue.length -1; j >= 0; j--) {
        const pos = queue[j];
        if(pos <= target - minJump && pos >= target - maxJump) {
            return true;
        }          
     }


    return false;
};

s = "011010", minJump = 2, maxJump = 3;
//s = "01101110", minJump = 2, maxJump = 3;
//s = "0".repeat(10000), minJump = 5, maxJump = 9998;
//s = "0101001110", minJump  = 2, maxJump = 4;
//s = "0000000000", minJump = 8, maxJump = 8; 
//s = "011001110001000", minJump = 3, maxJump = 5;
//s = "0000000000", minJump = 1, maxJump = 1;




console.log(canReach(s, minJump, maxJump));