var canJump = function(nums) {
 
    const dp = Array(nums.length).fill(false)
    const len = nums.length-1
    dp[len] = true

    for(let i = len-1; i >=0; i--) {
       const jumps = Math.min(len-i, nums[i])

       for(let j = 1; j <= jumps; j++) {
           if(dp[i+j]) {
              dp[i] = true
              break 
           }
       }
    }

    return dp[0]
};

const canJump2 = function(nums) {

    const len = nums.length-1
    let left = len

    for(let i = len-1; i >=0; i--) {
        if(i + nums[i] >= left) {
            left = i
        }
    }
    return left === 0
}

let board = [2,3,1,1,4]
board = [3,2,1,0,4]

console.log(canJump2(board))
