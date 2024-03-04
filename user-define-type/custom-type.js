// Example 1
var users;
users = [];
var user1;
user1 = { name: "Abdul Hay", id: 101 };
users.push(user1);
var user2;
user2 = { name: "Abdul Hay-2", id: 102 };
users.push(user2);
var user3;
user3 = { name: "Abdul Hay-3", id: 103 };
users.push(user3);
console.log(users);
var requestType;
requestType = "POST";
console.log(requestType);
var httpRequest = function (requestType) {
    console.log(requestType);
};
httpRequest("GET");
