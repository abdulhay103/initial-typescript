var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", Age:").concat(this.age));
    };
    return User;
}());
var user1 = new User("Abdul Hay", 30);
var user2 = new User("Asha", 23);
user1.display();
console.log(user2.userName);
