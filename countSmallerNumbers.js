/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sortedArr = [...nums];
    let result = [];
  
    sortedArr.sort((a, b) => {
      return a-b;
    });
  
    for (let i=0; i<nums.length; i++) {
      let j = 0;
      let temp = 0;
      while (sortedArr[j] !== nums[i]) {
        temp++;
        j++;
      }
  
      result.push(temp);
    }
    return result;
  };

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))