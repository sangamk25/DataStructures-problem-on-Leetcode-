// Product class that we want to build
class Car {
  constructor() {
    this.brand = "";
    this.model = "";
    this.year = "";
    this.color = "";
  }
  describe() {
    return `This is a great car which is  ${this.year} ${this.brand} ${this.model} in ${this.color} color.`;
  }
}

// Builder class for building cars
class CarBuilder {
  constructor(brand, model, year, color) {
    this.car = new Car();
    this.car.brand = brand;
    this.car.model = model;
    this.car.year = year;
    this.car.color = color;
  }

  addSunroof() {
    this.car.hasSunroof = true;
    return this;
  }

  addSpoiler() {
    this.car.hasSpoiler = true;
    return this;
  }

  build() {
    return this.car;
  }
}

// Usage ... here car acts as object which is store all the info ..we can describe by calling function
const car = new CarBuilder("Toyota", "Camry", "2023", "Red")
  .addSunroof()
  .addSpoiler()
  .build();

console.log(car.describe());

console.log(car);
