
var FreqStack = function() {
    this.freq = {}
    this.freq2num = {}
    this.maxFreq = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(this.freq[x] === undefined) {
        this.freq[x] = 0
  } 
  const k = ++this.freq[x]
  this.maxFreq = Math.max(this.maxFreq, k)
  
  if(this.freq2num[k] === undefined) {
      
      this.freq2num[k] = []
  }
    this.freq2num[k].push(x)
    
   // console.log(this.freq, this.freq2num)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    
    const el = this.freq2num[this.maxFreq].pop()
    
   if(--this.freq[el] === 0) {
        delete this.freq[el]
    } 
    if(!this.freq2num[this.maxFreq].length) {
        delete this.freq2num[this.maxFreq]
        this.maxFreq--
    }
    //console.log(this.freq, this.freq2num)
  return el
};

let seq = [[4],[0],[9],[3],[4],[2],[],[6],[],[1],[],[1],[],[4],[],[],[],[],[],[]]
seq = [[1],[0],[0],[1],[5],[4],[1],[5],[1],[6],[],[],[],[],[],[],[],[],[],[]]

const run = function(seq) {
    const freqStack = new FreqStack(), res = []

    for(let i = 0; i < seq.length; i++) {
        if(seq[i].length) {
            freqStack.push(seq[i][0])
        } else {
            res.push(freqStack.pop())
        }
    }
    return res
}

console.log(run(seq))