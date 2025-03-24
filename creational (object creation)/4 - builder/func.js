const CarBuilder = () => {
    let car = {};
  
    return {
      setEngine: (engine) => { car.engine = engine; return this; },
      setWheels: (wheels) => { car.wheels = wheels; return this; },
      setColor: (color) => { car.color = color; return this; },
      build: () => car
    };
  };
  
  // Usage
  const car2 = CarBuilder()
    .setEngine("Electric")
    .setWheels(4)
    .setColor("Blue")
    .build();
  
  console.log(car2); // { engine: 'Electric', wheels: 4, color: 'Blue' }
  