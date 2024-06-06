/*
#846. Hand of Straights

Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

Example 2:

Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.

 

Constraints:

    1 <= hand.length <= 104
    0 <= hand[i] <= 109
    1 <= groupSize <= hand.length

*/

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {

    if(groupSize === 1) return true;

    if(hand.length % groupSize) return false;

    const freq = {};
    let values = new Set();

    for(const n of hand) {
        freq[n] = (freq[n] || 0) + 1;
        values.add(n);
    }

    values = [...values].sort((a,b) => a - b);

    let i = 0, deleted = 0;

    while(i <= values.length - groupSize) {

        let j = i, count = freq[values[i]], start = values[i], startIdx = i;

        if(j > values.length - groupSize) return false;

        while(j < startIdx + groupSize) {

            if(j > startIdx && values[j] !== values[j - 1] + 1) return false;

            freq[values[j]] -= count;

            deleted += count;

            if(freq[values[j]] < 0) return false;

            if(freq[values[j]] === 0) i++;

            j++;
        }
        i += freq[values[i]] === 0 ? 1 : 0;
    }

    return deleted === hand.length;
};

let hand = [1,2,3,6,2,3,4,7,8], groupSize = 3;//true
hand = [1,2,2,3,4,5], groupSize = 3;//false
//hand =[4,3,3,4,1,2,2,4],groupSize = 4; //false
//hand =[0,0], groupSize = 2;
//hand =[1,2,2,3,3,3,4,4,5], groupSize = 3; //true
//hand =[8,10,12],groupSize = 3;

console.log(isNStraightHand(hand, groupSize));


