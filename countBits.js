/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {

    if(num === 0) return [0]

    const ones = [0,1]
    
    for(let i = 2; i <= num; i++) {
      const mod = i % 2 
      ones.push(ones[(i-mod)/2] + mod)
    }
    return ones
};

console.log(countBits(6))