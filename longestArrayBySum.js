function findLongestSubarrayBySum(s, arr) {

    if(arr.length === 1) return arr[0] === s ? [1,1] : [-1]

    let sum = 0, st = 0; max = -1, start = 0, end = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]

        while(sum > s) {
            sum -= arr[st++]
        }

        if(sum === s && i - st + 1 > max) {
            max = i - st + 1
            start  = st
            end    = i
        }
    }

    return max > 0 ? [start+1, end+1] : [-1]
}


console.log(findLongestSubarrayBySum(0, [1, 0, 2]))