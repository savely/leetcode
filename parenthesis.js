/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {

    if(s.length === 0) return true
    
    let cmin = 0, cmax = 0

    for (let i = 0; i < s.length; i++) {
        const el = s[i]
        if(el === '(') {
          cmin++
          cmax++
        } else if(el === ')') {
            cmin--
            cmax--
        } else {
            cmin--
            cmax++
        }
      }

      if(cmax < 0) return false
    
    return cmin <= 0

};


console.log(checkValidString('(()((*))'))