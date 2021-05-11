/*
# 1432. Max Difference You Can Get From Changing an Integer

You are given an integer num. You will apply the following steps exactly two times:

Pick a digit x (0 <= x <= 9).
Pick another digit y (0 <= y <= 9). The digit y can be equal to x.
Replace all the occurrences of x in the decimal representation of num by y.
The new integer cannot have any leading zeros, also the new integer cannot be 0.
Let a and b be the results of applying the operations to num the first and second times, respectively.

Return the max difference between a and b.

 
*/

/**
 * @param {number} num
 * @return {number}
 */
 var maxDiff = function(num) {
    
    const str = `${num}`
    
    let max = '9', min = str[0] === '1' ? '0' : '1' 
    
    for(let i = 0; i < str.length; i++) {
        
        if(str[i] === max) continue;
        
        max = str[i]
        break
    }
    
    const maxNum = str.split(max).join('9')

       for(let i = min === '0' ? 1 : 0 ; i < str.length; i++) {
           if(str[i] === min || str[0] === '1' && str[i] === '1') continue;
           
           min = str[i]
           break
       }
    
    let minNum = str.split(min).join(str[0] === '1' ? '0' : '1')

    if(minNum[0] === '0') {
        minNum = str
    }
    
    console.log(maxNum, minNum)
    
    return parseInt(maxNum) - parseInt(minNum)
};

console.log(maxDiff(1101057))