// nums = [5, 12, 89,45, 18, 8];

// for (let i = 0; i < nums.length; i++) {

// 	let num = nums[i];

//     if (num % 2 == 0)
//     {
// 		console.log(num, ": is even number");
//     }
//     else
//     {
// 		console.log(num * 2, ": is odd number");
// 	}
// }

// friends_age = [13, 17, 19, 20, 18];

// for (let i = 0; i < friends_age.length; i++)
// {
//     const age = friends_age[i];

//     if (age % 2 == 0)
//     {
//         console.log(age,' is even number');
//     }
//     else
//     {
//         console.log(age, ' is odd number');
//     }

// }

function evenify(num) {
	if (num % 2 == 0) {
		console.log(num, ": is even number");
	} else {
		console.log(num, ": is odd number");
	}
}

function evenify_all(nums) {
	for (let i = 0; i < nums.length; i++) {
		const num = num[i];
		evenify(num);
	}
}

nums = [5, 12, 89, 18, 8];

evenify_all(nums);

friends_age = [13, 17, 19, 20, 18];

evenify_all(friends_age);
