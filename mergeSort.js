
const merge = function(arr1, arr2) {
     
        const res = []

        while(arr1.length && arr2.length) {

            if(arr1[0] < arr2[0]) {
               res.push(arr1.shift()) 
            }else {
                res.push(arr2.shift()) 
             }
           }
        return [...res, ...arr1, ...arr2]
    }


const sortArray = function(nums) {
 
    if(nums.length < 2) return nums
 
    const left = nums.splice(0, nums.length / 2)

    return  merge(sortArray(left), sortArray(nums))
};

x = [2,1,4,3,5,0,-3]

console.log(sortArray(x))

