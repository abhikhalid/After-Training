var student = {
	id: 121,
	phone: 1745,
	name: "Khalid",
};

var student2 = {
	id: 131,
	phone: 457,
	name: "Abhi",
};

console.log(student);
console.log(student2);

var phoneNo = student.phone;

var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];

console.log(phoneNo);
console.log(student);
console.log(student2);

student2.phone = 65757;
