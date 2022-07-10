/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const results = [intervals[0]]
    
    for (let i = 0; i < intervals.length; i++) {
        const lastResultEnd = results[results.length - 1][1]
        const start = intervals[i][0], end = intervals[i][1]
        if (start <= lastResultEnd) {
            results[results.length - 1][1] = Math.max(lastResultEnd, end)
        } else {
            results.push([start, end])
        }
    }
    
    return results
};