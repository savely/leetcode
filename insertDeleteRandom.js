/*
#380
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {

    this.map = new Map()
    this.arr = []
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {

   if(this.map.has(val)) return false

   this.arr.push(val)
   this.map.set(val, this.arr.length-1)
   
   return true
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {

   if(!this.map.has(val)) return false

   const delIdx = this.map.get(val), lastEl = this.arr[this.arr.length-1]

   this.arr[delIdx] = lastEl
   this.arr.pop()
   this.map.set(lastEl, delIdx)
   return this.map.delete(val)
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
   const idx = Math.floor(Math.random() * this.arr.length)
   return this.arr[idx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */