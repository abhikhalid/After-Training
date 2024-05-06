//so far, amra ekta function theke value, array,string,object return koresi

//caile, ekta function theke amra arekta function o return korte pari. closed environment toiri kore (closure)

function stopWatch() {
    
	let count = 0;

    return function () {
        count++;

        return count;
    };
}

const clock1 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();

console.log(clock2());
console.log(clock2());
console.log(clock1());