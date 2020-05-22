/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    if(T.length === 0) return [] 

    T = T.map((t,i) => [t,i])


    const res = new Array(T.length).fill(0), stack = [T.shift()]

    while(T.length > 0) {
        const temp = T.shift()

        let top = stack.length-1

        if(top < 0 || stack[top][0] >= temp[0]) {
            stack.push(temp)
            continue
        }


        while(top >= 0 && stack[top--][0] < temp[0]) {
            const t = stack.pop()
            res[t[1]] = temp[1]-t[1]
        }
        stack.push(temp)
    }
    
    return res
};