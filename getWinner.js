/*

#1535. Find the Winner of an Array Game

Given an integer array arr of distinct integers and an integer k.

A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]). 

In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0 and the smaller integer moves to the end of the array. The game ends when an integer wins k consecutive rounds.

Return the integer which will win the game.

It is guaranteed that there will be a winner of the game.

 
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var getWinner = function(arr, k) {
    
    if (k >= arr.length) return Math.max(...arr)
    
    
    let max = arr[0], count = 0, i = 1
    
    while(count < k && i < arr.length) {

        if(max > arr[i]) {
            count++
        } else {
            count = 1
            max = arr[i]
        }
        i++ 
    }
    
    return max
};

let arr = [2,1,3,5,4,6,7]
let k = 2

console.log(getWinner(arr, k))