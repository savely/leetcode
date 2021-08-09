/**
#155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.

 */
/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    this.stack.push(val);
    
    if(!this.minStack.length || val < this.getMin()) {
        this.minStack.push(this.stack.length);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    const minEltIdx = this.minStack[this.minStack.length - 1]; 
    
    if(minEltIdx === this.stack.length) this.minStack.pop();
    
    return this.stack.pop();    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
     const minEltIdx = this.minStack[this.minStack.length - 1] - 1; 
    
    return this.stack[minEltIdx];
};


//a = ["push","push","push","getMin","pop","top","getMin"]
//b = [[-2],[0],[-3],[],[],[],[]]

a = ["push","push","push","getMin","top","pop","getMin"];
b = [[-2],[0],[-3],[],[],[],[]];

const zip = function(ar1, ar2, zipper) {
    return zipper 
      ? ar1.map((value, index) => zipper(value, ar2[index]))
      : ar1.map((value, index) => [value, ar2[index]])
    ;
  }

const run = function(obj, fun, args) {
     
    return zip(fun, args, (fname,arg) => {
        const f = obj[fname] 
        res = f.apply(obj, arg) 
        return res === undefined ? null : res
    } )

}

console.log(run(new MinStack(), a, b))