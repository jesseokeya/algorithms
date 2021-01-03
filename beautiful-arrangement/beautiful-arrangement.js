/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let used = new Set(), count = 0
    const permute = (idx) => {
        if (idx > n) return count++
        for (let i = 1; i <= n; i++) {
            if (used.has(i) || (idx % i !== 0 && i % idx !== 0)) continue
            used.add(i)
            permute(idx+1)
            used.delete(i)
        }
    }
    permute(1)
    return count
};
