/*
#767. Reorganize String

Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

 

Example 1:

Input: s = "aab"
Output: "aba"

Example 2:

Input: s = "aaab"
Output: ""

 

Constraints:

    1 <= s.length <= 500
    s consists of lowercase English letters.


*/


const { PriorityQueue }  = require('@datastructures-js/priority-queue');

/**
 * @param {string} S
 * @return {string}
 */
 var reorganizeString = function(S) {
    
    const freq = [...S].reduce((acc, n) => {
        acc[n] = (acc[n] || 0) + 1;
       return acc;
   }, {});

   const queue = new PriorityQueue({compare : ([pr1, char1], [pr2, char2]) => pr2 - pr1});
    
   for(const char in freq) {
        queue.enqueue([freq[char], char]);
   }

   let left = S.length, ans = [];

   while(queue.size()) {
    
    let [fr1, ch1] = queue.dequeue();

    if(fr1 > left) return "";

    if(queue.size()) {
        let [fr2, ch2] = queue.dequeue();
        const arr = ans[ans.length - 1] === ch1 ? [ch2, ch1] : [ch1, ch2];
        ans.push(...arr);
        fr1--;
        fr2--;
        left -= 2;
        if(fr1 > 0) queue.enqueue([fr1, ch1]);
        if(fr2 > 0) queue.enqueue([fr2, ch2]);
    } else {

        if(left > 1) return "";
        ans.push(ch1);
        fr1--;
        if(fr1 > 0) queue.enqueue([fr1, ch1]);
        left--;
    }
   }

   return ans.join('');
 };

 let s = "asdasdafjakdfdkdfvurbddddf";
//s = 'sgfsdgfgjfdereddresddds';
//s = "aab";
//s= "aabab";
s = "aabbcc"

 console.log(reorganizeString(s));