/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    const results = [intervals[0]]
    
    for (const [start, end] of intervals) {
        const idx = results.length - 1
        const lastEnd = results[idx][1]
        if (start <= lastEnd) {
            results[idx][1] = Math.max(lastEnd, end)
        } else {
            results.push([start, end])
        }
    }
    
    return results
};