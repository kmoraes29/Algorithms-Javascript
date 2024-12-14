function isPowerofTwo(n) {
    if(n < 1) {
        return false
    }
    while(n > 1) {
        if(n % 2 !== 0 ) {
            return false
        }
        n = n/2
    }
    return true
}

console.log(isPowerofTwo(1)) // true
console.log(isPowerofTwo(2)) // true
console.log(isPowerofTwo(5)) // false

// Big-O = O(logn) = the input size is reduced by half.


function isPowerofTwoBitWise(n) {
    if(n < 1) {
        return false
    }
    return (n & (n-1)) === 0
}

// More optimal solution
// Big-O = O(1) 