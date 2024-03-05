class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(this.userName);
  }
}

class Student extends User {
  id: number;

  constructor(userName: string, age: number, id: number) {
    super(userName, age);
  }
}
