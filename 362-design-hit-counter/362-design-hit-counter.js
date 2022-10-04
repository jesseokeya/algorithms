
var HitCounter = function() {
    this.queue = []
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.queue.push(timestamp)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    while (this.queue.length && timestamp - this.queue[0] >= 300) {
        this.queue.shift()
    }
    return this.queue.length
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */