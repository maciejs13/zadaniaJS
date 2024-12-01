class Student {
    constructor(name, age, grades = []) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
  
    addGrade(...newGrades) {
      this.grades.push(...newGrades);
    }
  
    getAverage() {
      if (this.grades.length) return 0;
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return (sum / this.grades.length).toFixed(2);
    }
  }
  
  const students = [];
  
  students.push(new Student("Anna", 21, [4, 5, 3]));
  students.push(new Student("John", 22, [3, 2, 4]));
  
  students[0].addGrade(5, 4);
  students[1].addGrade(3);
  
  students.forEach(student => {
    console.log(`Student: ${student.name}, Wiek: ${student.age}`);
    console.log(`Oceny: ${student.grades.join(", ")}`);
    console.log(`Średnia ocen: ${student.getAverage()}`);
  });
  