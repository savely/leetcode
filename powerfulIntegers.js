/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
 var powerfulIntegers = function(x, y, bound) {
    
    if(bound < 2) return []

    const set = new Set()
    const powsY = {0 : 1}

    if(x === 1 && y === 1) return bound > 1 ? [2]  : []

    if(x === 1) {
    const res = []
    let powY = 0, yPowY = 1

        while (yPowY  + 1 <=bound) {
            res.push(yPowY + 1)
            powY++
            yPowY =  y ** powY
        }

        return res
    }
    
    if(y === 1)  {
    const res = []
    let powX = 0, xPowX = 1

        while (xPowX  + 1 <=bound) {
            res.push(xPowX + 1)
            powX++
            xPowX =  x ** powX
        }

        return res
    }    
    
    let powX = 0 , xPowX = 1
    
    while (xPowX <= bound) {
        
        let powY = 0, yPowY = powsY[0] 
        
        while (xPowX + yPowY <= bound) {
            set.add(xPowX + yPowY)
            
            powY++

            if(powsY[powY] === undefined) {
                powsY[powY] = y ** powY
            }
            
            yPowY = powsY[powY]
        }
        
        powX++
        xPowX = x ** powX
    }
    
    return [...set]
};

console.log(powerfulIntegers(2,3,10))