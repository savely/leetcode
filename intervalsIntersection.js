/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    
    const fst = firstList, snd = secondList;
    
    if(!fst.length || !snd.length) return [];
    
    const res = [];
    
    let i = 0, j = 0;
    
    while(i < fst.length && j < snd.length) {
        
        const [sFst, eFst] = fst[i], [sSnd, eSnd] = snd[j];
        
        if(eSnd < sFst) {
            j++;
            continue;
        }
        
        if(sSnd > eFst) {
            i++;
            continue;
        }
        
        res.push([Math.max(sFst,sSnd),Math.min(eFst, eSnd)]);
        
        if(sSnd === eSnd) {
            i++;
            j++;
        } else if (eFst > eSnd) {
            j++
        } else {
            i++;
        }
    }
    
    return res;
};

let firstList = [[0,2],[5,10],[13,23],[24,25]];
let secondList = [[1,5],[8,12],[15,24],[25,26]];

//let firstList = [[1,7]], secondList = [[3,10]];

console.log(intervalIntersection(firstList, secondList))