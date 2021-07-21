/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
 var NestedIterator = function(nestedList) {
    
    this._list = nestedList
    this._idx  = 0
    this._nextValue = null
    this._nextIterator = null
    
     while(this._idx < this._list.length) {
        
         const el = this._list[this._idx++]
         
         if(el.isInteger()) {
             this._nextValue = el.getInteger()
             return
         }
         
         this._nextIterator = new NestedIterator(el.getList())
         
         if(this._nextIterator.hasNext()) {
             this._nextValue = this._nextIterator.next()
             return
         } 
    }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this._nextValue !== null
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    
    if(!this.hasNext()) return null
    
    const ret = this._nextValue
    
    if(this._nextIterator) {
        if(this._nextIterator.hasNext()) {
            this._nextValue = this._nextIterator.next()
            return ret
        }
        
        this._nextIterator = null
    }
    
    if(this._idx >= this._list.length) {
        this._nextValue = null
        return ret
    }
    
    const el = this._list[this._idx++]
         
    if(el.isInteger()) {
         this._nextValue = el.getInteger()
         return ret
    }
         
    this._nextIterator = new NestedIterator(el.getList())
         
    if(this._nextIterator.hasNext()) {
         this._nextValue = this._nextIterator.next()
         return ret
     }
    
    return ret
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

/*
[[1,1],2,[1,1]]
[1,[4,[6]]]
[[]]
[1,[4,[6,[1],12,14]], 11]
[[1],[]]
*/