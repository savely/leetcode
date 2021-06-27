/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
    
    let sum = mat.reduce((acc, row) => acc + row[0], 0)

    if(k === 1) return sum

    let minDiffIdx = function(diffs) {
        let idx = 0
        for(let i = 1; i < diffs.length; i++) {
           if(diffs[i]['val'] < diffs[idx]['val']) idx = i
        }
        return idx
    }

    let diffs = mat.reduce((acc, row, idx) => {
        acc.push({'row': idx,'col': 1, 'val': row[1]-row[0]})
        return acc
    }, [])

    let rows = mat.length-1
    let cols = mat[0].length -1
    let lastDiffVal = 0

    for(let i = 0; i < k; i++) {

      let idx = minDiffIdx(diffs)
      let minDiff = diffs[idx]
      sum += minDiff['val'] - lastDiffVal
      lastDiffVal = minDiff['val']

      if(minDiff['row'] === rows) {
          diffs.splice(idx,1)
          //lastDiffVal = 0
          continue
        }

        diffs[idx] = {'row' : idx, 'col' : minDiff['col'] + 1, 'val' : mat[minDiff['col'+1]] - mat[minDiff['col'+1]]}
    }
    return sum
};

let mat = [[1,3,11],[2,4,6]]
let k = 5


console.log(kthSmallest(mat, k))