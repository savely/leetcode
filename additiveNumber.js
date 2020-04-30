/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.
*/
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber  = function(num) {

    const toNumber = function(start, end) {
         if(num[start] === '0') {
             return start === end ? 0 : NaN
         }
         return parseInt(num.slice(start, end+1))
    }

    const isMatch = function (str, start) {

        if(str.length === 0 
            || str.length + start > num.length) return false

        for(let i = 0; i < str.length ; i++) {
            if(num[start + i] !== str[i]) return false
        }

        return true
    }

        for(let i = 0; i < Math.floor(num.length /2); i++) {
         const current = toNumber(0,i)

        if(isNaN(current)) continue

        for (let j = i+1; j < num.length-1; j++) {
            let fst = current
            let snd = toNumber(i+1, j)
            
            let start = j+1
            let sum = fst+snd
            let match = false
            
            while(!isNaN(sum)  && start < num.length) {
                match = isMatch(sum.toString(), start) 

                if(!match) break

                fst = snd
                snd = sum
                start += sum.toString().length
                sum = fst + snd
               
            }

            if(match) return true
        }
    }
    return false
};

console.log(isAdditiveNumber('199101300'))