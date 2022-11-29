
var RandomizedSet = function() {
    this.map = {};
    this.values = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] === undefined) {
        this.map[val] = this.values.length
        this.values.push(val)
        return true
    }
    return false
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] !== undefined) {
        const idx = this.map[val]
        delete this.map[val]
        const last = this.values.pop()
        if (idx === this.values.length) return true
        this.map[last] = idx
        this.values[idx] = last
        return true
    }
    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const len = this.values.length
    const result = this.values[Math.floor(Math.random() * len)]
    return result
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// var RandomizedSet = function() {
//     this.map = {};
//     this.values = [];
// };

// RandomizedSet.prototype.insert = function(val) {
//     if (this.map[val] !== undefined) return false;
//     this.map[val] = this.values.length;
//     this.values.push(val);
//     return true;
// };

// RandomizedSet.prototype.remove = function(val) {
//     if (this.map[val] === undefined) return false;
//     const idx = this.map[val];
//     delete this.map[val];
//     const last = this.values.pop();
//     if (this.values.length === idx) return true;
//     this.map[last] = idx;
//     this.values[idx] = last;
//     return true
// };

// RandomizedSet.prototype.getRandom = function() {
//     if (this.values.length === 0) return null;
//     return this.values[Math.floor(Math.random() * this.values.length)];
// };