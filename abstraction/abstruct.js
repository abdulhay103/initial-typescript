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
var Numbers = /** @class */ (function () {
    function Numbers(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Numbers;
}());
var NewNumbers = /** @class */ (function (_super) {
    __extends(NewNumbers, _super);
    function NewNumbers(x, y, z, p) {
        var _this = _super.call(this, x, y, z) || this;
        _this.p = p;
        return _this;
    }
    NewNumbers.prototype.multiplication = function () {
        console.log(this.x * this.y);
    };
    return NewNumbers;
}(Numbers));
var method = new NewNumbers(8, 10, 5, 6);
method.multiplication();
