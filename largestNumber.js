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

        if(str1.length === str2.length) return 0

        if(str1.length > str2.length) {
            const char = str2[str2.length-1]

            for(let i = str2.length; i < str1.length; i++) {
                if(str1[i] === char) continue

                return  char - str1[i]
            }

            return 0
        }

        const char = str1[str1.length-1]

        for(let i = str1.length; i < str2.length; i++) {
            if(str2[i] === char) continue

            return  str2[i] - char
        }

        return 0
    }

    const res = nums.map(n => n.toString()).sort(f).join('')

    return res[0] === '0' ? '0' : res
};

console.log(largestNumber([3,30,34,5,9]))