var stringShift = function(s, shift) {

    const shiftRight = function(n) {
        const array = Array.from(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        while(n > 0) {
            const t = array.pop()
            array.unshift(t)                                                                                                                                                                                                                                                    
            n--
        }
        return array.join('')
    } 
    let right = shift.reduce((acc, arr) => {
      acc += arr[0] === 1 ? arr[1] : -(arr[1])
      return acc
    },0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    
    right = right % s.length
    right = right < 0 ? s.length + right : right 
    
    return shiftRight(right)
};
                                                                                                                                                                                                                                                                                                            
console.log(stringShift('abcdefg',[[1,1],[1,1],[0,2],[1,3]]))