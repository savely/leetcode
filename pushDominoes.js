/*
#838. Push Dominoes

There are n dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

You are given a string dominoes representing the initial state where:

dominoes[i] = 'L', if the ith domino has been pushed to the left,
dominoes[i] = 'R', if the ith domino has been pushed to the right, and
dominoes[i] = '.', if the ith domino has not been pushed.
Return a string representing the final state.

 

Example 1:

Input: dominoes = "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.
Example 2:


Input: dominoes = ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
 

Constraints:

n == dominoes.length
1 <= n <= 105
dominoes[i] is either 'L', 'R', or '.'.
*/

var pushDominoes = function(dominoes) {
    

    const dp = new Array(dominoes.length).fill(0);

    let secondsRight = 0;

    for(let i = 0; i < dp.length; i++) {

        if(dominoes[i] === 'R') {
            secondsRight = 1;
            continue;
        }

        if(dominoes[i] === 'L') {
            secondsRight = 0;
            continue;
        }
        
        if(dominoes[i] === '.' && secondsRight > 0) {
            dp[i] = secondsRight++;
        }
    }

    let secondsLeft = 0;    

    for(let i = dp.length - 1; i >= 0; i--) {

        if(dominoes[i] === 'L') {
            dp[i] = 'L';
            secondsLeft = 1;
            continue;
        }

        if(dominoes[i] === 'R') {
            dp[i] = 'R';
            secondsLeft = 0;
            continue;
        }
        
        if(dominoes[i] === '.') {

            if( secondsLeft === dp[i]) {
                dp[i] = '.';
                continue;
            }

            if(secondsLeft === 0) {
                dp[i] = dp[i] > 0 ? 'R' : '.';
                continue;
            }
            
            if(secondsLeft > dp[i]) {
                dp[i] = dp[i] > 0 ? 'R' : 'L';
                continue;
            }

            if(secondsLeft > 0 && secondsLeft < dp[i]) dp[i] =  'L';

            if(secondsLeft > 0) secondsLeft++;

        }
    }

    return dp.join('');
};

let dominoes = "RR.L";
dominoes = ".L.R...LR..L..";

console.log(pushDominoes(dominoes));