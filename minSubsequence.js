var minSubsequence = function(nums) {
    const sum = nums.reduce((acc,n) => acc+n)
    const sorted = nums.sort((a,b) => b-a)
    const res = sorted.reduce((acc,n) => {
        if(acc['sum'] < sum/2) {
            acc['arr'].push(n)
            acc['sum'] += n
        }
      return acc
    }, {'arr' : [], 'sum' : 0})   
    return res['arr']
};


console.log(minSubsequence([4,3,10,9,8]))