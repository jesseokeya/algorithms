// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const mid = Math.floor(((2 * n) - 1) / 2)
    for (let i = 0; i < n; i++) {
        let result = ''
        for (let j = 0; j < ((2 * n) - 1); j++) {
            result += (mid - i <= j) && (mid + i >= j) ? '#' : ' '
        }
        console.log(result)
    }
}

module.exports = pyramid;
