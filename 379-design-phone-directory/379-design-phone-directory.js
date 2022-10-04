/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
    this.queue = []
    this.set = new Set()
    for (let i = 0; i < maxNumbers; i++) this.queue.push(i)
    this.maxNumbers = maxNumbers - 1
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
    if (this.queue.length) {
        const num = this.queue.shift()
        this.set.add(num)
        return num
    }
    
    return -1
};

/** 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
    return !this.set.has(number) && number <= this.maxNumbers
};

/** 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
    if (this.set.has(number)) {
        this.set.delete(number)
        this.queue.push(number)
    }
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */