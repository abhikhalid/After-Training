function add(firstNum, secodNum, thirdNum) {
    var sum = firstNum + secodNum + thirdNum;
    return sum;
}

function add2(numbers) {
    var sum = numbers[0] + numbers[1] + numbers[2];
}

function add3(numbers) {
    var sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
