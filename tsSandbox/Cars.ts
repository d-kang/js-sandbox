class Car {
  engine: string;
  constructor(engine: string) {
    this.engine = engine;
  }
  start() {
    console.log("Engine Started: " + this.engine);
  }
  stop() {
    console.log("Engine stopped: " + this.engine);
  }

  continue = () => {
    console.log('checking arrow funcs');
  }
}

console.log('hi!')

var num1: number = 5;


window.onload = function() {
  var car = new Car("V8");
  car.start();
  car.stop();
  car.continue();
};
