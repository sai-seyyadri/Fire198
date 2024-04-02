
function generateFibonacciIterative(number) {
    let fibArray = [];

    for (let i = 0; i < number; i++) {
        if (i < 2) {
            fibArray.push(i);
        } else {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
    }

    return fibArray;
}

console.log("Fibonacci Iterative:", generateFibonacciIterative(8));


function generateFibonacciRecursive(length) {
    if (length < 1 || isNaN(length)) return "Invalid entry";
    if (length === 1) return [0];
    if (length === 2) return [0, 1];

    const fibArray = generateFibonacciRecursive(length - 1);
    fibArray.push(fibArray[length - 2] + fibArray[length - 3]);

    return fibArray;
}

console.log("Fibonacci Recursive:", generateFibonacciRecursive(8));


function mergeSort(array) {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log("Merge Sort:", mergeSort([8, 5, 1, 9, 7, 15, 4, 2, 0]));
