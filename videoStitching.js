/*
#1024. Video Stitching

You are given a series of video clips from a sporting event that lasted T seconds.  These video clips can be overlapping with each other and have varied lengths.

Each video clip clips[i] is an interval: it starts at time clips[i][0] and ends at time clips[i][1].  
We can cut these clips into segments freely: for example, a clip [0, 7] can be cut into segments [0, 1] + [1, 3] + [3, 7].

Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event ([0, T]).
  If the task is impossible, return -1.
*/

/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
 var videoStitching = function(clips, T) {
    
    if(T === 0) return 0
    
    clips.sort(([s1, e1], [s2, e2]) =>  e1 - e2 )

     console.table(clips)

    const dp = new Array(clips.length).fill(clips.length + 1)


    for(let i = 0; i < clips.length; i++) {
        const [start, end] = clips[i]

        if(start === 0) {
            dp[i] = 1
            continue
        }

        let found = false
          
        for(let j = i -1; j >= 0; j--) {
            const [prevStart, prevEnd] = clips[j]

            if(prevEnd < start) break;

            dp[i] = Math.min(dp[i], dp[j] + 1)
        }
    }

    let minHops = clips.length + 1

    for(let i = 0; i < clips.length; i++) {
        const [start, end] = clips[i]

        if(end >= T) {
            minHops = Math.min(minHops, dp[i])
        }
     }

     return minHops < clips.length + 1 ? minHops : -1
};

let arr = 
         [[0,5],[1,6],[2,7],[3,8],[4,9],[5,10],[6,11],[7,12],[8,13],[9,14],
          [10,15],[11,16],[12,17],[13,18],[14,19],[15,20],[16,21],[17,22],
          [18,23],[19,24],[20,25],[21,26],[22,27],[23,28],[24,29],[25,30],
          [26,31],[27,32],[28,33],[29,34],[30,35],[31,36],[32,37],[33,38],
          [34,39],[35,40],[36,41],[37,42],[38,43],[39,44],[40,45],[41,46],
          [42,47],[43,48],[44,49],[45,50],[46,51],[47,52],[48,53],[49,54]] //50

//arr = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]] //9          

//arr = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]] // 10

//arr = [[0,5],[6,8]] //7

//arr = [[0,4],[2,8]] // 5

//arr = [[5,7],[1,8],[0,0],[2,3],[4,5],[0,6],[5,10],[7,10]] //5




console.log(videoStitching(arr, 50))
