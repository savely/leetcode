var heightChecker = function(heights) {
    const sorted = Array.from(heights).sort((a,b) => a-b)
    
    let res = 0 
    
    for(let i = 0; i < heights.length; i++) {
        if(heights[i] !== sorted[i]) {
            res++
        }
    }
  
    return res
};

console.log(heightChecker([1,1,4,2,1,3]))