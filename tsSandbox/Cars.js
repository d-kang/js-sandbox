var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log("Engine Started: " + this.engine);
    };
    Car.prototype.stop = function () {
        console.log("Engine stopped: " + this.engine);
    };
    return Car;
}());
console.log('hi!');
var num1 = 5;
var num = 5;
window.onload = function () {
    var car = new Car("V8");
    car.start();
    car.stop();
};
//# sourceMappingURL=Cars.js.map