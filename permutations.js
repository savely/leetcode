/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    if(nums.length < 2) return [nums]
    
    if(nums.length === 2) {
        let [n,m] = nums
        return [[n,m],[m,n]]
    }
    let res = []

    for(let i = 0; i < nums.length; i++) {
          let pm =  permute(nums.filter(x => x !== nums[i]))
          let t = pm.map(arr => [nums[i]].concat(arr))
          res =  res.concat(t)
          
    }
    return res
};

var permute2 = function(nums) {

    if(nums.length < 2) return [nums]

    const res = [[nums[0]]]


    for(let i = 0; i < nums.length; i++) {
        let nms = nums.slice(0,i).concat(nums.slice(i+1))
      for(let j = 0; j < nms.length; j++) {
          const arr = nms.slice(0, j).concat([nums[i]]).concat(nms.slice(j))
          if(hash[arr.toString()] === undefined) {
            res.push(arr)
          }
          hash[arr.toString()] = true
      }
    }
    return res
};


console.log(permute([2,2,3,4]))

var search = function(nums, target) {
    
    const binary = function(start, end) {
       if (end < start) return -1
       if (end - start < 2) return nums[end] === target ? end : (nums[start] === target ? start : -1)

        const middle = Math.floor(start + (end-start)/2)
        
        if(nums[middle] === target) return middle
        
        return (nums[middle]  > target) ? binary(start, middle) : binary(middle, end) 
    } 
    
    return binary(0, nums.length-1)
};
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    

};

var singleNumber = function(nums) {
    
    const hash = nums.reduce((acc, n) => {
                if(acc[n] === undefined) {
                    acc[n] = 1
                } else if(acc[n] === 1)  {
                    delete acc[n] 
                }
                return acc
                }, {})

      const res = []          
      for(let x in hash) {
          res.push(parseInt(x))
      }
      return res
  };

  const singleNumber2 = function (nums) {
     return nums.reduce((acc,n) => { return n ^ acc}, 0)
  }

//console.log(singleNumber([1,2,1,3,2,5]))