/*
#3664. Two-Letter Card Game

You are given a deck of cards represented by a string array cards, and each card displays two lowercase letters.

You are also given a letter x. You play a game with the following rules:

    Start with 0 points.
    On each turn, you must find two compatible cards from the deck that both contain the letter x in any position.
    Remove the pair of cards and earn 1 point.
    The game ends when you can no longer find a pair of compatible cards.

Return the maximum number of points you can gain with optimal play.

Two cards are compatible if the strings differ in exactly 1 position.

 

Example 1:

Input: cards = ["aa","ab","ba","ac"], x = "a"

Output: 2

Explanation:

    On the first turn, select and remove cards "ab" and "ac", which are compatible because they differ at only index 1.
    On the second turn, select and remove cards "aa" and "ba", which are compatible because they differ at only index 0.

Because there are no more compatible pairs, the total score is 2.

Example 2:

Input: cards = ["aa","ab","ba"], x = "a"

Output: 1

Explanation:

    On the first turn, select and remove cards "aa" and "ba".

Because there are no more compatible pairs, the total score is 1.

Example 3:

Input: cards = ["aa","ab","ba","ac"], x = "b"

Output: 0

Explanation:

The only cards that contain the character 'b' are "ab" and "ba". However, they differ in both indices, so they are not compatible. Thus, the output is 0.

 

Constraints:

    2 <= cards.length <= 105
    cards[i].length == 2
    Each cards[i] is composed of only lowercase English letters between 'a' and 'j'.
    x is a lowercase English letter between 'a' and 'j'
*/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

var score = function(cards, x) {

    const reduceFreq = freq => {

        const queue = new PriorityQueue((a, b) => b - a);
        let points = 0;

            for(const f of freq) {
                if(f > 0) queue.enqueue(f);
            }

        while(queue.size() > 1) {
            const fst = queue.dequeue(), snd = queue.dequeue(), diff = fst - snd;
            points += snd;
            if(diff > 0) {
                queue.enqueue(diff);
            }
        }

        const unmatched = queue.size() ? queue.dequeue() : 0;

        return [points, unmatched];
    };
    
    const leftFreq = new Uint8Array(10), rightFreq = new Uint8Array(10), A = 'a'.charCodeAt();
    let both = 0;

    for(const card of cards) {

        const isLeft = card[0] === x, isRight = card[1] === x;

        if(isLeft && isRight) {
            both++;
        } else if(isLeft) {
            leftFreq[card.charCodeAt(1) - A]++;
        } else if(isRight) {
            rightFreq[card.charCodeAt(0) - A]++;
        }
    }

    const [pointsLeft, unmatchedLeft] = reduceFreq(leftFreq), [pointsRight, unmatchedRight] = reduceFreq(rightFreq);
    
    let  points = pointsLeft +  Math.min(both, unmatchedLeft);
    both -=  Math.min(both, unmatchedLeft);
    points += pointsRight + Math.min(both, unmatchedRight);

    return points;
};

let cards = ["ab","bb"], x = "b"; // 1
cards = ["ab","aa","ab","bc","cc","bc","bb","ac","bc","bc","aa","aa","ba","bc","cb","ba","ac","bb","cb","ac","cb","cb","ba","bc","ca","ba","bb","cc","cc","ca","ab","bb","bc","ba","ac","bc","ac","ac","bc","bb","bc","ac","bc","aa","ba","cc","ac","bb","ba","bb"], x = "b"; // 16
console.log(score(cards, x));