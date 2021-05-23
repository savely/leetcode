/*
#1222. Queens That Can Attack the King

On an 8x8 chessboard, there can be multiple Black Queens and one White King.

Given an array of integer coordinates queens that represents the positions of the Black Queens, 
and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) 
that can attack the King.

Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
*/

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
 var queensAttacktheKing = function(queens, king) {
    
    const [kr,kc] = king, kld = kr - kc, krd = kr + kc
    const q = {'r': [], 'c': [], 'ld': [], 'rd' : []}
    
     for(let i = 0; i < queens.length; i++) {
         
         const [r,c] = queens[i], ld = r-c, rd = r+c 
         
         if(r === kr) {
           const dist = kc - c, pos = dist > 0 ? 0 : 1 , curr = q['r']
           
           if(curr[pos] === undefined) {
               curr[pos] = [r,c]
               continue
           }
           
           const [cr, cc] =  curr[pos]
           
           if(Math.abs(dist) < Math.abs(kc - cc)) curr[pos] = [r,c]
         }

         if(c === kc) {
            const dist = kr - r, pos = dist > 0 ? 0 : 1 , curr = q['c']
            
            if(curr[pos] === undefined) {
                curr[pos] = [r,c]
                continue
            }
            
            const [cr, cc] =  curr[pos]
            
            if(Math.abs(dist) < Math.abs(kr - cr)) curr[pos] = [r,c]
          }    
          
          if(ld === kld) {
            const dist = kc - c, pos = dist > 0 ? 0 : 1 , curr = q['ld']
            
            if(curr[pos] === undefined) {
                curr[pos] = [r,c]
                continue
            }
            
            const [cr, cc] =  curr[pos]
            
            if(Math.abs(dist) < Math.abs(kc - cc)) curr[pos] = [r,c]
          }
          
          if(rd === krd) {
            const dist = kc - c, pos = dist > 0 ? 0 : 1 , curr = q['rd']
            
            if(curr[pos] === undefined) {
                curr[pos] = [r,c]
                continue
            }
            
            const [cr, cc] =  curr[pos]
            
            if(Math.abs(dist) < Math.abs(kc - cc)) curr[pos] = [r,c]
          }          
         
         
     }

     const res = []

     for(const k in q) {
       const [l, r] = q[k]

       if(l) res.push(l);
       if(r) res.push(r);
     }
    
     return res
};