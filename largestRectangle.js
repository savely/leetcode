var largestRectangleArea = function(heights) {

    if(heights.length === 0) return 0

    let stack = []
    let area  = 0
    let idx  =  0

    while(idx < heights.length) {
      
        if(stack.length === 0 || heights[idx] >= heights[stack[0]]) {
            stack.unshift(idx++)
            continue
        }

        let top = stack.shift()
        area = Math.max(area, heights[top] * (stack.length === 0 ? idx : idx - stack[0] - 1))
        
     }

     while (stack.length > 0) {
        let top = stack.shift()
        area = Math.max(area, heights[top] * (stack.length === 0 ? idx : idx - stack[0] - 1))

     }

    return area
};

console.log(largestRectangleArea([2,1,5,6,7,2,3]))