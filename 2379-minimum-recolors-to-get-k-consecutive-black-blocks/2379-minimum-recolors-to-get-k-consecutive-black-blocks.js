/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(str, k) {
  let windowStart = 0, occurrences = 0, result = Infinity

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const right = str[windowEnd]
    if (right === 'W') occurrences++

    if (windowEnd >= k - 1) {
      result = Math.min(occurrences, result)
      const left = str[windowStart]
      if (left === 'W') occurrences--
      windowStart++
    }
  }

  return result;

};