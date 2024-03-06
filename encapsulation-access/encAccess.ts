class User {
  private userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(this.userName);
  }

  setUser(name: string) {
    this.userName = name;
  }

  getUser = (): void => {
    console.log(this.userName);
  };
}

let user = new User("Asha", 45);
user.setUser("Tasha");
user.getUser();

class Student extends User {
  id: number;

  constructor(userName: string, age: number, id: number) {
    super(userName, age);
    this.id = id;
  }

  display(): void {
    console.log(this.id);
  }
}

let student = new Student("Abdul Hay", 30, 10121412);

student.display();
