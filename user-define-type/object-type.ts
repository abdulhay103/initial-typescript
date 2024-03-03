// let users: { name: string; age: number };
// users = { name: "Abdul Hay", age: 20 };

// console.log(users.name);

let users: object[];
users = [];
let user1: { name: string; age: number };
user1 = { name: "Abdul Hay", age: 30 };
users.push(user1);
let user2: { name: string; age: number };
user2 = { name: "Asha", age: 23 };
users.push(user2);
console.log(users[0]["name"]);
