/*
 #842  Split Array into Fibonacci Sequence

Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].

Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:

0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
F.length >= 3;
and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.
*/

/**
 * @param {string} S
 * @return {number[]}
 */
 var splitIntoFibonacci = function(S) {
    
    
    const MAX_INT = 2  ** 31 - 1
    
    const searchRec = (startPos, first, second, path) => {
        
        if(startPos === S.length) return path;
        
        const n = first + second
        
        if(n > MAX_INT) return []
        
        for(let i = startPos;  i < S.length; i++) {
            const num = parseInt(S.slice(startPos, i+1))
            
            if(num > MAX_INT) return []
            
            if(S[startPos] === '0' && num > 0 || num > n) return [];


            if(first + second === num) {
                path.push(num)
                return searchRec(i + 1, second, num, path)
            }
        }
        
       return [] 
    }
    
    
    const half = S.length % 2 ? S.length / 2 : (S.length + 1) /2
    
    for(let i = 0; i < half; i++) {
        
        const first = parseInt(S.slice(0, i+1))
        
        if(S[0] === '0' & first > 0 || first > MAX_INT) break;
        
        for(let j = i + 1; j < S.length - i; j++) {
            
            const second = parseInt(S.slice(i+1, j + 1))
            
            if(S[i + 1] === '0' & second > 0 || second > MAX_INT) break;
            
            const path = searchRec(j + 1, first, second, [])
            
            if(path.length) return [first, second, ...path]
        }
        
    }
    
    return []
};