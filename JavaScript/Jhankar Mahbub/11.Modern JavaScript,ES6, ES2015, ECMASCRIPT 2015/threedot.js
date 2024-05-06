// const ages = [12, 14, 16, 13, 17];

// const ages2 = [15, 16, 12];

// const ages3 = [25, 36, 22, 29];

// const allAges = ages.concat(ages2).concat(5).concat(ages3);

// console.log(allAges);

// const allAges2 = [...ages, ...ages2, ...ages3];

// console.log(allAges2);


//part 2

const business = 650;
const minister = 450;
const socib = 250;

const takaPoisha = [650, 450, 250];

const maximum = Math.max(business, minister, socib);

console.log(maximum);

const maximum2 = Math.max(...takaPoisha);

console.log(maximum2);