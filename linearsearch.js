// Start at the 1st element in the array and move towards the last
// At each element, check if the element is equal to the target
// If it is, return the index
// It it is not, return -1

function linearSearch(arr, target) {
     for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
     }
     return -1;

}

console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([1, 2, 3, 4, 5], 1)); // 0

// Big-O = O(n) time complexity (Linear time complexity)