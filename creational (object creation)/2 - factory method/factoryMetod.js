// Abstract Creator - VehicleFactory
class VehicleFactory {
  // Factory Method (abstract)
  static createVehicle(type, model) {
    throw new Error("This method must be overridden!");
  }
}

// Concrete Creator - CarFactory
class CarFactory extends VehicleFactory {
  // Overriding the factory method to create a Car
  static createVehicle(type, model) {
    if (type.toLowerCase() === "car") {
      return new Car(model); // Return a new Car instance
    }
    throw new Error("Unknown vehicle type!");
  }
}

// Concrete Creator - TruckFactory
class TruckFactory extends VehicleFactory {
  // Overriding the factory method to create a Truck
  static createVehicle(type, model) {
    if (type.toLowerCase() === "truck") {
      return new Truck(model); // Return a new Truck instance
    }
    throw new Error("Unknown vehicle type!");
  }
}

// Product - Car
class Car {
  constructor(model) {
    this.model = model;
  }

  drive() {
    console.log(`${this.model} is driving!`);
  }
}

// Product - Truck
class Truck {
  constructor(model) {
    this.model = model;
  }

  drive() {
    console.log(`${this.model} is driving with heavy load!`);
  }
}

// Client Code
try {
  // Create a Car using CarFactory
  const car = CarFactory.createVehicle("car", "Toyota Corolla");
  car.drive(); // Output: Toyota Corolla is driving!

  // Create a Truck using TruckFactory
  const truck = TruckFactory.createVehicle("truck", "Ford F-150");
  truck.drive(); // Output: Ford F-150 is driving with heavy load!

  // Try to create an unknown vehicle
  const unknown = VehicleFactory.createVehicle("bike", "Yamaha"); // This will throw an error
} catch (error) {
  console.error(error.message); // Output: Unknown vehicle type!
}
