/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    
    if(hi === lo) return lo

    const dp = {1:0}

    const power = function(n) {
        if(dp[n] == undefined) {
            next = (n % 2 === 0) ? n / 2 : 3 * n + 1
            dp[n] = 1 + power(next)
        }
        return dp[n]
    }

    const range = function(start,end) {
        return Array.from(Array(end-start+1), (_,i) => start + i)
    }

    const sorted = range(lo,hi).sort((a,b) => {
        const ordA = power(a)
        const ordB = power(b)

        return ordA === ordB ? a-b : ordA - ordB
    })

    return sorted [k-1]
};

console.log(getKth(1,1000,777))