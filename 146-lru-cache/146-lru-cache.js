var LRUCache = function(capacity) {
    this.cache = new Map(); // <key, [value, frequence]>
    this.capacity = capacity;
    this.frequence = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        let index = this.frequence.indexOf(key);
        this.frequence.splice(index, 1);
        this.frequence.push(key);
        return this.cache.get(key);
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        const index = this.frequence.indexOf(key);
        this.frequence.splice(index, 1);
    } else if (this.cache.size === this.capacity) {
        const k = this.frequence.shift();
        this.cache.delete(k);
    } 
    this.cache.set(key, value);
    this.frequence.push(key);
};