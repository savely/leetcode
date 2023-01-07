/*
#2271. Maximum White Tiles Covered by a Carpet

You are given a 2D integer array tiles where tiles[i] = [li, ri] represents that every tile j in the range li <= j <= ri is colored white.

You are also given an integer carpetLen, the length of a single carpet that can be placed anywhere.

Return the maximum number of white tiles that can be covered by the carpet.

 

Example 1:

Input: tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10
Output: 9
Explanation: Place the carpet starting on tile 10. 
It covers 9 white tiles, so we return 9.
Note that there may be other places where the carpet covers 9 white tiles.
It can be shown that the carpet cannot cover more than 9 white tiles.

Example 2:

Input: tiles = [[10,11],[1,1]], carpetLen = 2
Output: 2
Explanation: Place the carpet starting on tile 10. 
It covers 2 white tiles, so we return 2.

 

Constraints:

    1 <= tiles.length <= 5 * 104
    tiles[i].length == 2
    1 <= li <= ri <= 109
    1 <= carpetLen <= 109
    The tiles are non-overlapping.


*/

/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function(tiles, carpetLen) {
    

    tiles.sort((a, b) => a[0] - b[0]);

    let i = 0, j = 0, maxCovered = 0, currCovered = 0;

    while (j < tiles.length) {

        const max = tiles[i][0] + carpetLen;

        while(j < tiles.length && tiles[j][1] < max) {
            currCovered += tiles[j][1] - tiles[j][0] + 1;
            j++;
        }

        //handle partial tiles
        let partial = 0;
 
        if(j < tiles.length && tiles[j][0] < max) {
            partial = max - tiles[j][0];
            currCovered += partial;
        }

        maxCovered = Math.max(maxCovered, currCovered);

    
        if(maxCovered === carpetLen) return carpetLen;

        currCovered -= (tiles[i][1] - tiles[i][0]) + 1 + partial;
        i++;
    } 

    i = tiles.length - 1, j = i, currCovered = 0;

    while (i >= 0) {

        const min = tiles[j][1] - carpetLen;

        while(i >= 0 && tiles[i][0] > min) {
            currCovered += tiles[i][1] - tiles[i][0] + 1;
            i--;
        }

        //handle partial tiles
        let partial = 0;
 
        if(i >= 0 && tiles[i][1] < min) {
            partial =  min - tiles[j][1];
            currCovered += partial;
        }

        maxCovered = Math.max(maxCovered, currCovered);

    
        if(maxCovered === carpetLen) return carpetLen;

        currCovered -= (tiles[j][1] - tiles[j][0]) + 1 + partial;
        j--;
    } 

    return maxCovered;
};

let tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10;

//tiles = [[10,11],[1,1]], carpetLen = 2;

tiles = [[1,5],[10,11],[12,13],[20,24],[26,28],[30,32]],carpetLen = 11;//6 // 11;

console.log(maximumWhiteTiles(tiles, carpetLen));