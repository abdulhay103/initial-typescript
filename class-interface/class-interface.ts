interface IUserFormater {
  formateUser: () => string;
}

class User implements IUserFormater {
  constructor(private fullName: string, private age: number) {}

  formateUser = () => {
    return `Name: ${this.fullName}, Age: ${this.age}`;
  };
}

let user = new User("Abdul Hay", 30);
console.log(user);
