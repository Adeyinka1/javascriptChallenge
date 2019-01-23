function students(first_name, last_name, grade, age){
    this.first_name = first_name
    this.last_name = last_name
    this.grade = grade
    this.age = age
}
let student1 = new students("Adeyinka", "Adejumobi", 90, 20);
let student2 = new students("Ayotunde", "Somoye", 95, 24);
let student3 = new students("Sandra", "George", 92, 13);
let student4 = new students("John", "Doe", 70, 15);
let student5 = new students("Daniel", "Barde", 85, 50);
const allStudents = [student1, student2, student3, student4, student5];

classReport = {
  averageGrade: eachgrade =>{
    let totalGrade = 0;
    for (i of eachgrade){
      totalGrade += i.grade;
    }
    let total = totalGrade / eachgrade.length;
    return total;
  },
  rank: arrayofStudents => {
    let gradeArray = arrayofStudents
    .map(student => student.grade)
    return gradeArray.sort();
  },
  age16nAbove: studentsAge =>{
    let result = studentsAge.filter(agebelow16 => agebelow16.age <= 16);
    return result;
  },
  nameAndGrade: studentClass =>{
    studentClass.forEach(function(studentClass, index){
      const name = `${studentClass.first_name} ${studentClass.last_name}`;
      const grade = studentClass.grade;
      const message = `congratulations, ${name} you scored ${grade} in the first exam`;
      console.log(message);
    });
  }
}
console.log(classReport.averageGrade(allStudents));
console.log(classReport.rank(allStudents));
console.log(classReport.age16nAbove(allStudents));
console.log(classReport.nameAndGrade(allStudents));