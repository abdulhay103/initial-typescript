class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(
      `From Class => User Name : ${this.userName}, Age : ${this.age}`
    );
  }
}

let user1 = new User("Samin", 25);
user1.display();

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `From Inherits => User Name : ${this.userName}, Age : ${this.age}, Student Id : ${this.studentId}`
    );
  }
}

let student1 = new Student("Abdul Hay", 35, 10120225);

student1.display();
