//1, 1, 2,3, 5,8,13,21,34,55

function fibonacciIterative(num) {
	var fibo = [1, 1];

	for (var i = 2; i <= num; i++) {
		var netFibo = fibo[i - 1] + fibo[i - 2];

		fibo.push(netFibo);
	}

	return fibo;
}

var result = fibonacciIterative(10);

console.log(result);
