const students = [
	{ id: 21, name: "Omar Sunny" },
	{ id: 31, name: "Mannaaaaa" },
	{ id: 41, name: "Moyouri" },
	{ id: 71, name: "Deepjol" },
];

// const studentName = students.map((student) => student.name);

const studentName = students.map((student) => student.name);

const studentId = students.map((student) => student.id);

console.log(studentName);

console.log(studentId);

const bigger = students.filter((student) => student.id > 40);

const biggerOne = students.find((s) => s.id > 40);

console.log(bigger);

console.log(biggerOne);
