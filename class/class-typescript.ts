class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`userName: ${this.userName}, Age:${this.age}`);
  }
}

let user1 = new User("Abdul Hay", 30);
let user2 = new User("Asha", 23);

user1.display();
console.log(user2.userName);
