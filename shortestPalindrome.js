/*
#214. Shortest Palindrome

You are given a string s. You can convert s to a palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

 

Example 1:

Input: s = "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: s = "abcd"
Output: "dcbabcd"
 

Constraints:

0 <= s.length <= 5 * 104
s consists of lowercase English letters only.

*/

/**
 * @param {string} s
 * @return {string}
 */
 var shortestPalindrome = function(s) {
    
    let end = s.length -1;
    
    while (end >= 0){
        
        if(s[end] !== s[0]) {
            end--;
            continue;
        }
        
        let hi = end - 1, lo = 1, lastStart = -1, isPalindrome = true;
        
        while(hi > lo) {
            
            if(lastStart < 0 && s[hi] === s[0]) lastStart = hi;
            
            if(s[hi--] !== s[lo++]) {
                isPalindrome = false;
                break
            }
        }
        
        if(!isPalindrome) {
            end = lastStart > 0 ? lastStart : end - 1;
            continue;
        }
        
        return [...s.slice(end + 1)].reverse().join('').concat(s);
    }
    
    return [...s.slice(1)].reverse().join('').concat(s);
};


let s = 'a'.repeat(2000) + 'cd' + 'a'.repeat(2000);

console.log(shortestPalindrome(s).length);