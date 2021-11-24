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

    for(const n of hand) {
        freq[n] = (freq[n] || 0) + 1;
    }

    const keys = Object.keys(freq).map(n => +n);

    if(keys.length < groupSize) return false;

    keys.sort((a, b) => a - b);

    for(let i = 0; i <= keys.length - groupSize; i++) {
        const key = keys[i];

        if(freq[key] === 0) {
            if(i === keys.length - groupSize) return false;
            continue;
        }

        for(let j = 1; j < groupSize; j++) {

            if(freq[key + j] === undefined || freq[key + j] < freq[key]) return false;

            freq[key + j] -= freq[key];

            if(key + j + 1 < keys.length && freq[key + j] > freq[key + j+  1] && key + j > keys.length - groupSize) return false;
        }

        freq[key] = 0;
    }

    return true;
};
