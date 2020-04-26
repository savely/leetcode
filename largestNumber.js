/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    const f = function(str1, str2) {

        for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
            if(str1[i] === str2[i]) continue

            return str2[i] - str1[i]
        }

        const diff = str1.length - str2.length

        if(diff === 0) return 0
        
        return diff > 0 ? f(str1.substring(str2.length), str2) : f(str1, str2.substring(str1.length))

    }

    const res = nums.map(n => n.toString()).sort(f).join('')

    return res[0] === '0' ? '0' : res
};

console.log(largestNumber([3,30,34,5,9]))