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
//inheritance
var a = /** @class */ (function () {
    function a(name) {
        this.name = name;
    }
    a.prototype.display = function () {
        console.log(this.name);
    };
    return a;
}());
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    b.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.age);
    };
    return b;
}(a));
// let obj=new b("sachin",30);
// obj.display();
var c = /** @class */ (function (_super) {
    __extends(c, _super);
    function c(name, age, city) {
        var _this = _super.call(this, name, age) || this;
        _this.city = city;
        return _this;
    }
    c.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.city);
    };
    return c;
}(b));
var obj = new c("sachin", 30, "mumbai");
obj.display();
