var kthSmallest = function(root, k) {
    
    const stack = []

    while(true) {
        
    while(root !== null) {
        stack.push(root)
        root = root.left
    }

    root = stack.pop()

    if(k-- === 0) return root

    root = root.right
  }
};