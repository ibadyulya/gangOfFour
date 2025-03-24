class VehicleFactory {
  static createVehicle(type, model) {
    throw new Error("This method must be overridden!");
  }
}

class CarFactory extends VehicleFactory {
  static createVehicle(type, model) {
    if (type.toLowerCase() === "car") {
      return new Car(model); // Return a new Car instance
    }
    throw new Error("Unknown vehicle type!");
  }
}

class TruckFactory extends VehicleFactory {
  static createVehicle(type, model) {
    if (type.toLowerCase() === "truck") {
      return new Truck(model); // Return a new Truck instance
    }
    throw new Error("Unknown vehicle type!");
  }
}

class Car {
  constructor(model) {
    this.model = model;
  }

  drive() {
    console.log(`${this.model} is driving!`);
  }
}

class Truck {
  constructor(model) {
    this.model = model;
  }

  drive() {
    console.log(`${this.model} is driving with heavy load!`);
  }
}

try {
  const car = CarFactory.createVehicle("car", "Toyota Corolla");
  car.drive(); // Output: Toyota Corolla is driving!

  const truck = TruckFactory.createVehicle("truck", "Ford F-150");
  truck.drive(); // Output: Ford F-150 is driving with heavy load!

  const unknown = VehicleFactory.createVehicle("bike", "Yamaha"); 
} catch (error) {
  console.error(error.message); // Output: Unknown vehicle type!
}
