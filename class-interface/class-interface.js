var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formateUser = function () {
            return "Name: ".concat(_this.fullName, ", Age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("Abdul Hay", 30);
console.log(user);
