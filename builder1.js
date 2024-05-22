// product class

class Car {
  constructor() {
    this.make = "";
    this.model = "";
    this.year = "";
    this.color = "";
  }

  describe() {
    return `this is a ${this.make} ${this.model} ${this.year} in  ${this.color} `;
  }
}

//Builder Class

class CarBuilder {
  constructor(make, model, year, color) {
    this.Car = new Car();
    this.Car.make = make;
    this.Car.model = model;
    this.Car.year = year;
    this.Car.color = color;
  }

  addSunRoof() {
    this.Car.hasSunroof = true;
    return this;
  }

  build() {
    return this.Car;
  }
}

const car = new CarBuilder("r", "f", "u", "7").addSunRoof().build();

console.log(car.describe());
