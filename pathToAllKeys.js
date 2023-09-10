/*
#864. Shortest Path to Get All Keys

You are given an m x n grid grid where:

    '.' is an empty cell.
    '#' is a wall.
    '@' is the starting point.
    Lowercase letters represent keys.
    Uppercase letters represent locks.

You start at the starting point and one move consists of walking one space in one of the four cardinal directions. You cannot walk outside the grid, or walk into a wall.

If you walk over a key, you can pick it up and you cannot walk over a lock unless you have its corresponding key.

For some 1 <= k <= 6, there is exactly one lowercase and one uppercase letter of the first k letters of the English alphabet in the grid. This means that there is exactly one key for each lock, and one lock for each key; and also that the letters used to represent the keys and locks were chosen in the same order as the English alphabet.

Return the lowest number of moves to acquire all keys. If it is impossible, return -1.

 

Example 1:

Input: grid = ["@.a..","###.#","b.A.B"]
Output: 8
Explanation: Note that the goal is to obtain all the keys not to open all the locks.

Example 2:

Input: grid = ["@..aA","..B#.","....b"]
Output: 6

Example 3:

Input: grid = ["@Aa"]
Output: -1

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 30
    grid[i][j] is either an English letter, '.', '#', or '@'.
    The number of keys in the grid is in the range [1, 6].
    Each key in the grid is unique.
    Each key in the grid has a matching lock.


*/

/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    const R = grid.length, L = grid[0].length,
          LOWER_A = 'a'.charCodeAt(), 
          UPPER_A = 'A'.charCodeAt();

    let KEY_BIT = 0;

    let start = null;

    for(let r = 0; r < R; r++) {
        for(let c = 0; c < L; c++) {
            if(grid[r][c] == '@') {
                start = [r,c];
            } else if (grid[r][c] >= 'a' && grid[r][c] <= 'f') {
                KEY_BIT = KEY_BIT | ( 1 << ( grid[r][c].charCodeAt() - LOWER_A ) )
            }
        }
    }

    const visited = new Array(R);
    for(let i = 0; i < R; i++) {
        visited[i] = new Array(L);
        for( let j = 0; j < L; j++) {
            visited[i][j] = {}
        }
    };
    visited[start[0]][start[1]][0] = true;

    const directions = [
        [-1, 0], 
        [1, 0], 
        [0, 1], 
        [0, -1] 
    ];

    const queue = [[start[0], start[1], 0]];
    let step = 0;
    while ( queue.length != 0) {
        let len = queue.length;

        while(len){
            const [i, j, key] = queue.shift();
            if(key == KEY_BIT) {
                return step;
            }
            for(let [dx, dy] of directions){
                let x = dx + i, y = dy + j;
                if(grid[x] != null && grid[x][y] != null){
                    if(grid[x][y] <= 'f' && grid[x][y] >='a'){
                        const _key = key | (1 << (grid[x][y].charCodeAt() - LOWER_A) )
                        if(!visited[x][y][_key]) queue.push([x, y, _key]);
                        visited[x][y][_key] = true;
                    }else if(
                        ( grid[x][y] == '.' ) || 
                        ( grid[x][y] == '@' ) ||
                        ( grid[x][y] >= 'A' && grid[x][y] <= 'F' && ( key & ( 1 << (grid[x][y].charCodeAt() - UPPER_A) ) ) )
                    ){
                        if(!visited[x][y][key])queue.push([x, y, key]);
                        visited[x][y][key] = true;
                    }
                }
            }
            len--;
        }
        step++;
    }
    return -1;
};

let grid = ["@.a..","###.#","b.A.B"];
grid = ["@..aA","..B#.","....b"];
grid = ["@Aa"];
grid = ["@...a",
        ".###A",
        "b.BCc"]


console.log(shortestPathAllKeys(grid));