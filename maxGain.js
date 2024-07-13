/*
#1717. Maximum Score From Removing Substrings

You are given a string s and two integers x and y. You can perform two types of operations any number of times.

    Remove substring "ab" and gain x points.
        For example, when removing "ab" from "cabxbae" it becomes "cxbae".
    Remove substring "ba" and gain y points.
        For example, when removing "ba" from "cabxbae" it becomes "cabxe".

Return the maximum points you can gain after applying the above operations on s.

 

Example 1:

Input: s = "cdbcbbaaabab", x = 4, y = 5
Output: 19
Explanation:
- Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.

Example 2:

Input: s = "aabbaaxybbaabb", x = 5, y = 4
Output: 20

 

Constraints:

    1 <= s.length <= 105
    1 <= x, y <= 104
    s consists of lowercase English letters.

*/

var maximumGain = function(s, x, y) {

    let str  = x >= y ? 'ab' : 'ba', score = x >= y ? x : y;
    let stack = [], total = 0;
    
    for(let i = 0; i < s.length; i++) {

        if(stack[stack.length - 1] === str[0] && s[i] === str[1]) {
            stack.pop();
            total += score;
            continue;
        }

        stack.push(s[i]);
    }

    s = stack.join('');
    stack = [];
    str = str === 'ab' ? 'ba' : 'ab';
    score = score === x ? y : x;

    for(let i = 0; i < s.length; i++) {

        if(stack[stack.length - 1] === str[0] && s[i] === str[1]) {
            stack.pop();
            total += score;
        } else {
             stack.push(s[i]);
        }
    }
    
    return total;
};

let s = "cdbcbbaaabab", x = 4, y = 5;
s = "aabbaaxybbaabb", x = 5, y = 4;
s = "cbaabwbbbabbwaaq", x = 4074, y = 9819; //23712

console.log(maximumGain(s, x, y));