class Car {
  constructor() {
    this.engine = null;
    this.wheels = 0;
    this.color = "";
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  build() {
    return this.car;
  }
}

// Usage
const car = new CarBuilder()
  .setEngine("V8")
  .setWheels(4)
  .setColor("Red")
  .build();

console.log(car); // { engine: 'V8', wheels: 4, color: 'Red' }
