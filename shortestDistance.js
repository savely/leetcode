/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    
    const r = Array.from(S).reduce((acc, c, idx) => {
        if(c === C) {
           acc['arr'].push(0)
           acc['start'].push(idx)
        } else {
           acc['arr'].push(S.length) 
        }   
        return acc
    },{arr: [], start: []})

    if (r['start'].length === 0) return r['arr']

    const fromPos = function(arr, pos) {
       let right = pos + 1
       let left  = pos - 1
       let go    = true

       while (go) {

            go = false

            if(left > -1 && (pos - left) < arr[left]) {
                arr[left] = pos - left
                left--
                go = true
            }

            if (right < arr.length && (right - pos) < arr[right]) {
                arr[right] = right - pos
                right++
                go = true
            }
        }
    }

    r['start'].forEach(pos => {
        fromPos(r['arr'], pos)
    });
   
    return r['arr']
};

console.log(shortestToChar("loveleetcode", 'd'))