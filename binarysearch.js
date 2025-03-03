// If the array is empty, return -1
// It the array has elements, find the middle element in the array. If the target is equal to the middle element, return the middle element index.
// If the target is less than the middle element, repeat the process on the left half of the array.
// If the target is greater than the middle element, repeat the process on the right half of the array.

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(arr[middleIndex] === target) {
            return middleIndex;
        }
        if(arr[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0

// Big-O: O(log n) time complexity (Logarithmic time complexity)
// Binary search is more efficient than linear search because it eliminates half of the remaining elements at each iteration.
// Binary search is faster than linear search for large arrays.
// Binary search is more complex than linear search.
// Binary search requires the array to be sorted.
// Binary search is not suitable for small arrays.