/*
#1255. Maximum Score Words Formed by Letters

Given a list of words, list of  single letters (might be repeating) and score of every character.

Return the maximum score of any valid set of words formed by using the given letters (words[i] cannot be used two or more times).

It is not necessary to use all characters in letters and each letter can only be used once. Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], score[1], ... , score[25] respectively.

 

Example 1:

Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
Output: 23
Explanation:
Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
Words "dad" and "dog" only get a score of 21.

Example 2:

Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
Output: 27
Explanation:
Score  a=4, b=4, c=4, x=5, z=10
Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
Word "xxxz" only get a score of 25.

Example 3:

Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
Output: 0
Explanation:
Letter "e" can only be used once.

 

Constraints:

    1 <= words.length <= 14
    1 <= words[i].length <= 15
    1 <= letters.length <= 100
    letters[i].length == 1
    score.length == 26
    0 <= score[i] <= 10
    words[i], letters[i] contains only lower case English letters.


*/

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {

    const counts = new Array(26).fill(0), a = 'a'.charCodeAt();

    for(const c of letters) {
        counts[c.charCodeAt() - a]++;
    }

    words = words.map((w) => {

        const wCounts = new Array(26).fill(0);

        for(const c of w) {
            wCounts[c.charCodeAt() - a]++;
        }

        let wScore = 0;

        for(let i = 0; i < counts.length; i++) {

            wScore += counts[i] >= wCounts[i] ? score[i] * wCounts[i] : -Infinity;
        }

        return [wScore, wCounts];
    }).filter((w) => w[0] > 0);


    let maxScore = 0;

    for(let i = 1; i < 2 ** words.length; i++) {

        const maskCounts = [...counts];

        let mask = i, j = 0, maskScore = 0;

        while( mask > 0) {

            if(mask % 2 === 0) { 
                mask >>= 1;
                j++;
                continue;
            }

            const [wScore, wCounts] = words[j];

            let isFitting = true;

            for(let k = 0; k < maskCounts.length; k++) {

                maskCounts[k] -= wCounts[k];

                if(maskCounts[k] < 0) {
                    mask = 0;
                    isFitting  = false;
                    break;
                }
            }

            maskScore += isFitting ? wScore : 0;
            mask >>= 1;
            j++;

        }

        maxScore = Math.max(maxScore, maskScore);
    }
    
    return maxScore;
};
