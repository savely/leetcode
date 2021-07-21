/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var threeSumMulti = function(arr, target) {
    
    arr.sort((a,b) => a - b)
    let i = 2, count = 0
    const mod = 1_000_000_007
    
    while(i < arr.length || arr[i] > target) {
        let j = 0
        while(j < i-1 || arr[i] + arr[j] > target) {
            let k = j+1
            while(k < i) {
                if(arr[i] + arr[j] + arr[k++] === target) count = (count+1) % mod
            }
            j++
        }
        i++
    }
    return count    
};

let arr = [1,1,2,2,3,3,4,4,5,5]

console.log(threeSumMulti(arr, 6))