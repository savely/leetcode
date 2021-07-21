/*
#528 Random Pick with Weight
*/
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    const totalWeight = w.reduce((acc, w) => acc + w, 0)
    this.probabilities = w.map(w => (w/totalWeight).toPrecision(10))
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */