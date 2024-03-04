// Example 1

type User = { name: string; id: number };
let users: User[];
users = [];

let user1: User;
user1 = { name: "Abdul Hay", id: 101 };
users.push(user1);

let user2: User;
user2 = { name: "Abdul Hay-2", id: 102 };
users.push(user2);

let user3: User;
user3 = { name: "Abdul Hay-3", id: 103 };
users.push(user3);

console.log(users);

// Example 2

type RequestType = "GET" | "POST";
let requestType: RequestType;
requestType = "POST";
console.log(requestType);

const httpRequest = (requestType: RequestType) => {
  console.log(requestType);
};

httpRequest("GET");
