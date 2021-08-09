var groupAnagrams = function(strs) {
    
    const map = {};
     
     for(const str of strs) {
    
        const arr = new Array(26).fill(0);

        for(let i = 0; i < str.length; i++) {

            arr[str.charCodeAt(i) - 97]++;
        }

        const hash = arr.join('|');
       
         if(map[hash] === undefined) map[hash] = [];
         
         map[hash].push(str);
     }
     
     const res = [];
     
     for(const str in map) {
         res.push(map[str]);
     }
     
     return res;
 };