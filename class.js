class Student{
    constructor(sId, sName){
        this.Id = sId;
        this.Name = sName;
        this.School = "CMHS"
    }
}

const student1 = new Student(01, "Rakib");
const student2 = new Student(02, 'Raju');
const student3 = new Student(03, 'Noyon');
console.log(student1, student2, student3);