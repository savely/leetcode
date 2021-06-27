/*
We are given an array A of N lowercase letter strings, all of the same length.

Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.

For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef","vyz"].

Suppose we chose a set of deletion indices D such that after deletions, the final array has its elements in lexicographic order (A[0] <= A[1] <= A[2] ... <= A[A.length - 1]).

Return the minimum possible value of D.length.
/*

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    
    if(A.length < 2) return 0
    
    let count = 0

    let checkRows = new Array(A.length).fill(false) 
  
    
    for(let j = 0; j < A[0].length; j++) {
    for (let i = 1; i < A.length; i++) {
        if(checkRows[i] && A[i][j] <  A[i-1][j]) {
          count++
          break
        }

       }
       for (let i = 1; i < A.length; i++) {
       if (A[i][j] < A[i-1][j])
           checkRows[i] = true
       }

    }
    return count
};


console.log(minDeletionSize(["zyx","wvu","tsr"]))
console.log(minDeletionSize(["xga","xfb","yfa"]))
//["doeeqiy","yabhbqe","twckqte"]

console.log(minDeletionSize(["doeeqiy","yabhbqe","twckqte"]))

console.log(minDeletionSize(["doeeqiy","yabhbqe","twckqte"]))
