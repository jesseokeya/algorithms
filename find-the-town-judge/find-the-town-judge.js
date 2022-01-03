/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    // If only the judge exists return the judge
    if (!trust.length && n == 1) return n
    
    // find the number everyone trusts
    // and find the number that trusts nobody
    // if the numbers of the two conditions above exists and are equal 
    // and the there is no trust[i][0] that matches the value of the statements above 
    // return the number else return -1
    let maxTrustFreq = -Infinity
    const trustBank = new Map(trust)
    const trustFreq = new Map()
    
    for (const [truster, trustee] of trust) {
       if (!trustFreq.has(trustee)) {
           trustFreq.set(trustee, 1)
       } else {
           trustFreq.set(trustee, trustFreq.get(trustee) + 1) 
       }
        
       // Find running max trust value
       const freq = trustFreq.get(trustee)
       if (freq > maxTrustFreq) {
           maxTrustFreq = freq
       }
    }
    
    for (let i = 1; i <= n; i++) {
        if (!trustBank.has(i) && maxTrustFreq === n - 1) return i
    }
    
    return -1
};