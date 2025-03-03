// TIPS FOR RECURSIVE SOLUTIONS:
// Figure out how to breack down the problem into smaller versions of the same problem
// Identify the base case for recursion

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length -1)
}

function search(arr, target, leftIndex, rightIndex) {
    // Base case
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex;
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 1)); // 0