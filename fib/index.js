// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const slowRecursiveFibonacci = (n) => {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

const fastFibonnacci = (n) => {
    const results = [0, 1]
    for (let i = 2; i <= n; i++) {
        const first = results[i - 1]
        const second = results[i - 2]
        results.push(first + second)
    }
    return results[n]
}

/**
 * In computing, memoization or memoisation is an optimization technique used primarily to speed up
 * computer programs by storing the results of expensive function calls and returning the cached result
 * when the same inputs occur again.Memoization has also been used in other contexts(and for purposes other than speed gains),
 * such as in simple mutually recursive descent parsing.[1] Although related to caching, memoization refers to a specific case of this optimization,
 * distinguishing it from forms of caching such as buffering or page replacement.In the context of some logic programming languages, memoization is also known as tabling.
 */
const memoize = (fn) => {
    const cache = {}
    return (...args) => {
        if (cache[args]) {
            return cache[args]
        }
        const result = fn.apply(this, args) 
        cache[args] = result
        return result
    }
}

const fib = memoize(slowRecursiveFibonacci)

module.exports = fib;
