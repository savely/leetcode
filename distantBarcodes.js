/*
#1054. Distant Barcodes

In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.

 

Example 1:

Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]

Example 2:

Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,1,2,1,2]

 

Constraints:

    1 <= barcodes.length <= 10000
    1 <= barcodes[i] <= 10000
*/

var rearrangeBarcodes = function(barcodes) {
    
    if(barcodes.length < 3) return barcodes;
    
    let freq = barcodes.reduce((acc, n) => {
        acc.set(n, (acc.get(n) || 0) + 1);
        return acc;
    }, new Map());
    
    freq = [...freq];
    
    freq.sort((a,b) => a[1] - b[1]);
    
    let i = 0;
    
    while(freq.length) {
        
        let [n, count] = freq.pop();
        
        while(count-- > 0) {
            barcodes[i] = n;
            i =  (i + 2 < barcodes.length) ? i + 2 : 1;
        }
    }
    
    return barcodes;
};