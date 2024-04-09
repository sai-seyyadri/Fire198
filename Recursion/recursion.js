
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