var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(userName, age) {
        var _this = this;
        this.getUser = function () {
            console.log(_this.userName);
        };
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log(this.userName);
    };
    User.prototype.setUser = function (name) {
        this.userName = name;
    };
    return User;
}());
var user = new User("Asha", 45);
user.setUser("Tasha");
user.getUser();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, id) {
        var _this = _super.call(this, userName, age) || this;
        _this.id = id;
        return _this;
    }
    Student.prototype.display = function () {
        console.log(this.id);
    };
    return Student;
}(User));
var student = new Student("Abdul Hay", 30, 10121412);
student.display();
