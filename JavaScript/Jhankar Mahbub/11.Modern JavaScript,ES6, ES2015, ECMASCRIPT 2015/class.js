class Student
{
    constructor(sId, sName)
    {
        this.id = sId;
        this.name = sName;
        this.school = "Pabna Zilla School";
    }
}

const student1 = new Student(12, 'Shuvo');
const student2 = new Student(22, 'mahiya');
const student2 = new Student(22, 'Bappi');

console.log(student1, student2);

console.log(student1.school,student2.name);
