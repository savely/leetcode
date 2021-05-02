/*
1647. Minimum Deletions to Make Character Frequencies Unique
*/
/*
A string s is called good if there are no two different characters in s that have the same frequency.

Given a string s, return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

 

Example 1:

Input: s = "aab"
Output: 0
Explanation: s is already good.
Example 2:

Input: s = "aaabbbcc"
Output: 2
Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
*/

/**
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function(s) {
    
    const freq = [...s].reduce((acc, ch) => {
     if(acc[ch] === undefined) {
         acc[ch] = 0
     }   
      acc[ch]++
      return acc  
    }, {})

    const freqs = new Map()
    let maxFreq = 0

    for(const ch in freq) {
       const f = freq[ch] 
       maxFreq = Math.max(maxFreq, f)

       if(!freqs.has(f)) {
           freqs.set(f, 1)
       } else {
           freqs.set(f, freqs.get(f) + 1)
       }
    }


    const freqsArr = [...freqs], gaps = []

    freqsArr.sort(([fr1, count1], [fr2, count2]) => fr2 - fr1)

    for(let i = 1; i < maxFreq; i++) {

        if(!freqs.has(i)) gaps.push(i)
    }

    let deletions = 0

    for(let i = 0; i < freqsArr.length; i++) {

        let [fr, count] = freqsArr[i]

        while (gaps.length && count > 1) {
            const gap = gaps.pop()

            if(gap > fr) continue;

            deletions += fr - gap
            count--
        }

        deletions += fr * (count - 1)
    }

    return deletions
};