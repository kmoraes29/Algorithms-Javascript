function isPrime(n) {
    if(n < 2) {
        return false
    }
    for(let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

// Big-O = O(n) linear time complexity

function isPrimeOptionTwo(n) {
    if(n < 2) {
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

// Big-O = O(sqrt(n))
// Because of the sqrt, it reduces the number of times the function executes compared to the 1st option.