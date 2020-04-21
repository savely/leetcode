var isHappy = function(n) {

    const set = new Set([n])

    const sumSquares = function(x) {
        let sum = 0
        let tmp = x

        while(tmp > 0) {
            let dig = tmp % 10
            tmp = Math.trunc(tmp / 10)
            sum += dig * dig
        }
       return sum
    }
     
    let cand = sumSquares(n)

    while (!set.has(cand)) {
         set.add(cand)
         cand = sumSquares(cand)
         if(cand === 1) return true        
    }

    return cand === 1
};

console.log(isHappy(386))