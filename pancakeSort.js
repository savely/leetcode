/*

*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {

    if(A.length < 2) return []

    res = []

    const flip = function (k) {
        if(k === 0) return 
         const rev = A.splice(0, k).reverse()
         A = rev.concat(A)
       }

    const search = function(target, start, end)  {

        while(start < end) {
            if(A[start] === target) return start
            start++
        }

        if(start === end) return end
    }
    
    let last = A.length 
    
    while(last > 0) {
        if(A[last-1] === last) {
            last--
            continue
        }

        const pos = search(last, 0, last-1)
        flip(pos+1)
        flip(last)

        res.push(pos+1, last)
        last--
    }

    return res
};

console.log(pancakeSort([3,2,4,1]))