/*
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
*/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    arr = arr.sort((a, b) => a-b)
    let minDiff = Math.abs(arr[0]-arr[1])
    let res = [[arr[0],arr[1]]]
    
    for(let i = 2; i < arr.length; i++) {
        const diff = Math.abs(arr[i-1] - arr[i])
        const pair = [Math.min(arr[i], arr[i-1]), Math.max(arr[i], arr[i-1])]
        if(minDiff > diff) {
            minDiff = diff
            res.length = 0
            res.push(pair)
        } else if(minDiff === diff) {
           res.push(pair) 
        }
    }
    return res
};