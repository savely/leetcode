var calculate = function(s) {
    const hi = ['*','/'], low = ['-','+']
    const op = {
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        '*' : (a,b) => a * b,
        '/' : (a,b) => Math.floor(a/b),
        '#' : (a,b) => a
    } 
    
    const readOp = function(pos) {
        let op = "#"
        while (s[pos] === ' ') {
            pos++
        }
        return([s[pos], pos+1])
    }
    const isDigit = (ch) => ch.charCodeAt(0) > 47 && ch.charCodeAt(0) < 58
    
};
