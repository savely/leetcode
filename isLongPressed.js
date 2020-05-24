var isLongPressedName = function(name, typed) {
    
    if(name === typed) return true
    
    if(typed.length <= name.length) return false
    
    let i = 0, j =0
    
    while (i < name.length && j < typed.length) {
        if(name[i] === typed[j]) {
            i++
            j++
            continue
        }
        
        if(j > 0 && typed[j-1] === typed[j]) {
            j++
            continue
        }
        
       return false 
    }
    
     if(i < name.length) return false
    
    while(j < typed.length) {
        if(typed[j++] !== name[i-1]) return false
    }
    
    return true
};

console.log(isLongPressedName("vtkgn","vttkgnn"))